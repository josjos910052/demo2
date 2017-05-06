$(function(){
    
    //全選/取消全選
    allnotall();
    check_on();
    $(':checkbox').change(function(){
        check_on();
    });
    
    //檢查未通過原因
    check_R();
    
    //　　縮放　詳細工時區塊
    $('.worktime_data_li').on('click',function(){
        var $detail=$(this).find('.wt_detail');
        
        if($detail.css('display')=='none'){
            $detail.stop().fadeIn(500).show();
            $(this).css({
                height:'calc(1.5rem + 1.5rem + 3rem*3 + 3rem )' 
            });
        }else{
            $(this).css({
                height:'1.5rem' 
            });
            $detail.stop().fadeOut(500).hide(0);
        } 
    });
    
    //通過/不通過(假的)
    ok_notok();
    
    // wt_detail防止
    $('.wt_detail,input[name="checkbox"]').on('click',function(e){
       e.stopPropagation();
    });
    
    //防止修改資料
    $('.wt_detail_div').find('*').prop('disabled',true);
    
});


//全選/取消全選
function allnotall(){
    $('#m_wt_title_div').find('span').last().on('click',function(){
       var status=$(this).text();
        var $c_box=$('input[name="checkbox"]');
        if('全選'==status){
            $(this).text('取消全選');
            $c_box.prop('checked',true);
        }else{
            $(this).text('全選');
            $c_box.prop('checked',false);
        }
        check_on();
    });
   
}

//確定有鉤子
function check_on(){
    var $c_box=$('input[name="checkbox"]');
    var status=true;
    $('#m_wt_btn_div input').prop('disabled',true);
    $c_box.each(function(){
        if($(this).prop('checked')){
            status=false;
        }
    });
    $('#m_wt_btn_div input').prop('disabled',status);
}

//check不通過原因
function check_R(){
    var $btn_div=$('.m_wt_btn_div');
    $btn_div.find('.m_wt_btn_notok').prop('disabled',true);
    $btn_div.find('textarea').on('keyup',function(){
        if(($(this).val().length!=0)){
            $(this).siblings(".m_wt_btn_notok").last().prop('disabled',false);
        }else{
            $(this).siblings(".m_wt_btn_notok").last().prop('disabled',true);
        }
    });
}



//假的送出
function ok_notok(){
    $('.m_wt_btn_ok').on('click',function(){
       var  $header=$(this).parent().parent().siblings('.wt_header_div');
       var id=$header.find('span').eq(1).text();
        $header.parent().remove();
        alert('id: '+id+"\n通過處理完成");
    });
    $('.m_wt_btn_notok').on('click',function(){
       var  $header=$(this).parent().parent().siblings('.wt_header_div');
       var id=$header.find('span').eq(1).text();
        $header.parent().remove();
        alert('id: '+id+"\n未通過處理完成");
    });
    
    $('#m_wt_btn_div input').on('click',function(){
        var arr=new Array;
        $('[name="checkbox"]').each(function(){
            if($(this).prop('checked')){
                arr.push($(this).val());
                $(this).parent().parent().parent().remove();
            }
        });
        alert('id: '+arr+"\n通過處理完成");
    });
}