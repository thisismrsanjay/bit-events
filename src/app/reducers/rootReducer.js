import {combineReducers} from 'redux';
import eventReducer from '../../components/event/eventReducer';
import flashMessagesReducer from './flashMessagesReducer';

const rootReducer = combineReducers({
   events:eventReducer,
   flashMessages:flashMessagesReducer
  });

export default rootReducer;