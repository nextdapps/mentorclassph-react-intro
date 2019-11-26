import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// import { Nav, Footer } from './components'

/**
 * STATEFUL COMPONENT
 */

class App extends Component {

  state = {
    user: {
      firstname: 'Frank',
      lastname: 'Cuadrillero',
      age: 18
    },
    users: [
      { firstname: 'Frank' },
      { firstname: 'Jepoy' },
      { firstname: 'Francis' },
      { firstname: 'Wilven' },
      { firstname: 'John' }
    ],
    showContent: false
  }

  constructor(props) {
    super(props)
    this.state.user.firstname = 'Jepoy'
  }

  onChangeHandler = (e) => {
    let { value, name } = e.target
    console.log(name, value)
    let { user } = this.state
    user[name] = value
    this.setState({ user })
  }

  renderContent = () => {
    if (this.state.showContent) {
      return <ContentA />
    } else {
      return <ContentB />
    }
  }

  render() {

    let { user, users } = this.state

    let { firstname, lastname, age } = user

    return (
      <div className="App">
        <Nav user={this.state.user}>
          <h1>React JS</h1>
        </Nav>
        <h1>Hello World</h1>
        <p>Welcome to Intro to React</p>
        <p>{firstname} {lastname} {age}</p>
        <div>
          <input type="text" name="firstname" value={firstname} onChange={this.onChangeHandler} />
          <input type="text" name="lastname" value={lastname} onChange={this.onChangeHandler} />
        </div>
        <button onClick={() => this.setState({ showContent: !this.state.showContent })}>
          Toggle Content
        </button>

        <div>
          {users.map((u, key) => <UserCard user={u} key={`user-${key}`} />)}
        </div>

        {this.renderContent()}
        <Footer />
      </div>
    );
  }
}

function UserCard({ user }) {
  return (
    <div>{user.firstname}</div>
  )
}

function ContentA() {
  return (
    <div>
      ContentA
    </div>
  )
}

function ContentB() {
  return (
    <div style={{ padding: '10px', backgroundColor: 'gray' }}>
      ContentB
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p>Welcome to Intro to React</p>
//     </div>
//   );
// }

export default App;
