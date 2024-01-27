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
      sessionStorage.setItem("userID", res.data.id)
      return res
    }else {
      const res =  await data.json()
      console.log (res)
      alert(JSON.stringify(res.error))
      throw new Error("Network response was not OK");

    };

  }
  
  export async function register(req) {
    console.log(req)
    const data = await fetch( process.env.NEXT_PUBLIC_API_URL +"/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: req.name,
        email: req.email,
        password: req.password,
        refcode : req.referralC,
        role : req.role
      }),
    });
    if (data.ok=== true){
      console.log("hi")
      const res =  await data.json()
      return res
    }else {
      const res =  await data.json()
      console.log (res)
      alert(JSON.stringify(res.error))
      throw new Error("Network response was not OK");

    };
  }

  export async function productUser() {
    const token = await localStorage.getItem("token");
  
    console.log("token => ", token);
  
    const data = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/product/product-secret",
      {
        method : "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (data.ok=== true){
      console.log("hi")
      const res =  await data.json()
      return res
    }else {
      const res =  await data.json()
      console.log (res)
      throw new Error("Network response was not OK");

    };
  }