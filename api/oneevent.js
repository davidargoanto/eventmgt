export async function getdataone() {
    const id = parseInt(sessionStorage.getItem("oneid"))
    console.log(id)
    const data = await fetch("http://localhost:5670/api/event/getone",
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringfy({
                eventid:id
            })
           
        }
    );
    console.log(data)
    if (data.ok === true) {
        console.log("hi")
        const res = await data.json()
        return res
    } else {
        const res = await data.json()
        console.log(res)
        throw new Error("Network response was not OK");

    };

    
  }