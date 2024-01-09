import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies  from 'js-cookie'
import Header from '../Header'
import ThemeContext from '../../contexts/ThemeContext'
import SideBar from '../SideBar'
import Banner from '../Banner'
import Footer from '../Footer'

import {
  HomeBg,
  HomeDisplay,
  SearchInput,
  SearchDiv,
  SearchButton,
} from './styledComponents'
import { Options } from 'eslint-webpack-plugin'

const apiProcessConstants = {
  intial: 'INTITIAL',
  inProgress: 'LOADER',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isProcess: apiProcessConstants.intial,
    apiData: null,
    inputSearch: '',
  }

  componentDidMount(){
    this.getApi()
  }

  getApi=async()=>{
    this.setState({isProcess:apiProcessConstants.inProgress})
    const {inputSearch}=this.state
    const jwt=Cookies.get("jwt_token")
    const apiUrl={`https://apis.ccbp.in/videos/all?search=${inputSearch}`}
    const options={
        method:"GET",
        headers:{
            Authorization:`Bearer ${jwt}`
        }
    }
    const response=await fetch(apiUrl,options)
    if(response.ok===true){
        const fetchData=await response.json()
        console.log("In Home Route Fetched DATA: ",{fetchData})
        const updatedData=this.onSuccessApi(fetchData)
        this.setState({apiData:updatedData,isProcess:apiProcessConstants.success})
    }else{
        this.setState({isProcess:apiProcessConstants.failure})
    }
  }

  searchOnClick = () => {}

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isBrighterTheme} = value
          const {isProcess,apiData,inputSearch}=this.state
          console.log('In Home Route: ', {isBrighterTheme,isProcess,apiData,inputSearch})
          return (
            <>
              <Header />
              <HomeBg>
                <SideBar />
                <HomeDisplay data-testid="home">
                  <Banner />
                  <SearchDiv>
                    <SearchInput />
                    <SearchButton type="button" onClick={this.searchOnClick}>
                      <BsSearch />
                    </SearchButton>
                  </SearchDiv>
                </HomeDisplay>
                <Footer />
              </HomeBg>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
