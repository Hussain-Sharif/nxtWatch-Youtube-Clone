import ThemeContext from '../../contexts/ThemeContext'

import {
  EachGameLink,
  EachGameBg,
  GameThumbnailImg,
  GameTitle,
  GameSubs,
} from './styledComponents'

const GameVideoItem = props => {
  const {eachSavedVideo} = props
  const {id, title, thumbnailUrl, viewCount} = eachSavedVideo

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isBrighterTheme} = value
        return (
          <EachGameLink to={`videos/${id}`}>
            <EachGameBg>
              <GameThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle isBrighterTheme={isBrighterTheme}>{title}</GameTitle>
              <GameSubs isBrighterTheme={isBrighterTheme}>
                {viewCount} Watching Worldwide
              </GameSubs>
            </EachGameBg>
          </EachGameLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameVideoItem
