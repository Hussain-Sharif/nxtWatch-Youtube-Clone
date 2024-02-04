import ReactPlayer from 'react-player'
import styled from 'styled-components'

export const VideoBg = styled.div`
  padding-top: 10px;
  width: 98%;
  //   border: solid orange 1px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  padding-bottom: 0;
  margin-bottom: 0;
`

export const VideoPlayer = styled(ReactPlayer)`
  width: 100%;
  align-self: center;
`

export const VideoTitle = styled.h1`
  color: ${props => (props.isBrighterTheme ? '#000' : '#fff')};
  @media screen and (max-width: 767px) {
    font-size: 18px;
    padding: 6px;
    padding-bottom: 0;
  }
`
