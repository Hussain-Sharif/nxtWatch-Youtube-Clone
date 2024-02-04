import ThemeContext from '../../contexts/ThemeContext'
import {
  VideoDesContainer,
  VideoRelated,
  ChannelImg,
  ChannelName,
  ChannelSubs,
  ChannelDescription,
} from './styledComponents'

const VideoChannelDescription = props => {
  const {channel, description} = props
  const {name, profileImageUrl, subscriberCount} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isBrighterTheme} = value

        return (
          <VideoDesContainer>
            <ChannelImg src={profileImageUrl} />
            <VideoRelated>
              <ChannelName isBrighterTheme={isBrighterTheme}>
                {name}
              </ChannelName>
              <ChannelSubs>{subscriberCount} Subscribers</ChannelSubs>
              <ChannelDescription isBrighterTheme={isBrighterTheme}>
                {description}
              </ChannelDescription>
            </VideoRelated>
          </VideoDesContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoChannelDescription
