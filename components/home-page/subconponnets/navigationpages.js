import Link from "next/link";
import MobileItemNav from "./mobileitemnav";

export default function NavigationPages(props){

    return(
        <ul className={`${props.classesUl}`}>
            {/* <li className='page-active'>
                <Link href="/">
                    Home
                </Link>
            </li> */}

            <MobileItemNav
                            classes ={props.itemclass}
                            pagename='Home'
                            pagepath='/'
            />

            <MobileItemNav
                            classes ={props.itemclass}
                            pagename='Services'
                            pagepath='/services'
            />
            
            <MobileItemNav
                            classes ={props.itemclass}
                            pagename='Project'
                            pagepath='/projects'
            />
            
            <MobileItemNav
                            classes ={props.itemclass}
                            pagename='About Us'
                            pagepath='/aboutus'
            />
            
            <MobileItemNav
                            classes ={props.itemclass}
                            pagename='Contact'
                            pagepath='/contatus'
            />
        </ul>
    )
}