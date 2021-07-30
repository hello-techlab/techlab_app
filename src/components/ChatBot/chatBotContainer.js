import React from "react"
import dialogData from  "./data/chat.json"
//import ChatBotButtonBox from "./chatBotButtonBox"
import ChatBotChatBox from "./chatBotChatbox"
import { ChatBotMessageInput } from "./chatBotMessageInput"
import UiWrapper from "../../components/ui-wrapper"

import { navigate } from "gatsby"
import styles from "../../styles/chatcontainer.module.scss"

class ChatBotContainer extends React.Component {
  messagesEndRef = React.createRef()

  dialogArray = dialogData

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      options: [],
      messageNumber: 0,
      blocked: false
    }
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  componentDidMount = async () => {   
    this.setState({
      messages: this.dialogArray[0].messages,
      options: this.dialogArray[0].options,
    })
  }

  componentDidUpdate = () => {
    this.scrollToBottom()
  }

  addMessage = chosenOption => {
    this.scrollToBottom()

    var clientOptionMessage = {
      direction: "client",
      text: chosenOption.text,
      button: false,
    }


    if(chosenOption.nextDialogIndex === -1)
    {
        navigate(chosenOption.destUrl)
        return
    }

    var nextDialog = this.dialogArray[chosenOption.nextDialogIndex]

    var updatedMessages = [...this.state.messages, clientOptionMessage];
    updatedMessages = updatedMessages.concat(nextDialog.messages)

    this.setState({
      messages: updatedMessages,
      options: nextDialog.options,
    })

    this.setState({
      messageNumber: this.state.messageNumber + 1,
    })
    this.scrollToBottom()
  }


  renderMessage = (message, index) => {
    return (
        <ChatBotChatBox
          key={index}
          text={message.text}
          direction={message.direction}
        />
      )
  }

  render() {
    return (
      <UiWrapper pageTitle={this.props.form} lastPage="/">
        
        <div className={styles.container}>
          {this.state.messages.map(this.renderMessage)}
          <ChatBotMessageInput
            options={this.state.options}
            blocked={this.state.blocked}
            onSubmit={this.addMessage}
          /> 
          {this.props.children}
          <div ref={this.messagesEndRef} />
        </div>
      </UiWrapper>
    )
  }
}

export default ChatBotContainer
