/* eslint-disable */

/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This file is meant to create the rootReducer for our Redux store.
 *
 * @description We'll use the 'combineReducers' function exported from the 'redux' package.
 *
 * @description We'll configure rootReducer with some default reducers:
 *      routerReducer from 'react-router-redux'
 *      formReducer from 'redux-form'
 *
 * @exports The rootReducer
 */

 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import { reducer as formReducer } from 'redux-form';

 import signupReducer from '../views/Unauthenticated/reducers/signupReducer';
 import loginReducer from '../views/Unauthenticated/reducers/loginReducer';
 import authReducer from '../views/Unauthenticated/reducers/authReducer';
 import customersCreateReducer from '../views/Customers/Create/reducers/customersCreateReducer'; 
 import customersIndexReducer from '../views/Customers/Index/reducers/customersIndexReducer';

 const appReducer = combineReducers({
 	auth: authReducer,
 	customersCreate: customersCreateReducer,
 	customersIndex: customersIndexReducer,
 	form: formReducer,
 	login: loginReducer,
 	routing: routerReducer,
 	signup: signupReducer,	
 });

 export default (state, action) => appReducer(state, action);
