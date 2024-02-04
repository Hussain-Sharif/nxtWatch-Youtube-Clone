import styled from 'styled-components'

import {GamingIcon} from '../SideBarItem/styledComponents'

import {SaveVideosContainer} from '../SavedVideos/styledComponents'

export const GameIcon = styled(GamingIcon)`
  font-size: 35px;
  color: red;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`

export const GamingContainer = styled(SaveVideosContainer)`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  //   border: solid red 1px;
  width: 100%;
`
