import { useState } from "react";
import Wrapper from "../layout/wrapper";
import SerciceRightSide from "./sercicerightside";
import ServiceleFtSide from "./serviceleftside";


export default function ProjectSection(){
    const [service1, setService1] = useState(true);
    const [service2, setService2] = useState(false);
    const [service3, setService3] = useState(false);
    const [service4, setService4] = useState(false);

    const handelService1 = () =>{

        if(!service1){
            setService1(true);
            setService2(false);
            setService3(false);
            setService4(false);
        }
        console.log("handler1"+ "  " + service1 + " " + service2 + " " + service3 + " " + service4);
    }
    
    const handelService2 = () =>{

        if(!service2){
            setService1(false);
            setService2(true);
            setService3(false);
            setService4(false);
        }
        console.log("handler2"+ "  " + service1 + " " + service2 + " " + service3 + " " + service4);
    }

    
    const handelService3 = () =>{

        if(!service3){
            setService1(false);
            setService2(false);
            setService3(true);
            setService4(false);
        }
        console.log("handler3"+ "  " + service1 + " " + service2 + " " + service3 + " " + service4);
    }

    
    const handelService4 = () =>{

        if(!service4){
            setService1(false);
            setService2(false);
            setService3(false);
            setService4(true);
        }
        console.log("handler4"+ "  " + service1 + " " + service2 + " " + service3 + " " + service4);
    }



    return(
        <Wrapper sectionclass="bg-white" comondivclass="flex flex-wrap">
            <ServiceleFtSide 
                                onServicehow1={handelService1}
                                onServicehow2={handelService2}
                                onServicehow3={handelService3}
                                onServicehow4={handelService4}
                                showService1={service1}
                                showService2={service2}
                                showService3={service3}
                                showService4={service4}
            />

            <SerciceRightSide 
                                showService1={service1}
                                showService2={service2}
                                showService3={service3}
                                showService4={service4}
            />
        </Wrapper>
    )
}