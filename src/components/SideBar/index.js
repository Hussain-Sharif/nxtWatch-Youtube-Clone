import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'
import SideBarItem from '../SideBarItem'
import Footer from '../Footer'
import {
  SideBarBg,
  SideBarLinks,
  
  ComponentMediaSelection,
  SideBarNavItem,
} from './styledComponents'

const listOfRoutes = [
  {id: 'home', title: 'Home', icon: HomeIcon,path:"/"},
  {id: 'trending',title:"Trending",icon:TrendingIcon,path:"/trending"},
  {id: 'gaming',title:"Gaming",icon:GamingIcon,path:"/gaming"},
  {id: 'saved-videos',title:"Saved videos",icon:SavedVideosIcon,path:"/saved-videos"},
]

class SideBar extends Component {
  //   changingSelectionItem = event => {
  //     const {changeSelectedItem} = this.props
  //     changeSelectedItem(event)
  //   }

  render() {
    const {selectedRouteId} = this.props
    console.log('<===-->||>>>>>>', {selectedRouteId})
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
                {listOfRoutes.map(eachItem=>(<SideBarItem isBrighterTheme={isBrighterTheme} selectedRouteId={selectedRouteId} key={eachItem.id} eachItem={eachItem}/>))}
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
