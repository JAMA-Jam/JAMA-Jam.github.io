// JavaScript Document

const MonthsEnum = (function () { 
    const months = { 
        0: "january", 
        1: "february", 
        2: "march", 
        3: "april", 
        4: "may", 
        5: "june", 
        6: "july",
        7: "august",
        8: "september",
        9: "october",
        10: "november",
        11: "december"
    }; 
    return { 
        get: function (name) { 
            return months[name]; 
        } 
    }; 
})(); 

function GetJamaJamDate(offset=0, url=false){    
    const dateStart = Date.UTC(2023, 7, 1);
    const dateNow = Date.now();
    
    //Get number of jams that have happened fromt eh requested now date
    const dif = dateNow - dateStart;
    const calc = ((((dif / 1000) / 60) / 60) / 24) / 30;
    var numberOfJams = Math.ceil(calc);

    //offset number of jams
    numberOfJams += offset;
    
    //get month from the number of jams
    var currMonth = new Date().getMonth();
    var month = MonthsEnum.get ((currMonth + offset)%12);
    
    //get year from the number of jams
    var monthOffset = (currMonth + 1 + offset);
    var yearOffset = monthOffset/12;
    if(yearOffset%1 === 0)
        yearOffset -= 1;
    var year =new Date().getFullYear() + (Math.floor(yearOffset));
    
    if(url === true)
        var date = month + "-" + year;
    else
        date = month.toUpperCase() + " " + year;
    return(date);
}


function OpenJamLink(offset=0){
    const link = "https://itch.io/jam/jama-jam-"+(GetJamaJamDate(offset, true));
    window.open(link);
}

function OpenSpecialJamLink(url){
    const link = url;
    window.open(link);
}