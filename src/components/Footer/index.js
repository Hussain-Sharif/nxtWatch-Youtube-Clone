import {
  FooterBg,
  FooterHead,
  FooterPara,
  FooterIconsBg,
  FooterImg,
} from './styledComponents'
import ThemeContext from '../../contexts/ThemeContext'

const Footer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isBrighterTheme, changeTheme} = value
      console.log('In Footer Component:', {isBrighterTheme, changeTheme})
      return (
        <FooterBg isBrighterTheme={isBrighterTheme}>
          <FooterHead isBrighterTheme={isBrighterTheme}>CONTACT US</FooterHead>
          <FooterIconsBg>
            <FooterImg
              alt="facebook logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            />
            <FooterImg
              alt="twitter logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            />
            <FooterImg
              alt="linked in logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            />
          </FooterIconsBg>
          <FooterPara isBrighterTheme={isBrighterTheme}>
            Enjoy! Now to see your channels and recommendations!
          </FooterPara>
        </FooterBg>
      )
    }}
  </ThemeContext.Consumer>
)

export default Footer
