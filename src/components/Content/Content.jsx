import ContentStyle from './Content.module.css'
import MyPost from './MyPost/MyPost';
import Profile from './Profile/Profile';



const Content = (props) =>{
    
    return (
        <main className={ContentStyle.main}>
        <Profile/>
        <MyPost></MyPost>
      </main>
    );
}

export default Content;