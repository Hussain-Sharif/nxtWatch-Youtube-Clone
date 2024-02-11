import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
// import {BsFire} from 'react-icons/bs'
// import {PiGameControllerFill} from 'react-icons/pi'
import {GiGamepad} from 'react-icons/gi'
import {MdPlaylistAdd} from 'react-icons/md'
import styled from 'styled-components'

export const HomeIcon = styled(AiFillHome)`
  font-size: 25px;
  color: ${props => {
    const {isItemSelected} = props
    console.log('===>SideBarItem: styledComponents', isItemSelected)
    return !isItemSelected ? '#606060' : 'red'
  }};
`
export const TrendingIcon = styled(AiFillFire)`
  font-size: 25px;
  color: ${props => (!props.isItemSelected ? '#606060' : 'red')};
`
export const GamingIcon = styled(GiGamepad)`
  font-size: 25px;
  color: ${props => (!props.isItemSelected ? '#606060' : 'red')};
`
export const SavedVideosIcon = styled(MdPlaylistAdd)`
  font-size: 25px;
  color: ${props => (!props.isItemSelected ? '#606060' : 'red')};
`

export const NavigatingLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  padding-top: 3px;
  padding-bottom: 3px;
  //   border: solid orange 1px;
`

export const SideBarNavItem = styled.p`
  margin: 0;
  margin-left: 15px;
  font-size: 25px;
  color: ${props => (props.isBrighterTheme ? '#606060' : '#fff')};
`

export const SideBarLink = styled.li`
  //   border: solid blue 1px;
  width: 100%;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => {
    const {isBrighterTheme, isItemSelected} = props
    console.log('------------->>>', {isBrighterTheme, isItemSelected})
    if (isBrighterTheme && isItemSelected) {
      return '#F1F5F9'
    }
    if (!isBrighterTheme && isItemSelected) {
      return '#383838'
    }
    return 'auto'
  }};

  :hover {
    background-color: ${props =>
      props.isBrighterTheme ? '#F1F5F9' : '#383838'};
  }
`
