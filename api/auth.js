import axios from "axios"
export async function login(req) {

    const data = await fetch("http://localhost:5670/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: req.email,
        password: req.password,
      }),
    })

    
    if (data.ok=== true){
      console.log("hi")
      const res =  await data.json()
      console.log (res)
      localStorage.setItem("token", res.token);
      return res
    }else {
      const res =  await data.json()
      console.log (res)
      alert(JSON.stringify(res.error))
      throw new Error("Network response was not OK");

    };

  }
  
  export async function register({ name, email, password }) {
    const data = await fetch("http://localhost:5670/api/auth/register", {
      method: "POST",
  
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    return data.json();
  }

  