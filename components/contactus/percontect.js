import BolderHeader from "../layout/bolderheader";
import ParaGrap from "../layout/paragrap";
import { BsChatTextFill } from 'react-icons/bs';

export default function PerContect(props){

    return(
        <div className="w-12/12 lg:w-3/12 md:w-6/12 flex items-center my-2 lg:my-0">
            <div className="mr-3">
                <BsChatTextFill className="text-5xl text-lime-600"/>
            </div>

            <div>
                <ParaGrap 
                            textpragrap={props.textpragrap}
                            allparaclass="mt-0"
                />

                <BolderHeader 
                                text = {props.text}
                                classes="mt-1 mb-0 font-semibold text-md"
                />
            </div>
        </div>
    )
}