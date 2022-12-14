import React, {useState, useEffect} from 'react'
import axios from "axios"
function UserList({setActiveUserId}) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    //#region DATA FETCHING    
    //useEffect(()=>{

        //? Classical data fetch using
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res=>res.json())
        //     .then(data => setUsers(data))
        //     .finally(()=>setLoading(false))
        


        //? data fetch with axios with then  (CALLBACK HELL) 
        // axios("https://jsonplaceholder.typicode.com/users")
        //     .then(res=>{
        //        setUsers(res.data)
        //        axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
        //        .then(res=>setPosts(res.data))
        //        }
        //     )
        //     .finally(()=>setLoading(false))
        
        
        //? Yalnızca burada bir kere kullanacaksak anonim bir fonksiyon da yazabiliriz
    //     (async () =>{
    //         try {
    //           const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")
    //           const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)

    //           setLoading(false);
    //           setUsers(users);
    //           setPosts(posts);
    //           } catch (error) {
    //             console.log("error: ",error);
    //         }
    //     })()
        
    //     // getData()
    // },[])

    // const getData = async () => {
    //   try {
    //   const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")
    //   const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)

    //   setLoading(false);
    //   setUsers(users);
    //   setPosts(posts);
    //   } catch (error) {
    //     console.log("error: ",error);
    //   }
    // }

    //#endregion

    useEffect(() => {
      setLoading(false)
      axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false))
    },[])
  
  
    return (
      <div className='users'>
        <h2>Users</h2>
          {loading && <div>Users Loading</div>}
          <ul>
            {users.map(user =>(
                <li key={user.id} onClick={() => setActiveUserId(user.id)} >{user.name}</li>
              ))}
          </ul>
      </div>
  )
}

export default UserList