import React, {Component} from 'react';

class AddPost extends Component {
    constructor(){
        super();
    }

    onPostSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            message: e.target.postMessage.value,
            comment: ''
        }
        this.props.onSave(newPost);
        document.getElementsByName('postMessage')[0].value = ""
    }



    render(){
        return (
            <div>
                <h1>Add New Post</h1>
                <form onSubmit={this.onPostSubmit}>
                    <div className="">
                        <div>
                            <label htmlFor="postMessage">Enter message to be displayed</label>
                        </div>
                        <div>
                            <textarea required className="" rows="8" cols="40" name="postMessage" id="postMessage" placeholder="Type post message"/>
                        </div>
                        <div>
                            <button type="submit" className="">Add Post</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}




export default AddPost;