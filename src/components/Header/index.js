import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import ThemeContext from '../../contexts/ThemeContext'
import {
  HeaderBg,
  HeaderItemsList,
  HeaderItem,
  WebsiteLogo,
  NavigatorLink,
  ThemeButton,
  LogInOutButton,
  DarkMoonIcon,
  BrightSunIcon,
  AccountButton,
  ProfileIcon,
  SideClosed,
  SideOpened,
  PopupModuleContainer,
} from './styledComponents'
import PopupDesign from '../PopupDesign'

class Header extends Component {
  state = {
    isHeaderScrolled: false,
  }

  componentDidMount() {
    console.log('<Header/> didMount')
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    console.log('<Header/> willUnmount')
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    console.log('<Header/> scrolling...')
    const isScrolled = window.scrollY > 320

    const {isHeaderScrolled} = this.state
    if (isHeaderScrolled !== isScrolled) {
      this.setState({isHeaderScrolled: isScrolled})
    }
  }

  getLogOut = () => {
    const {history} = this.props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  render() {
    const {isHeaderScrolled} = this.state

    console.log('<Header/> isHeaderSrolled:', isHeaderScrolled)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isSideBarOpened, onClickToggleNavBar} = this.props
          const {isBrighterTheme, changeTheme} = value
          console.log('In Header Component:', {
            isBrighterTheme,
            isSideBarOpened,
            changeTheme,
          })

          const onClickTogglingNav = () => {
            onClickToggleNavBar()
          }

          const onClickChangeTheme = () => {
            changeTheme()
          }

          return (
            <HeaderBg isBrighterTheme={isBrighterTheme}>
              <div className="header-left-cont">
                <ThemeButton type="button" onClick={onClickTogglingNav}>
                  {isSideBarOpened ? (
                    <SideOpened isBrighterTheme={isBrighterTheme} />
                  ) : (
                    <SideClosed isBrighterTheme={isBrighterTheme} />
                  )}
                </ThemeButton>
                <NavigatorLink to="/">
                  <WebsiteLogo
                    alt="nxt watch logo"
                    src={`${
                      isBrighterTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }`}
                  />
                </NavigatorLink>
              </div>
              <HeaderItemsList>
                <HeaderItem>
                  <ThemeButton onClick={onClickChangeTheme} type="button">
                    {isBrighterTheme ? <DarkMoonIcon /> : <BrightSunIcon />}
                  </ThemeButton>
                </HeaderItem>
                <HeaderItem>
                  <AccountButton type="button">
                    <ProfileIcon />
                  </AccountButton>
                </HeaderItem>
                <HeaderItem>
                  <PopupModuleContainer
                    modal
                    trigger={
                      <LogInOutButton
                        isBrighterTheme={isBrighterTheme}
                        type="button"
                      >
                        Logout
                      </LogInOutButton>
                    }
                  >
                    {close => (
                      <PopupDesign close={close} getLogOut={this.getLogOut} />
                    )}
                  </PopupModuleContainer>
                </HeaderItem>
              </HeaderItemsList>
            </HeaderBg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
