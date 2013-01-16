var satic = require('node-static'),
  file = new(satic.Server)(process.argv[3]),
  http = require('http'),
  podiumId = process.argv[2];

  //Example: node server.js GNF9426/nb-no [web_folder]
  // Give the gnfid and lang separated by /
  // A folder to where the web files are located can be added, if not supplied, current folder will be default

http.createServer(function (request, response) {
  if(request.url === '/FlashXml.xml' || request.url === '/podiumdata.json'){
    var options = { host: 'digital.gyldendal.no',  port: 80,  path: '/PodiumAdmin/GNF/Content/' + podiumId + request.url,  method: 'GET' };   
    var proxy_request = http.request(options);
    proxy_request.addListener('response', function (proxy_response) {
      proxy_response.addListener('data', function(chunk) {
        response.write(chunk, 'binary');
      });
      proxy_response.addListener('end', function() {
        response.end();
      });
      response.writeHead(proxy_response.statusCode, proxy_response.headers);
    });
    request.addListener('end', function() {
      proxy_request.end();
    });
  }else{
    request.addListener('end', function () {
      file.serve(request, response);
    });
  }
}).listen(8080);
