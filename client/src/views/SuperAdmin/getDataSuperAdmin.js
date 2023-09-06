import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getBusiness } from '../../redux/actions/Business/getBusiness'

const GetDataSuperAdmin = () => {

    const companies = useSelector((state) => state.business)
    const dispatch = useDispatch()
 
    useEffect(() => {
        dispatch(getBusiness())
    },[dispatch])

    return {
        companies
    }
}

export default GetDataSuperAdmin