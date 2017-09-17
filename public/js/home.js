$(function(){
    //监听窗口变化
    var win_H,win_W;    
    $(window).resize(function(){
        loadAgain();
    });   
    //初始化窗口
    loadAgain();
    //窗口重载入
    function loadAgain(){
        var rewin_H=$(window).height();
        var rewin_W=$(window).width();
        var coutH=$(".coutH").height();
        console.log(coutH);
        win_H=rewin_H;
        win_W=rewin_W;
        //allCont 高宽
        $("#allCont").css({'widht':rewin_W+"px",'height':rewin_H+"px"});
        if(win_H>win_W){
            $("#allCont").css({"backgroundSize":'auto 100%'});
        }else{
            $("#allCont").css({"backgroundSize":'100% auto'});
        }
        //mainNav 主导航栏初始化布局
        $("#mainNav").css({'height':win_H+'px'});
        //sub_cont 初始化布局
        $("#sub_cont").css({'height':win_H+'px'});
        //赋值给body高
        $("body").css({'height':coutH+"px"});
    }
    // header_arrows 头部箭头
    $("#user").click(function(){
          //获取classname；继而判断
          console.log(1);
         var name=$(this).attr("class"); 
         if(name=="drop_down"){
            $(this).removeClass('drop_down');
            $('.pb_a0_mask').fadeIn(300);
            $(this).addClass('drop_up');  
          console.log(2);
                     
         }else{             
            $(this).removeClass('drop_up');
            $(this).addClass('drop_down');
            $('.pb_a0_mask').fadeOut(300);
          console.log(3);
            
         }
         $(".item_box").toggle({height:'toggle'},800);
     });
     //点击user选项
     $(".item_box").find(".user_opt").each(function(i){
         $(this).click(function(){
          console.log(4);             
          if(i==3){
              //通信等。。。
          }  
          $("#user").removeClass('drop_up');
          $("#user").addClass('drop_down');
          $('.pb_a0_mask').fadeOut(300);
          $(".item_box").toggle({height:'toggle'},800);
         });
     });
     //点击蒙版消失mask_user
     $("#mask_user").click(function(){
        $("#user").removeClass('drop_up');
          $("#user").addClass('drop_down');
          $('.pb_a0_mask').fadeOut(300);
          $(".item_box").toggle({height:'toggle'},800);
     });
    //navScroll 跟随滚动nav
    $('#navScroll').scrollUp();
})