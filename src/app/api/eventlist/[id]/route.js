export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(params) {
const {id} = params
    

    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
    });
    const eventlistdetail = await res.json();

    return Response.json({eventlistdetail});
}