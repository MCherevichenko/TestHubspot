import {  SEND_EMAIL, EMAIL_SUCCEEDED, EMAIL_REJECTED } from "../../actions/actions";
import { ActionType } from "../../types/global";

const defaultStatus = 'Waiting';

interface IBaseProperty {
    value: string
}

interface IProperties {
    [propertyName: string]: IBaseProperty;
  }
  
interface IData {
    properties: IProperties;
}

export type FormStoreType = {
    status: string,
    isFetching: boolean,
    error: string | null,
    data: IData | null,
}

const initialState = {
    status: '',
    isFetching: false,
    error: null,
    data: null,
}

const formReducer = (state: FormStoreType = initialState, action: ActionType ) => {
    switch (action.type) {
        case SEND_EMAIL:
            return {
                ...state, isFetching: true, error: null, status: defaultStatus,
            }
        case EMAIL_SUCCEEDED:
            return {
                ...state, isFetching: false, error: null, status: 'We get your data',data: action.payload
            }
        case EMAIL_REJECTED:
            return {
                ...state, isFetching: false, error: "Some error",
            }
        default:
            return state;
    }
}

export default formReducer;