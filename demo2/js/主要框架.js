$(function(){
    //測試區塊 非正是
    $('#test input').change(function(){
        var status=$(':input[name="s"]:checked').val(),
            sys_s=$(':input[name="sys"]:checked');
        var $top_m=$('#main_menu_div ul li'),
            $menu=$('#content_menu_div ul li');
        if(status=='e'){
            $('.w_wt_li,.em_s_wt_li').show();
            $('.m_wt_li,.m_s_wt_li').hide();
        }else{
            $('.m_wt_li,.m_s_wt_li').show();
            $('.w_wt_li,.em_s_wt_li').hide();
        }
        if(sys_s.length==1){
            $('.hd_li,.e_manage_li').show();
            $('#content_menu_div ul').css({
               width:'65%'
            });
        }else{
            $('.hd_li,.e_manage_li').hide();
            $('#content_menu_div ul').css({
               width:'80%',
                'margin-top':'6rem'
            });
        }
    });
    
    main_menu_link();
   
    
    //個人訊息
    $('#option1,.person_li').on('click',function(e){
        var $info=$('#info');
        $info.attr('src',$('#person_li >a').attr('href'));
        
        
        $('#label_cancel_personInfo').stop().fadeIn(500).show(1); 
        $('#personInfo').stop().show();
       // getPersonInfo("abc");
        
    });
    
    
});


//登入選單
function main_menu_link(){
    var $ifram=$('#main_ifram');
    
    //首頁
    $('.home_li').on('click',function(){
        $('#content_menu_div').show().siblings().hide();
        $('#main_menu_div>h1').show().siblings().hide();
    });
    //變更密碼
    $('.change_pw_li').on('click',function(){
        $ifram.attr('src',$('#change_pw_li >a').attr('href'));
        show_ifram();
    });
    //填寫工時
    $('.w_wt_li').on('click',function(){
        $ifram.attr('src',$('#w_wt_li >a').attr('href'));
        show_ifram();
    });
    //員工工時查詢
    $('.em_s_wt_li').on('click',function(){
        $ifram.attr('src',$('#em_s_wt_li >a').attr('href'));
        show_ifram();
    });
    //主管工時查詢
    $('.m_s_wt_li').on('click',function(){
        $ifram.attr('src',$('#m_s_wt_li >a').attr('href'));
        show_ifram();
    });
    //工時審核
    $('.m_wt_li').on('click',function(){
        $ifram.attr('src',$('#m_wt_li >a').attr('href'));
        show_ifram();
    });
    //假日維護
    $('.hd_li').on('click',function(){
        $ifram.attr('src',$('#hd_li >a').attr('href'));
        show_ifram();
    });
    //員工管理
    $('.e_manage_li').on('click',function(){
        $ifram.attr('src',$('#e_manage_li >a').attr('href'));
        show_ifram();
    });
    
    //登出
    $('.logout_li').on('click',function(){
        window.location.href = ($('#logout_li >a').attr('href'));
    });
}

function show_ifram(){
    $('#main_ifram').show().siblings().hide();
    $('#main_menu_div >ul').show().siblings().hide();
}

