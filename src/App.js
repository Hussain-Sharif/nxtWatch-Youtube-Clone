import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './contexts/ThemeContext'
import SavedVideosContext from './contexts/SavedVideosContext'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
class App extends Component {
  state = {
    isBrighterTheme: true,
    isSideBarOpened: false,

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
    const {location} = this.props
    const {isBrighterTheme, isSideBarOpened, listOfSavedVideos} = this.state
    console.log('In App.js=>', {
      isBrighterTheme,
      listOfSavedVideos,
      location,
    })
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
          <Switch>
            <Route exact path="/login" component={Login} />

            <ProtectedRoute
              isSideBarOpened={isSideBarOpened}
              onClickToggleNavBar={this.onClickToggleNavBar}
              exact
              path="/"
              component={Home}
            />

            <ProtectedRoute
              isSideBarOpened={isSideBarOpened}
              onClickToggleNavBar={this.onClickToggleNavBar}
              exact
              path="/trending"
              component={Trending}
            />
            <ProtectedRoute
              isSideBarOpened={isSideBarOpened}
              onClickToggleNavBar={this.onClickToggleNavBar}
              exact
              path="/gaming"
              component={Gaming}
            />
            <ProtectedRoute
              isSideBarOpened={isSideBarOpened}
              onClickToggleNavBar={this.onClickToggleNavBar}
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              isSideBarOpened={isSideBarOpened}
              onClickToggleNavBar={this.onClickToggleNavBar}
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeContext.Provider>
      </SavedVideosContext.Provider>
    )
  }
}

export default App
