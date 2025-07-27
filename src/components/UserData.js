import React, { useState, useEffect } from 'react';

function UserData() {
 const[user,setUser]=useState(null);
 const[loading,setLoading]=useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
     .then(res=>res.json())
     .then(data=>{
     setUser(data);
     setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
export default UserData
