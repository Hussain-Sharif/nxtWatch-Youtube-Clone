import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'
import Footer from '../Footer'
import {
  SideBarBg,
  SideBarLinks,
  SideBarLink,
  ComponentMediaSelection,
  SideBarNavItem,
  NavigatingLink,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
} from './styledComponents'

const listOfRoutes = [
  {path: '/'},
  {path: '/trending'},
  {path: '/gaming'},
  {path: '/saved-videos'},
]

class SideBar extends Component {
  //   changingSelectionItem = event => {
  //     const {changeSelectedItem} = this.props
  //     changeSelectedItem(event)
  //   }

  render() {
    const {match} = this.props
    console.log('<===-->||>>>>>>', match)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isBrighterTheme, changeTheme} = value
          console.log('In SideBar Component:', {
            isBrighterTheme,
            changeTheme,
          })
          return (
            <SideBarBg isBrighterTheme={isBrighterTheme}>
              <SideBarLinks>
                <NavigatingLink to="/">
                  <SideBarLink
                    isBrighterTheme={isBrighterTheme}
                    isItemSelected={match.path === listOfRoutes[0].path}
                    as="li"
                  >
                    <HomeIcon
                      isItemSelected={match.path === listOfRoutes[0].path}
                    />
                    <SideBarNavItem isBrighterTheme={isBrighterTheme}>
                      Home
                    </SideBarNavItem>
                  </SideBarLink>
                </NavigatingLink>
                <NavigatingLink
                  //   onClick={this.changingSelectionItem}
                  to="/trending"
                >
                  <SideBarLink
                    isBrighterTheme={isBrighterTheme}
                    isItemSelected={match.path === listOfRoutes[1].path}
                    as="li"
                  >
                    <TrendingIcon
                      isItemSelected={match.path === listOfRoutes[1].path}
                    />
                    <SideBarNavItem isBrighterTheme={isBrighterTheme}>
                      Trending
                    </SideBarNavItem>
                  </SideBarLink>
                </NavigatingLink>
                <NavigatingLink
                  //   onClick={this.changingSelectionItem}
                  to="/gaming"
                >
                  <SideBarLink
                    isBrighterTheme={isBrighterTheme}
                    isItemSelected={match.path === listOfRoutes[2].path}
                    as="li"
                  >
                    <GamingIcon
                      isItemSelected={match.path === listOfRoutes[2].path}
                    />
                    <SideBarNavItem isBrighterTheme={isBrighterTheme}>
                      Gaming
                    </SideBarNavItem>
                  </SideBarLink>
                </NavigatingLink>
                <NavigatingLink
                  //   onClick={this.changingSelectionItem}
                  to="/saved-videos"
                >
                  <SideBarLink
                    isBrighterTheme={isBrighterTheme}
                    isItemSelected={match.path === listOfRoutes[3].path}
                    as="li"
                  >
                    <SavedVideosIcon
                      isItemSelected={match.path === listOfRoutes[3].path}
                    />
                    <SideBarNavItem isBrighterTheme={isBrighterTheme}>
                      Saved videos
                    </SideBarNavItem>
                  </SideBarLink>
                </NavigatingLink>
              </SideBarLinks>
              <ComponentMediaSelection>
                <Footer />
              </ComponentMediaSelection>
            </SideBarBg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
