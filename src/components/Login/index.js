import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../contexts/ThemeContext'
import {
  LoginBg,
  LoginCard,
  ReuseDiv,
  LoginLabel,
  LoginInput,
  LoginButton,
  LogoImg,
  ErrorMsg,
  LoginShowPassDiv,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: null,
    isShownPassword: false,
  }

  onSuccess = data => {
    const {history} = this.props
    Cookies.set('jwt_token', data.jwt_token, {expires: 10})
    history.replace('/')
  }

  onFailure = data => {
    this.setState({errorMsg: `*${data.error_msg}`, username: '', password: ''})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log('login data', data)
    if (response.ok === true) {
      this.onSuccess(data)
    } else {
      this.onFailure(data)
    }
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  showPasswordChange = event => {
    this.setState({isShownPassword: event.target.checked})
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isBrighterTheme} = value
          const {username, password, errorMsg, isShownPassword} = this.state
          console.log(isBrighterTheme, {
            username,
            password,
            errorMsg,
            isShownPassword,
          })
          return (
            <LoginBg isBrighterTheme={isBrighterTheme}>
              <LoginCard
                as="form"
                onSubmit={this.onSubmitForm}
                isBrighterTheme={isBrighterTheme}
              >
                <LogoImg
                  src={
                    isBrighterTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                />
                <ReuseDiv>
                  <LoginLabel
                    htmlFor="username"
                    isBrighterTheme={isBrighterTheme}
                  >
                    USERNAME
                  </LoginLabel>
                  <LoginInput
                    value={username}
                    id="username"
                    placeholder="Username"
                    isText="100%"
                    isBrighterTheme={isBrighterTheme}
                    type="text"
                    onChange={this.usernameChange}
                  />
                </ReuseDiv>
                <ReuseDiv>
                  <LoginLabel
                    htmlFor="password"
                    isBrighterTheme={isBrighterTheme}
                  >
                    PASSWORD
                  </LoginLabel>
                  <LoginInput
                    value={password}
                    id="password"
                    placeholder="Password"
                    isText="100%"
                    isBrighterTheme={isBrighterTheme}
                    type={`${isShownPassword ? 'text' : 'password'}`}
                    onChange={this.passwordChange}
                  />
                </ReuseDiv>
                <LoginShowPassDiv>
                  <LoginInput
                    value={isShownPassword}
                    id="checkbox"
                    isText="auto"
                    isBrighterTheme={isBrighterTheme}
                    type="checkbox"
                    onChange={this.showPasswordChange}
                  />
                  <LoginLabel
                    htmlFor="checkbox"
                    isBrighterTheme={isBrighterTheme}
                  >
                    Show Password
                  </LoginLabel>
                </LoginShowPassDiv>
                <ReuseDiv>
                  <LoginButton type="submit">Login</LoginButton>
                </ReuseDiv>
                <ReuseDiv>
                  <ErrorMsg>{errorMsg}</ErrorMsg>
                </ReuseDiv>
              </LoginCard>
            </LoginBg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
