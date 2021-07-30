import React from "react"
import styles from "../styles/contact-box.module.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from "@material-ui/core/IconButton";

import {FontColorLight} from '../styles/global.scss';

const contactHeader = "Entre em contato!";
const phone = "Nosso telefone: (16) 3373-8905";
const email = "Nosso email: ";
const contactMails = ['apoia-sc@usp.br', 'gapsi@icmc.usp.br'];
const site = "Nosso site: ";
const siteUrl = "https://gapsi.icmc.usp.br";
const linksHeader = "Nossas redes sociais:";
const facebookUrl = "https://m.facebook.com/Apoia-Usp-SC-107922227573130/";
const instagramUrl = "https://www.instagram.com/apoia.usp.sc/";

const ContactBox = () => (
  <div className={styles.ContactBox}>
    <h2>{contactHeader}</h2>
    <div className={styles.Contact}>
      <p>
        {site}
        <a href={siteUrl}>{siteUrl.replace("https://", "")}</a>
      </p>
      {contactMails.map((v, i) => (
        <p>
          {email}
          <a href={`mailto:${v}`} key={i}>
            {v}
          </a>
        </p>
      ))}
      <p>{phone}</p>
    </div>
    <h2>{linksHeader}</h2>
    <div className={styles.Links}>
      <a href={facebookUrl}>
        <IconButton style={{ padding: "0px", color: FontColorLight }}>
          <FacebookIcon />
          <p>Facebook</p>
        </IconButton>
      </a>
      <a href={instagramUrl}>
        <IconButton style={{ padding: "0px", color: FontColorLight }}>
          <InstagramIcon />
          <p>Instagram</p>
        </IconButton>
      </a>
    </div>
  </div>
)

export default ContactBox;