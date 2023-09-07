import { useDispatch, useSelector } from "react-redux"

import getRol from "../../../redux/actions/Rol/getRol"
import getUser from "../../../redux/actions/User/getUser"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const GetDataCreateMember = () => {

    const roles = useSelector((state) => state.rol)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const {businessId, businessName} = useParams()
    
    useEffect(() => {
        dispatch(getRol(businessId))
        dispatch(getUser(businessId))
    },[dispatch, businessId])
    

    return {
        roles,
        dispatch,
        user,
        businessId,
        businessName
    }
}

export default GetDataCreateMember