$(function(){
    
    //暫存
    $('#save_btn').on('click',function(){
        alert('暫存成功');
        window.location='工時填寫.html';
    });
    
    //增加新專案
    $('#add_btn').on('click',function(){
        var last_tr=$('#pj_table tr').last();
        var $add=last_tr.clone();
        $add.find('input:first').val('');
        $add.find('textarea').html('');
        last_tr.after($add);
        
        
        var tr_s=$('.del_btn').parent().parent().siblings().length;
        
        //刪除
        $('.del_btn').on('click',function(){
            if(tr_s>3){
                $(this).parents('tr').remove();
                tr_s--;
            }
        });
    });
    
    
});
