import React, { Component } from 'react'

class addComment extends Component {

    onCommentSubmit = (e) => {
        e.preventDefault();
        this.props.onCommentSubmit(e.target.postComment.value);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onCommentSubmit}>   
                    <div>
                        <label htmlFor="postMessage">Add comment</label>
                    </div>
                    <div>
                        <textarea required name="postComment" id="postComment" placeholder="Type Comment"/>
                    </div>
                    <div>
                     <button type="submit">Post Comment</button>
                    </div> 
                </form>
            </div>
        );
    }
}

export default addComment;