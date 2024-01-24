import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BsFire} from 'react-icons/bs'
import {PiGameControllerFill} from 'react-icons/pi'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import styled from 'styled-components'

export const SideBarBg = styled.div`
  height: 100%;
  //   border: solid red 1px;
  width: 100%;
  background-color: ${props => (props.isBrighterTheme ? '#ffffff' : '#212121')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`

export const SideBarLinks = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  width: 100%;
  //   border: solid red 1px;
`

export const NavigatingLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  padding-top: 3px;
  padding-bottom: 3px;
  //   border: solid orange 1px;
`

export const HomeIcon = styled(AiFillHome)`
  font-size: 25px;
  color: ${props => (!props.isItemSelected ? '#606060' : 'red')};
`
export const TrendingIcon = styled(BsFire)`
  font-size: 25px;
  color: ${props => (!props.isItemSelected ? '#606060' : 'red')};
`
export const GamingIcon = styled(PiGameControllerFill)`
  font-size: 25px;
  color: ${props => (!props.isItemSelected ? '#606060' : 'red')};
`
export const SavedVideosIcon = styled(MdOutlinePlaylistAdd)`
  font-size: 25px;
  color: ${props => (!props.isItemSelected ? '#606060' : 'red')};
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
export const SideBarNavItem = styled.p`
  margin: 0;
  margin-left: 15px;
  font-size: 25px;
  color: ${props => (props.isBrighterTheme ? '#606060' : '#fff')};
`

export const ComponentMediaSelection = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
    visibility: hidden;
    position: absolute;
  }
`
