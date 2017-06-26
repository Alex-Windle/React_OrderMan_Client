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

    this.submitCustomerCreate = (e) => {
      e.preventDefault();
      const values = this.props.CustomerCreateForm.values;
      this.props.performCreateCustomer(values);
    }
  }

  render() {
    return (
      <div>
        <h1>This is the Customers Create Container!</h1>
        <CustomerCreateForm handleSubmit={this.submitCustomerCreate} /> 
        <h3>
          This will become a protected page when we do authentication.
          <br />
          Only authenticated users should see this!
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customersCreate: state.customersCreate,
  customerCreateForm: state.form.customerDetailsForm,
});

const mapDispatchToProps = () => ({
  performCreateCustomer,
}); 

export default connect(mapStateToProps, mapDispatchToProps())(CustomersCreateContainer);
