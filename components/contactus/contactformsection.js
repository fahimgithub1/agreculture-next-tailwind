import SsectionTitel from "../layout/sectiontitel";
import SectionTitleImg from "../layout/sectiontitleimg";
import TopPara from "../layout/toppara";
import Wrapper from "../layout/wrapper";
import ContactForm from "./contactform";

const totext = "Write a Message";
const sctiontitleFarmer = "ALWAYS HERE TO HELP YOU";

export default function ContactFormSection(){

    return(
        <Wrapper sectionclass="bg-gray-200 text-center">
            <TopPara topparaText={totext} />
            <SsectionTitel sctiontitle={sctiontitleFarmer} allsectonclass = "section-title text-4xl"  />
            <SectionTitleImg alltitleimgclass="mt-3 mb-4 m-auto"/>

            <div className="mt-4">
                <ContactForm
                               btntext = "Send a Massage" 
                />
            </div>

        </Wrapper>
    )
}