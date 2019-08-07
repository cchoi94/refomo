import Layout from './Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'

import { loginUser, signupUser, logoutUser } from '../redux/actions/user-actions'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      formType: 'login'
    }
  }

  onHandleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onHandleLogin = (event) => {
    event.preventDefault()
    this.props.onLoginUser(this.state.email, this.state.password);
  }
  
  onHandleSignup = (event) => {
    event.preventDefault()
    this.props.onSignupUser(this.state.email, this.state.password);
  }

  changeFormToSignUp = () => {
    this.setState({
      formType: 'signup'
    })
  }

  changeFormToLogin = () => {
    this.setState({
      formType: 'login'
    })
  }

  test = () => {
    console.log(this.props)
  }

  render() {
    return(
      <div>
        {this.state.formType === 'login' &&
          <div>
            <form onSubmit={this.onHandleLogin}>
              <h1>Login Form</h1>
              <input onChange={this.onHandleInputChange} placeholder="Email" name="email" type="email"/>
              <input onChange={this.onHandleInputChange} placeholder="password" name="password" type="password"/>
              <button type="submit">Login</button>
              <button onClick={this.changeFormToSignUp}>Change to Signup</button>
            </form>
              <button onClick={this.props.onLogoutUser}>Logout</button>
          </div>
        }
        {this.state.formType === 'signup' &&
          <div>
            <form onSubmit={this.onHandleSignup}>
              <h1>Signup Form</h1>
              <input onChange={this.onHandleInputChange} placeholder="Email" name="email" type="email"/>
              <input onChange={this.onHandleInputChange} placeholder="password" name="password" type="password"/>
              <button type="submit">Signup</button>
              <button onClick={this.changeFormToLogin}>Change to Login</button>
            </form>
              <button onClick={this.props.onLogoutUser}>Logout</button>
          </div>
        }
        <button onClick={this.test}>test</button>
      </div>
    )
  }
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
  onLoginUser: loginUser,
  onSignupUser: signupUser,
  onLogoutUser: logoutUser
}

export default Layout(connect(mapStateToProps, mapActionsToProps)(Login))