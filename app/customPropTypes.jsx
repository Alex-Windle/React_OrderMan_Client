/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * We use this file to create various prop-type
 * shapes that we can reuse throughout our
 * application.
 */

// Module imports
import PropTypes from 'prop-types';

export const CustomerPropType = PropTypes.shape({
  _id: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  user_id: PropTypes.string,
  __v: PropTypes.number,
});

export const CustomersIndexPropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  customers: PropTypes.arrayOf(CustomerPropType),
});

export const CustomersShowPropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  customer: CustomerPropType,
});