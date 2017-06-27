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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Component imports
import CustomersTable from './components/CustomersTable';

// Actions imports
import { performCustomersIndexSearch } from './actions/customersIndexActions'; 

// Custom imports 
import { history } from '../../Routes';

// PropTypes imports
import {
  CustomersIndexPropType,
} from '../../../customPropTypes';

class CustomersIndexContainer extends Component {
  constructor(props) {
    super(props); 

    /**
     * @function findCustomers
     * @description Retrieves Customers with potential searchTerm
     * @param page
     */
    this.findCustomers = () => {
      this.props.performCustomersIndexSearch();
    };
  }

  componentWillMount() {
    this.findCustomers(); 
  }

  render() {
    const {
      customersIndex: {
        customers
      },
    } = this.props;

    return (
      <div>
        <h1>This is the Customers Index Container!</h1>
        <h3>
          This will become a protected page when we do authentication.
          <br />
          Only authenticated users should see this!
        </h3>
          {(() => {
            
            return (
              <CustomersTable customers={customers} />
            ); 
          })()}
      </div>
    );
  }
}

CustomersIndexContainer.propTypes = {
  customersIndex: CustomersIndexPropType,
  performCustomersIndexSearch: PropTypes.func.isRequired,
}; 

CustomersIndexContainer.defaultProps = {}; 

const mapStateToProps = state => ({
  customersIndex: state.customersIndex,
}); 

const mapDispatchToProps = () => ({
  performCustomersIndexSearch,
});

export default connect(mapStateToProps, mapDispatchToProps())(CustomersIndexContainer);

