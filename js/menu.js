/*点击主菜单显示，再次点击隐藏*/
/*在页面装载的时候，给主菜单添加onclick事件，保证主菜单点击的时候可以显示或隐藏子菜单*/
/**注册页面装载的时候执行的哦方法*/
$(document).ready(function() {
	/*首先找到所有的主菜单，然后给他们点击事件*/
  /*找到ul中的节点*/
/*方法1*/
	var ul_as = $("ul").children("a");
/*方法2*/
/*    var ul_as = $("ul>a");*/
	/*给ul中的a链接注册click的事件*/
	ul_as.click(function(){
    
      /*找到所有的li,然后让他们显示出来*/
      /*获取当前的现在找到的是被点击的a节点*/
    var anode = $(this);

/*找到a节点之后的所有的是li的兄弟节点*/

  var lis = anode.nextAll("li");

   /* var lis = anode.children("li");*/
    /*让子节点显示或者是隐藏*/
           lis.toggle(400);



});
/*
点击子菜单在div显示页面
*/
$("li>a").click(function(){

  /*找到content的节点，开始加载html*/
  $("#content").load($(this).attr("id"));
});


});




