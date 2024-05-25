var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentofY');

form.addEventListener('submit', function(event){
    
    if(!numfield1.value || !numfield2.value){
        alert("Please Enter Value");
    }
    else{
        var x = parseFloat(numfield1.value);
        var y = parseFloat( numfield2.value);
        
        var result = x/y;
        
        var percent = result*100;
        
        resultField.innerText = "Answer is  "+  percent + "%";
        event.preventDefault();
        
            
    }
    
});