const myArray = [
    'message 01',
    'message 02',
    'message 03',
    'message 04',
    'message 05',
];

let messageOne = prompt("Choose an Option:\n 1: Show messages\n 2: Add a message\n 3: Delete a message\n 0: Quit", "");
//Part One: Display messages
if(messageOne==0)
{
	document.getElementById("output").innerHTML = "Good Bye";
}else if(messageOne==1)
{
let str = "The current messages are:";
	for(let i=0;i< myArray.length;i++)
	{
		str = str+"<br>"+(i+1)+": ";
		str =  str+myArray[i];
	}
	document.getElementById("output").innerHTML = str;
//Part Two: Add message
}else if(messageOne==2)
{
	let messageTwo = prompt("Enter a new message:","");
	myArray.push(messageTwo);
	let str = "The current messages are:";
	for(let i=0;i< myArray.length;i++)
	{
		str = str+"<br>"+(i+1)+": ";
		str =  str+myArray[i];
	}
	document.getElementById("output").innerHTML = str;
//Part Three: Delete message
}else if(messageOne==3)
{
	let messageThree = prompt("Enter the message index (between 1 and "+myArray.length+")","");
	messageThree = messageThree-1;
	if(messageThree >= 0 && messageThree < myArray.length)
	{
		myArray.splice(messageThree, 1);
		let str = "The current messages are:";
		for(let i=0;i< myArray.length;i++)
		{
			str = str+"<br>"+(i+1)+": ";
			str =  str+myArray[i];
		}
		document.getElementById("output").innerHTML = str;
	}
	else
	{
		document.getElementById("output").innerHTML = "Please refresh and select a correct command";
	}
}else
{
	document.getElementById("output").innerHTML = "Please refresh and select a correct command";
}