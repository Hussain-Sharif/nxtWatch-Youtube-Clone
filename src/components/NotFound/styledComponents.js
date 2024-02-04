import styled from 'styled-components'

export const NotFoundBg = styled.div`
  background-color: ${props => (props.isBrighterTheme ? '#cbd5e1' : '#000')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const NotFoundImage = styled.img`
  max-width: 180px;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isBrighterTheme ? '#1e293b' : '#ebebeb')};
  font-weight: bolder;
`

export const NotFoundPara = styled.p`
  color: ${props => (props.isBrighterTheme ? '#1e293b' : '#ebebeb')};
`
