import {AiOutlineArrowRight} from 'react-icons/ai';

export default function Button(props){

    return(
        <button className={`heros-btn ${props.allbtnclass} `}>
            <span className="flex justify-between items-center gap-4">
                {props.btntext}
                <span className="btn-arow">
                    <AiOutlineArrowRight />
                </span> 
            </span>
        </button>
    )
}