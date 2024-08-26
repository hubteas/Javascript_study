async function fetchZipcodes(){
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if(!response.ok){
      throw new Error(`response : ${response.status}`);
    }
    const users = await response.json();

    if(!users || users.length === 0){
      throw new Error(`none result`);
    }

    const zipcodes = users.map((user) => user.address.zipcode);
    console.log(zipcodes);
  } catch(error){
    console.log(error);
  }
}

fetchZipcodes();