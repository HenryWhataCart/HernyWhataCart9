import { useDispatch, useSelector } from "react-redux"
import getRol from "../../../redux/actions/Rol/getRol"
import { useEffect } from "react"

const GetDataCreateMember = () => {

    const roles = useSelector((state) => state.rol)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRol())
    }, )
    

    return {
        roles,
        dispatch
    }
}

export default GetDataCreateMember
