$(function(){
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
    
    
    // wt_detail防止
    $('.wt_detail').on('click',function(e){
       e.stopPropagation();
    });
    
    
    // 所有東西不得修改
    $('.wt_detail_div').find('*').prop('disabled',true);
});