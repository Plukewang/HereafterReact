import {Form, useLoaderData, redirect} from "react-router-dom";
import axios from "axios";
import BlogFormStyle from '../../../../styles/Forms/BlogForm.module.css'

export async function action({request,params}){
    
    try {
        const formData = await request.formData();
        const updates = Object.fromEntries(formData);
        if(updates.cancel){
            return redirect(`/blog`);
        }
        const result = await axios.post(`https://hereafterproject.onrender.com/${params.blogid}/edit`, updates, {headers: {'content-type': 'application/x-www-form-urlencoded'}});
        return redirect(`/blog`)
    } catch (err) {
        console.log(err);
    }
}

const EditPost = ()=>{

    const post = useLoaderData();

    return (
        <Form method="post">
            <input className={BlogFormStyle.visible} name = "title" placeholder="Title here..." defaultValue={post.title}/>
                            
            <textarea className={BlogFormStyle.visible} name = "post" placeholder="Your post here..." defaultValue={post.post}></textarea>

            <div >              
                <button className={BlogFormStyle.visible} type="submit" name = "submit"  value = "Submit Post">Submit</button>
                <button className={BlogFormStyle.visible} type="submit" name = "cancel"  value = {post.blogid}>Cancel</button>
            </div>
        </Form>
    )
}

export default EditPost;