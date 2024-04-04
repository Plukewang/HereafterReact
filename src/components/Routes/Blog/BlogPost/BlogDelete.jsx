import {Form, useLoaderData, redirect} from "react-router-dom";
import axios from "axios";
import BlogFormStyle from '../../../../styles/Forms/BlogForm.module.css'


export async function action({request,params}){
    
    try {
        const formData = await request.formData();
        const updates = Object.fromEntries(formData);
        console.log(updates)
        if(updates.cancel){
            
            return redirect(`/blog`);
        }
        const result = await axios.post(`https://hereafterproject.onrender.com/blog/${params.blogid}/delete`, updates, {headers: {'content-type': 'application/x-www-form-urlencoded'}});
        return redirect(`/blog`);
    } catch (err) {
        console.log(err);
    }
}

const DeletePost = ()=>{

    const post = useLoaderData();

    return (
        <Form method="post">
            <h3>Are you sure you want to delete?</h3>
            <div >              
                <button className={BlogFormStyle.visible} type="submit" name = "id"  value = {post.id}>Confirm</button>
                <button className={BlogFormStyle.visible} type="submit" name = "cancel"  value = {post.id}>Cancel</button>
            </div>
        </Form>
    )
}

export default DeletePost;