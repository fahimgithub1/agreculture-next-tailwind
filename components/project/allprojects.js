import Button from "../layout/button";
import Wrapper from "../layout/wrapper";
import PerProjectThemnel from "./perprojectthemnel";

const ProjectThemnel = [
    {
        id: 1,
        upertext : "HEALTHY",
        text : "ORGANIC SOLUTIONS",
        img : require("/public/projects/project-one-1.jpg")
    },
    {
        id: 2,
        upertext : "FARMING",
        text : "HARVEST INNOVATIONS",
        img : require("/public/projects/project-one-2.jpg")
    },
    {
        id: 3,
        upertext : "SOLUTION",
        text : "THE FARMING SEASON",
        img : require("/public/projects/project-one-3.jpg")
    },
    {
        id: 4,
        upertext : "HEALTHY",
        text : "ORGANIC SOLUTIONS",
        img : require("/public/projects/project-one-4.jpg")
    },
    {
        id: 5,
        upertext : "HARVEST",
        text : "ECOLOGICAL FARMING",
        img : require("/public/projects/project-one-5.jpg")
    },
    {
        id: 6,
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
                                    key={item.id}
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