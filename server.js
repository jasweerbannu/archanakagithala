const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ITC505/lab-7', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/ITC505/lab-7', (req, res) => {
  const { noun, adjective, verb, emotion, place } = req.body;
  if (!noun || !adjective || !verb || !emotion || !place) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out ALL fields</p>
      <a href="/ITC505/lab-7">Go Back to Form</a>
    `);
    return;
  }
  const madLib = `Hi, I am ${noun}. Here is my story: In a ${place}, their eyes met, sparking a connection. He admired her ${adjective}, she cherished his supportive nature. Together, they created beautiful memories ${verb}, filling their hearts with ${emotion}.`;
  res.send(`
    <h1>Submission Successful</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7">Go Back to Form</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/ITC505/lab-7`);
});
