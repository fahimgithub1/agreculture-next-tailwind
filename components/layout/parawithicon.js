import { AiOutlineCheck } from 'react-icons/ai';

export default function ParaWithIcon(props){

    return(
        <p className={`flex items-center ${props.allparaicon}`}>
            <span  className={`mr-2 ${props.classes}`} >
                <AiOutlineCheck/> 
            </span>
            <span className='font-bold'>{props.chakeparatext}</span> 
        </p>
    )
}