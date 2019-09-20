import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { types } from './app.actions';
import data from '../data.json';

export interface Data {
    name: String,
    value: Number,
    ext: Number
};

export interface SortState {
    data: Data[],
    sortKey: string,
    sortDir: string
}

export interface State {
    sort: SortState
};

interface ActionPayload {
    payload: any
};

const sort = handleActions<SortState>(
    {
        [types.SORT_TABLE_BY_KEY]: (state: SortState, action: ActionPayload) => {
            const { payload } = action;
            return { ...state, sortKey: payload, sortDir: state.sortKey !== payload ? 'asc' : state.sortDir === 'desc' ? 'asc': 'desc' };
        }
    },
    {
        data: data,
        sortKey: null,
        sortDir: null
    }
);

export const reducers = combineReducers({ sort });