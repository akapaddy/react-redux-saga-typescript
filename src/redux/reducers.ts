import { combineReducers } from 'redux';

import { reducers as app, State as AppState} from '../app/app.reducer'

export interface State {
    app: AppState
};

export default combineReducers({ app });