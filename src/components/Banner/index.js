import {Component} from 'react'

import {
  WebsiteLogo,
  BannerButton,
  BannerCancelButton,
  BannerDiv,
  BannerHeading,
  BannerInfoCard,
  CloseIcon,
} from './styledComponents'

class Banner extends Component {
  state = {
    isRemoved: false,
  }

  removeBanner = () => {
    this.setState({isRemoved: true})
  }

  render() {
    const {isRemoved} = this.state
    console.log('Banner section', isRemoved)
    return (
      <>
        {isRemoved ? null : (
          <BannerDiv data-testid="banner">
            <BannerInfoCard>
              <WebsiteLogo
                alt="nxt watch logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              />
              <BannerHeading>
                Buy Nxt Watch Premium prepaid plans with UPI
              </BannerHeading>
              <BannerButton>GET IT NOW</BannerButton>
            </BannerInfoCard>
            <BannerCancelButton
              data-testid="close"
              type="button"
              onClick={this.removeBanner}
            >
              <CloseIcon />
            </BannerCancelButton>
          </BannerDiv>
        )}
      </>
    )
  }
}

export default Banner
