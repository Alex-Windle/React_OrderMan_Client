/* eslint-disable */

/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description The protected Higher-Order-Component takes a component.
 *
 * @description Based on auth state, it navigates accordingly.
 *
 * @description It allows authenticated users to access the authenticated part of the site.
 *
 * @description This ses another HOC 'withRouter' from to attach routing props to the component.
 *
 * PropTypes = {
 *   location: ...
 * };
 *
 * DefaultProps = {};
 *
 * @exports protected Higher-Order-Component
 */

// Module imports
import React, { Component } from 'react';

// this higher order component give you additional props!
import { withRouter } from 'react-router-dom';


// Custom imports
import {
  isAuthenticated,
} from '../../../utilities/authUtilities';


/**
 * @description HOC to detect authentication status and route accordingly
 * Requires a user to be authenticated in order to access the component
 */
export default (BaseComponent) => {
  class Protected extends Component {
    componentWillMount() {
      // Check if user is authenticated; if so, return component!
      isAuthenticated();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        isAuthenticated();
      }
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  }


  Protected.propTypes = {
  };

  return withRouter(Protected);
};
