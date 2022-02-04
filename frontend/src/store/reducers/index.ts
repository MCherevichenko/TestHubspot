import { combineReducers } from 'redux';

import form, { FormStoreType } from './formReducer';

const rootReducer = combineReducers<{ form: FormStoreType }>({
    form,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
