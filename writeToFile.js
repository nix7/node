const fs = require('fs')

const content = 'Just testing'

fs.writeFile('testing.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
