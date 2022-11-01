// types 
import { types } from './types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    specification: []
}

export const specificationReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
    switch (type) {
        case types.SET_NEW_SPECEFICATION:
            return {
                ...state,
                specification: [...state.specification, { ...payload, id: uuidv4() }]
            }
        case types.EDIT_SPECEFICATION:
            return {
                ...state,
                specification: state.specification.map((item: any) => item.id === payload.id ? { ...payload.data, id: payload.id } : item)
            }
        default:
            return state
    }
}