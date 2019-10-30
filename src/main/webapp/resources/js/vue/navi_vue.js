"use strict"
var navi_vue = navi_vue || {}
navi_vue = {
		navi_bar:()=>{
			return '    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">'+
			'      <div id = "brd_home"><a class="navbar-brand" href="#"><i class="fab fa-apple"></i></span></a></div>'+
			'      <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">'+
			'        <span class="navbar-toggler-icon"></span>'+
			'      </button>'+

			'      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">'+
			'        <ul class="navbar-nav mr-auto">'+
			'          <li id = "go_write">'+
			'          </li>'+
			'          <li id="log_out">'+
			'          </li>'+
			'          <li class="nav-item">'+
			'            <a class="nav-link" href="#">Profile</a>'+
			'          </li>'+
			'          <li class="nav-item">'+
			'            <a class="nav-link" href="#">Switch account</a>'+
			'          </li>'+
			'          <li class="nav-item dropdown">'+
			'            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>'+
			'            <div class="dropdown-menu" aria-labelledby="dropdown01">'+
			'              <a class="dropdown-item" href="#">Action</a>'+
			'              <a class="dropdown-item" href="#">Another action</a>'+
			'              <a class="dropdown-item" href="#">Something else here</a>'+
			'            </div>'+
			'          </li>'+
			'        </ul>'+
			'        <form class="form-inline my-2 my-lg-0">'+
			'          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">'+
			'          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>'+
			'        </form>'+
			'      </div>'+
			'    </nav>'+

			'    <div class="nav-scroller bg-white box-shadow">'+
			'      <nav class="nav nav-underline">'+
			'        <a class="nav-link active" href="#">Dashboard</a>'+
			'        <a class="nav-link" href="#">'+
			'          Friends'+
			'          <span class="badge badge-pill bg-light align-text-bottom">27</span>'+
			'        </a>'+
			'        <a class="nav-link" href="#">Explore</a>'+
			'        <a class="nav-link" href="#">Suggestions</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'      </nav>'+
			'    </div>'
		}
}