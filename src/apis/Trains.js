import axios from 'axios';

export default axios.create({
    baseURL: 'https://labs.thetrainbrain.com/realtimemap/public/positions.json',

});