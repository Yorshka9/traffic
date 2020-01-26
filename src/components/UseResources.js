import {useState, useEffect} from 'react';
import axios from 'axios';

const UseResources = (resource)  => {
    const [resources, setResources] = useState([]);



    useEffect(
        () => {
        (async resource => {
            let response = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://labs.thetrainbrain.com/${resource}`,

            );
            setResources(response.data);
    }) (resource);
    },
    [resource]
    );
 
    return resources;
}

export default UseResources;