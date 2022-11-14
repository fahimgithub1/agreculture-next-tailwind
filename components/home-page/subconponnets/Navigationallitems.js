import FristNavigatin from "./fristnavigatin";
import FristNavigatinIcon from "./fristnavigatinicon";
import NavigationPages from "./navigationpages";

export default function NavigationAllItems(){

    return(
        <div className='hidden md:block overflow-hidden lg:w-[85%] md:w-[85%] lg:px-3 md:px-3'>
            <div className='nav-list'>
                <div>
                    <FristNavigatin classes="frist-navigtion-style" />
                </div>
                        
                <div>
                    <FristNavigatinIcon clseesUl="flex gap-4 justify-center items-center text-md socila-iocn" />
                </div>
            </div>

            <div>
                <NavigationPages classesUl="nav-pages" />
            </div>
        </div>
    )
}