import { describe, expect, test, vi } from 'vitest';
import axios from 'axios';
import { blogLoader } from './Blog';
import { action as  addAction} from './BlogPost/BlogAdd';


vi.mock('axios');


describe('Blog Posting', ()=>{

    test('Correctly fetches blog post list from the right endpoint', async ()=>{

        const loadPlayer = await blogLoader();

        expect(axios.get).toHaveBeenCalledWith("https://hereafterproject.onrender.com/blog", 
            {
                withCredentials: true
            }
        );
    })

     

   
});


