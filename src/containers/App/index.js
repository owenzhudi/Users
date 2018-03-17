import React, { Component } from 'react';
import UserTable from '../../components/UserTable';
import NewUser from '../../components/NewUser';
import SearchBar from '../../components/SearchBar';
import Pagination from '../Pagination';
import './App.css';
import fakeUsers from '../../fake_users'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      firstName: '',
      lastName: '',
      password: '',
      repeat: '',
      title: '',
      sex: '',
      age: '',
      userWillCreate: false,
      curId: 0,
      curPageIndex: 0,
      input: '',
      passwordsSame: true,
      curEditId: null,
      pageOfUsers: []
    };
  }

  handleClick = () => {
    let { userWillCreate } = this.state;
    if (!userWillCreate) {
      userWillCreate = true;
    }
    this.setState({ userWillCreate });
  };

  onFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  onLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onRepeatChange = e => {
    this.setState({ repeat: e.target.value });
  };

  onTitleChange = e => {
    this.setState({ title: e.target.value })
  };

  onSexChange = e => {
    this.setState({ sex: e.target.value });
  };

  onAgeChange = e => {
    this.setState({ age: e.target.value });
  };

  onSearchChange = e => {
    this.setState({ input: e.target.value });
  };

  handleEdit = id => {
    this.setState({ curEditId: id, userWillCreate: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { curId, firstName, lastName, password, repeat, users, title, sex, age, curEditId } = this.state;
    if (password === repeat) {
      if (curEditId === null) {
        const newUser = {
          id: curId,
          firstName,
          lastName,
          password,
          title,
          sex,
          age
        };
        const newUsers = [...users, newUser];
        this.setState({
          curId: curId + 1,
          users: newUsers
        });
      } else {
        const editUser = {
          id: curEditId,
          firstName,
          lastName,
          password,
          title,
          sex,
          age
        };
        let index = 0;
        for (let i = 0; i < users.length; i++) {
          if (users[i].id === curEditId) {
            index = i;
            break;
          }
        }
        const newUsers = [...users.slice(0, index), editUser, ...users.slice(index + 1)];
        console.log('new users: ', newUsers);
        this.setState({users: newUsers})
      }
      this.setState({
        firstName: '',
        lastName: '',
        password: '',
        repeat: '',
        passwordsSame: true,
        title: '',
        sex: '',
        age: '',
        userWillCreate: false,
        curEditId: null
      });
    } else {
      this.setState({
        passwordsSame: false,
        password: '',
        repeat: ''
      });
    }
  };

  handleSort = (e, key) => {
    e.preventDefault();
    const pageOfUsers = this.state.pageOfUsers;
    pageOfUsers.sort((user1, user2) => {
      const val1 = user1[key];
      const val2 = user2[key];
      if (val1 === val2) {
        return 0;
      }
      return val1 < val2 ? -1 : 1;
    });
    this.setState({ pageOfUsers });
  };

  handleDelete = id => {
    let users = this.state.users;
    let index = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        index = i;
        break;
      }
    }
    const newUsers = [...users.slice(0, index), ...users.slice(index + 1)];
    this.setState({users: newUsers});
  };

  onChangePage = pageOfUsers => {
    this.setState({pageOfUsers});
  };

  componentDidMount() {
    this.setState({ users: fakeUsers });
  }

  render() {
    let filteredUsers = this.state.pageOfUsers;
    let input = this.state.input;
    if (input !== '') {
      filteredUsers = filteredUsers.filter(user => {
        for (let key in user) {
          if (typeof user[key] === 'string' && key !== 'password') {
            const item = user[key].toLowerCase();
            input = input.toLowerCase();
            if (item.indexOf(input) === 0) {
              return true;
            }
          }
        }
        return false;
      });
    }
    return (
      <div className="App">
        <h1>Users</h1>
        <SearchBar
          input={this.state.input}
          onSearchChange={this.onSearchChange}
        />
        <UserTable
          users={filteredUsers}
          handleSort={this.handleSort}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
        <Pagination 
          items={this.state.users}
          initialPage={1}
          onChangePage={this.onChangePage}
        />
        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Create New User</button>
        <div>{this.state.userWillCreate ? (
          <NewUser
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            password={this.state.password}
            repeat={this.state.repeat}
            title={this.state.title}
            sex={this.state.sex}
            age={this.state.age}
            onFirstNameChange={this.onFirstNameChange}
            onLastNameChange={this.onLastNameChange}
            onPasswordChange={this.onPasswordChange}
            onRepeatChange={this.onRepeatChange}
            onTitleChange={this.onTitleChange}
            onSexChange={this.onSexChange}
            onAgeChange={this.onAgeChange}
            handleSubmit={this.handleSubmit}
            passwordsSame={this.state.passwordsSame}
            curEditId={this.state.curEditId}
          />) : ''}
        </div>
      </div>
    );
  }
}

export default App;
