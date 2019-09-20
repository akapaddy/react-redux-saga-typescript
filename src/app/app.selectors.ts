import { createSelector } from 'reselect';
import { State } from '../redux/reducers';

export const GetAppState = ( state: State ) => state.app.sort;

export const SortTableByKey = createSelector([GetAppState], ({ data, sortDir = 'asc', sortKey }) => {
    if (!data) return [];
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
        let aValue = typeof a[sortKey] === 'string' ? a[sortKey].toUpperCase() : a[sortKey];
        let bValue = typeof b[sortKey] === 'string' ? b[sortKey].toUpperCase() : b[sortKey];
        const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        return  sortDir === 'desc' ? comparison * -1 : comparison;
    });
});