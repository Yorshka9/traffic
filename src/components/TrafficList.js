import React from 'react';
import UseResources from './UseResources';

const TrafficList = () => {
    const traffic = UseResources('realtimemap/public/positions.json')

    const data = JSON.stringify(traffic.trains);

    return (
        <ul>
            <li>{data}</li>
        </ul>
    );
}

export default TrafficList;