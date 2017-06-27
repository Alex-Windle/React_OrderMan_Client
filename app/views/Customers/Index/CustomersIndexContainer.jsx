/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This connected CustomersIndexContainer shows a list of Customers.
 *
 * @description The list will be shown using a CustomersTable component.
 *
 * @description Use an AuthenticatedLayout with the CustomersTable component as it's children.
 *
 * propTypes = {
 *   customersIndex: ...,
 *   performCustomersIndexSearch: PropTypes.func.isRequired,
 * };
 *
 * @exports CustomersIndexContainer
 */

// Module imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { performCustomersIndexSearch } from './actions/customersIndexActions'; 

import CustomersTable from './components/CustomersTable';

export default class CustomersIndexContainer extends Component {
  constructor(props) {
    super(props); 

    /**
     * @function findCustomers
     * @description Retrieves Customers with potential searchTerm
     * @param page
     */
    this.findCustomers = () => {
      console.log("kick off findCustomers()...");
      this.props.performCustomersIndexSearch();
    };
  }

  componentWillMount() {
    this.findCustomers(); 
  }

  render() {
    return (
      <div>
        <h1>This is the Customers Index Container!</h1>
        <Link to="customers/create">Add new customer</Link>
        <h3>
          This will become a protected page when we do authentication.
          <br />
          Only authenticated users should see this!
        </h3>
        <CustomersTable />
      </div>
    );
  }
}
