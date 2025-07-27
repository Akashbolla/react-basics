import React,{useState} from 'react';

function GitHubUser(){
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null); 
  const fetchUser=()=>{
    fetch(`https://api.github.com/users/${username}`)
    .then((res)=>res.json())
    .then((data)=>setUser(data))
    .catch((err)=>console.log(err));
  };
 
  return(

    <div>(
        <h2>GitHub User Search</h2>
        <input placeholder="enter git username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={fetchUser}>Search</button>
        {user&&(
            <div>
                  <img src={user.avatar_url} width="100" alt="avatar" />
                <p>name:{user.name}</p>
                <p>Bio:{user.bio}</p>
            </div>
        )}
    </div>
  );
}
export default GitHubUser;