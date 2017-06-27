/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */
// Import the GET method via Axios. 
import { get } from '../../../../utilities/apiUtilities';

// Set action types as constants. 
export const REQUEST_CUSTOMERS_INDEX_ACTION = 'REQUEST_CUSTOMERS_INDEX_ACTION';
export const RECEIVE_CUSTOMERS_INDEX_SUCCESS = 'RECEIVE_CUSTOMERS_INDEX_SUCCESS';
export const RECEIVE_CUSTOMERS_INDEX_FAILURE = 'RECEIVE_CUSTOMERS_INDEX_FAILURE';

// Action creators return an action.
// There is no payload on these actions, yet.
// We want to return an action w/ the customer index, or 
// return an error message to alert the user. 
const requestCustomersIndexAction = () => ({
	type: 'REQUEST_CUSTOMERS_INDEX_ACTION',
});

const receiveCustomersIndexSuccess = (customers) => ({
	type: 'RECEIVE_CUSTOMERS_INDEX_SUCCESS',
	payload: { customers },
});

const receiveCustomersIndexFailure = () => ({
	type: 'RECEIVE_CUSTOMERS_INDEX_FAILURE',
	payload: { error },
});

// Middleware allows us to perform manipulations on the actions 
// (ie, add the payload) before they are released to the reducers.
// Here, let's make a call to the API and then return a success 
// or failure. 

// This function is called when the CustomerIndexContainer renders.
export const performCustomersIndexSearch = () => 
	// Why do we pass in dispatch?
	(dispatch) => {
		dispatch(requestCustomersIndexAction());
		get('/customers')
			.then((response) => {
				// Sends customer data to store
				dispatch(receiveCustomersIndexSuccess(response.docs))
			})
			.catch((e) => {
				// What is e? 
				dispatch(receiveCustomersIndexFailure(e));
			});
	}

 	

