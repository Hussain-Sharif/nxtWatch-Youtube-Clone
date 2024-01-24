import {Link} from 'react-router-dom'
import {MdOutlineBrightness5, MdDarkMode} from 'react-icons/md'
import {IoPersonCircle} from 'react-icons/io5'
import {TbArticleFilledFilled, TbArticleOff} from 'react-icons/tb'

import styled from 'styled-components'

export const HeaderBg = styled.nav`
  //   z-index: 1000;
  height: 10vh;
  width: 100%;
  background-color: ${props => (props.isBrighterTheme ? '#ffffff' : '#212121')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
  @media screen and (max-width: 768px) {
    border-bottom: solid #475569 2px;
    padding-right: 1px;
  }
`
export const WebsiteLogo = styled.img`
  max-width: 180px;
  height: auto;
  @media screen and (max-width: 768px) {
    max-width: 120px;
  }
`

export const HeaderItemsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
`
export const NavigatorLink = styled(Link)`
  text-decoration: none;
`

export const HeaderItem = styled.li`
  background-color: transparent;
`
export const ThemeButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  transition: 0.9s;
`
export const AccountButton = styled(ThemeButton)`
  background-color: transparent;
`

export const LogInOutButton = styled(ThemeButton)`
  margin-left: 6px;
  border: solid 1px ${props => (props.isBrighterTheme ? '#3b82f6' : '#fff')};
  color: ${props => (props.isBrighterTheme ? '#3b82f6' : '#fff')};
  padding: 10px;
  border-radius: 14px;
  font-size: 22px;
  @media screen and (max-width: 768px) {
    margin-left: 3px;
    padding: 6px;
    font-size: 17px;
  }
  :hover {
    background-color: ${props => (props.isBrighterTheme ? '#3b82f6' : '#fff')};
    color: #f26d87;
    border: none;
  }
`

// Icons<================

export const DarkMoonIcon = styled(MdDarkMode)`
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const SideOpened = styled(TbArticleOff)`
  color: ${props => (props.isBrighterTheme ? 'black' : 'white')};
  font-size: 30px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const SideClosed = styled(TbArticleFilledFilled)`
  color: ${props => (props.isBrighterTheme ? 'black' : 'white')};
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`

export const BrightSunIcon = styled(MdOutlineBrightness5)`
  font-size: 30px;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const ProfileIcon = styled(IoPersonCircle)`
  font-size: 30px;
  color: #396293;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
