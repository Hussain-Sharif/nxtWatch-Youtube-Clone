import ThemeContext from '../../contexts/ThemeContext'
import {
  PopupBg,
  PopupHead,
  ButtonsContainer,
  CancelButton,
  LogOutButton,
} from './styledComponents'

const PopupDesign = props => {
  const {close, getLogOut} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isBrighterTheme} = value

        const LoggingOut = () => {
          getLogOut()
        }

        return (
          <PopupBg isBrighterTheme={isBrighterTheme}>
            <PopupHead isBrighterTheme={isBrighterTheme}>
              Are you sure you want to logout?
            </PopupHead>
            <ButtonsContainer>
              <CancelButton
                isBrighterTheme={isBrighterTheme}
                type="button"
                onClick={close}
              >
                Cancel
              </CancelButton>
              <LogOutButton type="button" onClick={LoggingOut}>
                Confirm
              </LogOutButton>
            </ButtonsContainer>
          </PopupBg>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default PopupDesign
