
A)Print odd numbers in an array:=>

Anonymous function:=>

function getOddNumbers() {
        let arr = [1, 2, 3, 4, 5, 6];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !==0) {
                console.log(arr[i] );
            }
        }
    }
    getOddNumbers();
    
    
    // IIFE:=>

    (function(array){
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
             })([1,2,3,4,5,6]);



B)Convert all the strings to title caps in a string array:>

Anonymous function:=>

function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log(toTitleCase("WELCOME TO MY PC 11"));



IIFE:=>


  let toLowerCase = (function (str) {
    str = str.toLowerCase().split(' ');
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    })("WELCOME TO WINDOWS 11");
console.log(toLowerCase);

     
C)Sum of all numbers in an array

Anonymous function:=>

function add(){
    let arr = [1,2,3,4,5,6];
    let sum = 0;
    for(let i = 0 ; i< arr.length ; i++){
       sum = sum + arr[i];
     }
     return sum;
  }
 console.log(add());


IIFE:=>

let sum = (function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4,5,6,]);
    console.log(sum)



D)Return all the prime numbers in an array

Anonymous function:=>


function primenumber(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
 primenumber([1,2,3,4,5,6]);


 IIFE:=>

  (function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
     return true;
     });
    console.log(numArray);
 })([1,2,3,4,5,6]);
 

E)Return all the palindromes in an array

Anonymous Function =>

 function palindrome(arr, n){
     let flag = 0;
     for (let i = 0; i <= n / 2 && n != 0; i++) {
         if (arr[i] != arr[n - i - 1]) {
            flag = 1;
            break;
        }
    }
     if (flag == 1)
         return("Not Palindrome");
    else
        return("Palindrome");
}
let arr = [1,2,3,4,3,2,1];
let n = arr.length;
console.log(palindrome(arr,n));



IIFE:>


IIFE : 

            let arr = (  function (arr, n){
             for (let i = 0; i < n/2 && n !=0; i++){
                if (arr[i] !=arr[n - i - 1])
             }{
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3,4,3,2,1]);

F)Return median of two sorted atrrays of the same size

G)remove duplicate from an array


Anonymous Function :>>

 function getduplicate(){
    let arr = [1,2,3,4,5,6];
     let dup = [...new Set(arr)];
        console.log(dup);
         }
         getduplicate();


IIFE :              

 (function(array){
             let dup = [...new Set(array)];
                        console.log(dup);
                       })([1,1,2,3,4,5,6]);
                        
 H)Rotate an array by K times.          

Anonymous Function:

 function (array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    }
      


IIFE :

   (function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)





Below programs in arrow functions.

A)Print odd numbers in an array

Arrow Function   

oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }


B)Convert all the strings to title caps in a string array

Arrow Function :

 titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }            


C)Sum of all numbers in an array

Arrow:    

 sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }


D)Return all the prime numbers in an array

Arrow Function :
    
       primeNumber = (numArray) => {
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }


    E)Return all the palindromes in an array

    Palindrome = (arr, n) =>
    {
        
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }