"use strict"
var brd = brd || {};
brd = (()=>{
	let _,js,brdvuejs, cname, $form,navijs,navivue,brdjs
	
	let init = () =>{
		_ = $.ctx()
		js = $.js()
		brdvuejs = js+'/vue/brd_vue.js'
		$form = 'form'
		navijs = js+'/cmm/navi.js'
		navivue = js+'/vue/navi_vue.js'
		brdjs =js+'/brd/brd.js'
	}
	
	let onCreate = () =>{
		init()
		$.when(
		$.getScript(brdvuejs),
		$.getScript(navivue),
		$.getScript(navijs)
				).done(()=>{
			setContentView()
		})

		
	}
	
	let setContentView = () =>{
			$('head').html(brd_vue.brd_head({css : $.css(), img : $.img()}))    
			$('body')
		.addClass('text-center')
		.html(brd_vue.brd_body())
		    $('#navigation').append(navi_vue.navi_bar)
		    setMainBrdList()
		    navi.onCreate()
	}
	//brd_vue.brd_body({css : $.css(), img : $.img()})
	let setMainBrdList = () =>{
		$('#brd_list .media').remove()
		$('#brd_list .d-block').remove()
		$.getJSON('/web/brds/',d=>{
			let list = d
			let i = 0
				$.each(d, (i,j)=>{
					$('#brd_list').append(brd_vue.brd_list(i))
					$('<a>',{
						text : j.writer
					}).appendTo('#id_'+i+' strong')
					.click(()=>{
						alert('이름클릭')
					})
					$('<a>',{
						text : j.title
					}).appendTo('#id_'+i)
					.click(()=>{
						alert('제목클릭!')
						content(j)
					})
					$('#abc'+i)
					.click(()=>{
						alert('이미지클릭')
					})
				})
		})

	}
	
	let write=x=>{
		$('#write_form').html(brd_vue.brd_write(x.cname))
		$('#suggestions').remove()
		$('#writer').val(x.cname)
		$('<input>', {
			type : 'reset',
			value : 'CANCLE',
			style : 'float:right;width:100px;margin-right:10px',
		})
		.addClass('btn btn-danger')
		.appendTo('#write_cancle')
		.click(()=>{
			alert('취소')
			setContentView()
		})
		$('<input>',{
			name : 'write',
			value : 'SUBMIT',
			style : 'float:right;width:100px;margin-right:10px',
			
		})
		.addClass('btn btn-primary')
		.appendTo('#write_submit')
		.click (()=>{
			let data = {writer : $('#write_form input[name="writer"]').val(),
			content : $('#write_form textarea').val(),
			title : $('#write_form input[name="title"]').val()}
			$.ajax({
				url : x._+'/brds/',
				type : 'POST',
				data : JSON.stringify(data),
				dataType : 'json',
				contentType : 'application/json',
				success : d =>{
					alert(d.brdresult)
					setContentView()
				},
				error : e => {
					alert('등록실패')
				}
			})

		})
	}
	
	let content =x=>{
		$('#write_form').html(brd_vue.brd_content(x))
		$('#suggestions').remove()
		$('<input>', {
			type : 'reset',
			value : 'UPDATE',
			style : 'float:right;width:100px;margin-right:10px;margin-top:50px',
		})
		.addClass('btn btn-danger')
		.appendTo('#write_update')
		.click(()=>{
			alert('업데이트')
			update(x)
		})
		$('<input>', {
			value : 'DELETE',
			style : 'float:right;width:100px;margin-right:10px;margin-top:50px',
		})
		.addClass('btn btn-danger')
		.appendTo('#write_delete')
		.click(()=>{
			alert('삭제')
			let data={brdseq : $('#brdseq').val()}
			$.ajax({
				url:_+'/brds/'+data.brdseq,
				type:'DELETE',
				date:JSON.stringify(data),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					alert(d.delmsg)
					setContentView()
				},
				error:e=>{
					alert('AJAX실패..')
				}
			})
		})
		$('<input>', {
		value : 'BACK',
		style : 'float:right;width:100px;margin-right:10px;margin-top:50px',
		})
		.addClass('btn btn-danger')
		.appendTo('#write_back')
		.click(()=>{
			alert('뒤로가기')
			setContentView()
		})
	}
	
	let update =x=>{
		$('#write_form').html(brd_vue.brd_update(x))
		$('#suggestions').remove()
		$('<input>', {
		value : 'BACK',
		style : 'float:right;width:100px;margin-right:10px;margin-top:50px',
		})
		.addClass('btn btn-danger')
		.appendTo('#update_back')
		.click(()=>{
			alert('뒤로가기')
			content(x)
		})
		$('<input>', {
		value : 'SUBMIT',
		style : 'float:right;width:100px;margin-right:10px;margin-top:50px',
		})
		.addClass('btn btn-danger')
		.appendTo('#update_submit')
		.click(()=>{
			let up={brdseq : $('#brdseq').val(),
				content : $('#update_form textarea').val(),
				title : $('#update_form input[name="title"]').val(),
				writer : x.writer}
			$.ajax({
				url:_+'/brds/'+up.brdseq,
				type:'PUT',
				dataType:'json',
		        contentType: 'application/json; charset=utf-8',
		        data: JSON.stringify(up),
				success:d=>{
					alert(d.upmsg)
					content(up)
				},
				error:e=>{alert('AJAX 실패')}
			})
		})
		
	}
	return {onCreate, write,setContentView, update, content, setContentView}
})()