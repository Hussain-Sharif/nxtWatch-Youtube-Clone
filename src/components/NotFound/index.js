import ThemeContext from '../../contexts/ThemeContext'

import {
  NotFoundBg,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext>
    {value => {
      const {isBrighterTheme} = value
      console.log('(NotFound)isBrighterTheme:', isBrighterTheme)
      return (
        <NotFoundBg isBrighterTheme>
          <NotFoundImage
            alt="not-found"
            src={`${
              isBrighterTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            }`}
          />
          <NotFoundHeading isBrighterTheme>Page Not Found</NotFoundHeading>
          <NotFoundPara isBrighterTheme>
            We are sorry, the page you requested could not be found
          </NotFoundPara>
        </NotFoundBg>
      )
    }}
  </ThemeContext>
)

export default NotFound
