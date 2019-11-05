"use strict"
var compo_vue = compo_vue || {}
compo_vue = {
		paging : ()=>{
			return '<div class="container">'+
			'  <ul style="margin:20px 0" id = "pagination_ul"class="pagination justify-content-center">'+
			    '<li class="page-item"><a class="page-link" href="#">Previous</a></li>'+
			    '<li class="page-item"><a class="page-link" href="#">1</a></li>'+
			    '<li class="page-item"><a class="page-link" href="#">2</a></li>'+
			    '<li class="page-item"><a class="page-link" href="#">3</a></li>'+
			    '<li class="page-item"><a class="page-link" href="#">Next</a></li>'+
			'  </ul>'+
			'</div>'
		},
		page_size:()=>{
			return '  <select name="size" size="1">'+
			'  </select>'
		}
}