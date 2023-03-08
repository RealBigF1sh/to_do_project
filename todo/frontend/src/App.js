import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import UserList from './components/Users';
import Foo from './components/Footer';
import MainMenu from './components/Menu';
import ProjectList from './components/Projects';
import ToDoList from './components/ToDo';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        'users': [],
        'projects' : [],
        'todos' : []
      }
    
    }

    componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/users/').then(response => {
        this.setState(
          {
            'users':response.data.results
        }
        )}).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/').then(response => {
        this.setState(
          {
            'projects':response.data.results
        }
        )}).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/to_do/').then(response => {
        this.setState(
          {
            'todos':response.data.results
        }
        )}).catch(error => console.log(error))

    }

    render() {
      return (
        <div>
            < MainMenu />
            < UserList users={this.state.users}/>
            < ProjectList projects={this.state.projects}/>
            < ToDoList todos={this.state.todos}/>
            < Foo />
        </div>
      );
    };
}

export default App;
