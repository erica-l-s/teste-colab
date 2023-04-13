import axios from "axios"
import { useEffect,useState } from "react"

const User = ()=>{
    const [userList, setUserList] = useState([])
    const [activeLink, setActiveLink] = useState(0)
    
    

   const user = ()=>{
        axios.get('https://randomuser.me/api/')
         .then((response)=>{
            setUserList(response.data.results)
         })
    }
   console.log(userList)
    const onClickUser = () =>{
        user()
        setUserList()
    }

    useEffect(()=>{
        onClickUser()
    },[])

    const icons = [
        'fas fa-user fa-2x',
        'fas fa-envelope fa-2x',
        'fas fa-calendar-alt fa-2x',
        'fas fa-map-marker fa-2x',
        'fas fa-phone fa-2x',
        'fas fa-lock fa-2x',
    ]

    const PhraseGenerator = ({user}) =>{
        
        const phrases = [
            `Hi my name is ${user.name.first} ${user.name.last}`,
            `My email address is ${user.email}`,
            `My birthday is ${user.dob.date.slice(0,10)}`,
            `My address is ${user.location.street.name}`,
            `My phone number is ${user.phone}`,
            `My password is ${user.login.password}`,
        ]
        return<h1>{phrases[activeLink]}</h1>
       
    }

    const activeLinkHandler = (index) =>{
     setActiveLink(index)
    }

     return(
        <div>
                       
                {userList && userList.map((list,index) =>{
            return(
              
                <div key={index}>
                    <img src={list.picture.large}></img>
                    <button value={userList} onClick={onClickUser}>New</button>
                   <PhraseGenerator user={list}/>
                   <div className="app--icons">
                    {icons.map((icon,index)=>{
                        return(
                            <i className={icon} key={index} onMouseMove={()=>activeLinkHandler(index)}></i>
                        )
                    })}

                   </div>

                  
                </div>
            )
    
        })}
        </div>
    
      )
  
   
}

export default User