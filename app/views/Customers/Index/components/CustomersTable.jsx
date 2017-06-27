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

// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

// Action imports
// import { performCustomerIndex } from '../actions/customersIndexActions';

// PropType imports
import {
  CustomerPropType
} from '../../../../customPropTypes';

export default class CustomersTable extends Component {
	render() {
		const { customers } = this.props; 
		return (
			<div>
				Customer List: 
				<ul>
					{(() => {
						if (customers.length) {
							return customers.map(customer => 
								<li>{customer.first_name}</li>
							)
						}
					})()}
				</ul>
			</div>
		);
	}
};

// What is CustomerPropType? 
// It's a custom shape. 
CustomersTable.propTypes = {
	customers: PropTypes.arrayOf(CustomerPropType).isRequired,
}

CustomersTable.defaultProps = {}; 
