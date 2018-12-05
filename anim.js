function digclock(){
    var d = new Date()
    var hr24 = d.getHours();
    var hr12 = hr24;
    var min = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    var sec = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
    var Md = "AM";
    //console.log(hr12)
    if(hr24 >= 13) {
        hr12 = hr24 - 12;
        Md = "PM";
    };
    if(hr24 = 12){
        Md = "PM";
    };
    //console.log
    //var time = hr12 + ':' + min + ':' + sec + ' ' + Md;
    document.querySelector("#hr-min").innerHTML = `${hr12}:${min} ${Md}`
    document.querySelector("#sec").innerHTML = `${sec}`
    
} 
 setInterval(digclock, 0);



