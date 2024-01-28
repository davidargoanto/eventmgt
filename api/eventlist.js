export async function getdata() {

    const data = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/event/getall",
        {
            method: "GET",
           
        }
    );
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