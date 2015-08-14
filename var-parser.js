var reg = /\.[A-Za-z0-9]+\./ig;

var parseVars = function(str, values){	
	try{
		str.match(reg)
			.map(function(elem){
				return elem.replace(/\./g,'');
			})
			.map(function(elem){
				str = str.replace(new RegExp('\\.'+elem+'\\.','ig'), values?values[elem.toLowerCase()]||'':'')
			});
		return str;
	}catch(err){
		return str;
	}
}

module.exports = parseVars;
