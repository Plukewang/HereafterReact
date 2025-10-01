import { expect, test, vi } from 'vitest';
import { playerLoader } from './PlayerDisplay';
import axios from 'axios';

//mock playerloader fetch function

vi.mock('axios');


test('Correctly fetches player data from the right endpoint', async ()=>{

    const loadPlayer = await playerLoader();

    expect(axios.get).toHaveBeenCalledWith("https://hereafterproject.onrender.com/players");
})
