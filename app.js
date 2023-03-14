
function isEven (number) {
    var x = Boolean();
    if (number % 2 === 0) {
        x = true;
    } else {
        x = false;
    }
    return x;
}



function areaPer(){
    var w = document.getElementById("width").Value;
    var h = document.getElementById("height").value;

    var area = w * h;
    var perimeter = w + w + h + h;

    retutn = "Area:" + area + "Perimeter:" + perimeter;

    document.getElementById("output").innerHTML = result;
}


function myFunction(y, x = 4) {
    return x * y;
    var perimeter = x + x + y + y;
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(120));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1



function getSymbol(curr) {
    let symbol;
    switch (curr) {
      case "USD":
        symbol = "$";
        break;
      case "EUR":
        symbol = "€";
        break;
      case "GEL":
        symbol = "₾";
        break;
      default:
        symbol = "There is no symbol";
        break;
    }
    return symbol;
  }
  
  console.log(getSymbol());



  let members = [
    {
      name: "aleksa",
      age: 41,
    },
    {
      name: "gio",
      age: 23,
    },
    {
      name: "irakli",
      age: 15,
    },
    {
      name: "teo",
      age: 20,
    },
    {
      name: "vanessa",
      age: 43,
    },
  ];

  function youngAge(array) {
    let youngest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i].age < youngest.age) {
        youngest = array[i];
      }
    }
    return youngest;
  }
  console.log(youngAge(members));