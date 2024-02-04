import ThemeContext from '../../contexts/ThemeContext'
import {VideoBg, VideoPlayer, VideoTitle} from './styledComponents'

const Video = props => {
  const {videoUrl, title} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isBrighterTheme} = value

        return (
          <VideoBg>
            <VideoPlayer
              controls
              style={{'align-self': 'center', 'max-height': '1000px'}}
              width="95%"
              url={videoUrl}
            />
            <VideoTitle isBrighterTheme={isBrighterTheme}>{title}</VideoTitle>
          </VideoBg>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Video
