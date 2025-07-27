import React,{useState} from 'react';

function PostForm(){
const [name, setName] = useState("");
const [res, setRes] = useState(null);

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        header:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({name})
    })
    .then((res)=>res.json())
    .then((data)=>setRes(data))
    .catch((err)=>console.log(err));
};
 return (
    <div>
      <h2>📨 PostForm Example</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>

      {res&& (
        <div>
          <p><strong>Response:</strong> {JSON.stringify(res)}</p>
        </div>
      )}
    </div>
  );
}
export default PostForm;