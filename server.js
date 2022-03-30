const app=require("./index")

const connectDB=require("./configs/db")

app.listen(5050,async()=>{
    try {
        await connectDB()
        console.log("Listening on 5050 port server")
    } catch (error) {
        console.log({error:error.message})
    }
})