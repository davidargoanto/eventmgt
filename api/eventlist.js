export async function eventlist(req) {
    console.log(req)
    const data = await fetch("http://localhost:5670/api/event/create", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title : req.title,
        description : req.description,
        location : req.location,
        datetime : req.datetime,
        availableseats : req.availableseats,
        price : req.price,
        userID: req.userID,
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

