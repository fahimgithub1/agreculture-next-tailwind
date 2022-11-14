import { useState } from "react";
import Button from "../layout/button";
import Input from "../layout/input";
import TextArea from "../layout/textarea";


export default function ContactForm(props){
    const [inputname, setInputName] = useState("");
    const [inputemail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputsubject, setInputSubject] = useState("");
    const [inputcomment, setInputComment] = useState("");

    const ValuName = (event) =>{
        setInputName(event.target.value);
    }
    const ValuEmail = (event) =>{
        setInputEmail(event.target.value);
    }
    const ValuPhone = (event) =>{
        setInputPhone(event.target.value);
    }
    const ValuSubject = (event) =>{
        setInputSubject(event.target.value);
    }
    const ValuComment = (event) =>{
        setInputComment(event.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        console.log( inputname + "  " + inputemail + "  " + inputPhone + "  " + inputsubject + "  " + inputcomment)

        setInputName(""),
        setInputEmail(""),
        setInputPhone(""),
        setInputSubject(""),
        setInputComment()
    }

    return(
        <form className="m-auto mt-10 w-full max-w-xl" onSubmit={onSubmit}>

            <Input 
                    inputText = "Your Name"
                    value = {inputname}
                    ChangeFunction ={ValuName}
            />

            <Input 
                    inputText = "Email Addres"
                    classes = "mt-4"
                    value = {inputemail}
                    ChangeFunction ={ValuEmail}
            />

            <Input 
                    inputText = "Phone"
                    classes = "mt-4"
                    value = {inputPhone}
                    ChangeFunction ={ValuPhone}
            />

            <Input 
                    inputText = "Subject"
                    classes = "mt-4"
                    value = {inputsubject}
                    ChangeFunction ={ValuSubject}
            />

            <TextArea 
                        textareatext = "Write a Comment"
                        classes = "mt-4"
                        value = {inputcomment}
                        ChangeFunction ={ValuComment}
            />

            <Button 
                    btntext = {props.btntext}
                    allbtnclass = "text-white mt-4"
            />
        </form>
    )
}