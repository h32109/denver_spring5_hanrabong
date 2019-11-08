"use strict"
var page = page || {}
page = (()=>{
	let _,js,compovuejs,brdjs
	let init=()=>{
		_=$.ctx()
		js=$.js()
		compovuejs = js+'/vue/compo_vue.js'
		brdjs = js+'/brd/brd.js'
	}
	
	let onCreate=(x)=>{
		init()
		let list = x.pagenum
		$.when(
				$.getScript(compovuejs),
				$.getScript(brdjs))
		.done(()=>{
			setContentView(x)
			$.each([5,10,15,20],(i,j)=>{
			$('#brd_size select')
			.append('<option value="'+j+'">'+j+'개씩보기</option>')
		})
		$('#brd_size option[value= "'+x.pxy.pagesize+'"]').attr('selected', true)
		$('#brd_size select').change(()=>{
			alert($('#brd_size select').val())
			brd.setMainBrdList({page:'1', size: $('#brd_size option:selected').val()})
		})
			$('#paging_'+j).click(function(){
								if(x.pxy.pagenum!=$('#pagination_ul li[class="page-item"] a[id ="paging_'+j+'"]').text())
								brd.setMainBrdList({page : j, size : x.pxy.pagesize})
							})
			$('#next').click(()=>{
				brd.setMainBrdList({page : x.pxy.nextnum, size :x.pxy.pagesize})
			})
			$('#previous').click(()=>{
				brd.setMainBrdList({page : x.pxy.prenum, size : x.pxy.pagesize})
			})
		})
	}
	let pagesize=x=>{
		
	}
	
	let setContentView=(x)=>{
		$('#pagination').html(compo_vue.paging)
		$('#pagination_ul').empty()
		let pagenum = x.pagenum
		let pagination = ''
			if(x.pxy.previous){
				pagination = '<li id="previous" class="page-item"><a class="page-link" href="#">Previous</a></li>'
			}
		$.each(pagenum,(i,j)=>{			
			if(j==x.pxy.pagenum)
			$('<li id="paging_li'+j+'"class="page-item" class="active"><a value = "'+j+'" id = "paging_'+j+'"class="page-link" href="#">'+j+'</a></li>')
			.appendTo('#pagination_ul').addClass('active')
			else
			$('<li id="paging_li'+j+'"class="page-item" class="active"><a value = "'+j+'" id = "paging_'+j+'"class="page-link" href="#">'+j+'</a></li>')
			.appendTo('#pagination_ul')

			})
			if(x.pxy.next){
				pagination += '<li id = "next" class="page-item"><a class="page-link" href="#">Next</a></li>'
			}
		$(pagination).appendTo('#pagination_ul')
	}
	
	return{onCreate, pagesize}
})()