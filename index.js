const express = require("express");
const app = express();

app.get("/remoteconfig", (req, res) => {
  let uid = req.query.id;
  if (uid) {
    let channelHash = uid.charCodeAt(0);
    if (channelHash > 91) {
      res.json({channel: "risk-factor"});
    } else {
      res.json({channel: ""});
    }
  } else {
    res.json({channel: ""});
  }
});

app.listen(80, () => console.log("Listening on 80"));
