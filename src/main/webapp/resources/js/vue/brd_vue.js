/* https://getbootstrap.com/docs/4.0/examples/offcanvas/ */
var brd_vue = brd_vue || {}
brd_vue = {
	brd_head:(x)=>{
		return '<head>'+
		'    <meta charset="utf-8">'+
	    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
	'    <meta name="description" content="">'+
	'    <meta name="author" content="">'+
	'    <title>Offcanvas template for Bootstrap</title>'+
	'    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/offcanvas/">'+
	'    <!-- Bootstrap core CSS -->'+
	    '<link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">'+
	'    <!-- Custom styles for this template -->'+
	'    <link href="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.css" rel="stylesheet">'+
	'    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'+
	'  </head>'
	
	},
	brd_body: ()=>{
		return  '<body class="bg-light">'+
		'<div id = "navigation"></div>'+
		'    <main id ="write_form" role="main" class="container">'+
		'<div>'+
		'      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">'+
		'        <img class="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
		'        <div class="lh-100">'+
		'          <h6 class="mb-0 text-white lh-100">Board</h6>'+
		'          <small>2019 - 10 - 25</small>'+
		'        </div>'+
		'      </div>'+

		'      <div id = "brd_list" class="my-3 p-3 bg-white rounded box-shadow">'+
		'        <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
		'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <strong class="d-block text-gray-dark">@username</strong>'+
		'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		'          </p>'+
		'        </div>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=e83e8c&amp;fg=e83e8c&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb75%20text%20%7B%20fill%3A%23e83e8c%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb75%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23e83e8c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <strong class="d-block text-gray-dark">@username</strong>'+
		'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		'          </p>'+
		'        </div>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=6f42c1&amp;fg=6f42c1&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb76%20text%20%7B%20fill%3A%236f42c1%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb76%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%236f42c1%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <strong class="d-block text-gray-dark">@username</strong>'+
		'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		'          </p>'+
		'        </div>'+
		'        <small class="d-block text-right mt-3">'+
		'          <a href="#">All updates</a>'+
		'        </small>'+
		'      </div>'+

		'      <div class="my-3 p-3 bg-white rounded box-shadow">'+
		'        <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb78%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb78%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <div class="d-flex justify-content-between align-items-center w-100">'+
		'              <strong class="text-gray-dark">Full Name</strong>'+
		'              <a href="#">Follow</a>'+
		'            </div>'+
		'            <span class="d-block">@username</span>'+
		'          </div>'+
		'        </div>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb79%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb79%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <div class="d-flex justify-content-between align-items-center w-100">'+
		'              <strong class="text-gray-dark">Full Name</strong>'+
		'              <a href="#">Follow</a>'+
		'            </div>'+
		'            <span class="d-block">@username</span>'+
		'          </div>'+
		'        </div>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb79%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb79%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <div class="d-flex justify-content-between align-items-center w-100">'+
		'              <strong class="text-gray-dark">Full Name</strong>'+
		'              <a href="#">Follow</a>'+
		'            </div>'+
		'            <span class="d-block">@username</span>'+
		'          </div>'+
		'        </div>'+
		'        <small class="d-block text-right mt-3">'+
		'          <a href="#">All suggestions</a>'+
		'        </small>'+
		'      </div>'+
		'    </main>'+
		'</div>'+

		'    <!-- Bootstrap core JavaScript'+
		'    ================================================== -->'
		'    <!-- Placed at the end of the document so the pages load faster -->'+
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'

	},
	
	brd_write: (x)=>{
        return '<div id = "brd_list" class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">'+
          '        <img class="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
          '        <div class="lh-100">'+
          '          <h6 class="mb-0 text-white lh-100">글쓰기</h6>'+
          '          <small>2019-10-15</small>'+
          '        </div>'+
          '      </div>'+
        '<div class="container-fluid" style="width:80%">'
        +'<h1>ARTICLE WRITING</h1>'
        +'<form id = "write_form">'
        +'<input type="text" name="writer" style="margin-top:20px" class="form-control" value="'+x+'" />'
        +'<input type="text" name="title" style="margin-top:20px" class="form-control" placeholder="title" /><br />'
        +'<div class="row">'
        +'<div style="width:97%; margin:10px auto" >'
        +'<textarea name="content" class="form-control" rows="10" ></textarea>'
        +' </div>'
        +' </div>'
        +'<div id ="write_cancle"></div>'
        +'<div id ="write_submit"></div>'
        /*+' <input type="reset" class="btn btn-danger" style="float:right;width:100px;margin-right:10px" value="CANCEL"/>'
        +'<input name="write" type="submit" class="btn btn-primary" style="float:right;width:100px;margin-right:10px" value="SUBMIT"/>'*/
        +'<input type="hidden" name="action" value="write"/>'
        +'<input type="hidden" name="pageName" value="detail" />'
        +'</form>'
        +'</div>'
       },
	
	brd_list:(x)=>{
		return '<div  class="media text-muted pt-3">'+
        '<img id = "abc'+x+'"data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
		'          <p id="id_'+x+'" class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <strong  class="d-block text-gray-dark"></strong>'+
		'                </br>  '+
		'          </p>'+
		'        </div>'
	},
	
	brd_content:(x)=>{
		return '<div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">'+
        '        <img class="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
        '        <div class="lh-100">'+
        '          <h6 class="mb-0 text-white lh-100">'+x.writer+'님의 글입니다.</h6>'+
        '          <small></small>'+
        '        </div>'+
        '      </div>'+
      '<div class="container-fluid" style="width:80%">'
      +'<h1>ARTICLE</h1>'
      +'<div>'
      +'<div style="text-align:left" name="writer" style="margin-top:20px" class="form-control" >제목 : '+x.title+'<div>'
      +'<div name="title" style="margin-top:20px" class="form-control" placeholder="title" >by '+x.writer+'<div>'
      +'<div class="row">'
      +'<div style="width:97%; margin:10px auto" >'
      +'<div name="content" class="form-control" rows="10" >'+x.content+'</div>'
      +' </div>'
      +' </div>'
      +'</div>'
      +'<div id ="write_back"></div>'
      +'<div id ="write_update"></div>'
      +'<div id ="write_delete"></div>'
      +'<input id = "brdseq" type="hidden" name="brdseq" value="'+x.brdseq+'"></input>'
      +'</div>'

	},
	
	brd_update:(x)=>{
		return '<div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">'+
        '        <img class="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
        '        <div class="lh-100">'+
        '          <h6 class="mb-0 text-white lh-100">글쓰기</h6>'+
        '          <small>2019-10-15</small>'+
        '        </div>'+
        '      </div>'+
      '<div class="container-fluid" style="width:80%">'
      +'<h1>ARTICLE WRITING</h1>'
      +'<form id = "update_form">'
      +'<div name="writer" style="margin-top:20px" class="form-control"  >by '+x.writer+'<div>'
      +'<input type="text" name="title" style="margin-top:20px" class="form-control" value="'+x.title+'" /><br />'
      +'<div class="row">'
      +'<div style="width:97%; margin:10px auto" >'
      +'<textarea name="content" class="form-control" rows="10" >'+x.content+'</textarea>'
      +' </div>'
      +' </div>'
      +'<div id ="update_submit"></div>'
      +'<div id ="update_back"></div>'
      +'<input id = "brdseq" type="hidden" name="brdseq" value="'+x.brdseq+'"></input>'
      +'</form>'
      +'</div>'
      +'</div>'
	}
	
};