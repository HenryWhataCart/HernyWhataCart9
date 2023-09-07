/* eslint-disable react-hooks/exhaustive-deps */

import { useDispatch, useSelector } from "react-redux"

import getRol from "../../../redux/actions/Rol/getRol"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

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