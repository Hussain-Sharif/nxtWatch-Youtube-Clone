import styled from 'styled-components'

export const LoginBg = styled.div`
  background-color: ${props => {
    console.log('styled components', props.isBrighterTheme)
    return props.isBrighterTheme ? '#fff' : '#313131'
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  opacity: 1;
`

export const LoginCard = styled(LoginBg)`
  height: auto;
  width: 70%;
  margin: 20px;
  background-color: ${props => (props.isBrighterTheme ? '#fff' : '#0f0f0f')};
  justify-content: flex-start;
  opacity: 0.8;
  padding: 10px;
  box-shadow: ${props =>
    props.isBrighterTheme ? '10px 10px 20px 20px #bfbfbf' : 'auto'};
  border-radius: 10px;
`
export const LogoImg = styled.img`
  max-width: 180px;
  margin-bottom: 20px;
`
export const ReuseDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  background: transparent;
  margin-bottom: 10px;
  //   border: #000 solid 1px;
`

export const LoginLabel = styled.label`
  color: ${props => (props.isBrighterTheme ? '#000' : '#fff')};
  margin-bottom: 10px;
`

export const LoginInput = styled.input`
  width: ${props => props.isText};
  border-color: ${props => (props.isBrighterTheme ? '#475569' : '#fff')};
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 5px;
  padding: 10px;
  outline-color: ${props => (props.isBrighterTheme ? '#000' : '#fff')};

  ::placeholder {
    color: #94a3b8;
  }
`

export const LoginShowPassDiv = styled(ReuseDiv)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const LoginButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #3b82f6;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  :hover {
    transition: 0.2s;
    background-color: #3b79a9;
  }
`

export const ErrorMsg = styled.p`
  color: red;
`
