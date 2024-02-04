import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavigatingLink = styled(Link)`
  width: clamp(150px, 100%, 360px);
  text-decoration: none;
  cursor: pointer;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  min-height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  //   border: solid orange 1px;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 320px;
  }
`

export const VideoItem = styled.li`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  background-color: transparent;

  //   border: solid red 1px;
`

export const VideoThumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
`

export const VideoCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const ChannelImg = styled.img`
  max-width: 40px;
  margin-right: 10px;
  margin-top: 10px;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  width: 100%;
`

export const VideoTitle = styled.h1`
  color: ${props => (props.isBrighterTheme ? '#212121' : '#f1f1f1')};
  font-size: 16px;
`

export const VideoRandomText = styled.p`
  color: ${props => (props.isBrighterTheme ? '#424242' : '#3b82f6')};
  font-size: 10px;
  margin-top: 0px;
`

export const VideoViewsAndTimeContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  width: 100%;
  list-style-type: none;
  padding-left: 0;
`

export const VideoViewsAndTimeItem = styled.li`
  background-color: transparent;
  align-self: center;
  margin: 0;
  margin-right: 5px;
`
