import React, { useState } from "react"

import OptionContainer from "../components/option-container"
import ChatBotOptionContainer from "../components/chatbot-option-container"
import UiWrapper from "../components/ui-wrapper"
import axios from "axios"
import { navigate } from "gatsby"

import {MainBlue} from '../styles/global.scss'

const IndexPage = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  const checkAdmin = async () => {
    const chatAPIAddr = process.env.CHAT_API_ADDR

    try {
      const res = await axios.get(`http://${chatAPIAddr}/auth/info/`, {
        headers: { "x-access-token": window.localStorage.getItem("TOKEN") },
      })
      console.log(res)
      if (res.data.nivelacesso) setIsAdmin(true)
    } catch (error) {
      console.log(error.response)
    }
  }

  checkAdmin()

  return (
    <UiWrapper pageNeedsAuth="false" pageTitle="TechLab" lastPage="/">
      <ul style={{ listStyle: "none", paddingInlineStart: 0}}>
        <li
          onClick={() => {
            navigate("/info")
          }}
        >
          <OptionContainer
            title=""
            text="Informações"
            textColor="white"
            color={MainBlue}
          />
        </li>
        <li
          onClick={() => {
            navigate("/questionarios")
          }}
        >
          <OptionContainer
            title=""
            text="Questionarios"
            textColor="white"
            color={MainBlue}
          />
        </li>
        <li
          onClick={() => {
            navigate("/acolhimento")
          }}
        >
          <OptionContainer
            title=""
            text="Acolhimento"
            textColor="white"
            color={MainBlue}
          />
        </li>
        <li
          onClick={() => {
            navigate("/faq")
          }}
        >
          <OptionContainer
            title=""
            text="Perguntas Frequentes"
            textColor="white"
            color={MainBlue}
          />
        </li>
        {isAdmin && (
          <li
            onClick={() => {
              navigate("/Atendents")
            }}
          >
            <OptionContainer
              title=""
              text="Administração"
              textColor="white"
              color="#647B98"
            />
          </li>
        )}
        <li
          onClick={() => {
            navigate("/chatBot")
          }}
        >
          <ChatBotOptionContainer
            title=""
            text="Olá! Eu sou Health, o robô ajudante do GAPsi, posso lhe ajudar?"
            textColor="white"
            color="#EFA748"
          />
        </li>
      </ul>
    </UiWrapper>
  )
}

export default IndexPage
