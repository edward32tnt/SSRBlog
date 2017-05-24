import Header from './Header'
import Titler from './Titler'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <Header />
      <Titler />
      {props.children}
    </div>
  )
}

export default Layout
