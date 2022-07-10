const fs = require('fs');
const prom = fs.promises;
const axios = require('axios');
const process = require('process');
const argv = process.argv;

const filename = argv[argv.length - 1];

let urlInfo;

const cat = async (file) => {
	const data = await prom.readFile(file, 'utf8');
	return data;
};

const fileData = async () => {
	try {
		const data = await cat(filename);
		urlInfo = data.split(/[\r\n]/);

		for (let i = 0; i < urlInfo.length; i++) {
			let url = new URL(urlInfo[i]);
			let info = await webRequest(urlInfo[i]);

			if (info === undefined) {
				continue;
			}
			let newFilename = await prom.writeFile(`${url.host}`, info, 'utf8');
			console.log(`Wrote to ${url.host}`);
		}
	} catch (error) {
		console.error(`ERROR: ${error}`);
	}
};

const webRequest = async (url) => {
	try {
		const res = await axios.get(url);
		if (!res.headers.server) {
			console.log(`Couldn't download ${url}`);
		} else {
			return res.data;
		}
	} catch (error) {
		console.error(`ERROR: ${error}`);
	}
};

fileData();
