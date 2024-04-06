function firstChar(text) {
	let res=text.trim();
	if(res.length!=0 ){
		return res.charAt(0) ;
	}
	return '';
}

// Do not change the code below

//const text = prompt("Enter text:");
alert(firstChar(text));
