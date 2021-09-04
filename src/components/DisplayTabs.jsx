import React,{useState} from 'react'

const DisplayTabs = ({alltabs}) => {
    const [content, setContent] = useState("");
    const handleClick = (getTab) => {
        setContent(getTab);
    }
    return (
        <div>
            {Object.keys(alltabs).map((tab,idx) => {
                return(
                    <button onClick = {(e) => handleClick (alltabs[tab])} key = {idx}>{tab}</button>
                );
            })}
            <p>{content}</p>
        </div>
    )
}

export default DisplayTabs
