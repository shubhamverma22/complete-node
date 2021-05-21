//TODO:																			Javascript mock interview

/*
// function sayName() {
// 	name = "Shubham";
// 	function displayName() {
// 		console.log(name);
// 	}
// 	displayName();
// 	let name;
// }
// sayName();

// var name = "Shubham";
// //console.log(name);

// function sayName() {
// 	var name = 10;
// 	console.log(name);
// }

// sayName();
//shadowing and temporal deadjone, popsups

// var arr = ["India", "USA", "UK", "Canada", "Europe"];

// const newA = arr.sort();
// console.log(newA);

// arr.forEach((ele) => {
// 	console.log(ele);
// });

// str = "absd";
// function pallindrome(str) {
// 	// const newStr = str.split("");
// 	//console.log(newStr);
// 	//let count = 0;
// 	var n = str.length;
// 	for (var i = 0; i < Math.floor(n / 2); i++) {
// 		if (str[i] !== str[n - 1 - i]) {
// 			return false;
// 		}
// 		//console.log(count);
// 	}
// 	return true;
// }

// pallindrome(str);

*/


//																								Problem solving

function pickingNumbers(a) {
	let biggest = 0
	a.forEach( elem => {
			const subarray = a.filter( subElem => elem-subElem === 0 || elem-subElem === 1);
			if( subarray.length > biggest) biggest = subarray.length;
	});
	return biggest;
}
var a = [2, 6, 9, 4, 2, 5, 7, 3, 4, 4, 6, 6, 8, 8];

console.log([...new Set(a)]);
