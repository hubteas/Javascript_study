// 9번

// fetch("https://jsonplaceholder.typicode.com/users")

// .then((response)=> response.json()).then(console.log);

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
  // console.log(response.ok);
  if(!response.ok){
    throw new Error(`response: ${response.status}`);
  }
  return response.json();
}).then((post)=>{
  if(!post){
    throw new Error(`none result`);

  }
  return{id : post.id , title:post.title};
}).then(console.log);