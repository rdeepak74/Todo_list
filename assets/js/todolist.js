
let checkList = document.getElementsByName("todocheck");
console.log(checkList.length);
let deletetask = document.getElementById('deletetask');
console.log(deletetask);
let selected =[];
deletetask.addEventListener('click',function(){
    
    for(var i=0;i<checkList.length;i++){
        
        if(checkList[i].checked){
            selected.push(checkList[i].value);
        }
        
    }

    // $.ajax({
    //     type: "POST",
    //     url: "delete_todo/",
    //     data: { id: selected },
    //     success: function(data) {
    //         console.log(data);
    //         window.location = '/';
    //     },
    //     error: function(jqXHR, textStatus, err) {
    //         alert('text status '+textStatus+', err '+err)
    //     }
    // });
    fetch('/delete_todo', {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
         }, 
        body: JSON.stringify({selected})
    }).then(response => {
        // this line of code depends upon what type of response you're expecting
        return response.text();     
    }).then(result => {
        console.log(result);
        window.location = '/';
    }).catch(err => {
        console.log(err);
    });
});

console.log(selected);