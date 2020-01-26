import React from 'react';
import UseResources from './UseResources';

const DelayList = () => {
    const delays = UseResources('knockon/?minutes=30')

    const data = JSON.stringify(delays.disruptions);

    return (
        <ul>
            <li>{data}</li>
        </ul>
    );
}

export default DelayList;