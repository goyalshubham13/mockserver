const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/auth', (req, res) => {
      console.log(req.headers);
      res.send({
        "commands":[
          {
            "type":"com.okta.action.update",
            "value":{
              "credential":"VERIFIED"
            }
          }
        ]
    });
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
