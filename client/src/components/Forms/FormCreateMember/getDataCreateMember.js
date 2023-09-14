import { useDispatch, useSelector } from "react-redux"
import getUser from "../../../redux/actions/User/getUser"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const GetDataCreateMember = () => {

    const user = useSelector(state => state?.user)
    const dispatch = useDispatch()
    const {businessId} = useParams()
    
    useEffect(() => {
        dispatch(getUser(businessId))
    },[dispatch, businessId])
    

    return {
        dispatch,
        user,
        businessId,
    }
}

export default GetDataCreateMember