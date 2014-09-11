var final = 0;

for (var i = 2; i < process.argv.length; i++) {
	final += Number(process.argv[i]);
}

console.log(final);
