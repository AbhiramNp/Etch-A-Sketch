const container = document.querySelector('.container');

//resets button after adding corresponing row and column
function makeSketch(rows,columns){
   while(document.querySelector("button") !==null){
      document.querySelector("button").remove();
   }
   container.style.setProperty("--grid-rows",rows);    //select grid-rows assigns to variable rows
   
   container.style.setProperty("--grid-columns",columns); //select grid-columns assigns to variable columns
   
   container.style.width = "960px"  //It is said that grid should have width 960px 
   // console.log(rows);
   // console.log(columns);

   for(let i=0 ; i< (rows*columns) ; i++)    //creating grid accouring to users row and column
   {
   let cube = document.createElement('div'); //one cube = one div
   cube.style.border = "1px solid black"
   container.appendChild(cube).className = "grid-item"; //cubes assigned to class grid-items

   //mouseover effects
   cube.addEventListener('mouseover',()=>{
      const randomColor = Math.floor(Math.random()*16777216).toString(16);  // total combinations = 256^3=16777216
      cube.style.backgroundColor = "#"+randomColor;//adds #to make it a hexcode
      
      //OPACITY PROPERTY TO BE DONE
   })
   }
   userInput();
}


//for input and button
function userInput() {
  const btnDiv = document.querySelector('.btn');
  const btn = document.createElement('button');
  btn.textContent = "Click to reset values";
  btnDiv.appendChild(btn);
  btn.addEventListener('click',() =>{                //after entering the new cols and rows normmally the grid
                                                                  //stays this function is to remove the default one
  document.querySelectorAll(".grid-item").forEach(e=>e.remove())
  })
  btn.addEventListener('click',()=>{
  let x = prompt("Enter the row nums");
  //console.log(x);
  let y = prompt("Enter the column value");
  //console.log(y);
  //given max rows = 100 ,cols = 100
  let promptNum1 = parseInt(x);
  //console.log(promptNum1);
  let promptNum2 = parseInt(y);
  //console.log(promptNum2)

  if(promptNum1*promptNum2 >= 10000)
  {
   alert("Long value restart and click again")
   return
  }
  makeSketch(promptNum1,promptNum2);

  })

}
makeSketch(16,16);
