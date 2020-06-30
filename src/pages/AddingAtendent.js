import React, { useState } from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import InputField from "../components/Login/InputField"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import styles from "../styles/AddingAtendent.module.scss"
import terapia from "../images/terapia.jpg"

const AddingAtendents = () => {
  const [instituto, setInstituto] = useState("")
  const [calendarLinkDialogOpen, setCalendarLinkDialogOpen] = useState(false)

  const institutos = ["ICMC", "EESQ", "IFSC", "IQSC"]

  const options = institutos.map(instituto => {
    return <option value={instituto}>{instituto}</option>
  })

  const handleChange = event => {
    setInstituto(event.target.value)
  }

  const handleAddingClick = () => {
    setCalendarLinkDialogOpen(!calendarLinkDialogOpen)
  }

  const handleDialog = () => {
    setCalendarLinkDialogOpen(!calendarLinkDialogOpen)
  }

  return (
    <>
      <Dialog open={calendarLinkDialogOpen}>
        <DialogTitle>Link Google Agenda</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Copie esse link e peça para o atendente acessá-lo e enviar ao
            administrador o código gerado após o login.
          </DialogContentText>
          <a className={styles.LinkText}>www.google.br</a>
        </DialogContent>
        <div className={styles.ButtonBox}>
          <button className={styles.Button} onClick={() => handleDialog()}>
            Fechar
          </button>
        </div>
      </Dialog>
      <ImageWithDescription src={terapia} title={"Adicionar Atendente"} />
      <form>
        <div className={styles.Form}>
          <div className={styles.InputBox}>
            <span className={styles.InputLabel}>Nome</span>
            <input
              className={styles.InputField}
              placeholder="Nome"
              type="text"
            />
          </div>
          <div className={styles.InputBox}>
            <span className={styles.InputLabel}>Email</span>
            <input
              className={styles.InputField}
              placeholder="Email"
              type="email"
            />
          </div>
          <div className={styles.InputBox}>
            <span className={styles.InputLabel}>Link da Agenda</span>
            <input
              className={styles.InputField}
              placeholder="Link"
              type="text"
            />
          </div>
          <div className={styles.InputBox}>
            <span className={styles.InputLabel}>Instituto</span>
            <select className={styles.InputField} placeholder="Instituto">
              {options}
            </select>
          </div>
        </div>
        <div className={styles.ButtonBox}>
          <button
            className={styles.AddButton}
            onClick={handleAddingClick}
            type="submit"
          >
            ADICIONAR
          </button>
          <a className={styles.Link} href={"/Atendents"}>
            <button className={styles.CancelButton}>CANCELAR</button>
          </a>
        </div>
      </form>
    </>
  )
}

export default AddingAtendents
