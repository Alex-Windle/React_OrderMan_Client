/* eslint-disable */
/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Creates Customers. You need to use an AuthenticatedLayout and CustomerDetailsForm.
 *
 * propTypes = {
 *   performCustomersCreateAction: PropTypes.func.isRequired,
 *   customersCreateForm: ...
 * };
 *
 * @exports CustomersCreateContainer
 */

import { connect } from 'react-redux';
import { performCreateCustomer } from './actions/customersCreateActions';

// Module imports
import React, { Component } from 'react';
import CustomerCreateForm from './components/CustomerCreateForm';

class CustomersCreateContainer extends Component {
  constructor(props) {
    super(props);

    this.submitCustomerCreate = (event) => {
      event.preventDefault();
      const { values } = this.props.customerCreateForm;
      this.props.performCreateCustomer(values);
    }
  }

  render() {
    return (
        <CustomerCreateForm handleSubmit={this.submitCustomerCreate} /> 
    );
  }
}

const mapStateToProps = state => ({
  customersCreate: state.customersCreate,
  customerCreateForm: state.form.customerCreateForm,
});

const mapDispatchToProps = () => ({
  performCreateCustomer,
}); 

export default connect(mapStateToProps, mapDispatchToProps())(CustomersCreateContainer);
