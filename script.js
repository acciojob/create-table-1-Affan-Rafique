function insert_Row() {
    //Write your code here
   let table = document.getElementById("sampleTable");

  // Insert row at top (index 0)
  let newRow = table.insertRow(0);

  // Insert two cells
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  // Add text to cells
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
  
}
