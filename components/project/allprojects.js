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
            {/* <div className="relative w-4/12 rounded-xl overflow-hidden">
                <Image src={img1}  height='200' width="100%" alt="Prject image" className="w-full" />

                <div className="absolute bottom-0 left-0 w-full px-12 py-12 pt-32 text-white bg-gradient-to-t from-lime-900 to-transparent  bg-opacity-10 ">
                    <BolderHeader 
                                    text={upertext1}
                                    classes="mb-6 pb-1 border-b-4 border-yellow-300 inline"
                    />
                    
                    <BolderHeader 
                                    text={loyertext1}
                                    classes="text-4xl mt-4 font-thin"
    />
                </div>
            </div> */}

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