import {combineReducers} from 'redux';
import eventReducer from '../../components/event/eventReducer';

const rootReducer = combineReducers({
   events:eventReducer
  });

export default rootReducer;