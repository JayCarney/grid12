var sass = require('node-sass');
var watch = require('node-watch');
var fs = require('fs');


function buildSass(){
    sass.render({
        file: 'src/style.scss',
        includePaths: ['node_modules/'],
      }, function(err, result) {
          if (err) {
              console.log(err.status); // used to be "code" in v2x and below
              console.log(err.column);
              console.log(err.message);
              console.log(err.line);
            }
            else {
                fs.writeFile('dest/style.css', result.css, function(err){
                    if(err){
                        console.log(err);
                    }
                  });
            }
      });
}




buildSass();
 
watch('./', { recursive: true, filter: /\.scss$/ }, function(evt, name) {
  console.log('%s changed.', name);
  buildSass();
});