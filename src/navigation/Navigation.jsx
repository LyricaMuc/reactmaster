import React from 'react';
import '../styling/navigation.css';

const Navigation = (props) => {

    return <nav className='navigation'>
        <a href={props.links}>Test</a>
    </nav>
};

export default Navigation