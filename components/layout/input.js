

export default function Input(props){

    // props.changefunction(e)

    return <input 
                    type='text' 
                    value={props.value}
                    onChange={props.ChangeFunction}
                    placeholder={props.inputText} 
                    className={`block w-[100%] rounded-lg border-none p-3 pl-5 ${props.classes}`}
            />
}