import styled from 'styled-components'
import {BsFire} from 'react-icons/bs'
import {HomeDisplay} from '../Home/styledComponents'

export const SavedVideosBg = styled(HomeDisplay)`
  background-color: ${props => (props.isBrighterTheme ? '#e0e0e0' : '#0F0F0F')};
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.listOfSavedVideos.length === 0 ? 'center' : 'flex-start'};
  align-items: center;
  overflow: auto;
  ::-webkit-scrollbar {
    display: block;
  }
`

export const HeadingCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 12px;
  background-color: ${props => (props.isBrighterTheme ? '#F1F1F1' : '#181818')};
`
export const SavedIconContainer = styled.div`
  background-color: ${props => (props.isBrighterTheme ? '#E1E8F0' : '#0F0F0F')};
  padding: 30px;
  border-radius: 100px;
  @media screen and (max-width: 768px) {
    padding: 14px;
    border-radius: 100px;
  }
`

export const SavedIcon = styled(BsFire)`
  font-size: 35px;
  color: red;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`

export const SaveHeading = styled.h1`
  margin-left: 15px;
  font-size: 45px;
  color: ${props => (props.isBrighterTheme ? '#1A314E' : '#fff')};
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`

export const SaveVideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 4px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  //   border: solid blue 1px;
  width: 100%;
  height: 150vh;
  background-color: transparent;
  overflow: auto;
  ::-webkit-scrollbar {
    display: block;
  }
  @media and (max-width: 768px) {
    justify-content: flex-start;
    height: 100vh;
  }
`

// For Empty List of Saved Videos

export const NoSavedVideosImg = styled.img`
  max-width: 500px;
  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
  //   max-height: 100px;
`

export const NoSavedVideosHeading = styled.h1`
  color: ${props => (props.isBrighterTheme ? '#000' : '#fff')};
`

export const NoSavedVideosPara = styled.p`
  color: ${props => (props.isBrighterTheme ? 'grey' : '#f1f1f1')};
`
