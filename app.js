function getNumber(num)
{
    var result =document.getElementById("result");
    result.value+=num;
}
function clearResult(){
    var result =document.getElementById("result");
    result.value="";
}
function getResult(){
    var result =document.getElementById("result");
    result.value=eval(result.value);
}

function backSpace(){
    var exp =result.value;
    exp=exp.substring(0,exp.length-1);
    result.value=exp;

}
function SR(getNumber){
    var result =document.getElementById("result");
    result.value=eval(result.value)*eval(result.value);
        

}
function cos(form){
    form.result.value=Math.cos(form.result.value);
}






        


        
    
 
 
