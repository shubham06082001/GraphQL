const express = require("express")
require("dotenv").config()

const { graphqlHTTP } = require("express-graphql")
const port = process.env.PORT || 8080
const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(port, console.log(`Server listening on port ${port}`))
