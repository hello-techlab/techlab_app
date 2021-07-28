import { Location } from "@reach/router"
import React from "react"
import ChatBotContainer from "../components/ChatBot/chatBotContainer"

const ChatBot = () => {

  return (
    <Location>
      {({ location, navigate }) => {
        return (
          <ChatBotContainer
          form = "chat teste"
          />
        )

        
      }}
    </Location>
  )
}

export default ChatBot
