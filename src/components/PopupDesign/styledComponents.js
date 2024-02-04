import styled from 'styled-components'

export const PopupBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   border-radius: 12px;
  border: none;
  padding: 10px;
  background-color: ${props => (props.isBrighterTheme ? '#fff' : '#212121')};
`

export const PopupHead = styled.h1`
  color: ${props => (props.isBrighterTheme ? '#3b82f6' : '#fff')};
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`

export const CancelButton = styled.button`
  color: ${props => (props.isBrighterTheme ? '#212121' : '#3b82f6')};
  background-color: transparent;
  border: #fff solid 1px;
  border-color: ${props => (props.isBrighterTheme ? '#212121' : '#3b82f6')};
  padding: 10px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const LogOutButton = styled(CancelButton)`
  color: #fff;
  background-color: #3b82f6;
`
