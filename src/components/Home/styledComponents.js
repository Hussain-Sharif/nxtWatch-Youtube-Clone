import styled from 'styled-components'
import {BiSearchAlt2} from 'react-icons/bi'

export const HomeDisplay = styled.div`
  align-self: stretch;
  overflow: auto;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => (props.isBrighterTheme ? '#e0e0e0' : '#181818')};
  ::-webkit-scrollbar {
    display: none;
  }
`

// <-------Input Feature------>

export const SearchDiv = styled.div`
  margin-top: 10px;
  background-color: ${props =>
    props.isBrighterTheme ? '#ffffff' : 'transparent'};

  border: solid 2px #cccccc;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 300px;
  margin-left: 10px;
  margin-bottom: 10px;
`

export const SearchInput = styled.input`
  margin-left: 4px;
  background: transparent;
  width: 88%;
  font-size: 17px;
  outline: none;
  color: ${props => (props.isBrighterTheme ? '#000' : '#ffffff')};
  border: none;
  ::placeholder {
    color: #cccccc;
    font-weight: 0;
  }
`

export const SearchIcon = styled(BiSearchAlt2)`
  color: ${props => (props.isBrighterTheme ? '#000' : '#ffffff')};
  font-size: 22px;
  margin: 5px;
  border-radius: 10px;
  background: transparent;
`

export const SearchButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: solid 1px #cccccc;
  background-color: ${props => (props.isBrighterTheme ? '#e0e0e0' : '#313031')};
  //   opacity: 0.2;
  text-align: center;
  font-size: 16px;
`

// Component Selection Containers to Display and Hide<--

// Api Related Styles
export const ApiRenderingJsx = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   border: red solid 1px;
`

// For API Failure

export const ApiFailureView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const ApiFailureImg = styled.img`
  max-width: 500px;
`

export const ApiFailureHead = styled.h1`
  color: ${props => (props.isBrighterTheme ? '#1e293b' : '#fff')};
  font-size: 22px;
`

export const ApiFailurePara = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${props => (props.isBrighterTheme ? '#475569' : '#f1f5f9')};
`

export const ApiRetryButton = styled.button`
  color: #fff;
  background: #4f46e5;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 20px;
`
