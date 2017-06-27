/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This redux-form is responsible for displaying information about a given Customer.
 *
 * @description It is also used for creating a Customer.
 *
 */
 // url address - /customers 
  // GET 
 // This component shows all customers 
 // Pagination component (common < pagination )

import React, { Component } from 'react';

import { performCustomerIndex } from '../actions/customersIndexActions';

class CustomersTable extends Component {
	
	componentWillMount() { 
		// call performCustomerIndex() function here
		// this call fetches data from API
		// then, it saves that data to Redux store
		// then, render it in the UI !!! 
	}

	render() {
		return (
			<div>Customers Table Goes Here!!!</div>
		);
	}
};

export default CustomersTable;

// Use connect helper function to give this component access to Redux store

// Use .mapStoreToProps to pull props into this component

