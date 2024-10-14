import { NavLink } from 'react-router-dom';


const DialogName = (probs) =>{
    return(
        <div>
            <NavLink to={`/dialogs/${probs.id}`}>{probs.user_name}</NavLink>
        </div>
    );
}


export default DialogName