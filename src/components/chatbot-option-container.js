import React from "react"
import styles from '../styles/option-container.module.scss'
import Icon from "@material-ui/core/Icon/Icon"

const TextBox = ({ color, textColor, name, children }) => {
  return (
  <div className={styles.ChatBotTextBox} style={{ backgroundColor: color, color: textColor == undefined ? "black" : textColor }}>
    {children}
  </div>
  );
}



const ChatBotOptionContainer = ({text, color, textColor}) => (
  <div className={styles.ChatBotContainer}>
    <TextBox color={color} textColor={textColor} name={text}>
      <div className={styles.Text}>
        <h2/>  
        <p>{text}</p>
      </div>
    </TextBox>
  </div>
);

export default ChatBotOptionContainer