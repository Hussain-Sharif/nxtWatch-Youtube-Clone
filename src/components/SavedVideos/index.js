import SavedVideosContext from '../../contexts/SavedVideosContext'
import ThemeContext from '../../contexts/ThemeContext'

import EachSavedVideoItem from '../EachSavedVideoItem'

import {
  SavedVideosBg,
  HeadingCard,
  SavedIconContainer,
  SavedIcon,
  SaveHeading,
  SaveVideosContainer,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosPara,
} from './styledComponents'

const SavedVideos = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {listOfSavedVideos} = value

      if (listOfSavedVideos.length === 0) {
        return (
          <ThemeContext.Consumer>
            {themeValue => {
              const {isBrighterTheme} = themeValue
              return (
                <SavedVideosBg
                  listOfSavedVideos={listOfSavedVideos}
                  isBrighterTheme={isBrighterTheme}
                >
                  <NoSavedVideosImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading isBrighterTheme={isBrighterTheme}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosPara isBrighterTheme={isBrighterTheme}>
                    You can save your videos while watching them
                  </NoSavedVideosPara>
                </SavedVideosBg>
              )
            }}
          </ThemeContext.Consumer>
        )
      }

      return (
        <ThemeContext.Consumer>
          {themeValue => {
            const {isBrighterTheme} = themeValue

            return (
              <SavedVideosBg
                listOfSavedVideos={listOfSavedVideos}
                isBrighterTheme={isBrighterTheme}
              >
                <HeadingCard isBrighterTheme={isBrighterTheme}>
                  <SavedIconContainer isBrighterTheme={isBrighterTheme}>
                    <SavedIcon />
                  </SavedIconContainer>
                  <SaveHeading isBrighterTheme={isBrighterTheme}>
                    Saved Videos
                  </SaveHeading>
                </HeadingCard>
                <SaveVideosContainer isBrighterTheme={isBrighterTheme}>
                  {listOfSavedVideos.map(eachSavedVideo => (
                    <EachSavedVideoItem
                      key={eachSavedVideo.id}
                      eachSavedVideo={eachSavedVideo}
                    />
                  ))}
                </SaveVideosContainer>
              </SavedVideosBg>
            )
          }}
        </ThemeContext.Consumer>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default SavedVideos
