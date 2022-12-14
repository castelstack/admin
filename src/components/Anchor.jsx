import React from 'react';
import { Link } from 'react-router-dom';

const Anchor = ({children,...props}) => {
    return (
        <Link {...props}>
            {children}
        </Link>
    );
};

export default Anchor;