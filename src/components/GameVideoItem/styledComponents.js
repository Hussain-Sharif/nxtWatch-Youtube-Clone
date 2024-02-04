import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const EachGameLink = styled(Link)`
  background: transparent;
  text-decoration: none;
  //   border: solid orange 1px;
  width: clamp(200px, 100%, 240px);
  @media screen and (max-width: 768px) {
    width: clamp(300px, 100%, 400px);
    margin-bottom: 15px;
  }
`

export const EachGameBg = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const GameThumbnailImg = styled.img`
  width: 90%;
`

export const GameTitle = styled.h1`
  color: ${props => (props.isBrighterTheme ? '#000' : '#ffffff')};
  font-weight: bolder;
  font-size: 28px;
  align-self: flex-start;
`

export const GameSubs = styled.p`
  margin-top: 0;
  align-self: flex-start;
  color: ${props => (props.isBrighterTheme ? '#7e858e' : '#ebebeb')};
`
