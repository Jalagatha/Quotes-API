import app from './server.js';
const PORT = process.env.PORT ||4000;
app.listen(PORT, () => {
  console.log(`Server is Listening On Port http://localhost:${PORT}`);
});