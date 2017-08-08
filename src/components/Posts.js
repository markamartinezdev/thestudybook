import React from 'react';
import Post from './Post.js'
import PostsArray from '../database.json';
import * as firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCwsl4qdsUKUA3pWlAV6xiL14_d3aU9_90",
    authDomain: "studybooktest.firebaseapp.com",
    databaseURL: "https://studybooktest.firebaseio.com",
    projectId: "studybooktest",
    storageBucket: "studybooktest.appspot.com",
    messagingSenderId: "801938444718"
};

firebase.initializeApp(config);
let database = firebase.database();
let Posts = React.createClass({

    createpost: function (post) {
        return <Post source={post} key={post.postId}/>;
    },

    createposts: function (posts) {
        return posts.map(this.createpost);
    },
    componentDidMount() {

        database.ref('/posts').on("value", function(snapshot) {
            let returnArr = [];
            snapshot.forEach(function(childSnapshot) {
                let item = childSnapshot.val();
                item.key = childSnapshot.key;
                returnArr.unshift(item);
            });
            // postId = returnArr.length;
            console.log(snapshot.val()[2]);

            this.setState({ data:  returnArr});
        }.bind(this));

    },

    render: function () {
        return(
            <div className="container postsContainer">
                <div className="PostNav header">
                    <select className="classSelect">
                        <option value="math">Math</option>
                        <option value="beer">Beer</option>
                        <option value="wings">Wings</option>
                        <option value="cool">Cool</option>
                    </select>
                </div>
                <div className="posts">
                    {this.state && this.state.data &&
                        this.createposts(this.state.data)
                    }
                </div>
            </div>
            );
    }
});

export default Posts;