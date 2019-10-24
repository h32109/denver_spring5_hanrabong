"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, authvuejs, brdvuejs
	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		authvuejs = js+'/vue/auth_vue.js'
		brdvuejs = js+'/vue/brd_vue.js'
	}
	let onCreate =()=>{
		init()
		$.getScript(authvuejs).done(()=>{
			setContentView()
			$('#a_go_join').click(e=>{
				e.preventDefault()
				$('head')
				.html(auth_vue.join_head)
				$('body')
				.html(auth_vue.join_body)
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
		login()
	}
	
	let join =()=>{
          let data = { cid :  $('#cid').val() ,
          cpw : $('#cpw').val(),
          cnum : $('#cnum').val()}
           $.ajax({
           url : _+'/customers/',
           type : 'POST',
           dataType : 'json',
           data: JSON.stringify(data) ,
           contentType : 'application/json',
           success : d =>{
        	   if(d.msg === 'success')
        		   {alert(data.cid+'님 가입을 환영합니다.')
        		   login()}
        	   else 
        		   alert('회원가입실패')
           },
          error : e =>{alert('AJAX실패' + url)}
         
         })
         }
		
         
	
	
	let login =()=>{
		let x = {css : $.css(), img : $.img()}
        $('head').html(auth_vue.login_head(x))        
        $('body').addClass('text-center').html(auth_vue.login_body(x))     
        $('<button>',{
       	 text : 'Sign in',
       	 href : '#',
       	 click : e=>{
       		 e.preventDefault();
       		 let data = { cid : $('#cid').val(),
       		 		cpw : $('#cpw').val()}
       		 $.ajax({
       			 url : _+'/customers/'+data.cid,
       			 type : 'POST',
       			 dataType : 'json',
       			 data : JSON.stringify(data),
       			 contentType : 'application/json',
       			 success : d =>{
       				 if(d.cnum!=null)
       				 { alert(d.cnum + '님 환영합니다.')
       					boardHome()}
       				 else
       					 alert('회원가입 실패')
       			 },
       			 error : e =>{alert('AJAX실패' + url)}
       		 })
       	 }
        })
        .addClass('btn btn-lg btn-primary btn-block')
        .appendTo('#login_btn')
	}
	
	let mypage =(d)=>{
	     $('head').html(auth_vue.mypage_head())      
	     $('body').html(auth_vue.mypage_body(d))      
	}
	
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
			error : e =>{alert('AJAX실패'+url)}
		})
	}
	
	let boardHome = ()=>{
		$.getScript(brdvuejs).done(()=>{
		$('head').html(brd_vue.brd_head)      
	     $('body').html(brd_vue.brd_body)
	     }).fail(()=>{alert(WHEN_ERR)})
	}
	
	
	return {onCreate}
})();
