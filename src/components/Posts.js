import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PostForm from './Postform';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
       //when it recieve a new property this method will run 
       if(nextProps.newPost) {
           this.props.posts.unshift(nextProps.newPost);
       }
    }

    //we no longer need the constructor anymore because we don't need the state, all that we will be stored in the store

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    //componenetWillMount is no longer needed as well when using redux, we cut the fetch request and will paste it into postReducers file.

    // componentWillMount() {
    //     //this will run right away win the component mounts
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({posts: data}));
    // }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ));
        return (
            <div>
                <PostForm />
                <hr />
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

//maps state to props: we can get the state from redux and map it to properities of the component and use it inside of our component

const mapStateToProps = state => ({
    //we use posts here because that is the name that we used in our reducer, so it can be called whatever you want 
    posts: state.posts.items,
    newPost: state.posts.item
});



export default connect(mapStateToProps, { fetchPosts })(Posts);
