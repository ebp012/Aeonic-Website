function eShow (elename, elename2, elename3, elename4) {
	document.getElementById(elename).style.display="inline-block";
	document.getElementById(elename2).style.display="inline-block";
	document.getElementById(elename3).style.display="inline-block";
	document.getElementById(elename4).style.display="inline-block";
}
function eHide (elename) {
	document.getElementById(elename).style.display="none";
}
function eShowBlock (elename) {
	document.getElementById(elename).style.display="block";
}
function eToggle (elename, display) {
	if (display == "inline-block") {
		document.getElementById(elename).style.display="inline-block";
		display = "none";
	}
	else if (display == "none") {
		document.getElementById(elename).style.display="none";
		display = "inline-block";
	}
	else if (display == "block") {
		document.getElementById(elename).style.display="block";
		display = "no-block";
	}
	else if (display == "no-block") {
		document.getElementById(elename).style.display="none";
		display = "block";
	}
}
function eBoolShowBlock (condition, elename) {
	if (condition == true) {
		document.getElementById(elename).style.display="block";
	}
	else if (condition == false) {
		document.getElementById(elename).style.display="none";
	}
}
function eBoolShow (condition, elename) {
	if (condition == true) {
		document.getElementById(elename).style.display="inline-block";
	}
	else if (condition == false) {
		document.getElementById(elename).style.display="none";
	}
}
function eDefaultTimeout (timeout) {
	var edt = timeout;
}
function easyRand (high, low, varval) {
	var easyRand123 = Math.floor(Math.random() * high) + low;
	return easyRand123;
}
function eToggle (elename) {
  var x = document.getElementById(elename);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function eInline (elename) {
  var x = document.getElementById(elename);
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}