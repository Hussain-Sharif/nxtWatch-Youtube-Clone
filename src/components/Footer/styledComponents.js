import styled from 'styled-components'

export const FooterBg = styled.div`
  //   margin-top: 10px;

  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: ${props =>
    props.isBrighterTheme ? 'transparent' : '#212121'};
  @media screen and (max-width: 768px) {
    border-top: solid #475569 2px;
    min-height: 38vh;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const FooterHead = styled.h1`
  color: ${props => (props.isBrighterTheme ? '#475569' : '#fff')};
  font-weight: bolder;
  margin-left: 10px;
  font-size: 25px;
`

export const FooterIconsBg = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`

export const FooterPara = styled.p`
  margin-left: 10px;
  color: ${props => (props.isBrighterTheme ? '#475569' : '#fff')};
  font-weight: 700;
`
export const FooterImg = styled.img`
  max-width: 30px;
`
