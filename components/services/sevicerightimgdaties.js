import ParaGrap from "../layout/paragrap";
import BolderHeader from "../layout/bolderheader";
import Image from "next/image";


const paratext = "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
const paratext2 = "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";



export default function SeviceRightImgDaties(props){

    return(
        <div>
            <Image src={props.image} alt='Per Services Image'  className="h-auto w-full rounded-lg"/>

            <BolderHeader 
                            text={props.taitel}
                            classes="text-3xl md:text-4xl mt-4"
            />

            <ParaGrap 
                        textpragrap={paratext}
            />

            <ParaGrap 
                        textpragrap={paratext2}
            />
        </div>
    )
}