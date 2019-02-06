import {combineReducers} from 'redux';
import eventReducer from '../../components/event/eventReducer';
import flashMessagesReducer from './flashMessagesReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
   events:eventReducer,
   flashMessages:flashMessagesReducer,
   async:asyncReducer

  });

export default rootReducer;