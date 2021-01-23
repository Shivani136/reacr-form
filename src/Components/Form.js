import React, { Component } from 'react';
import './Form.css';
//import './App.css';

 class Form extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      firstname:"",
      lastname: "",
      address:"",
      age:"",
      rollno:""
    }
    this.handleSubmit =this.handleSubmit.bind(this)
}

firsthandler =(event) => {
this.setState({
  firstname: event.target.value
})
}
lasthandler =(event) => {
  this.setState({
    lastname: event.target.value
  })
  }
  addresshandler =(event) => {
    this.setState({
      address: event.target.value
    })
    }
    agehandler =(event) => {
      this.setState({
        age: event.target.value
      })
      }
      rollnohandler =(event) => {
        this.setState({
          rollno: event.target.value
        })
        }
  
        
  
        handleSubmit = (event) =>{
          alert(`${this.state.firstname} ${this.state.lastname} ${this.state.address} ${this.state.age} ${this.state.rollno} Registered Successfully !!!!`)
          console.log(this.state ,"hello");
          this.setState ({
            firstname:"",
            lastname: "",
            address:"",
            age:"",
            rollno:"",
          })
        
     event.preventDefualt()
        }

        render() {
          return (
              <div>
  
                  <form onSubmit={this.handleSubmit}>
                      <h1>User Registration</h1>
                      <label>FirstName :</label>
                       <input type="text" value={this.state.firstname} onChange={this.firsthandler} placeholder="FirstName..." /><br/><br></br>
                      <label>LastName :</label> 
                      <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br/><br></br>
                      <label>Address :</label>
                      <input type="text" value={this.state.addRess} onChange={this.addresshandler} placeholder="FirstName..." /><br/><br></br>
                      <label>Age :</label>
                       <input type="text" value={this.state.Age} onChange={this.agehandler} placeholder="age..." /><br/><br></br>
                      <label>Roll No :</label>
                       <input type="text" value={this.state.rollNo} onChange={this.rollnohandler} placeholder="roll no..." /><br/><br></br>
                      <input type="submit" value="Submit" />
                  </form>
  
              </div>
              
          )
      }
  }

 export default Form


