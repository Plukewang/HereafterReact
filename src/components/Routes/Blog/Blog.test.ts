import { describe, expect, test, vi } from 'vitest';
import axios from 'axios';
import { blogLoader } from './Blog';
import { postBlog as  action} from './BlogPost/BlogAdd';


vi.mock('axios');


describe('Blog Posting', ()=>{

    test('Correctly fetches blog post list from the right endpoint', async ()=>{

        const loadPost = await blogLoader();

        expect(axios.get).toHaveBeenCalledWith("https://hereafterproject.onrender.com/blog", 
            {
                headers: 
                    {
                        'content-type': 'application/x-www-form-urlencoded',
                    }, 
                withCredentials:true
            }
        );
    })

    test('Correctly performs a edit POST request', async ()=>{

         const mockedAxios = axios as jest.Mocked<typeof axios>;//mock the axios post function.


        //mock value to send
        const newBlogMock = {
            id: 1,
            title: "",
            post_time: "",
            post: "",
        }

        mockedAxios.post.mockResolvedValue(
            {
                data: [],
            }
        );
        
        const addPost = await action(newBlogMock);
        expect(addPost).toStrictEqual([]);
        expect(mockedAxios.post).toHaveBeenCalledWith("https://hereafterproject.onrender.com/blog/post", newBlogMock, {headers: {'content-type': 'application/x-www-form-urlencoded'}});
    }

    )

   
});


