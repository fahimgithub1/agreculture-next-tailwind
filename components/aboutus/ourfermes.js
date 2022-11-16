import SsectionTitel from "../layout/sectiontitel";
import SectionTitleImg from "../layout/sectiontitleimg";
import TopPara from "../layout/toppara";
import Wrapper from "../layout/wrapper";
import Farmer from "./farmer";

const totext = "Team Members";
const sctiontitleFarmer = "MEET OUR FARMERS";


const FarmerDatiles=[
    {
        id: 1,
        framarimg : require("/public/team/team-1-1.jpg"),
        farmername : "Aleesha Brown",
        farmertaitel: "Senior Farmer"
    },
    {
        id: 2,
        framarimg : require("/public/team/team-1-2.jpg"),
        farmername : "Kevin Martinn",
        farmertaitel: "Senior Farmer"
    },
    {
        id: 3,
        framarimg : require("/public/team/team-1-3.jpg"),
        farmername : "Sarah Albert",
        farmertaitel: "Senior Farmer"
    }
]

export default function OurFermes(){

    return(
        <Wrapper sectionclass="bg-gray-200 text-center" >
            <TopPara topparaText={totext} />
            <SsectionTitel sctiontitle={sctiontitleFarmer} allsectonclass = "section-title text-4xl"  />
            <SectionTitleImg alltitleimgclass="mt-3 mb-4 m-auto"/>

            <div className="md:flex md:flex-wrap items-center mt-10 justify-center">
                {FarmerDatiles.map((item)=>(
                    <Farmer
                            key={item.id}
                            framarimg={item.framarimg}
                            farmername={item.farmername}
                            farmertaitel={item.farmertaitel}
                    />
                ))}
            </div>
        </Wrapper>
    )
}