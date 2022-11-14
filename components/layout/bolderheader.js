


export default function BolderHeader(props){

    return (
        <h1 className={`font-bold mb-4 ${props.classes}`}>
            {props.text}
        </h1>
    )
}