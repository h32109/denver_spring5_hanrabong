"use strict"
$.prototype.nullChecker =x=>{
	let flag = false
	let i = 0
	for (i in x){
		if(x[i]===''){
			flag = true
		}
	}
	return flag
}

$(document).ready(function(){
    $("#search").keydown(function(key) {
        if (key.keyCode == 13) {
        	alert('엔터키 입력')
        }
    })
    })