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
                {userList && userList.map((list,index) =>{
            return(
              
                <div key={index}>
                    <img src={list.picture.large}></img>
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