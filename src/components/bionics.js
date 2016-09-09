import React from 'react';
import BionicsStore from '../stores/bionicsstore';

export default class Bionics extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.store = BionicsStore;
	};

    render() {
        return (
            <pre>
            hi
            </pre>
            );
    }
}