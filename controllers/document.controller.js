var config = require('config.json');
var express = require('express');
var router = express.Router();
var multer = require('multer');
var documentService = require('services/document.service');
const multerConfig = {
    
    storage: multer.diskStorage({
     //Setup where the user's file will go
     destination: function(req, file, next){
       next(null, './uploads');
       },   
        
        //Then give the file a unique name
        filename: function(req, file, next){
            console.log(file);
            const ext = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.'+ext);
          }
        })
      };

var uploadDoc = multer({dest:'./uploads'}); 
// routes
router.post('/upload', multer(multerConfig).single('fileName'), upload);

module.exports = router;


function upload(req, res) {
    console.log(req.fileName, req.description);
    res.send('Complete!');
    // fro data insert to dbb
    /* documentService.create(req)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        }); */
}