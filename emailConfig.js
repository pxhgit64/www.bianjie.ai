#!/usr/bin/env node

let fs = require('fs');
let program = require('commander');

function list (val) {
	return val.split(',')
}
program.option("-p, <items>","config list" ,list).parse(process.argv);
program = list(program.args[0])
replaceEnv([
		"./docs/.vuepress/config.json",
	],
	{
		"serverId": program[0],
		"templateId": program[1],
		"userId": program[2],
	}
);


function replaceEnv(files, params) {
	console.log(params,"????")
	files.forEach(function(file,index){
		let result = fs.readFileSync(file).toString();
		for (let key in params) {
			let r = "\\${"+key+"}";
			result = result.replace(new RegExp(r,"g"), params[key]);
		}
		
		fs.writeFileSync(file, result)
	});
}
