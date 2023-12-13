const express = require('express');
const app = express();
const port = 3000;
let numberOfBottles = 99;
let BugCount = 127;

app.use(express.static('public'));

// home page route
app.get('/', (req, res) => {
  res.send(`<h1>${numberOfBottles} Bottles of beer on the wall</h1><a href="/${numberOfBottles - 1}">Take one down, pass it around</a>`);
});
// my bottles route
app.get('/:NumberOfBottles', (req, res) => {
const bottlesLeft = parseInt(req.params.NumberOfBottles);
if (bottlesLeft >= 0) {
    res.send(
        `<h1>${bottlesLeft} ${bottlesLeft === 1 ? 'bottle' : 'bottles'} of beer on the wall</h1>
      <a href="/${bottlesLeft - 1}">Take one down, pass it around</a>
      ${bottlesLeft > 0 ? `<a href="/">Start over</a>` : ''}

    `)
}
else {
    res.status(404).send('not found');
}
})


app.get(
    '/bug',(req,res)=>{
        BugCount -= 1;

        if (Math.random() < 0.2) {
          // Simulate a case where bug count randomly increases
          BugCount += Math.floor(Math.random() * 5) + 1;
        } 
        res.send(`
    <h1>${BugCount} little bugs in the code</h1>
    <a href="/bugs">Take one down, patch it around</a>
  `);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
    
