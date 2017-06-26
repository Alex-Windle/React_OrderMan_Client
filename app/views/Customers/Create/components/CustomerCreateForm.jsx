/* eslint-disable */

import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
  reduxForm, 
  Field,
} from 'redux-form';

import SuccessButton from '../../../common/buttons/SuccessButton';
import renderTextField from '../../../common/forms/renderTextField';

class CustomerCreateForm extends Component {

	render() {
		const { handleSubmit } = this.props;
		return (
			<div className="panel panel-default">
	        <div className="container-fluid">
	          <form onSubmit={handleSubmit}>
	            <div className="spacer" />
	            <h3>Create a New Customer <b>Form</b></h3>
	            <div className="spacer" />
	            <div className="col-md-10 col-md-offset-1">
	              <Field name="first_name" placeholder="first name" component={renderTextField} />
	              <Field name="last_name" placeholder="last name" component={renderTextField} />
	              <Field name="email" placeholder="Email" component={renderTextField} />
	              <Field type="notes" name="notes" placeholder="Notes" component={renderTextField} />
	              <div className="spacer" />
	              <SuccessButton
	                block
	                title="Log in"
	              />
	              <div className="spacer" />
	            </div>
	          </form>
	        </div>
	        <div className="container-fluid">
	          <h4>
	            <Link to="/">
	              {"I don't have an account yet"}
	            </Link>
	          </h4>
	        </div>
	        <div className="spacer" />
      </div>
		);
	}
}

export default reduxForm({
  form: 'CustomerCreateForm',
})(CustomerCreateForm);
