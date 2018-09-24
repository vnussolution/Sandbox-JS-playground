document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;



  function myFunction() {
    //let str = document.getElementById("demo").innerHTML;
    let res = `Mr Blue has 'a blue' house' and a blue car.`.replace(/'/g, "\\'");
    console.log(`res : ${res}`)
    }

myFunction();