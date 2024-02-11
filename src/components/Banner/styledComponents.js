import styled from 'styled-components'
// import {MdOutlineCancel} from 'react-icons/md'
import {MdCancel} from 'react-icons/md'

export const BannerDiv = styled.div`
  padding: 10px;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`

export const BannerInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
`

export const WebsiteLogo = styled.img`
  max-width: 150px;
  height: auto;
`
export const CloseIcon = styled(MdCancel)`
  font-size: 20px;
`

export const BannerHeading = styled.h1`
  color: #000;
`

export const BannerButton = styled.button`
  color: #000;
  border: #000 solid 2px;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  background: transparent;
  cursor: pointer;
  outline: none;
  :hover {
    color: #fff;
    border: #fff solid 2px;
    background-color: #000;
    transition: 0.5s;
  }
`

export const BannerCancelButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`
