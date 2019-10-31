"use strict"
var adm = adm || {}
	adm = (()=>{
		let _,js,navivue,admvue,navijs
		let init=()=>{
			_ = $.ctx()
			js = $.js()
			navivue = js+'/vue/navi_vue.js'
			navijs = js+'/cmm/navi.js'
			admvue = js+'/vue/adm_vue.js'
		}
		let onCreate=()=>{
			init()
			$.when(
			$.getScript(navivue),
			$.getScript(admvue),
			$.getScript(navijs))
			.done(()=>{
			setContentView()}
			)
		}
		let setContentView=()=>{
			$('body').html(navi_vue.navi_bar())
			$('#navi_link').remove()
			navi.onCreate()
			$('<table id="tab">'+
			'  <tr>'+
			'  </tr>'+
			'</table>')
			.appendTo('body')
			.css({border: '1px solid black', width: '80%', height: '80%', margin: '0 auto'})
			$.each([{position:'left',size:'20'},
					{position:'right',size:'80'}],
					(i,v)=>{
				$('<td id="'+v.position+'"></td>')
				.appendTo('#tab tr')
				.css({border: '1px solid black', width: v.size+'%', height: '80%', margin: '0 auto', 'vertical-align':'top'})
			})
			$.each([{txt:'웹크롤링', name:'web_crawl'},
					{txt:'고객관리',name:'cust_mgmt'},
					{txt:'상품등록',name:'item_rsg'},
					{txt:'상품조회',name:'item_srch'},
					{txt:'상품수정',name:'item_mod'}, 
					{txt:'상품삭제',name:'item_del'}], 
					(i,v)=>{
				$('<div name="'+v.name+'">'+v.txt+'</div>')
				.click(function(){
					$(this).addClass('active')
					$(this).siblings().removeClass('active')
					switch ($(this).attr('name')) {
					case 'web_crawl':
						webCrawl();
						break;
					case 'cust_mgmt':
						
						break;
					case 'item_rsg':
						
						break;
					case 'item_srch':
						
						break;
					case 'item_mod':
						 
						break;
					case 'item_del':
						
						break;

					default:
						break;
					}
				})
				.appendTo('#left')
				.css({'text-align':'center'})	
			})
			$('#left div').css({height:'10%',border: '1px solid black', margin: 'auto 0', 'line-height': '50px'})

		}
		
		let webCrawl=()=>{
			$('#right').empty()
			$('</br></br></br></br></br><h2>Web Crawling</h2></br></br></br></br></br></br></br>'+
					'<form id="crawl_form" class="form-inline my-2 my-lg-0">'+
					'  <select name="cars" size="1" multiple>'+
					'  </select>'+
			          '<input class="form-control mr-sm-2" type="text" placeholder="insert URL for crawling" aria-label="Search">'+
			          '<button class="btn btn-secondary my-2 my-sm-0" type="submit">go crawl</button>'+
					'</form>')
			.appendTo('#right')
			$('#crawl_form input[class="form-control mr-sm-2"]')
			.css({width:'80%'})
			$.each([{sub:'naver'},{sub:'daum'},{sub:'google'},{sub:'youtube'}],(i,j)=>{
				$('<option name='+j.sub+'>'+j.sub+'</option>').appendTo('#crawl_form select')
			})
			
		}
		return {onCreate}
	})()