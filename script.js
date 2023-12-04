function firstChar(text) {
  let res="";
	if(text.length===0 || text[0]===" "){
		return res ;
	}
	return text[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
