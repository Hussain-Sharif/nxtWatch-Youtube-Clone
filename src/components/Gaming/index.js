import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'
import ThemeContext from '../../contexts/ThemeContext'

import GameVideoItem from '../GameVideoItem'

import {
  ApiFailureView,
  ApiFailureHead,
  ApiFailureImg,
  ApiFailurePara,
  ApiRetryButton,
} from '../Home/styledComponents'

import {
  SavedVideosBg,
  HeadingCard,
  SavedIconContainer,
  SaveHeading,
} from '../SavedVideos/styledComponents'

import {GameIcon, GamingContainer} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'LOADER',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingData: [],
    apiSelectedConstant: apiConstants.initial,
  }

  componentDidMount() {
    this.getApi()
  }

  onSuccessApi = fetchedData => ({
    total: fetchedData.total,
    videos: fetchedData.videos.map(eachVideo => ({
      id: eachVideo.id,
      title: eachVideo.title,
      thumbnailUrl: eachVideo.thumbnail_url,
      viewCount: eachVideo.view_count,
    })),
  })

  getApi = async () => {
    this.setState({apiSelectedConstant: apiConstants.inProgress})
    const jwt = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming/'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = this.onSuccessApi(fetchedData)
      this.setState({
        apiSelectedConstant: apiConstants.success,
        trendingData: updatedData.videos,
      })
    } else {
      this.setState({apiSelectedConstant: apiConstants.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureJsx = isBrighterTheme => (
    <ApiFailureView>
      <ApiFailureImg
        src={`${
          isBrighterTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }`}
        alt="failure view"
      />
      <ApiFailureHead isBrighterTheme={isBrighterTheme}>
        Oops! Something Went Wrong
      </ApiFailureHead>
      <ApiFailurePara isBrighterTheme={isBrighterTheme}>
        We are having some trouble to complete your request. <br /> Please try
        again.
      </ApiFailurePara>
      <ApiRetryButton type="button" onClick={this.searchOnClick}>
        Retry
      </ApiRetryButton>
    </ApiFailureView>
  )

  renderSuccessJsx = isBrighterTheme => {
    const {trendingData} = this.state

    return (
      <>
        <HeadingCard isBrighterTheme={isBrighterTheme}>
          <SavedIconContainer isBrighterTheme={isBrighterTheme}>
            <GameIcon />
          </SavedIconContainer>
          <SaveHeading isBrighterTheme={isBrighterTheme}>Gaming</SaveHeading>
        </HeadingCard>
        <GamingContainer isBrighterTheme={isBrighterTheme}>
          {trendingData.map(eachSavedVideo => (
            <GameVideoItem
              key={eachSavedVideo.id}
              eachSavedVideo={eachSavedVideo}
            />
          ))}
        </GamingContainer>
      </>
    )
  }

  renderAsPerApiResult = isBrighterTheme => {
    const {apiSelectedConstant} = this.state

    switch (apiSelectedConstant) {
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureJsx(isBrighterTheme)
      case apiConstants.success:
        return this.renderSuccessJsx(isBrighterTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {themeValue => {
          const {isBrighterTheme} = themeValue
          const {trendingData} = this.state
          return (
            <SavedVideosBg
              listOfSavedVideos={trendingData}
              isBrighterTheme={isBrighterTheme}
            >
              {this.renderAsPerApiResult(isBrighterTheme)}
            </SavedVideosBg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
