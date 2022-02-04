import { createSelector } from 'reselect'
import { RootState } from '../reducers'

const baseFormSelector = (state: RootState) => state.form;

export const selectForm = createSelector(baseFormSelector, form => form);
