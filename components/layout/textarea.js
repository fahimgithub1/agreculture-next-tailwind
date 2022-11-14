

export default function TextArea(props){


    return(
        <textarea className={`text-area ${props.classes}`} 
                  placeholder={`${props.textareatext}`}
                  value={props.value}
                  onChange={props.ChangeFunction}
        >

        </textarea >
    )
}