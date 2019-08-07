import Layout from './Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'

import { postNewRefPost } from '../redux/actions/refPost-actions'

class AddReferralForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refCode: null,
      refType: null,
    }
  }

  onHandleFormInput = () => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onHandlePostSubmit = (event) => {
    event.preventDefault()
    let postData = {
      refCode: this.state.refCode,
      refType: this.state.refType,
      user: this.props.user.email
    }
    this.props.onPostNewRefPost(postData, this.props.user.token)
  }

  render() {
    return(
      <div>
        {this.props.user ? 
          <form onSubmit={this.onHandlePostSubmit}>
            <h1>Add your referral code</h1>
            <input onChange={this.onHandleFormInput} name="refCode" placeholder="Refferal Code" type="text"/>
            <input onChange={this.onHandleFormInput} name="refType" placeholder="Refferal Type" type="text" />
            <button type="submit">Post refferal code</button>
          </form>
        :
          <h2>Please login to add refferal codes</h2>
        }
      </div>
    )}
}

const userSelector = createSelector(
  state => state.user,
  user => user
)

const mapStateToProps = createSelector(
  userSelector,
  (user) => ({
    user
  })
);

const mapActionsToProps = {
  onPostNewRefPost: postNewRefPost
}

export default Layout(connect(mapStateToProps, mapActionsToProps)(AddReferralForm))