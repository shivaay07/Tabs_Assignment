import React,{useState} from 'react'

const UserForm = ({alltabs}) => {
    const [label, setLabel] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
    } 
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="submit" value="Tab1"/>
            </form>
        </div>
    )
}

export default UserForm
