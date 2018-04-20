var fs = require('fs')
var archiver = require('archiver')

var output = fs.createWriteStream(__dirname + '/dist.zip')
var archive = archiver('zip', {
  zlib: { level: 9 },
})

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes')
})

output.on('end', function() {
  console.log('data has been drained')
})

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.log(err)
  } else {
    throw err;
  }
})

archive.on('error', function() {
  throw err;
})

archive.pipe(output)
