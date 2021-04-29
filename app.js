const express = require("express");

const app = express();
var request = require('request');
var fs = require('fs');


app.use(express.urlencoded({ extended: false }));
var cors = require('cors')
app.use(cors())

/*
curl -X POST \
'https://massscanning.azurewebsites.net/process' \
--header 'Authorization: e57becce2f13454722fa372fcc7a9' \
--header 'Cookie: ARRAffinity=b4de86b5eed7998383b6998068c99fd5fff73af4be8101fe0a02dec98f3e34af; ARRAffinitySameSite=b4de86b5eed7998383b6998068c99fd5fff73af4be8101fe0a02dec98f3e34af' \
--form 'sys_id="6ee57f811b5aa490ac941069b04bcb5b"' \
--form 'source_id="P2K200"' \
--form 'file=@"/Users/ajmsoftwaresmacair1/Downloads/202103241207.pdf"' 

*/

app.get("/test", async (req, res) => {
  try {
    const Note = require("./models/Note");
    const notes = await Note.find({});
    
    return res.status(200).send(
      notes
    );
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
});

app.post("/test", async (req, res) => {
  try {
    const Note = require("./models/Note");
    const note = new Note(req.body);
    await note.save();
    return res.send("Note saved. <a href=''>Refresh</a>");
  } catch (e) {
    return res.send(e);
  }
});

module.exports = app;
