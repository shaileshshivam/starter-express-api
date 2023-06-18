const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get("/api/trustloop/consent/:companyId", (req, res) => {
  const companyId = req.params.companyId
  console.log(req.query)

  console.log({
    status: req.query.status,
    consentID: req.query.status,
  })

  res.json({}).end();
})


app.listen(process.env.PORT || 3000)
