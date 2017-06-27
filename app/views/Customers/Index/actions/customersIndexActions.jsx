/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

export const REQUEST_CUSTOMERS_INDEX_ACTION = 'REQUEST_CUSTOMERS_INDEX_ACTION';
export const RECEIVE_CUSTOMERS_INDEX_SUCCESS = 'RECEIVE_CUSTOMERS_INDEX_SUCCESS';
export const RECEIVE_CUSTOMERS_INDEX_FAILURE = 'RECEIVE_CUSTOMERS_INDEX_FAILURE';

const requestCustomersIndexAction = () => ({
	type: 'REQUEST_CUSTOMERS_INDEX_ACTION',
});

const receiveCustomersIndexSuccess = () => ({
	type: 'RECEIVE_CUSTOMERS_INDEX_SUCCESS',
});

const receiveCustomersIndexFailure = () => ({
	type: 'RECEIVE_CUSTOMERS_INDEX_FAILURE',
});

export const performCustomerIndex = () => {
	// Get customer data from mLab database

	// fetch( url )
	// 	.then( dispatch that data to Redux store !!! )
	//  
};

