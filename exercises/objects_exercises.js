/*
1- *** Compare Objects ***
Define a function, compareObjects, that accepts two objects as
arguments.
compareObjects should return true if both objects have exactly the same
key/value pairs. Otherwise, compareObjects should return false.
Assume the objects are not nested.
compareObjects({ name: "Yara" }, { name: "Yara" }) // -> true
compareObjects({ name: "Omar" }, { name: "Omar", age: 12 }) // -> false
*/

function compareObjects(object1, object2)
{
	if (Object.keys(object1).length !== Object.keys(object2).length)
		return (false);
	for (key in object1)
		if (object1[key] != object2[key])
				return (false)
	return (true);
}

console.log(compareObjects({ name: "Yara" }, { name: "Yara" }));
console.log(compareObjects({ name: "Omar" }, { name: "Omar", age: 12 }));

/* 2- *** Attendance Check ***
Define a function, attendanceCheck, that accepts a day of the week
as a string.
Using the globally-defined classRoom array, attendanceCheck should
return a new array with only the names of the students present
on the inputted day of the week.
classCheck('Monday'); // => ['Rania', 'Sara']
classCheck('Wednesday'); // => ['Rania', 'Lina']
*/

let classRoom = [
	{
		Rania: [
		{ Sunday: true },
		{ Monday: true },
		{ Tuesday: true },
		{ Wednesday: true },
		{ Thursday: true },
		],
	},
	{
		Lina: [
		{ Sunday: true },
		{ Monday: false },
		{ Tuesday: false },
		{ Wednesday: true },
		{ Thursday: false },
		],
	},
	{
		Sara: [
		{ Sunday: false },
		{ Monday: true },
		{ Tuesday: true },
		{ Wednesday: false },
		{ Thursday: true },
		],
	},
	{
		Amira: [
		{ Sunday: true },
		{ Monday: false },
		{ Tuesday: false },
		{ Wednesday: false },
		{ Thursday: false },
		],
	},];

function classCheck(day)
{
	let length = classRoom.length;
	let attendies = [];
	for (i = 0; i < length; i++)
	{
		let key = Object.keys(classRoom[i])[0];
		for (keys in classRoom[i][key])
		{
			let which_day = Object.keys((classRoom[i][key][keys]))[0];
			// console.log(which_day)
			// console.log(classRoom[i][key][keys])
			if (day === which_day)
				if (classRoom[i][key][keys][which_day] == true)
					attendies.push(key);
			// console.log("++")
		}
		// console.log("================================");
	}
	return (attendies)
}

console.log (classCheck("Wednesday"));


/*
3- *** Call Them All ***
Write a function callThemAll, that, given an object and a value,
calls every method in the object, passing in the value as the
argument with each call.
callThemAll should return an array with all of the returned values
from each method invocation. The order of the elements in the
returned array does not matter.
callThemAll(addNums, 100); // => [110, 120]
*/


let object = {
	key: "value",
	add_ten: function (value) {
		value += 10;
		return (value);
	},
	add_twenty: function (value) {
		value += 20;
		return (value);
	}
}

function callThemAll (object, value)
{
	let all_keys = Object.keys(object);
	let arr = [];
	for (let i = 0; i < Object.keys(object).length; i++)
	{
		console.log("im here");
		if (typeof (object[all_keys[i]]) === "function")
		{
			console.log(typeof (object[all_keys[i]]) === "function");
			arr.push(object[all_keys[i]](value));
		}
	}
	return arr;
}

console.log(callThemAll(object, 100));