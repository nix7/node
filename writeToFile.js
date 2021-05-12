const fs = require('fs')

const content = 'Some content!'

fs.writeFile('testing.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})