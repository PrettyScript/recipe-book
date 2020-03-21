import React from 'react';
// import { UserContext } from '../UserContext';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <p>{this.props.username}</p>
            </div>
        );
    }
}