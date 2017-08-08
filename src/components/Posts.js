import React from 'react';
import Post from './Post.js'
import PostsArray from '../database.json';

let Posts = React.createClass({

    createpost: function (post) {
        return <Post source={post} key={post.postId}/>;
    },

    createposts: function (posts) {
        return posts.map(this.createpost);
    },

    render: function () {
        return <div className="container postsContainer">
            <div className="PostNav header">
                <select className="classSelect">
                    <option value="math">Math</option>
                    <option value="beer">Beer</option>
                    <option value="wings">Wings</option>
                    <option value="cool">Cool</option>
                </select>
            </div>
            <div className="posts">
                {this.createposts(PostsArray.posts)}
            </div>
        </div>;
    }
});

export default Posts;