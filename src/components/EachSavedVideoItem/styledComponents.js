import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

import {
  NavigatingLink,
  VideoItem,
  VideoThumbnail,
  VideoDetails,
  VideoTitle,
  VideoRandomText,
  VideoViewsAndTimeContainer,
  VideoViewsAndTimeItem,
} from '../EachHomeVideoItem/styledComponents'

export const SavedVideoNavLink = styled(NavigatingLink)`
  width: 100%;
  margin: 0;
  //   border: green solid 2px;
  margin-bottom: 20px;
  content: object-fit;
  min-height: 350px;
  max-height: 700px;
  //   overflow: auto;
  @media screen and (max-width: 768px) {
    // margin-bottom: 0;
    // min-height: 120px;
    margin-bottom: 5px;
    min-height: 100px;
  }
`
export const SavedVideoItem = styled(VideoItem)`
  flex-direction: row;
  width: 100%;
  content: object-fit;
  background: transparent;
  justify-content: center;
  align-items: center;
  //   border: solid red 1px;
  margin-bottom: 0;
  height: 100%;
  //   @media screen and (max-width: 768px) {
  //     // flex-direction: column;
  //     width: 100%;
  //   }
`

export const SavedVideoThumbnail = styled(VideoThumbnail)`
  width: 50%;
  align-self: flex-start;
  aspect-ratio: 5/2;
  object-fit: content;
  //   height: 95%;
  //   max-width: 30%;
  @media screen and (max-width: 768px) {
    aspect-ratio: 9/4;
  }
`

export const SavedVideoDetails = styled(VideoDetails)`
  width: 46%;
  margin-left: 10px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //   border: orange solid 1px;
  height: inherit;
  @media screen and (max-width: 768px) {
    //   width: 100%;
    margin-left: 4px;
  }
`

export const SavedVideoTitle = styled(VideoTitle)`
  margin-top: 3px;
  color: ${props => (props.isBrighterTheme ? '#1A314E' : '#f1f1f1')};
  //   font-size: 30px;

  @media screen and (min-width: 1440px) {
    font-size: 35px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    font-size: 9px;
  }
`
export const SavedVideoRandomText = styled(VideoRandomText)`
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 2px;

  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    font-size: 8px;
  }
`

export const SavedVideoViewTimeContainer = styled(VideoViewsAndTimeContainer)`
  background: transparent;
`

export const SavedVideoVewTimeItem = styled(VideoViewsAndTimeItem)`
  margin-left: 0;
`

export const SavedVideoDot = styled(BsDot)`
  margin-top: 5px;
`
