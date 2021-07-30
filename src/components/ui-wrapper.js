import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import Helmet from "react-helmet"
import HomeIcon from "@material-ui/icons/Home"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"

import React from "react"
import isLoggedIn from "../services/auth"
import { navigate } from "gatsby"
import styles from "../styles/ui-wrapper.module.scss"

const appTitle = "GAPSI USP São Carlos"

const NavbarIcons = [
  { Icon: <InfoIcon fontSize="large" />, destUrl: "/info" },
  { Icon: <HomeIcon fontSize="large" />, destUrl: "/" },
  { Icon: <ContactSupportIcon fontSize="large" />, destUrl: "/faq" },
]

const GoBackArrow = ({ to }) => (
  <a href={to}>
    <IconButton>
      <ArrowBackIcon fontSize="large" />
    </IconButton>
  </a>
)

const Header = ({ title, lastPage }) => {
  return (
    <header className={styles.Header}>
      <div>{lastPage && <GoBackArrow to={lastPage} />}</div>
      <h1>{title}</h1>
    </header>
  )
}
const NavButton = props => (
  <div className={styles.IconBox}>
    <a href={props.destUrl}>
      <IconButton className={styles.IconButton}>{props.children}</IconButton>
    </a>
  </div>
)

const Navbar = () => (
  <div className={styles.Navbar}>
    {NavbarIcons.map((v, i) => (
      <NavButton destUrl={v.destUrl} key={i}>
        {v.Icon}
      </NavButton>
    ))}
  </div>
)

class UiWrapper extends React.Component {  
  async componentDidMount() {
    var needsAuth = false;
    if (typeof this.props.pageNeedsAuth === 'string' &&
        this.props.pageNeedsAuth.toLowerCase() === 'true') {
          needsAuth = true;
    };

    if (needsAuth) {
      let isLogged = await isLoggedIn()
      if (!isLogged) {
        if (window.confirm("Você precisa estar logado para acessar isso!")) {
          navigate("/loginpage");
        } else {
          navigate("/");
        }
        return null
      } else {
      }
    }
  }

  render() {
    return (
      <div className={styles.PageWrapper}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{appTitle}</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta
            name="viewport"
            content="initial-scale=1.0, maximum-scale=1.0"
          />
        </Helmet>
        <Header title={this.props.pageTitle} lastPage={this.props.lastPage} />
        <div className={styles.Content}>{this.props.children}</div>
      </div>
    )
  }
}

export default UiWrapper
