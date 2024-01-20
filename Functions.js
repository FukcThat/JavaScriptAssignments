
// 1. //

function add7 (number) {
    return number + 7;
}
    console.log(add7(5));


// 2. //

function multiply (number) {
    return number*number;
}    
    console.log(multiply(3));


// 3. //

function capitalize (string) { 
    if (typeof string !== typeof "" || string.length === 0) {
        return string;
   }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

    console.log(capitalize("hello"));
    console.log(capitalize("WORLD")); 
    console.log(capitalize("ThIs Is MiXeD CaSe"));


// 4. //

function lastLetter (str) {
    if (typeof str !== typeof "" || str.length === 0) {
        return str;
    }   
    return str.charAt(str.length - 1);
}

    console.log(lastLetter("Hello"));