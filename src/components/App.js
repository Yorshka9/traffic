import React, {useState, useEffect} from 'react';
import Trains from '../apis/Trains';
import TrafficSearch from './TrafficSearch';
import UseResources from './UseResources';
import ResourceList from './ResourceList';
import DelayList from './DelayList';
import TrafficList from './TrafficList';


const App = () => {
    const [resource, setResource] = useState('posts');
    return (
        <div>
            <DelayList />
            <TrafficList />
            <div>
                <button onClick={() => setResource('posts')}>
                    Posts
                </button>
                <button onClick={() => setResource('todos')}>
                    Todos
                </button>
            </div>
            <ResourceList resource= {resource} />
        </div>
        );
   
}

export default App;
