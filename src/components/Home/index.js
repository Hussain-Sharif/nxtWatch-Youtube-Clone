import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ThemeContext from '../../contexts/ThemeContext'
import Banner from '../Banner'

import HomeVideosContainer from '../HomeVideosContainer'

import {
  HomeDisplay,
  SearchInput,
  SearchDiv,
  SearchButton,
  SearchIcon,
  ApiRenderingJsx,
  ApiFailureView,
  ApiFailureHead,
  ApiFailurePara,
  ApiFailureImg,
  ApiRetryButton,
} from './styledComponents'

const apiProcessConstants = {
  initial: 'INITIAL',
  inProgress: 'LOADER',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiProcessIs: apiProcessConstants.initial,
    apiData: null,
    inputSearch: '',
  }

  // API Call<--

  componentDidMount() {
    this.getApi()
  }

  onSuccessApi = fetchedData => ({
    total: fetchedData.total,
    videos: fetchedData.videos.map(eachVideo => ({
      id: eachVideo.id,
      title: eachVideo.title,
      thumbnailUrl: eachVideo.thumbnail_url,
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      viewCount: eachVideo.view_count,
      publishedAt: eachVideo.published_at,
    })),
  })

  getApi = async () => {
    this.setState({apiProcessIs: apiProcessConstants.inProgress})
    const {inputSearch} = this.state
    const jwt = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${inputSearch}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    const response = await fetch(apiUrl, options)
    console.log('Home Route Response: ', response.ok)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log('In Home Route Fetched DATA: ', {fetchedData})
      const updatedData = this.onSuccessApi(fetchedData)
      console.log('In Home Route Updated Fetched DATA: ', {updatedData})
      this.setState({
        apiData: updatedData.videos,
        apiProcessIs: apiProcessConstants.success,
      })
    } else {
      this.setState({apiProcessIs: apiProcessConstants.failure})
    }
  }

  // Search Operation<--

  inputSearchChanges = event => {
    this.setState({inputSearch: event.target.value})
  }

  searchOnClick = () => {
    this.getApi()
  }

  // API Result JSX

  renderLoaderJsx = () => (
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

  renderEmptyDataApi = isBrighterTheme => (
    <ApiFailureView>
      <ApiFailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <ApiFailureHead isBrighterTheme={isBrighterTheme}>
        No Search results found
      </ApiFailureHead>
      <ApiFailurePara isBrighterTheme={isBrighterTheme}>
        Try different key words or remove search filter
      </ApiFailurePara>
      <ApiRetryButton type="button" onClick={this.searchOnClick}>
        Retry
      </ApiRetryButton>
    </ApiFailureView>
  )

  renderSuccessJsx = isBrighterTheme => {
    const {apiData} = this.state
    if (apiData.length === 0) {
      return this.renderEmptyDataApi(isBrighterTheme)
    }
    return <HomeVideosContainer apiData={apiData} />
  }

  renderApiResultJsx = isBrighterTheme => {
    const {apiProcessIs} = this.state
    switch (apiProcessIs) {
      case apiProcessConstants.inProgress:
        return this.renderLoaderJsx()
      case apiProcessConstants.failure:
        return this.renderFailureJsx(isBrighterTheme)
      case apiProcessConstants.success:
        return this.renderSuccessJsx(isBrighterTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isBrighterTheme} = value
          const {
            apiProcessIs,
            apiData,
            inputSearch,
            //  isSideBarOpened,
            // isItemSelected,
          } = this.state
          console.log('In Home Route: ', {
            isBrighterTheme,
            apiProcessIs,
            apiData,
            inputSearch,
            //    isSideBarOpened,
            //  isItemSelected,
          })
          return (
            <>
              <HomeDisplay isBrighterTheme={isBrighterTheme} data-testid="home">
                <Banner />
                <SearchDiv isBrighterTheme={isBrighterTheme}>
                  <SearchInput
                    onChange={this.inputSearchChanges}
                    value={inputSearch}
                    isBrighterTheme={isBrighterTheme}
                    placeholder="Search"
                  />
                  <SearchButton
                    isBrighterTheme={isBrighterTheme}
                    type="button"
                    onClick={this.searchOnClick}
                  >
                    <SearchIcon isBrighterTheme={isBrighterTheme} />
                  </SearchButton>
                </SearchDiv>

                <ApiRenderingJsx>
                  {this.renderApiResultJsx(isBrighterTheme)}
                </ApiRenderingJsx>
              </HomeDisplay>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
