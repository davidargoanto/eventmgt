export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {

    

    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        headers: {
            "Content-Type": "application/json"
        },
    });
    const eventlist = await res.json();

    return Response.json({eventlist});
}