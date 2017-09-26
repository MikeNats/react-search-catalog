import React from 'react';
import SearchListContainer from '../../containers/searchList/searchListContainer';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default class App extends React.Component {
	render() {
		return (<section className='row'><SearchListContainer /></section>);
	}
}





