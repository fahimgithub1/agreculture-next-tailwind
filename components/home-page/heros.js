
import herosImg1 from "/public/backgrounds/main-slider-1-1.jpg";
// import herosImg2 from "/public/backgrounds/main-slider-2-2.jpg";
// import herosImg3 from "/public/backgrounds/main-slider-3-3.jpg";
import { Carousel } from "flowbite-react"
import Item from "./item";

const CarosulInfo = [
    {
        id: 1,
        para: "We are Producting Natural Products",
        hader: "Agriculture.",
    },
    {
        id: '2',
        para: "We are Producting Natural Products",
        hader: "Irrigaton.",
    },
    {
        id: 3,
        para: "We are Producting Natural Products",
        hader: "Livestock.",
    }
]

export default function Heros(){
    
    return(
        <div className="h-80 sm:h-90 xl:h-[85vh] 2xl:h-[70vh]">
            <Carousel>
                {CarosulInfo.map((item)=>(
                    <Item key={item.id} 
                          ImageCaroul={herosImg1} 
                          para={item.para} 
                          hader={item.hader} 
                    />
                ))}
            </Carousel>
            
            {/* <Item ImageCaroul={herosImg1} /> */}
        </div>
    )
}