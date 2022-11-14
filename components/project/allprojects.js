import Button from "../layout/button";
import Wrapper from "../layout/wrapper";
import PerProjectThemnel from "./perprojectthemnel";

const ProjectThemnel = [
    {
        upertext : "HEALTHY",
        text : "ORGANIC SOLUTIONS",
        img : require("/public/projects/project-one-1.jpg")
    },
    {
        upertext : "FARMING",
        text : "HARVEST INNOVATIONS",
        img : require("/public/projects/project-one-2.jpg")
    },
    {
        upertext : "SOLUTION",
        text : "THE FARMING SEASON",
        img : require("/public/projects/project-one-3.jpg")
    },
    {
        upertext : "HEALTHY",
        text : "ORGANIC SOLUTIONS",
        img : require("/public/projects/project-one-4.jpg")
    },
    {
        upertext : "HARVEST",
        text : "ECOLOGICAL FARMING",
        img : require("/public/projects/project-one-5.jpg")
    },
    {
        upertext : "FARMING",
        text : "ECOLOGICAL FARMING",
        img : require("/public/projects/project-one-6.jpg")
    }
]


export default function AllProjects(){

    return(
        <Wrapper sectionclass="bg-white" comondivclass="flex flex-wrap  justify-center">

            {ProjectThemnel.map((item)=>(
                <PerProjectThemnel 
                                    img = {item.img}
                                    upertext={item.upertext}
                                    text = {item.text}

                />
            ))}

            <Button 
                        btntext = "Load More"
                        allbtnclass = "text-white mt-4"
            />

        </Wrapper>
    )
}