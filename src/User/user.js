import axios from "axios"
import { useEffect,useState } from "react"


const User = ()=>{
    const [userList, setUserList] = useState([])
    

    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=20')
         .then((response)=>{
            setUserList(response.data.results)
         })
    },[])

    console.log(userList)



    return(
        <div>
            
        </div>
    )
}

export default User