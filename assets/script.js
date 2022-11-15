

var emailEl=document.getElementById('email');
var passwordEl=document.getElementById('password');
var submitBtn=document.getElementById('btn');
var historyEl=document.getElementById('history');
var dataJson=JSON.parse(localStorage.getItem('data'))
var array=[];

var header=document.createElement('h3');
header.textContent=`user name: ${dataJson.email}`;
var line=document.createElement('br');
var bod=document.createElement('h5')
bod.textContent=`note: ${dataJson.password}`
historyEl.appendChild(header)
historyEl.appendChild(line)
historyEl.appendChild(bod)
console.log('push',array)

historyEl.setAttribute('style','border:2px gray solid;')
// historyEl.textContent=`User Name: ${dataJson.email}        Note: ${dataJson.password}` 



var myFun=function(){
    var e=emailEl.value;
    var p=passwordEl.value;
   var  dataArray={
        email:e,
        password:p
    }
console.log('data',dataArray)

localStorage.setItem('data',JSON.stringify(dataArray))



}
if(submitBtn){
    submitBtn.addEventListener('click',myFun)
}