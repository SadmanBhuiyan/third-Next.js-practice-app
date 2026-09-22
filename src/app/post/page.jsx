import React from 'react';

// const getPosts = async () => {
//     const res = await fetch('https://jsonplaceholder.typicosts')
//     if(!res.ok){
//         throw new Error('Jhinga la la')
//     }
//     return res.json()
// }

const Post = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return (
        <div>
            Posts.....{posts.length}
            <div>

            </div>
        </div>
    );
};

export default Post;