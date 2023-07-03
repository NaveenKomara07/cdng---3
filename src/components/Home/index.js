import './index.css'

import Header from '../Header'

import LogoutButton from '../LogoutButton'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home