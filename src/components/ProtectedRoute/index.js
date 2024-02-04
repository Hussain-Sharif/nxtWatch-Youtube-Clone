import {Redirect, Route} from 'react-router-dom'
import styled from 'styled-components'
import Cookies from 'js-cookie'

import SideBar from '../SideBar'
// import Footer from '../Footer'
import Header from '../Header'

// Styles For Components
// const FooterComponentSmallSelection = styled.div`
//   width: 100%;

//   display: none;
//   @media screen and (max-width: 768px) {
//     display: block;

//     background-color: transparent;
//     z-index: 1000;
//   }
// `

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

const ProtectedRoute = props => {
  const {onClickToggleNavBar, isSideBarOpened} = props
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header
        isSideBarOpened={isSideBarOpened}
        onClickToggleNavBar={onClickToggleNavBar}
      />
      <MainSection>
        {isSideBarOpened ? (
          <SideBarSelectionAllDevices>
            {' '}
            <SideBar isSideBarOpened={isSideBarOpened} />
          </SideBarSelectionAllDevices>
        ) : null}
        <Route {...props} />
        {/* {isSideBarOpened ? (
          <FooterComponentSmallSelection>
            <Footer />{' '}
          </FooterComponentSmallSelection>
        ) : null} */}
      </MainSection>
    </>
  )
}

export default ProtectedRoute
