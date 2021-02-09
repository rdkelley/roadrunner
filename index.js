const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Two route files: one to deliver HTML files, the other to
// deliver data
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on PORT: ${PORT}`);
});
