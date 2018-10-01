const dotenv = require('dotenv');
const fs = require('fs');

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config;
    var env;

    if (dev) {
    	env = dotenv.config().parsed;
    } else {
  		env = dotenv.parse(fs.readFileSync('.env.production'))  	
    }

  	appConfig.plugins.push(
            new webpack.DefinePlugin({ 'process.env.Variable': JSON.stringify(env.Variable) })
	);
	
	return appConfig;
  },
};