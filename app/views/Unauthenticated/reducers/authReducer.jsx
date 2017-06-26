/* eslint-disable */

/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux reducer "auth".
 *
 * @description This reducer is solely responsible for maintaining auth information.
 *
 * initialState = {
 *   access_token: localStorage.getItem('access_token') || null
 * };
 *
 */

 // action RECEIVE_LOGIN_SUCCESS will be captured by this reducer (two) 

 import {
 	RECEIVE_LOGIN_SUCCESS,
 } from '../actions/loginActions';

const initialState = {
   access_token: localStorage.getItem('access_token') || null
};

 export default (reduxState = initialState, action) => {
 	const { payload, type } = action;
 	switch(type) {
 		case RECEIVE_LOGIN_SUCCESS:
 		 return {
 			...reduxState,
 			access_token: payload.access_token,  
 		}; 
 	 	default:
 		 return reduxState;
 	};
 };
