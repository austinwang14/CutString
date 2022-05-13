const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/test', (req, res) => {
  const requestBody = req.body.string_to_cut;
  let result = '';
  for (let i = 2; i < requestBody.length; i += 3) {
    let currentLetter = requestBody[i]
    result += currentLetter;
  }
  res.send({return_string: result});
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
