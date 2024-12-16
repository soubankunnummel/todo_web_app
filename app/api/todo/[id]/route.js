

import Todo from "@/models/Todo"
import { connectDB } from "@/utils/database"



export const GET = async (req, {params}) => {
    await connectDB()
    // await const {id} = params
    const {id} = await params
    try {
        const todo = await Todo.find({user: id}).sort({date: -1})
        return new Response(JSON.stringify(todo), {status:200})
    } catch (error) {
        return new Response(JSON.stringify({error: error.message}), {status:500})
        
    }
}
