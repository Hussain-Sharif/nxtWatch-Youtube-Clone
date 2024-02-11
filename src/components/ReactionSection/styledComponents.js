import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {VideoBg} from '../Video/styledComponents'
import {
  VideoViewsAndTimeContainer,
  //   VideoRandomText,
  VideoViewsAndTimeItem,
} from '../EachHomeVideoItem/styledComponents'

export const ReactionBg = styled(VideoBg)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: grey solid 2px;
  border-radius: 10px;
  padding: 4px;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 2px;
`
export const LikeDisLikeSaveContainer = styled(VideoViewsAndTimeContainer)`
  background: transparent;
  justify-content: flex-end;
  //   border: solid red 1px;
  flex-direction: row;
`

export const ViewsTimeContainer = styled(VideoViewsAndTimeContainer)`
  background: transparent;
`

export const LikeDisLikeItem = styled(VideoViewsAndTimeItem)`
  margin-right: 14px;
  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`
export const ViewsTimeItem = styled(VideoViewsAndTimeItem)`
  background: transparent;
`

export const IconText = styled.p`
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  font-size: 19px;
  justify-content: center;
  align-items: center;
  color: ${props => {
    // const {trueIfLike, trueIfDisliked} = props
    console.log(
      'ReactionSection=-=-=->',
      props.trueIfLiked,
      props.trueIfDisliked,
      props.as,
      props,
    )
    if (props.trueIfLiked || props.trueIfDisliked || props.trueIfSaved) {
      return '#1C56A2'
    }
    return 'grey'
  }};

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

// Icons
export const Dot = styled(BsDot)`
  margin: 0;
  margin-top: 3px;
`

export const LikeIcon = styled(BiLike)`
  margin-left: 5px;
  transition: 0.2s;
  font-size: 26px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`

export const DislikeIcon = styled(BiDislike)`
  margin-left: 5px;
  transition: 0.2s;
  font-size: 26px;
  margin-top: 3px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const SaveIcon = styled(MdPlaylistAdd)`
  margin-left: 5px;
  transition: 0.2s;
  font-size: 26px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`

// Like-Dislike Button

export const LikeDislikeButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
`
