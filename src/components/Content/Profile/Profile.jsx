import ProfileStyle from './Profile.module.css'

const Profile = () =>{
    return(
        <div>
            <div class={ProfileStyle.main_head_img}>
            <img className={ProfileStyle.head_img} src='https://celes.club/uploads/posts/2022-06/1654053228_13-celes-club-p-khotlain-maiami-oboi-krasivie-15.jpg'/>
            </div>

            <div className={ProfileStyle.main_user_block}>
                <img className={ProfileStyle.user_avatar} src='https://www.film.ru/sites/default/files/persones/_imported/0331516.jpg' />
                <p>Richard</p>
            </div>
        </div>
    );
}

export default Profile;