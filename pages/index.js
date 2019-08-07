import Layout from '../components/Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'

import { getRefPosts, updateSelectedRefPost } from '../redux/actions/refPost-actions'
import Login from '../components/Login'
import AddReferralForm from '../components/AddReferralForm'
import '../styles/style.scss'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onGetRefPosts()
  }

  render() {
    return(
      <div>
        <h1>Refferal codes page</h1>
        {this.props.refPosts &&
          this.props.refPosts.map(post => {
            return (
              <div>
                {post.refCode}
                <span> By </span>
                {post.user}
              </div>
            )
          })}
          <Login />
          <AddReferralForm />
      </div>
    )
  }
}

const refPostsSelector = createSelector(
  state => state.refPosts,
  refPosts => refPosts
)

const mapStateToProps = createSelector(
  refPostsSelector,
  (refPosts) => ({
    refPosts
  })
);

const mapActionsToProps = {
  onGetRefPosts: getRefPosts,
  onUpdateSelectedRefPost: updateSelectedRefPost,
}

export default Layout(connect(mapStateToProps, mapActionsToProps)(Index))