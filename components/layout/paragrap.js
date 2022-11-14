

export default function ParaGrap(props){

    return(
        <p className={`mt-6 ${props.allparaclass}`} onClick={props.onServiceChnge}>
            {props.textpragrap}
        </p>
    )
}