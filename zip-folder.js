#! /usr/bin/env node

var archiver = require('archiver');
var fs = require('fs');

function create() {
	console.log("Creating zip");

	var output = fs.createWriteStream('app.zip');
	var archive = archiver.create('zip');


	output.on('close', function() {
	  console.log(archive.pointer() + ' total bytes');
	  console.log('archiver has been finalized and the output file descriptor has closed.');
	});

	archive.pipe(output);
    
	
	archive.directory('./');
	archive.finalize();


    console.log("Success");
};

create();