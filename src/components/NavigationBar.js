import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { withRouter } from "react-router";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    width: 100vw!important;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;




class NavigationBar extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: ''
    }

    this.textInput = React.createRef();
  }
  

    //TODO: 
    //-configure search button 
    //-wire up API 
    //-create a search page 

    handleChange() {
      /* 3. Get Ref Value here (or anywhere in the code!) */
      this.state.searchValue = this.textInput.current.value;
   }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('yay');
        console.log(this.state.searchValue);
        this.props.history.push({
          pathname: '/searchresults',
          searchValue: this.state.searchValue
        });
        
    }

    render() {
        return (
            <Styles>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Sweet Recipes</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/login">Login</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/createrecipes">Create Recipes</Link>
                </Nav.Link>
            </Nav>
            <Form inline onSubmit={this.onSubmit}> 
                <FormControl 
                  type="text" 
                  name="search"
                  placeholder="Search" 
                  className="mr-sm-2" 
                  ref={this.textInput}
                  onChange={() => this.handleChange()}
                />
                <Button variant="outline-info"
                    type="submit"
                >Search</Button>
            </Form>
            </Navbar>
          </Styles>
        );
    }
}

export default withRouter(NavigationBar);



//-webkit-font-smoothing: antialiased;
// font-kerning: normal;
// font-family: Charter,Georgia,Times,Serif;
// font-size: 1.1875rem;
// line-height: 1.6;
// color: #343434;
// box-sizing: border-box;
// width: 20rem;
// max-width: 20rem;
// background-color: #c6e9f0;
// position: fixed;
// top: 0;
// height: 100%;
// overflow-y: scroll;
// overflow-x: hidden;
// z-index: 5999998;
// transition: transform .2s linear;
// display: flex;
// flex-direction: column;
// outline: 0;
// transform: translateX(0);