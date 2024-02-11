import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../contexts/ThemeContext'

import {
  NavigatingLink,
  VideoItem,
  VideoThumbnail,
  VideoCard,
  ChannelImg,
  VideoDetails,
  VideoTitle,
  VideoRandomText,
  VideoViewsAndTimeContainer,
  VideoViewsAndTimeItem,
} from './styledComponents'

const EachHomeVideoItem = props => {
  const {eachVideoItem} = props
  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = eachVideoItem
  const {name, profileImageUrl} = channel

  const publishedDateJsFormatted = new Date(publishedAt)
  const publishedYear = publishedDateJsFormatted.getFullYear()
  const publishedDate = publishedDateJsFormatted.getDate()
  const publishedMonth = publishedDateJsFormatted.getMonth() + 1
  let formattedPublishedDate = formatDistanceToNow(
    new Date(publishedYear, publishedMonth, publishedDate),
  )
  console.log('====<<<<<<< formattedPublishedDate:', formattedPublishedDate)
  console.log('====<<<<<<< almost:', formattedPublishedDate.split('almost '))
  console.log('====<<<<<<< over:', formattedPublishedDate.split('over '))
  console.log('====<<<<<<< about:', formattedPublishedDate.split('about '))
  if (formattedPublishedDate.split('almost ').length !== 1) {
    formattedPublishedDate = formattedPublishedDate.split('almost ')
  } else if (formattedPublishedDate.split('over ').length !== 1) {
    formattedPublishedDate = formattedPublishedDate.split('over ')
  } else if (formattedPublishedDate.split('about ').length !== 1) {
    formattedPublishedDate = formattedPublishedDate.split('about ')
  }
  console.log('====>>>>>', formattedPublishedDate[1])
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isBrighterTheme} = value

        return (
          <NavigatingLink to={`videos/${id}`}>
            <VideoItem>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoCard>
                <ChannelImg src={profileImageUrl} alt="channel logo" />
                <VideoDetails>
                  <VideoTitle isBrighterTheme={isBrighterTheme}>
                    {title}
                  </VideoTitle>
                  <VideoRandomText isBrighterTheme={isBrighterTheme}>
                    {name}
                  </VideoRandomText>
                  <VideoViewsAndTimeContainer>
                    <VideoViewsAndTimeItem>
                      <VideoRandomText isBrighterTheme={isBrighterTheme}>
                        {viewCount} views
                      </VideoRandomText>
                    </VideoViewsAndTimeItem>
                    <VideoViewsAndTimeItem>
                      <VideoRandomText isBrighterTheme={isBrighterTheme}>
                        <BsDot />
                      </VideoRandomText>
                    </VideoViewsAndTimeItem>
                    <VideoViewsAndTimeItem>
                      <VideoRandomText isBrighterTheme={isBrighterTheme}>
                        {formattedPublishedDate[1]} ago
                      </VideoRandomText>
                    </VideoViewsAndTimeItem>
                  </VideoViewsAndTimeContainer>
                </VideoDetails>
              </VideoCard>
            </VideoItem>
          </NavigatingLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default EachHomeVideoItem
