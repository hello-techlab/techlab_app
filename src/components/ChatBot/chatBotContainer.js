import React from "react"

import ChatBotButtonBox from "./chatBotButtonBox"
import ChatBotChatBox from "./chatBotChatbox"
import { ChatBotMessageInput } from "./chatBotMessageInput"
import UiWrapper from "../../components/ui-wrapper"
// import axios from "axios"
import { navigate } from "gatsby"
import styles from "../../styles/chatcontainer.module.scss"

class ChatBotContainer extends React.Component {
  messagesEndRef = React.createRef()

  constructor(props) {
    super(props)
    this.state = {
      sessionId: undefined,
      messages: [{text: "oioioi", button: false, direction:"server"},
                 {text: "aiai", button: false, direction: "server"},
                  {text: "uiuiui", button: false, direction: "server"},
                  {text: "aiai", button: true, direction: "server"},
                  {text: "uiuiui", button: false, direction: "server"},
                  {text: "aiai", button: false, direction: "server"},
                  {text: "uiuiui", button: true, direction: "server"},
                  {text: "aiai", button: false, direction: "client"},
                  {text: "uiuiui", button: false, direction: "client"},
                  {text: "aiai", button: true, direction: "server"},
                  {text: "uiuiui", button: false, direction: "server"},
                  {text: "aiai", button: true, direction: "server"},
                  {text: "uiuiui", button: true, direction: "server"}, 
                  {text: "aiai", button: true, direction: "client"},
                  {text: "uiuiui", button: false, direction: "server"},
                  {text: "aiai", button: false, direction: "client"},
                  {text: "uiuiui", button: false, direction: "server"},
                  {text: "aiai", button: false, direction: "server"},
                  {text: "uiuiui", button: false, direction: "client"},
                  {text: "aiai", button: false, direction: "client"},
                  {text: "uiuiui", button: false, direction: "server"},
                  {text: "aiai", button: false, direction: "server"},
                  {text: "uiuiui", button: false, direction: "client"},
                  {text: "aiai", button: false, direction: "client"},
                  {text: "uiuiui", button: false, direction: "client"},
                  {text: "aiai", button: false, direction: "server"},
                  {text: "uiuiui", button: false, direction: "client"},
                  {text: "aiai", button: false, direction: "client"},
                  {text: "esse é um botão", button: true, direction: "client"},],
                  
      options: ["opção 1", "opção 2", "opção 3", "opção 4"],
      messageNumber: 0,
      blocked: false,
    }
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }


 

  // componentDidMount = async () => {

  //   this.setState({
  //     sessionId: res.data.session_id,
  //     messages: res.data.intro.map(msg => {
  //       return {
  //         direction: "server",
  //         message: msg,
  //         button: false,
  //       }
  //     }),
  //     options: res.data.options,
  //   })
  // }

  componentDidUpdate = () => {
    this.scrollToBottom()
  }

  addMessage = messageText => {
    this.scrollToBottom()

    console.log(messageText);

    if (messageText == "Sair") {
      navigate("/")
      return
    }

    var message = {
      direction: "client",
      text: messageText,
      button: false,
    }

    this.setState({
      messages: [...this.state.messages, message],
      blocked: false,
    })

    //this.getServerResponse(messageText)

    this.setState({
      messageNumber: this.state.messageNumber + 1,
    })
    this.scrollToBottom()
  }

  // getServerResponse = async messageText => {
  //   try {
  //     const res = await axios.put(
  //       `http://${this.props.chatAddr}/questionarios/${this.props.form}/${this.state.sessionId}/proxima/`,
  //       { answer: messageText },
  //       { headers: { "x-access-token": window.localStorage.getItem("TOKEN") } }
  //     )

  //     let response_server = [
  //       {
  //         direction: "server",
  //         message: res.data.question,
  //         button: false,
  //       },
  //     ]

  //     if (res.data.options) {
  //       this.setState({ options: res.data.options })
  //     } else this.setState({ options: [] })

  //     if (res.data.question === "" || res.data.question === undefined) {
  //       let messages = res.data.result
  //       let messagesObject = Array()

  //       for (const idx in messages) {
  //         messagesObject.push({
  //           direction: "server",
  //           message: messages[idx],
  //           button: false,
  //         })
  //       }

  //       messagesObject.push({
  //         direction: "server",
  //         message:
  //           "Se desejar, você pode marcar uma conversa com a gente! Só clicar no botão abaixo que você será redirecionado para a página de acolhimento.",
  //         button: false,
  //       })

  //       messagesObject.push({
  //         direction: "server",
  //         message: "Clique aqui para ir para a aba de acolhimento",
  //         button: true,
  //       })

  //       this.setState({
  //         blocked: true,
  //         messages: [...this.state.messages, ...messagesObject],
  //       })
  //     } else {
  //       this.setState({
  //         blocked: false,
  //         messages: [...this.state.messages, ...response_server],
  //       })
  //     }

  //     this.scrollToBottom()
  //   } catch (error) {
  //     if (error.response.status == 401) {
  //       navigate("/loginpage")
  //       return
  //     }
  //   }
  // }

  renderMessage = (message, index) => {
    if (message.button) {
      return (
        <ChatBotButtonBox
          key={index}
          text={message.message}
          direction={message.direction}
        />
      )
    } else
      return (
        <ChatBotChatBox
          key={index}
          text={message.text}
          direction={message.direction}
        />
      )
  }


  printSomething = () => {
    console.log("printando dentro do clickButton")
  }

  render() {
    return (
      <UiWrapper pageTitle={this.props.form} lastPage="/home">
        
        <div className={styles.container}>
          {this.state.messages.map(this.renderMessage)}
          {this.props.children}
          <div ref={this.messagesEndRef} />
        </div>
        
        <ChatBotMessageInput
          options={this.state.options}
          blocked={this.state.blocked}
          onSubmit={this.addMessage}
        /> 

      </UiWrapper>
    )
  }
}

export default ChatBotContainer
