import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../contexts/ThemeContext'

import {
  SavedVideoNavLink,
  SavedVideoItem,
  SavedVideoThumbnail,
  SavedVideoDetails,
  SavedVideoTitle,
  SavedVideoRandomText,
  SavedVideoViewTimeContainer,
  SavedVideoVewTimeItem,
  SavedVideoDot,
} from './styledComponents'

const EachSavedVideoItem = props => {
  const {eachSavedVideo} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = eachSavedVideo

  const {name} = channel
  const publishedDateJsFormatted = new Date(publishedAt)
  const publishedYear = publishedDateJsFormatted.getFullYear()
  const publishedDate = publishedDateJsFormatted.getDate()
  const publishedMonth = publishedDateJsFormatted.getMonth() + 1
  let formattedPublishedDate = formatDistanceToNow(
    new Date(publishedYear, publishedMonth, publishedDate),
  )

  if (formattedPublishedDate.split('almost ').length !== 1) {
    formattedPublishedDate = formattedPublishedDate.split('almost ')
  } else if (formattedPublishedDate.split('over ').length !== 1) {
    formattedPublishedDate = formattedPublishedDate.split('over ')
  } else if (formattedPublishedDate.split('about ').length !== 1) {
    formattedPublishedDate = formattedPublishedDate.split('about ')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isBrighterTheme} = value
        return (
          <SavedVideoNavLink to={`videos/${id}`}>
            <SavedVideoItem isBrighterTheme={isBrighterTheme}>
              <SavedVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <SavedVideoDetails>
                <SavedVideoTitle isBrighterTheme={isBrighterTheme}>
                  {title}
                </SavedVideoTitle>
                <SavedVideoRandomText isBrighterTheme={isBrighterTheme}>
                  {name}
                </SavedVideoRandomText>
                <SavedVideoViewTimeContainer>
                  <SavedVideoVewTimeItem>
                    <SavedVideoRandomText isBrighterTheme={isBrighterTheme}>
                      {viewCount} views
                    </SavedVideoRandomText>
                  </SavedVideoVewTimeItem>

                  <SavedVideoVewTimeItem>
                    <SavedVideoRandomText isBrighterTheme={isBrighterTheme}>
                      <SavedVideoDot />
                    </SavedVideoRandomText>
                  </SavedVideoVewTimeItem>
                  <SavedVideoVewTimeItem>
                    <SavedVideoRandomText isBrighterTheme={isBrighterTheme}>
                      {formattedPublishedDate[1]} ago
                    </SavedVideoRandomText>
                  </SavedVideoVewTimeItem>
                </SavedVideoViewTimeContainer>
              </SavedVideoDetails>
            </SavedVideoItem>
          </SavedVideoNavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default EachSavedVideoItem
