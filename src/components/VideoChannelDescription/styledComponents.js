import styled from 'styled-components'
import {VideoBg} from '../Video/styledComponents'

export const VideoDesContainer = styled(VideoBg)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
`

export const ChannelImg = styled.img`
  max-width: 75px;
  margin-right: 16px;
  margin-top: 16px;
`
export const VideoRelated = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  //   border: solid red 1px;
`

export const ChannelName = styled.h1`
  color: ${props => (props.isBrighterTheme ? '#000' : '#f1f1f1')};
  margin-bottom: 0px;
  margin-top: 16;
`

export const ChannelSubs = styled.p`
  color: #909090;
  margin-top: 0;
  margin-bottom: 15px;
`
export const ChannelDescription = styled.p`
  color: ${props => (props.isBrighterTheme ? '#000' : '#f1f1f1')};
  margin-top: 8px;
`
