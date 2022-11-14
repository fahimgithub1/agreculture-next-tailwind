import BolderHeader from "../layout/bolderheader";
import ParaGrap from "../layout/paragrap";
import ServiceImgContact from "./serviceimgcontact";


export default function ServiceleFtSide(props){

    return(
        <div className="w-full lg:w-4/12 lg:pr-4">
            <div className="p-6 bg-gray-200 rounded-lg">
                <BolderHeader 
                                text='All Services'
                                classes='mb-0 py-2 px-4 rounded-lg'
                />

                <ParaGrap 
                            textpragrap="Agriculture Products"
                            allparaclass={props.showService1 ? "service-type service-type-active" :"service-type"}
                            onServiceChnge={props.onServicehow1}
                />

                <ParaGrap 
                            textpragrap="Organic Products"
                            onServiceChnge={props.onServicehow2}
                            allparaclass={props.showService2 ? "service-type service-type-active" :"service-type"}
                />

                <ParaGrap 
                            textpragrap="Fresh Vegetables"
                            allparaclass={props.showService3 ? "service-type service-type-active" :"service-type"}
                            onServiceChnge={props.onServicehow3}
                />

                <ParaGrap 
                            textpragrap="Dairy Products"
                            allparaclass={props.showService4 ? "service-type service-type-active" :"service-type"}
                            onServiceChnge={props.onServicehow4}
                />
            </div>

            <div className="hidden lg:block"><ServiceImgContact /></div>
        </div>
    )
}