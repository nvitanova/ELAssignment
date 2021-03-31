import React, {Component} from 'react';
import Post from '../Post/Post'
import './PostList.scss'

const PostList = (props) => {


     return (
        <div className="">
            <h1>Post List</h1>
            <div className="posts-wrappper">
                {props.posts.map((post, index) =>
                    <div className="post">

                        <Post className=""
                                post={post}
                                onDelete={props.onDelete}
                                onAddComment={props.onAddComment}
                        />

                    </div>
                )}
            </div>
        </div>
    )
}

export default PostList;