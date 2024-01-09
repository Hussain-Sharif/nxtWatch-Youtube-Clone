import styled from 'styled-components'

export const HomeBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const HomeDisplay = styled.div`
  overflow: auto;
  max-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => (props.isBrighterTheme ? '#f9f9f9' : '#181818')};
`

// <-------Input Feature------>

export const SearchDiv = styled.div`
  background: transparent;
  border: solid 1px #cccccc;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin-left: 10px;
`

export const SearchInput = styled.input`
  background-color: ${props => (props.isBrighterTheme ? '#fff' : '#181818')};
  width: 90%;
  order: 1;
  ::placeholder {
    color: #cccccc;
  }
`

export const SearchButton = styled.button`
  cursor: pointer;
  border: none;
  border-left: solid 1px #cccccc;
  background-color: transparent;
  opacity: 0.2;
  text-align: center;
  font-size: 16px;
`
