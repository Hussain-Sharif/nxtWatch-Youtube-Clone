import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import styled from 'styled-components'

import ThemeContext from './contexts/ThemeContext'
import SavedVideosContext from './contexts/SavedVideosContext'

import './App.css'
import SideBar from './components/SideBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

// Styles For Components
const FooterComponentSmallSelection = styled.div`
  width: 100%;

  display: none;
  @media screen and (max-width: 768px) {
    display: block;

    background-color: transparent;
    z-index: 1000;
  }
`

const MainSection = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 90vh;
  //   border: blue solid 2px;
  position: fixed;
  @media screen and (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
`

const SideBarSelectionAllDevices = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

const listOfRoutes=[
    {id:"home"},
    {id:"trending"},
    {id:"gaming"},
    {id:"saved-videos"},
]

// Replace your code here
class App extends Component {
  state = {
    isBrighterTheme: true,
    isSideBarOpened: false,
    selectedRouteId:listOfRoutes[0].id
    // isItemSelected: listOfRoutes[0].id
    listOfSavedVideos: [],
  }

  saveVideos = videoData => {
    this.setState(prev => ({
      listOfSavedVideos: [...prev.listOfSavedVideos, videoData],
    }))
  }

  unSaveVideos = videoData => {
    this.setState(prev => {
      const {listOfSavedVideos} = prev
      const updatedList = listOfSavedVideos.filter(
        eachVideo => eachVideo.id !== videoData.id,
      )
      return {listOfSavedVideos: updatedList}
    })
  }

  // NavToggling Functions<--

  onClickToggleNavBar = () => {
    this.setState(prev => ({isSideBarOpened: !prev.isSideBarOpened}))
  }

  // Selected NavLink

  //   changeSelectedItem = (event,matchOfSideBar) => {
  //     const clickedItemId = event.target.innerText
  //     console.log('NavITEM Selected: ', clickedItemId)
  //     this.setState(prev => {
  //       const {isItemSelected} = prev
  //       const updatedSelection = isItemSelected.map(eachItem => {
  //         if (eachItem.id === clickedItemId) {
  //           return {...eachItem, value:
  //             true}
  //         }
  //         return {...eachItem, value: false}
  //       })
  //       return {isItemSelected: updatedSelection}
  //     })
  //   }

  changeTheme = () => {
    this.setState(prev => ({isBrighterTheme: !prev.isBrighterTheme}))
  }

  render() {
    const {isBrighterTheme, isSideBarOpened,selectedRouteId, listOfSavedVideos} = this.state
    console.log('In App.js=>', {isBrighterTheme,selectedRouteId, listOfSavedVideos})
    return (
      <SavedVideosContext.Provider
        value={{
          listOfSavedVideos,
          saveVideos: this.saveVideos,
          unSaveVideos: this.unSaveVideos,
        }}
      >
        <ThemeContext.Provider
          value={{isBrighterTheme, changeTheme: this.changeTheme}}
        >
          <Header
            isSideBarOpened={isSideBarOpened}
            onClickToggleNavBar={this.onClickToggleNavBar}
          />
          <MainSection>
            {isSideBarOpened ? (
              <SideBarSelectionAllDevices>
                {' '}
                <SideBar selectedRouteId={selectedRouteId} isSideBarOpened={isSideBarOpened} />
              </SideBarSelectionAllDevices>
            ) : null}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/trending" component={Trending} />
              <Route exact path="/gaming" component={Gaming} />
              <Route exact path="/videos/:id" component={VideoItemDetails} />
              <Route exact path="/saved-videos" component={SavedVideos} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>

            {isSideBarOpened ? (
              <FooterComponentSmallSelection>
                <Footer />{' '}
              </FooterComponentSmallSelection>
            ) : null}
          </MainSection>
        </ThemeContext.Provider>
      </SavedVideosContext.Provider>
    )
  }
}

export default App
