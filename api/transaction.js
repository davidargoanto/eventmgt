export async function dopay(req){
    const userid = parseInt(sessionStorage.getItem("userID"))
    const eventID = parseInt(sessionStorage.getItem("oneid"))
    console.log(userid, eventID, req)
    const data = await fetch("http://localhost:5670/api/transaction/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userID: userid,
            eventID : eventID,
            points : req.points,
            amount : req.amount,
            code : req.code 
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