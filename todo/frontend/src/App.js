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
import ProjectForm from './components/ProjectForm';
import ToDoForm from './components/ToDoForm';

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

    createProject(name, creator) {
      const headers = this.get_headers()
      const data = {name: name, creator: creator}
      axios.post('http://127.0.0.1:8000/api/project/', data, {headers, headers})
          .then(response => {
              let new_project = response.data
              const creator = this.state.creator.filter((creator) => creator.id ===
              new_project.creator)[0]
              new_project.creator = creator
              this.setState({projects: [...this.state.projects, new_project]})
          }).catch(error => console.log(error))
    }

    createToDo(description, creator) {
      const headers = this.get_headers()
      const data = {description: description, creator: creator}
      axios.post('http://127.0.0.1:8000/api/to_do/', data, {headers, headers})
          .then(response => {
              let new_todo = response.data
              const creator = this.state.creator.filter((creator) => creator.id ===
              new_todo.creator)[0]
              new_todo.creator = creator
              this.setState({todos: [...this.state.todos, new_todo]})
          }).catch(error => console.log(error))
    }

    render() {
      return (
        <div>
          <BrowserRouter>
            <Route exact path='/' component={() => < MainMenu />} />
            <Route exact path='/users' component={() => <UserList users={this.state.users}/>} />
            <Route exact path='/projects' component={() => < ProjectList projects={this.state.projects} deleteProject={(id)=>this.deleteProject(id)}/>} />
            <Route exact path='/projects/create' component={() => < ProjectForm createProject={(name, creator)=>this.createProject(name, creator)}/>} />
            <Route exact path='/todos' component={() => < ToDoList todos={this.state.todos} deleteToDo={(id)=>this.deleteToDo(id)}/>} />
            <Route exact path='/todos/create' component={() => < ToDoForm createToDo={(description, creator)=>this.createToDo(description, creator)}/>} />
            < Foo />
          </BrowserRouter>
        </div>
      );
    };
}

export default App;
