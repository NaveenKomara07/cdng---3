import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="logout-container">
      <button className="button-design-2" type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
