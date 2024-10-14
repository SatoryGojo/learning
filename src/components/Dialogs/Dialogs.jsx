import DialogsStyle from './Dialogs.module.css'
import DialogMessage from './DialogMessage/DialogMessage';
import DialogName from './DialogName/DialogName';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../redux/dialogSlice';
import { createRef } from 'react';

const Dialogs = (props) =>{
    
    let names_data = useSelector((state) => state.dialogs.names)
    let messages_data = useSelector((state) => state.dialogs.messages)
    
    let DataMessage = messages_data.map( el => <DialogMessage message={el.message}></DialogMessage>)
    let DataName = names_data.map( el => <DialogName id={el.id} user_name={el.name}></DialogName>)
    
    let dispath = useDispatch()
    let newMessage = createRef()

    let addNewMessage = () =>{
        let message = newMessage.current.value
        dispath(addMessage({message}))
        newMessage.current.value = ''
    }
    

    return (


        <div className={DialogsStyle.dialog_container}>

            
            <div className={DialogsStyle.people_list}>
                {DataName}
            </div>


            <div className={DialogsStyle.message_area}>
                {DataMessage}
                <textarea ref={newMessage}></textarea><br></br>
                <input type='submit' onClick={addNewMessage}></input>
            </div>
        </div>
    );
}

export default Dialogs