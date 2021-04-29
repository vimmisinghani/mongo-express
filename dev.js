const app = require("./app");
const { connect } = require("./mongoose");
var cors = require('cors')
app.use(cors())

connect();

const port = 4000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
