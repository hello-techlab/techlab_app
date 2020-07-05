import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ContentContainer from "../components/content-container"
import styles from "../styles/acolhimento.module.scss"
import Button from '@material-ui/core/Button'
import global from "../styles/global.scss"
import { withStyles } from "@material-ui/core/styles"
import defaultImageFemale from "../images/default_user_photo_female.jpg"
import 'react-dropdown/style.css';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import ptBR from 'date-fns/locale/pt';
import 'date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
} from '@material-ui/pickers';
import { navigate } from "gatsby"

const Events = [
  {
      "kind": "calendar#event",
      "etag": "\"3187061092716000\"",
      "id": "0fnl6diudkvdc8446fvekra7a8",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MGZubDZkaXVka3ZkYzg0NDZmdmVrcmE3YTggbGVvbmFyZG9naW92YW5uaXBAbQ",
      "created": "2020-06-30T15:22:26.000Z",
      "updated": "2020-06-30T15:22:26.358Z",
      "summary": "Livre",
      "creator": {
          "email": "leonardogiovannip@gmail.com",
          "self": true
      },
      "organizer": {
          "email": "leonardogiovannip@gmail.com",
          "self": true
      },
      "start": {
          "dateTime": "2020-06-30T13:30:00-03:00"
      },
      "end": {
          "dateTime": "2020-06-30T14:30:00-03:00"
      },
      "iCalUID": "0fnl6diudkvdc8446fvekra7a8@google.com",
      "sequence": 0,
      "reminders": {
          "useDefault": true
      }
  },
  {
      "kind": "calendar#event",
      "etag": "\"3187061098348000\"",
      "id": "10upda0bqq31gglbepfs1ol8h9",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MTB1cGRhMGJxcTMxZ2dsYmVwZnMxb2w4aDkgbGVvbmFyZG9naW92YW5uaXBAbQ",
      "created": "2020-06-30T15:22:29.000Z",
      "updated": "2020-06-30T15:22:29.174Z",
      "summary": "Livre",
      "creator": {
          "email": "leonardogiovannip@gmail.com",
          "self": true
      },
      "organizer": {
          "email": "leonardogiovannip@gmail.com",
          "self": true
      },
      "start": {
          "dateTime": "2020-06-30T15:00:00-03:00"
      },
      "end": {
          "dateTime": "2020-06-30T16:00:00-03:00"
      },
      "iCalUID": "10upda0bqq31gglbepfs1ol8h9@google.com",
      "sequence": 0,
      "reminders": {
          "useDefault": true
      }
  }
]

const api = {
  auth: {
    // GET auth/info/ - informações do usuário logado
    info: {
      get: {
        endpoint: () => (`auth/info/`)
      }
    }
  },
  usuarios: {
    gapsi: {
      // GET usuarios/gapsi/:instituto - pegar psicologo do instituto
      get: {
        endpoint: (instituto) => (`usuarios/gapsi/${instituto.toUpperCase()}`)
      }
    }
  },
  acolhimento: {
    eventos: {
      // GET usuarios/gapsi/:instituto - pegar eventos disponiveis do instituto
      get: {
        endpoint: instituto => (`acolhimento/eventos/${instituto.toUpperCase()}`),
      },
      // POST /:instituto - sugerir evento novo
      post: { 
        endpoint: instituto => (`acolhimento/eventos/${instituto.toUpperCase()}`),
        payload: (date, emergency) => ({dataHoraIni: date, flagUrgente: emergency})
      },
      // PUT /:instituto/:idEvento - selecionar evento existente
      put: {
        endpoint: (instituto, idEvento) => (`acolhimento/eventos/${instituto.toUpperCase()}/${idEvento}`),
        payload: (event, email) => ({evento: event, userEmail: email})
      }
    }
  }
}

const dateFormat = "eeee, dd 'de' MMMM'";
const datetimeFormat = "eeee, dd 'de' MMMM 'às' HH:MM";

const formattedDatetime = (date) => format(
  date, 
  datetimeFormat,
  {locale: ptBR}
);

function buildDateLabel(dateStr) {
  var date = new Date(dateStr);
  return formattedDatetime(date);
}

function populateEventOption(events) {
  return events.map(eA => {
    var eB = eA;
    eB['value'] = eB.id;
    eB['label'] = buildDateLabel(eB.start.dateTime);
    return eB;
  });
}

const Orange = global.MainOrange;

const formUrl = "";

const pageHeader = {
  title: "Acolhimento GAPSI",
  text: "Agende uma conversa com o psicólogo responsável pelo seu instituto."
}

const Institutos = {
  "IFSC": "IFSC - Instituto de Física de São Carlos",
  "ICMC": "ICMC - Instituto de Ciências Matemáticas e de Computação",
  "EESC": "EESC - Escola de Engenharia de São Carlos",
  "IAU": "IAU - Instituto de Arquitetura e Urbanismo"
}

const PsychologistCard = ({ps}) => {
  let image;
  if (ps.image == null) {
    image = defaultImageFemale;
  } else {
    image = ps.image;
  }
  return (
    <div className={styles.PsychologistCard}>
      <div className={styles.PhotoArea}>
        <div className={styles.ImagePortrait}>
          <img src={image} alt={ps.name+' image'}/>
        </div>
      </div>
      <div className={styles.CardContent}>
        <h1>{ps.name}</h1>
        <p>Responsável pelo instituto:</p>
        <p>{Institutos[ps.instituto.toUpperCase()]}</p>
      </div>
    </div>
  )
};

// Entender
const ColorButton = withStyles((theme) => (
  { root: {
      color: 'black',  // theme.palette.getContrastText(Orange),
      backgroundColor: Orange,
      '&:hover': {
        backgroundColor: Orange,
        boxShadow: 'none',
      },
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
    }
  }
))(Button);

class ScheduleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      errorMsg: 'Carregando...',
      userInfo: undefined,
      psychologist: undefined,
      events: [],
      selectedEvent: undefined,
      isCustomDate: false,
      customDate: new Date(),
      emergency: false
    }
    this.backend = axios.create({
      baseURL: "http://techlab-oauth.mooo.com",
      timeout: 10000,
      headers: {'x-access-token': window.localStorage.getItem("TOKEN")}
    })

    this.submitUrl = formUrl;
  }

  setPsychologist = (callback) => {
    var component = this;

    this.backend.get(api.usuarios.gapsi.get.endpoint(this.state.userInfo.school))
      .then(res => {
        component.setState({
          psychologist: {
            name: res.data.nomeatendente,
            instituto: res.data.institutoatendente,
            email: res.data.emailatendente,
            image: res.data.imgatendente,
          }
        }, callback)
      })
      .catch(err => {
        this.LoadingError(err, "Não foi possível acessar os dados do psicólogo")

        // Mock
        component.setState({
          psychologist: {
            name: 'atendente',
            instituto: 'ICMC',
            email: 'atendente@icmc.usp.br',
            image: null,
          }
        }, callback)
      })
  }
    
  setEvents = (callback) => {
    var component = this;
    this.backend.get(api.acolhimento.eventos.get.endpoint(this.state.userInfo.school))
      .then(res => {
        component.setState({
          events: populateEventOption(res.data)
        }, callback);
      })
      .catch( err => {
        this.LoadingError(err, "Não foi possível acessar os dados dos eventos")

        // Mock
        component.setState({
          events: populateEventOption(Events)
        }, callback);
      })
  }

  setUserInfo = (callback) => {
    var component = this;
    console.log(window.localStorage.getItem("TOKEN"))
    console.log(api.auth.info.get.endpoint())
    this.backend.get(api.auth.info.get.endpoint())
      .then(res => {
        console.log(res.data)
        component.setState({
          userInfo: {
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            school: 'ICMC' // mock
          }
        }, callback);
      })
      .catch( err => {
        this.LoadingError(err, "Não foi possível acessar os dados do usuário")        
      })
  }

  LoadingError = (err, msg) => {
    console.log(msg); console.log(err);
    this.setState( {errorMsg: `Opa, algo deu errado! ${msg}`} )
  }

  componentDidMount() {
    
    var component = this;
    component.setUserInfo(() => {
      component.setPsychologist( () => {
        component.setEvents( () => {
          component.setState({loaded: true});
          component.render();
        });
      });
    });
  }

  selectEvent(event) {
    this.setState({selectedEvent: event.target.value});
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  swapCustomDate = () => {
    this.setState({isCustomDate: !this.state.isCustomDate}); 
  } 

  setCustomDate = (date) => {
    this.setState({customDate: date});
  }

  submitSuccess = () => {
    alert("Seu acolhimento foi agendado com sucesso! Entraremos em contato com você pelo seu email USP para prosseguir.");
    navigate('/');
  }

  submitError = (err, msg) => {
    const defaultErrorMsg = "Opa, algo deu errado! Não foi possível agendar seu acolhimento. Tente novamente mais tarde.";
    if (msg == undefined)
      msg = defaultErrorMsg;
    
    console.log(err);
    alert(msg);
  }

  submitCustomEvent = args => {
    var eventId = this.state.selectedEvent;

    const endpoint = api.acolhimento.eventos.post.endpoint(args.instituto);
    const payload = api.acolhimento.eventos.post.payload(
        args.customDate,
        args.emergency
    )

    console.log('POST '+endpoint); console.log(payload);

    this.backend.post(endpoint, payload)
      .then(res => {
        this.submitSuccess()
      })
      .catch(err => {
        this.submitError()
      }) 
  }

  submitNormalEvent = args => {
    const endpoint = api.acolhimento.eventos.put.endpoint(args.instituto, args.eventId);
    const payload = api.acolhimento.eventos.put.payload(
      this.state.events.find(e => e.id === args.eventId),
      args.userEmail
    )

    console.log('PUT '+endpoint, payload);

    this.backend.put(endpoint, payload)
      .then(res => {
        this.submitSuccess()
      })
      .catch(err => {
        this.submitError()
      }) 
}

  handleSubmit = event => {
    event.preventDefault();
    const args = {
      instituto: this.state.userInfo.school,
      userEmail: this.state.userInfo.email,
      isCustomDate: this.state.isCustomDate,
      eventId: this.state.selectedEvent,
      customDate: this.state.customDate,
      emergency: this.state.emergency
    }
        
    if (args.isCustomDate) {
      this.submitCustomEvent(args);
      return;
    }

    if (args.eventId === undefined) {
      this.submitError("", "Escolha um horário entre os disponíveis.");
      return;
    }  

    this.submitNormalEvent(args);
  }

  render() {    
    let dateSelection;
    if (this.state.isCustomDate) {
      dateSelection = (
        <div className={styles.DateSelection}>
          <FormControl className={styles.CustomDatePicker}>
            <InputLabel id="custom-date-picker"></InputLabel>
            <p>Escolha uma data e hora</p>
            <div className={styles.CustomDatePicker}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                <DatePicker
                  disableToolbar
                  margin="normal"
                  id="date-picker-inline"
                  disablePast="true"
                  format={dateFormat}
                  value={this.state.customDate}
                  onChange={this.setCustomDate}
                  className={styles.CustomDatePickerDate}
                />
                <TimePicker
                  margin="normal"
                  id="time-picker"
                  disablePast="true"
                  ampm="false"
                  value={this.state.customDate}
                  onChange={this.setCustomDate}
                  className={styles.CustomDatePickerTime}
                  />
              </MuiPickersUtilsProvider>
            </div>
          </FormControl>
          <FormControl>
          <div className={styles.EmergencyCheckbox}>
            <InputLabel id="ermergency-flag"></InputLabel>
            <FormControlLabel
              control={<Checkbox checked={this.state.emergency} onChange={this.handleChange} name="emergency"/>}
              label="Solicitar atendimento emergencial"
              />
          </div>
          </FormControl>
        </div>
      );
    } else {
      dateSelection = (
        <div className={styles.DateSelection}>
          <FormControl className={styles.DatePicker}>
            <InputLabel id="date-picker"></InputLabel>
            <p>Escolha uma sessão livre:</p>
            <Select
              labelId="date-picker"
              id="date-picker-select"
              value={this.state.selectedEvent ? this.state.selectedEvent : ''}
              onChange={e => this.selectEvent(e)}
              className={styles.NormalDatePicker}
            >
              {this.state.events.map((e, i) => (
                <MenuItem value={e.value} key={i}>{e.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
    }

    if (this.state.loaded) {
      return (
        <div className={styles.ScheduleMenu}>
          <PsychologistCard ps={this.state.psychologist}/>
            <form onSubmit={this.handleSubmit} className={styles.ScheduleForm}>
              <div className={styles.DateSelection}>
                {dateSelection}
              </div>
              <FormControl className={styles.SwapCustomDateButton}>
                <InputLabel id="swap-custom-date"></InputLabel>
                  <p>{this.state.isCustomDate ? "Obs: este horário é apenas uma sugestão." : "Não encontrou nenhuma sessão boa para você?"}</p>
                <ColorButton onClick={() => this.swapCustomDate()}variant="contained" color="primary" style={{backgroundColor: Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}}>{this.state.isCustomDate ? "Horários pré agendados" : "Sugerir outro horário"}</ColorButton>
              </FormControl>
              <FormControl className={styles.ConfirmButton}>
                <ColorButton variant="contained" color="primary" style={{backgroundColor: Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}} type="submit">Agendar</ColorButton>
              </FormControl>
            </form>
        </div>
      );      
    } else {
      return (
        <div className={styles.ScheduleMenu}>
          <p>{this.state.errorMsg}</p>
        </div>
      )
    }
  }
}

const AcolhimentoPage = () => (
  <UiWrapper pageNeedsAuth='false' pageTitle='Acolhimentos' lastPage='/'>
    <ContentContainer title={pageHeader.title} text={pageHeader.text} bgColor={global.MainBlue}/>
    <ScheduleMenu/>
  </UiWrapper>
)

export default AcolhimentoPage