import Image from "next/image";
import Hedarimg from "/public/video-one-1.png"

// const image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3n1DoDt9G2sLZtuS9UmXqq&ust=1668097462573000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJiKnbfBofsCFQAAAAAdAAAAABAE";

export default function SectionTitleImg(props){

    return(
        <Image src={Hedarimg} h='30' w="60" alt="imag" className={props.alltitleimgclass} />
    )
}