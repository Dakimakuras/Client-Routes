import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetching...')
    fetch('http://localhost:4000/doggos')
        .then(res => res.json())
        .then(post => dispatch({
            type: FETCH_POSTS,
            payload: post,
        })
        );
}

export const createPost = (postData) => dispatch => {
    console.log('creating...')
    fetch('http://localhost:4000/doggos/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then(post => dispatch({
        type: NEW_POST,
        payload: post,
    }));

}