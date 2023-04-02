import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import UserList from './components/Users';
import Foo from './components/Footer';
import MainMenu from './components/Menu';
import ProjectList from './components/Projects';
import ToDoList from './components/ToDo';
import { BrowserRouter, Route } from "react-router-dom"

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

    deleteProject(id) {
      const headers = this.get_headers()
      axios.delete("http://127.0.0.1:8000/api/project/${id}", {headers})
          .then(response => {
              this.setState({projects: this.state.projects.filter((project)=>project.id !==id)})
          }).catch(error => console.log(error))
    }

    deleteToDo(id) {
      const headers = this.get_headers()
      axios.delete("http://127.0.0.1:8000/api/to_do/${id}", {headers})
          .then(response => {
              this.setState({todos: this.state.todos.filter((todo)=>todo.id !==id)})
          }).catch(error => console.log(error))
  }

    render() {
      return (
        <div>
          <BrowserRouter>
            <Route exact path='/' component={() => < MainMenu />} />
            <Route exact path='/users' component={() => <UserList users={this.state.users}/>} />
            <Route exact path='/projects' component={() => < ProjectList projects={this.state.projects} deleteProject={(id)=>this.deleteProject(id)}/>} />
            <Route exact path='/todos' component={() => < ToDoList todos={this.state.todos} deleteToDo={(id)=>this.deleteToDo(id)}/>} />
            < Foo />
          </BrowserRouter>
        </div>
      );
    };
}

export default App;
