const app = require('./src/app');
const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Room service running on port ${PORT}`);
});
