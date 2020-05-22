import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID AjzOwAHruS1oy18LO3L4kEXAgzj4qXVdw44rK-aX4nA',
    },
});
