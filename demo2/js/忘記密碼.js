$(function(){
    var btn=$("#submit");
    btn.on("click",function(){
        if($("#id").val()!=""){
            alert("已傳送email至您的信箱！");
        }
        else{
            alert("請填員工編號");
        }
        
    })
})