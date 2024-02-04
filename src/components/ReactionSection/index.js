import {
  ReactionBg,
  IconText,
  ViewsTimeItem,
  ViewsTimeContainer,
  LikeDisLikeItem,
  LikeDisLikeSaveContainer,
  Dot,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  LikeDislikeButton,
} from './styledComponents'

const ReactionSection = props => {
  const {
    publishedAt,
    viewCount,
    trueIfLiked,
    trueIfDisliked,
    dislikeIsSelected,
    likeIsSelected,
    trueIfSaved,
    saveIsSelected,
  } = props
  //   const {publishedAt, viewCount,id} = props

  const likeClicked = () => {
    likeIsSelected()
  }

  const dislikeClicked = () => {
    dislikeIsSelected()
  }

  const saveClicked = () => {
    saveIsSelected()
  }

  return (
    <ReactionBg>
      <ViewsTimeContainer>
        <ViewsTimeItem>
          <IconText>{viewCount} views</IconText>
        </ViewsTimeItem>
        <ViewsTimeItem>
          <IconText>
            <Dot />
          </IconText>
        </ViewsTimeItem>
        <ViewsTimeItem>
          <IconText>{publishedAt} ago</IconText>
        </ViewsTimeItem>
      </ViewsTimeContainer>
      <LikeDisLikeSaveContainer>
        <LikeDisLikeItem>
          <LikeDislikeButton onClick={likeClicked} type="button">
            <IconText as="p" trueIfLiked={trueIfLiked}>
              <LikeIcon /> Like
            </IconText>
          </LikeDislikeButton>
        </LikeDisLikeItem>
        <LikeDisLikeItem>
          <LikeDislikeButton type="button" onClick={dislikeClicked}>
            <IconText as="p" trueIfDisliked={trueIfDisliked}>
              <DislikeIcon /> Dislike
            </IconText>
          </LikeDislikeButton>
        </LikeDisLikeItem>
        <LikeDisLikeItem>
          <LikeDislikeButton onClick={saveClicked} type="button">
            <IconText trueIfSaved={trueIfSaved} as="p">
              <SaveIcon /> {trueIfSaved ? 'Saved' : 'Save'}
            </IconText>
          </LikeDislikeButton>
        </LikeDisLikeItem>
      </LikeDisLikeSaveContainer>
    </ReactionBg>
  )
}

export default ReactionSection
