import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'
import SideBarItem from '../SideBarItem'
import Footer from '../Footer'
import {
  SideBarBg,
  SideBarLinks,
  ComponentMediaSelection,
} from './styledComponents'

const listOfRoutes = [
  {id: 'home', title: 'Home', path: '/'},
  {id: 'trending', title: 'Trending', path: '/trending'},
  {id: 'gaming', title: 'Gaming', path: '/gaming'},
  {
    id: 'saved-videos',
    title: 'Saved videos',

    path: '/saved-videos',
  },
]

class SideBar extends Component {
  //   changingSelectionItem = event => {
  //     const {changeSelectedItem} = this.props
  //     changeSelectedItem(event)
  //   }

  constructor(props) {
    super(props)
    const {location} = props
    this.state = {
      selectedRoutePath:
        listOfRoutes.filter(eachRoute => eachRoute.path === location.pathname)
          .length !== 0
          ? listOfRoutes.filter(
              eachRoute => eachRoute.path === location.pathname,
            )[0].path
          : listOfRoutes[0].path,
    }
  }

  changeRoute = path => {
    const {location} = this.props
    console.log(
      'changeRoute()=>',
      path,
      listOfRoutes.filter(eachRoute => eachRoute.path === path)[0].path,
    )

    this.setState(prev => ({
      selectedRoutePath:
        listOfRoutes.filter(eachRoute => eachRoute.path === location.pathname)
          .length !== 0
          ? listOfRoutes.filter(eachRoute => eachRoute.path === path)[0].path
          : prev.selectedRoutePath,
    }))
  }

  render() {
    const {match, location} = this.props
    console.log('<===-->||>>>>>>', {match, location})
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isBrighterTheme, changeTheme} = value
          const {selectedRoutePath} = this.state
          console.log('In SideBar Component:', {
            isBrighterTheme,
            changeTheme,
            selectedRoutePath,
          })
          return (
            <SideBarBg isBrighterTheme={isBrighterTheme}>
              <SideBarLinks>
                {listOfRoutes.map(eachItem => (
                  <SideBarItem
                    changeRoute={this.changeRoute}
                    isBrighterTheme={isBrighterTheme}
                    key={eachItem.id}
                    eachItem={eachItem}
                    isItemSelected={
                      listOfRoutes.filter(
                        eachRoute => eachRoute.path === location.pathname,
                      ).length === 0
                        ? selectedRoutePath === `${eachItem.path}`
                        : location.pathname === `${eachItem.path}`
                    }
                  />
                ))}
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
