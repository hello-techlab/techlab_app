import React, { useState } from "react"

import OptionContainer from "../components/option-container"
import ChatBotOptionContainer from "../components/chatbot-option-container"
import UiWrapper from "../components/ui-wrapper"
import axios from "axios"
import { navigate } from "gatsby"

import bgImg from "../images/infopage_background.jpg"
import {MainBlue, MainOrange} from '../styles/global.scss'

import styles from '../styles/index.module.scss';

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
    <UiWrapper pageNeedsAuth="false" pageTitle="TechLab">
      <div
        className={styles.page}
        style={{ "--bg-img": `url(${new URL(bgImg, window.location.origin)})` }}
      >
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
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
              text="Questionários"
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
              color={MainOrange}
            />
          </li>
        </ul>
      </div>
    </UiWrapper>
  )
}

export default IndexPage
