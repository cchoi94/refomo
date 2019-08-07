import { Provider } from 'react-redux'
import store from '../redux/store'

const Layout = (Page) => {
  return (
    class PageLayout extends React.Component {
      render() {
        return (
          <Provider store={store}>
            <Page />
          </Provider>
        )
      }
    }
  )
}

export default Layout