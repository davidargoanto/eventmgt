

export async function getdata(){
    const userid = parseInt(sessionStorage.getItem("userID"))
    console.log(userid)
    const data = await fetch("http://localhost:5670/api/profile/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userID: userid
        }),
      })
  
      
      if (data.ok=== true){
        const res =  await data.json()
        console.log (res)
        return res
      }else {
        const res =  await data.json()
        console.log (res)
        alert(JSON.stringify(res.error))
        throw new Error("Network response was not OK");
  
      };
}

export async function getctr(){
    const id = parseInt(sessionStorage.getItem("eventid"))
    const data = await fetch ("http://localhost:5670/api/ctr/month", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            eventID: id
        }),
      })
  
      
      if (data.ok=== true){
        const res =  await data.json()
        console.log (res)
        return res
      }else {
        const res =  await data.json()
        console.log (res)

  
      };
}