import PostStyle from './Post.module.css'

const Post = (probs) =>{
    return (
        <div>
            <div className={`${PostStyle.posted_post} ${PostStyle.first}`}>

                <img src='https://static.tildacdn.com/tild3365-3464-4765-a133-633662313437/Cover_1.jpg' />
                <p className={PostStyle.post_title}>{probs.title}</p>
                <p className={PostStyle.post_text}>{probs.message}</p>

            </div>

        </div>
    )
}

export default Post 