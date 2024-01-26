import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import ThemeContext from '../../contexts/ThemeContext'
import Video from '../Video'
import ReactionSection from '../ReactionSection'
import VideoChannelDescription from '../VideoChannelDescription'
import {
  ApiFailureHead,
  ApiFailurePara,
  ApiFailureImg,
  ApiFailureView,
  ApiRenderingJsx,
  ApiRetryButton,
} from '../Home/styledComponents'

import {VideoDetailsBg} from './styledComponents'

const apiFetchingConstants = {
  initial: 'INITIAL',
  inProgress: 'LOADER',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    isApi: apiFetchingConstants.initial,
    dataFetched: null,
    trueIfLiked: null,
  }

  componentDidMount() {
    this.getDetailedVideoApi()
  }

  getDetailedVideoApi = async () => {
    // Setting Api State
    this.setState({isApi: apiFetchingConstants.inProgress})
    // Getting COOKIE
    const authToken = Cookies.get('jwt_token')
    // Getting params {id}
    const {match} = this.props
    const {params} = match
    const id = params
    // Call API
    const apiUrl = `https://apis.ccbp.in/videos/:${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = this.updatedFetchedData(fetchedData)
      this.setState({
        isApi: apiFetchingConstants.success,
        fetchedData: updatedData,
      })
    } else {
      this.setState({isApi: apiFetchingConstants.failure})
    }
  }

  searchOnClick = () => {
    this.getApi()
  }

  getFailureResponse = isBrighterTheme => (
    <ApiRenderingJsx>
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
    </ApiRenderingJsx>
  )

  updatedFetchedData = fetchedData => ({
    id: fetchedData.video_details.id,
    title: fetchedData.video_details.title,
    videoUrl: fetchedData.video_details.video_url,
    thumbnailUrl: fetchedData.video_details.thumbnail_url,
    channel: {
      name: fetchedData.video_details.channel.name,
      profileImageUrl: fetchedData.video_details.channel.profile_image_url,
      subscriberCount: fetchedData.video_details.channel.subscriber_count,
    },
    viewCount: fetchedData.video_details.view_count,
    publishedAt: fetchedData.video_details.published_at,
    description: fetchedData.video_details.description,
  })

  getSuccessResponse = () => {
    const {fetchedData, trueIfLiked} = this.state
    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = fetchedData

    // Formatting the Date from MM,D,YYYY to almost,over,about representing the Delta with respect to Current date
    const publishedDateJsFormatted = new Date(publishedAt)
    const publishedYear = publishedDateJsFormatted.getFullYear()
    const publishedDate = publishedDateJsFormatted.getDate()
    const publishedMonth = publishedDateJsFormatted.getMonth() + 1
    let formattedPublishedDate = formatDistanceToNow(
      new Date(publishedYear, publishedMonth, publishedDate),
    )
    if (formattedPublishedDate.split('almost ').length !== 1) {
      formattedPublishedDate = formattedPublishedDate.split('almost ')
    } else if (formattedPublishedDate.split('over ').length !== 1) {
      formattedPublishedDate = formattedPublishedDate.split('over ')
    } else if (formattedPublishedDate.split('about ').length !== 1) {
      formattedPublishedDate = formattedPublishedDate.split('about ')
    }

    return (
      <>
        <Video videoUrl={videoUrl} thumbnailUrl={thumbnailUrl} title={title} />
        <ReactionSection
          publishedAt={formattedPublishedDate[1]}
          viewCount={viewCount}
          trueIfLiked={trueIfLiked}
          id={id}
        />
        <VideoChannelDescription channel={channel} description={description} />
      </>
    )
  }

  getLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderDetails = isBrighterTheme => {
    const {isApi} = this.state

    switch (isApi) {
      case apiFetchingConstants.inProgress:
        return this.getLoader()
      case apiFetchingConstants.failure:
        return this.getFailureResponse(isBrighterTheme)
      case apiFetchingConstants.success:
        return this.getSuccessResponse()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Provider>
        {value => {
          const {isBrighterTheme} = value

          console.log(
            'In VideoItemDetails Component:',
            isBrighterTheme,
            this.state,
          )
          return (
            <VideoDetailsBg isBrighterTheme={isBrighterTheme}>
              {this.renderDetails(isBrighterTheme)}
            </VideoDetailsBg>
          )
        }}
      </ThemeContext.Provider>
    )
  }
}

export default VideoItemDetails
