
export default function Wrapper(props){

    return(
        <section className={`common-padding  w-full ${props.sectionclass}`}>
            <div className={`container m-auto ${props.comondivclass}`}>
                {props.children}
            </div>
        </section>
    )
}