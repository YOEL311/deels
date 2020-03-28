import {combineReducers} from 'redux';
import AuthReducer from './reducer';

export default combineReducers({
  // header: headerReducer,
  auth: AuthReducer,
  // footer: footerReducer,
  // common: commonReducer,
  // product: productReducer,
  // catalog: catalogReducer,
  // payment: paymentReducer
});

// export default rootReducer;
