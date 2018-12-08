/*if touch device remove all onmouseenter and onmouseleave events*/
/*disable doubletap*/
if ("ontouchstart" in document.documentElement)
{
	document.removeEventListener("onmouseenter", removeStyleOnHover);
	document.removeEventListener("onmouseleave", addStyleOnHover);  
	let doubleTouchStartTimestamp = 0;
	document.addEventListener("touchstart", function(event){
    let now = +(new Date());
    if (doubleTouchStartTimestamp + 500 > now){
        event.preventDefault();
    };
    doubleTouchStartTimestamp = now;
});
	  
}

j = 0;
function playInstrument(event) {
	for (i=0; i<keys.length; i++) {
		if (keys[i].code === event.keyCode) {
			let audio = document.createElement('audio');
			id = keys[i].name + "-audio" + ++j;
			audio.setAttribute('id', id);
			let src = keys[i].source;
			let source = document.createElement('source');
			source.setAttribute('src', src);
			source.setAttribute('type', 'audio/wav');
			document.getElementById('audio-storage').appendChild(audio);
			document.getElementById(id).appendChild(source);
			document.getElementById(keys[i].name).style.opacity = "0.6";
			document.getElementById(id).play(removeFromDom());
		}
	}
}


function playOnClick(event) {
	for (i=0; i<keys.length; i++) {
		if (keys[i].name === event.target.id) {
			let audio = document.createElement('audio');
			id = keys[i].name + "-audio" + ++j;
			audio.setAttribute('id', id);
			let src = keys[i].source;
			let source = document.createElement('source');
			source.setAttribute('src', src);
			source.setAttribute('type', 'audio/wav');
			document.getElementById('audio-storage').appendChild(audio);
			document.getElementById(id).appendChild(source);
			document.getElementById(id).play(this.removeFromDom());		
		}
	}
}

/*remove from the dom once played*/
function removeFromDom() {	
		let aud = document.getElementById(id);
		let selected = document.getElementById(keys[i].name);
		aud.onended = function() {
				   aud.parentNode.removeChild(aud);
				   selected.style = null;
			};
}

/*removes letter on hover*/
function removeStyleOnHover(event) {
	for (i=0; i<keys.length; i++) {
		if (keys[i].name === event.target.id) {
			hovered = event.target.id;
			content = document.getElementById(hovered).innerHTML;
			document.getElementById(hovered).innerHTML = null;
			document.getElementById(hovered).style.cursor =  "pointer";
		}
	}
}

function addStyleOnHover(event) {
	for (i=0; i<keys.length; i++) {
		if (keys[i].name === event.target.id) {
		document.getElementById(hovered).innerHTML = content;
		document.getElementById(hovered).style = null;
		}
	}
}
