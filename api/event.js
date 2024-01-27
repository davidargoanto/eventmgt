export async function createevent(req) {
    const token = await localStorage.getItem("token");
    console.log(req)

    const data = await fetch("http://localhost:5670/api/event/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
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
      return res
    }else {
      alert(JSON.stringify(res.error))


    };

  }