const express = require("express");
const port = process.env.PORT || 4040;

const app = express();

app.get("/", (req, res)=>{
	res.send("hi there")
});


app.listen(port, ()=> console.log(`Server running on port ${port}`));