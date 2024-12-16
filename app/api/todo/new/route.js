import Todo from '@/models/Todo'
import { connectDB } from '@/utils/database'


export const POST = async (req, res) => {
    const {text,userid} = await req.json()
    // console.log(`POST request received for ${text} by ${userid}--------------------------`)
    if (!text || text.trim().length === 0) {
        return new Response(JSON.stringify({ error: "Task text is required" }), {
          status: 400,
        });
      }
    try {
        await connectDB()
        const todo = Todo.create({
            text,
            user: userid
        })
        return new Response(JSON.stringify(todo), {status:201})
    } catch (error) {
        return new Response(JSON.stringify({error: error.message}), {status:500})
        
    }
}