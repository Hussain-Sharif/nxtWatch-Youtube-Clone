import {withRouter} from 'react-router-dom'
import {
  NavigatingLink,
  SideBarLink,
  SideBarNavItem,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
} from './styledComponents'

const SideBarItem = props => {
  const {
    isBrighterTheme,
    isItemSelected,
    location,
    eachItem,
    changeRoute,
  } = props
  const {path, title} = eachItem

  console.log('In SideBarItem:', location)

  const routeItem = () => {
    const {id} = eachItem
    console.log('===>routeItem:', {id, isItemSelected})
    switch (id) {
      case 'home':
        return <HomeIcon isItemSelected={isItemSelected} />
      case 'trending':
        return <TrendingIcon isItemSelected={isItemSelected} />
      case 'gaming':
        return <GamingIcon isItemSelected={isItemSelected} />
      case 'saved-videos':
        return <SavedVideosIcon isItemSelected={isItemSelected} />
      default:
        return null
    }
  }
  const routeIsSelected = () => {
    changeRoute(path)
  }
  return (
    <NavigatingLink onClick={routeIsSelected} to={`${path}`}>
      <SideBarLink
        isBrighterTheme={isBrighterTheme}
        isItemSelected={isItemSelected}
        as="li"
      >
        {routeItem()}
        <SideBarNavItem isBrighterTheme={isBrighterTheme}>
          {title}
        </SideBarNavItem>
      </SideBarLink>
    </NavigatingLink>
  )
}

export default withRouter(SideBarItem)
