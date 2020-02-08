window.onload = function() {
    //where the tables go
     var div = document.getElementById("demo");
    //10 tables
    for (let i = 1; i < 11; i++){
      var table = document.createElement("table");
      div.appendChild(table);
     //10 rows in every tables   
    for (let j = 1; j < 11; j++){
      var tr = document.createElement("tr");
      table.appendChild(tr);
   
   //5 cells in every rows
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    
    //the content of the cells
    td.innerText = j;
    td2.innerText = "*";
    td3.innerText = i;
    td4.innerText = "=";
    td5.innerText = i*j;
   
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    }
    }
    
};
