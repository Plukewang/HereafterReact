import React from "react";
import BlogFormStyle from "../../../styles/Forms/BlogForm.module.css";
import {Form, useLoaderData, redirect} from "react-router-dom";
import axios from "axios";

export async function action({request}){
    

    try{
        const formData = await request.formData();
        const add = Object.fromEntries(formData);
        if(add.cancel){
            return redirect(`/blog`);
        }
        const finalFormEndpoint = "http://localhost:8080/blog/post";
        const result = await axios.post(finalFormEndpoint, add, {headers: {'content-type': 'application/x-www-form-urlencoded'}});
        return redirect('/blog')
    }catch(err){
        console.error(err);
    }
    
}

export default function AddPost(){
    return (
        <Form method="post" >
            <input className={BlogFormStyle.visible} name = "title"  placeholder="Title here..."/>
                                    
            <textarea className={BlogFormStyle.visible} name = "post" placeholder="Your post here..."></textarea>

            <div>              
                <button className={BlogFormStyle.visible} type="submit" name = "submit" value = "Submit Post">Submit</button>
                <button className={BlogFormStyle.visible} type="submit" name = "cancel" value = "cancel">Cancel</button>
            </div>
        </Form>
    )
}