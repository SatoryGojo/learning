import { createRef } from 'react';
import MyPostStyle from './MyPost.module.css'
import Post from './Post/Post'
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postSlice';

const MyPost = (props) =>{

    let post_data = useSelector((state) => state.posts.posts)
    let post_message_component = post_data.map(el => <Post message={el.message} title={el.title}/>);
    const dispath = useDispatch()
    let newPostText = createRef()

    

    let newPost = () =>{
        let post = newPostText.current.value
        dispath(addPost({post}))
        newPostText.current.value = ''
    }


    return(
       <div className={MyPostStyle.my_post_area}>
        <input type='textarea' ref={newPostText}></input><br></br>
        <input type='submit' onClick={newPost}></input>
        {post_message_component}
       </div> 
    )
}

export default MyPost