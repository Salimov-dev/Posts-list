import { useEffect } from "react"
import { useDispatch } from "react-redux"
// store
import { loadPostsList } from "../store/posts.store"
import { loadUsersList } from "../store/users.store"

const AppLoader = ({children}) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadPostsList())
        dispatch(loadUsersList())
    }, [])

    return children
}

export default AppLoader