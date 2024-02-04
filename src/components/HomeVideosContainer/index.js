import EachHomeVideoItem from '../EachHomeVideoItem'
import {VideoContainer} from './styledComponents'

const HomeVideosContainer = props => {
  const {apiData} = props

  return (
    <VideoContainer>
      {apiData.map(eachVideoItem => (
        <EachHomeVideoItem
          key={eachVideoItem.id}
          eachVideoItem={eachVideoItem}
        />
      ))}
    </VideoContainer>
  )
}

export default HomeVideosContainer
