import { connect } from 'react-redux';
import { App } from './app.component';
import { State } from '../redux/reducers'
import { actions } from './app.actions';
import { Dispatch } from 'react';
import { SortTableByKey } from './app.selectors'

const mapStateToProps = (state: State ) => { 
  const { sortDir, sortKey } = state.app.sort;
  const data = SortTableByKey(state);
  return { data, sortDir, sortKey };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onSortTable: (key: String) => {
      dispatch(actions.sortTableByKey(key))
    }
  };
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
