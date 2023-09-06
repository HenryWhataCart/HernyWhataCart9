/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import getRol from "../../../redux/actions/Rol/getRol"

const GetDataCreateRole = () => {

    const {businessId} = useParams()
    const roles = useSelector((state) => state.rol)
    const dispatch = useDispatch()
    console.log(roles)
    console.log(businessId)

    useEffect(() => {
        dispatch(getRol(businessId))
    }, [dispatch, businessId])
    
    return {
        roles,
        dispatch,
        businessId
    }
}

export default GetDataCreateRole