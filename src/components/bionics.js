import React from 'react';
import Reflux from 'reflux';
import BionicsStore from '../stores/bionicsstore';

export default class Bionics extends Reflux.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.store = BionicsStore;
	};

    render() {
        return 
            <pre>
            this.state.bionicsstore
            </pre>
            
    }
}