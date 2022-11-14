

export default function TopPara(props){

    return(
       <p className={`top-para-style ${props.allclass}`}>
           {props.topparaText} 
       </p> 
    )
}