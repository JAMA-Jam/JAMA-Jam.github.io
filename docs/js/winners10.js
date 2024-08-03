
let count = 12;
let startCount = count;
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/winners.csv",
        dataType: "text",
        success: function(_data) {
            let data = ProcessData(_data);
            LoadDataToTable(data);
        }
    });
});

/**
 * @param {Array} returns Array 
 */
function ProcessData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = []
    for (var i=1; i<allTextLines.length; i++) {
        if (count>0) {
            var data = allTextLines[i].split(',');
            if (data.length <= 1) continue;
            if (data.length == headers.length) {
                var tarr = [];
                for (var j=0; j<headers.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
                count--;      
            }        
        }
        else {
            break;
        }
    }
    return lines;
}

// Column IDs for html&css
const colID = ["anniversary","jam","award","name","asset","theme"];

function LoadDataToTable(data) {
    let table1 = $("tbody")[0]; //anniversary
    let table2 = $("tbody")[1]; //Best in show    
    let table3 = $("tbody")[2]; //Best use of theme
    let table4 = $("tbody")[3]; //Most Creative
    var thisTable = 1;
    var anniversary = false;
    var award = false;
    for(var i = 0; i < data.length; i++){
        // Create new row
        let tr = document.createElement("tr");
        // Create a new td for each cell
        for(var col = 0; col < data[i].length; col++)
        {
            let splitU = data[i][col].split('&&&');
            
            //organizes by award and 
            if(splitU[0] === "Best In Show")
            {
                if(anniversary)
                     thisTable = 1;
                else
                    thisTable = 2;
                award = true;
            }
            else if(splitU[0] === "Best Use of Theme")
            {
                if(anniversary)
                     thisTable = 1;
                else
                    thisTable = 3;
                award = true;
            }
            else if(splitU[0] === "Most Creative")
            {
                if(anniversary)
                     thisTable = 1;
                else
                    thisTable = 4;
                award = true;
            }
            else if(splitU[0] === "-")
            {
                anniversary = false;
            }
            else if(splitU[0] === "+")
            {
                anniversary = true;
            }
            else
            {
                // let displayText = "";
                let td = document.createElement("td");
                td.id = colID[col];
                tr.append(td);
                for (const user of splitU) {
                    let userData = user.split(">>>");
                    let userName = userData[0]; // Gets user name
                    // displayText += userName;
                    // Checks if it has link and adds cell with link
                    if (userData.length > 1) {
                        const link = userData[1];
                        let a = document.createElement("a");
                        a.href = link;
                        a.innerHTML = userName;
                        a.className = "link";
                        td.append(a);
                        if (splitU.length > 0) {
                            td.innerHTML += " ";
                        }
                        continue; // Skips to next loop (of this for loop)
                    } else {
                        // Add normal cell
                        td.prepend(userName);
                    }
                }
            }
            
           if(anniversary && award)
            {
                let td = document.createElement("td");
                td.id = colID[col];
                tr.append(td);
                td.prepend(splitU);
            }
            
            
            if(thisTable === 1)
                table1.append(tr);
            else if(thisTable === 2)
                table2.append(tr);
            else if(thisTable === 3)
                table3.append(tr);
            else if(thisTable === 4)
                table4.append(tr);
            
            award = false;
        }
    }
}


function OpenHOF(){
    window.open("winners.html");
}
function RedirectHOF(){
    window.location = "winners.html";
}