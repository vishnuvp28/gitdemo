var request= new XMLHttpRequest();

request.open('Get','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');

request.send();

request.onload=function(){
var data=JSON.parse(request.response);
    console.log(data);

    for(i=0;i<data.length;i++){
console.log(data[i].flag);
    }
}