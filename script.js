//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const output = document.getElementById("output");
const  btn = document.getElementById("btn");


async function demo(text,delay) {
	await setTimeout(()=>{
		output.innerHTML = text;
	},delay)
}

btn.addEventListener('click',()=>{
	let t= text.value;
	let d = delay.value
	demo(t,d)
})
