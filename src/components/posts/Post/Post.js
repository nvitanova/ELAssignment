import React, {Component} from 'react';
import AddComment from '../../comments/addComment'


class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentForm: false,
            commentContent: this.props.post.comment === '' ? false : true
        }
    }

    deletePost = () => {
        this.props.onDelete(this.props.post)
    }

    handleComments = () => {
        if (this.state.commentForm === false && this.state.commentContent === false) {
            this.setState((prevState) => ({
                commentForm: true
            }));
        } else {
            this.setState((prevState) => ({
                commentForm: false
            }));
        }
    }

    submitComment = (comment) => {
        this.props.onAddComment(this.props.post, comment);
        this.setState((prevState) => ({
            commentForm: false,
            commentContent: true
        }));
    }



    render(){
        return (
            <div>
                <div>
                    <p>{this.props.post.message}</p>
                    <hr />
                    <p>{this.props.post.comment}</p>
                    <div>
                        <hr />
                        {!this.state.commentContent ? 
                            <button type="button" onClick={this.handleComments}>
                                    Comment
                            </button>
                        : ""}
                        
                        <button type="button" onClick={this.deletePost}>
                                    Delete
                                </button>
                    </div>
                    {this.state.commentForm ?                       
                        <AddComment onCommentSubmit={this.submitComment} />
                         : "" }
                </div>
            </div>
        )
    }
}

export default Post;