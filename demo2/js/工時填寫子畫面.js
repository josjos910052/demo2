$(function(){
    $('#save_btn').on('click',function(){
        alert('暫存成功');
        window.location='工時填寫.html';
    });
    
    $('#add_btn').on('click',function(){
        var last_tr=$('#pj_table tr').last();
        var $add=last_tr.clone();
        $add.find('input:first').val('');
        $add.find('textarea').html('');
        last_tr.after($add);
    });
});
