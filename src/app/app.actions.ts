import { createActions } from 'redux-actions';

export const types  = {
    SORT_TABLE_BY_KEY: 'SORT_TABLE_BY_KEY',
    FILTER_TABLE_BY_TERM: 'FILTER_TABLE_BY_TERM'
};

export const actions = createActions( types.SORT_TABLE_BY_KEY, types.FILTER_TABLE_BY_TERM );
