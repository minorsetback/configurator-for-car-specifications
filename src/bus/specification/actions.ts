//Types
import { types } from './types';

export const specificationActions = Object.freeze({
    setSpecification: (data: any) => {
        return {
            type: types.SET_NEW_SPECEFICATION,
            payload: data
        }
    },
    editSpecification: (id: string, data: any) => {
        return {
            type: types.EDIT_SPECEFICATION,
            payload: { id: id, data: data }
        }
    }
})