
const fs = require('fs')
const {readFilesTree} = require('./build-script.js')
const handler = require('serve-handler');
const http = require('http');


function debounce(fn,wait){
    var timer = null;
    return function(){
        if(timer !== null){
            clearTimeout(timer);
        }
        timer = setTimeout(fn,wait);
    }
}
    


fs.watchFile('index.ejs',  function(curr, prev) {
    readFilesTree()
    console.log(' index.ejs 有修改');
});


fs.watch('views', {

    recursive:true
} , debounce (function(curr, prev) {
    readFilesTree()
    console.log(' views 有修改');
} , 500));





const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response);
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});