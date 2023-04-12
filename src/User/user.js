import axios from "axios"
import { useEffect,useState } from "react"


const User = ()=>{
    const [userList, setUserList] = useState([])
    

   const user = ()=>{
        axios.get('https://randomuser.me/api/')
         .then((response)=>{
            setUserList(response.data.results)
         })
    }

    const onClickUser = () =>{
        user()
        setUserList()
    }

    useEffect(()=>{
        onClickUser()
    },[])

     return(
        <div>
           
            
                {userList && userList.map((list,index) =>{
            return(
              
                <div key={index}>
                    <img src={list.picture.large}></img>
                    <button value={userList} onClick={onClickUser}>New</button>
                    <h3>{list.name.title}. {list.name.first} {list.name.last}</h3>
                    <p>Age: {list.dob.age} years old</p>
                    <p>City: {list.location.city}, {list.location.country}</p>
                </div>
            )
    
        })}
        </div>
    
      )
  
   
}

export default User