//React
import { useDispatch, useSelector } from 'react-redux';
import { specificationActions } from '../bus/specification/actions';

export const useSpecefication = () => {
    const dispatch = useDispatch();

    const setSpecification = (data: any) => {
        dispatch(specificationActions.setSpecification(data))
    }

    const editSpecification = (id: string, data: any) => {
        dispatch(specificationActions.editSpecification(id, data))
    }

    const specification = useSelector((state: any) => state.specification.specification);

    return {
        specification,
        setSpecification,
        editSpecification
    }
}