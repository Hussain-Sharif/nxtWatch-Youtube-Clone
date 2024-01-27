

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
