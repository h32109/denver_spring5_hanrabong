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
		$.when(
				$.getScript(compovuejs))
		.done(()=>{
			setContentView(x)
		})
	}
	let setContentView=(x)=>{
		$('#pagination').append(compo_vue.paging)
		$('#pagination_ul').empty()
		let pagination = ''
		$.each(x,(i,j)=>{
			if(j==1){
				pagination = '<li class="page-item"><a class="page-link" href="#">Previous</a></li>'
			}
				pagination += '<li class="page-item"><a id = "paging_'+j+'"class="page-link" href="#">'+j+'</a></li>'
			if(j==x.length){
				pagination += '<li class="page-item"><a class="page-link" href="#">Next</a></li>'
			}
			$('#paging_'+j).click(()=>{
				alert('클릭!')
			})			
			})
		$(pagination).appendTo('#pagination_ul')
		
	}
	return{onCreate}
})()