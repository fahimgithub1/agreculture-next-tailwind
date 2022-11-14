
import {BiRightArrowAlt} from "react-icons/bi";

export default function InputButon({...props}){

    return(
        <form className="relative">
            <input className="py-5 px-7 rounded-full w-full focus:outline-none bg-white text-black text-sm" 
                   placeholder={props.plaehold}
            />

            <label className="footer-btn">
                <BiRightArrowAlt className="text-lg" />
            </label>
        </form>
    );
}