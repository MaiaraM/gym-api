import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ mensagem: 'Hello' }));

app.listen(3333, () => {
  console.log('Serve Start!');
});
