const fs = require('fs-extra');
const path = require('path');

const fontsDir = path.join(__dirname, '../src/vendors/fonts/');
const buildDir = path.join(__dirname, '../dist');

fs.copy(fontsDir, buildDir, err => {
   if (err) {
      console.log(err);
   } else {
      console.log('Copy fonts successful');
   }
});
