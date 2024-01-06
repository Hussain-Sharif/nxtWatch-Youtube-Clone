import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './contexts/ThemeContext'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

// Replace your code here
class App extends Component {
  state = {
    isBrighterTheme: true,
  }

  changeTheme = () => {
    this.setState(prev => ({isBrighterTheme: !prev.isBrighterTheme}))
  }

  render() {
    const {isBrighterTheme} = this.state
    console.log('In App.js=>', {isBrighterTheme})
    return (
      <ThemeContext.Provider
        value={{isBrighterTheme, changeTheme: this.changeTheme}}
      >
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
      </ThemeContext.Provider>
    )
  }
}

export default App
