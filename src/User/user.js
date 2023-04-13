import { useEffect,useState } from "react"
import axios from 'axios'

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
            `Hi my name is `,
            `My email address is `,
            `My birthday is `,
            `My address is `,
            `My phone number is `,
            `My password is `,
        ]

        const info = [
            `${user.name.first} ${user.name.last}`,
            `${user.email}`,
            `${user.dob.date.slice(0,10)}`,
            `${user.location.street.name}`,
            `${user.phone}`,
            `${user.login.password}`
        ]

       return(<div className="info">
        <p id="user-title">{phrases[activeLink]}</p>
        <h3>{info[activeLink]}</h3>
        </div>)
       
    }

    const activeLinkHandler = (index) =>{
     setActiveLink(index)
    }

     return(
        <div className="card">
           <div className="detail">
           {userList && userList.map((list,index) =>{
            return(
              
                <div key={index}>
                    <div>
                        <img src={list.picture.large} className="user-photo"></img>
                        <button value={userList} onClick={onClickUser} >New</button>
                    </div>
                    
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
      
        </div>
    
      )
  
   
}

export default User