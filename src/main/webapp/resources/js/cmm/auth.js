"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는! JS파일을 찾지 못했습니다.'
	let _, js, authvuejs, brdvuejs, brdjs, routerjs, cookiejs
	let init = ()=>{
		_ = $.ctx()
		js = $.js() 
		authvuejs = js+'/vue/auth_vue.js'
		brdjs = js+'/brd/brd.js'
		routerjs = js+'/cmm/router.js'
		cookiejs = js +'/cmm/cookie.js'
	}
	let onCreate =()=>{
		init()
		$.when($.getScript(authvuejs),
				$.getScript(cookiejs),
					 $.getScript(routerjs),
						$.getScript(brdjs))
		.done(()=>{
			setContentView()
			$('#a_go_join').click(e=>{
				e.preventDefault()
				$('head')
				.html(auth_vue.join_head)
				$('body')
				.html(auth_vue.join_body)
				$('#cid').keyup(()=>{
					if($('#cid').val().length > 2)
						$.ajax({
							url : _+'/customers/'+$('#cid').val(),
							contentType : 'application/json',
							success : d =>{
								if(d.msg==='success')
									{$('#dupl_check')
									.val('회원가입 가능한 아이디')
									.css('color', 'blue')
									}
								else
									$('#dupl_check')
									.val('회원가입 불가능한 아이디')
									.css('color', 'red')
							},
							error : e =>{alert('AJAX실패')}
						})
				})
				$('<button>',{
			          text : 'Continue to checkout' ,
			          href: '#' ,
			          click : e=>{
				          e.preventDefault()
				          existId()
			          }
          }).addClass('btn btn-primary btn-lg btn-block')
          .appendTo('#btn_join_test')
			})
		}).fail(()=>{alert(WHEN_ERR)})
}
	
	let setContentView =()=>{
        $('head')
        .html(auth_vue.login_head({css : $.css(), img : $.img()}))        
        $('body')
        .addClass('text-center')
        .html(auth_vue.login_body({css : $.css(), img : $.img()}))     
		login()
	}
	
	let join =()=>{
          let data = { cid :  $('#cid').val() ,
          cpw : $('#cpw').val(),
          cnum : $('#cnum').val(),
          cname : $('#cname').val()}
           $.ajax({
           url : _+'/customers/',
           type : 'POST',
           dataType : 'json',
           data: JSON.stringify(data) ,
           contentType : 'application/json',
           success : d =>{
        	   if(d.msg === 'success')
        		   {alert(data.cname+'님 가입을 환영합니다.')
        	        $('head')
        	        .html(auth_vue.login_head({css : $.css(), img : $.img()}))        
        	        $('body')
        	        .addClass('text-center')
        	        .html(auth_vue.login_body({css : $.css(), img : $.img()}))     
        		   login()}
        	   else 
        		   alert('회원가입실패')
           },
          error : e =>{alert('AJAX실패')}
         
         })
         }
		
         
	
	
	let login =()=>{

        $('<button>',{
       	 text : 'Sign in',
       	 href : '#',
       	 click : e=>{
       		 e.preventDefault();
       		 let data = { cid : $('#cid').val(),
       		 		cpw : $('#cpw').val(),
       		 		cnum : $('#cnum').val(),
       		 		cname : $('#cname').val()}
       		 $.ajax({
       			 url : _+'/customers/'+data.cid,
       			 type : 'POST',
       			 dataType : 'json',
       			 data : JSON.stringify(data),
       			 contentType : 'application/json',
       			 success : d =>{
       				 alert(d.cname + '님 환영합니다.')
       								setCookie("cid",d.cid)
       								setCookie("cpw",d.cpw)
       								setCookie("cnum",d.cnum)
       								setCookie("cname",d.cname)
       								alert(getCookie("cid"))
       								brd.onCreate()
       					
       				},
       			 
       			 error : e =>{alert('AJAX실패' )}
       		 })
       	 }
        })
        .addClass('btn btn-lg btn-primary btn-block')
        .appendTo('#login_btn')
	}
	
/*	let mypage =(d)=>{
	     $('head').html(auth_vue.mypage_head())      
	     $('body').html(auth_vue.mypage_body(d))      
	}*/
	
	let existId = ()=>{
		$.ajax({
			url : _+'/customers/'+$('#cid').val(),
			type : 'GET',
			dataType : 'json',
			data : JSON.stringify($('#cid').val()),
			contentType : 'application/json',
			success : d =>{
				if(d.msg==='success')
					{alert('회원가입 가능')
					join()}
				else
					alert('아이디 중복')
			},
			error : e =>{alert('AJAX실패')}
		})
	}
	
	
	
	return {onCreate}
})();
