

export default function PersentegDiv(props){

    return(
        <div className="w-full mt-4">
            <div>
                <span className="mr-4 font-semibold">{props.text}</span>
                <span>{props.persentage}%</span>
            </div>

            <div className="w-full h-2 mt-2 relative bg-slate-300 rounded-full">
                <div className={` h-full absolute rounded-full bg-lime-900  ${props.classes}`}>

                </div>
            </div>
        </div>
    )
}