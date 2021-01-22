const express = require("express")
const app = express()
const path = require("path")

// app.use("/public", express.static(path.join(__dirname, "public")))
app.use(express.static("public"))

app.listen(5000, () => {
  console.log(`server is on port 5000 🚀`)
})
