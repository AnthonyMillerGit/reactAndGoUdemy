import React, { Fragment, useState } from 'react';
import './HelloWorld.css';
function HelloWorld(props) {
    const [isTrue, setIsTrue] = useState(false)

    const toggleTrue = () => {
        setIsTrue(!isTrue)
    }

    return (
        <Fragment>
            <hr />
            <h1 className="h1-green">{props.msg}</h1>
            <hr />
            {
                isTrue ? <h1>True</h1> : <h1>False</h1>
            }
            <hr />
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Change True And False</a>
        </Fragment>
    )
}

export default HelloWorld;