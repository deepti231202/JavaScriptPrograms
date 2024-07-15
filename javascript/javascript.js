//program 1:

// for(let n=1;n<=100;n++)
// {
//     if(n%3==0 && n%5==0)
//     {
//         document.write("FizzBuzz","<br>");
//     }
//     else if(n%3==0)
//     {
//         document.write("Fizz","<br>");
//     }
//     else 
//     {
//         document.write("Buzz","<br>");
//     }
// }

//program 2:

// function palindrome(str)
// {
//     let str1="";
//     for (let j=str.length-1;j>=0;j--){ 
//         str1 += str[j];
//     }
//     if(str==str1){
//         return "It is a Palindrome";
//     }
//     else{
//         return "It is Not a Palindrome";
//     }
// }
// document.write(palindrome("amma"),"<br>")
// document.write(palindrome("hello"))


//program 3:

// let arr=[32,43,67,10] ;
// let arr1=arr.sort();
// let length1=arr1.length;
// document.write("Largest Number: ",arr1[length1-1]);

//program 4:

function counting(str) {
    let Count = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        
        if (Count[char]) {
            Count[char]++;
        } 
        else {
            Count[char] = 1;
        }
    }
    return Count;
}
let string = "hello everyone";
console.log(counting(string));

// function countCharacterOccurrences(str) {
//     // Initialize an empty object to store character counts
//     var charCount = {};

//     // Loop through each character in the string
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];
        
//         // If the character is already a key in the object, increment its value
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             // Otherwise, add the character as a key with a value of 1
//             charCount[char] = 1;
//         }
//     }

//     // Return the object with character counts
//     return charCount;
// }

// // Example usage:
// var string = "hello world";
// console.log(countCharacterOccurrences(string));



//program 5:    

// function longword(str){ 
//     str = str.split(" ") 
//     return str.sort((x, y) => y.length - x.length)[0];
// } 
// document.write("Longest word :",longword("Good evening everybody!"))



//program 6:
// let n=6;
// let fact=1;
// for(let i=1;i<=n;i++)
// {
//     fact=fact*i;
// }
// document.write(fact);

//program 7:
 
// function conversion(a) {
// 	return ((a * 9.0 / 5.0) + 32.0);
// }
// const a = 20;
// document.write("Celcius to Fahrenheit : ",conversion(a));