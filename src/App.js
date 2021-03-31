import React, {Component} from 'react';
import './App.scss';
import AddPost from './components/posts/addPost/addPost'
import PostList from './components/posts/PostList/PostList'
import {connect} from 'react-redux'
import {
  ADD_POST,
  DELETE_POST
} from './features/posts/postReducer';





class App extends Component {
  constructor(){
    super();
    this.state = {
      postList: [
        {
          message: "Default Post 1",
          comment: ""
        }
      ]
    }
  }



  saveNewPost = (newPost) => {
    this.setState((prevState) => {
      const postList = prevState.postList.concat(newPost)
      return {
          postList
      }
  },() =>
    this.props.dispatch(ADD_POST(this.state.postList, newPost)));
  }

  deletePost = (toDelete) => {
    this.setState((prevState) => {
      const postList = prevState.postList.filter(el => el !== toDelete);
      return {
          postList
      }
  },() =>
      this.props.dispatch(DELETE_POST(this.state.postList, this.state.postList.indexOf(toDelete))));
  }

  addComment = (post, comment) => {
    let elemIndex = this.state.postList.indexOf(post);
    let items = [...this.state.postList];
    let item = {...items[elemIndex]};
    item.comment = comment;  
    items[elemIndex] = item;
    this.setState((prevState) => ({
      postList: items
    }));
  }

  render(){
    return (
      <div className="App">
          <div>
            <div className="grid-position">
              <div>
                <AddPost onSave={this.saveNewPost} />
              </div>
              <div>
                <PostList posts={this.state.postList} onDelete={this.deletePost} onAddComment={this.addComment} />
              </div>
            </div>
          </div>

      </div>
    );
  }

}


export default connect(null)(App);
