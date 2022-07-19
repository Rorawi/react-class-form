import React, { Component  } from 'react';


class ClassForm extends Component {
constructor(){
    super();
    this.state = {
    name:"",
    email:"",
    password:""
    }
}


  handleName = (event) => {
    this.setState(
        {name:event.target.value}
        );
  }

  handleEmail = (event) => {
    this.setState(
        {email:event.target.value}
        );
  }

  handlePassword = (event) => {
    this.setState(
        {password:event.target.value}
        );
  }


  handleSubmit = (event) => {
   event.preventDefault();
   console.log({
    Name:this.state.name,
    Email:this.state.email,
    Password:this.state.password
   }
   );
  }

  


    render() { 
        return ( 
            <>
            <form onSubmit={this.handleSubmit} id="form">
            <label htmlFor="name">Name</label>
       <input type="text" name="name" onChange={this.handleName} value={this.state.name}id="name"/><br/>
       <label htmlFor="name">Email</label>
       <input type="text" name="name" onChange={this.handleEmail} value={this.state.email} id="email"/><br/>

       <label htmlFor="name">Password</label>
       <input type="password" name="name" onChange={this.handlePassword} value={this.state.password}id="password"/><br/>

       <button onChange={this.handleSubmit}>Submit</button>
       </form>
            </>
         );
    }
}
 
export default ClassForm;