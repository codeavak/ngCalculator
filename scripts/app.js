var app=angular.module('myApp',[]);
app.controller('myController',['myService', myController]);

 
function myController(myService){
this.firstNum=0;
this.secondNum=0;
      this.sum=0;

      this.addEm=function(){this.sum= myService.sum(this.firstNum,this.secondNum);}
        }

        app.service('myService',function(){

        this.sum=function(a,b){return parseInt(a)+parseInt(b);}
        })