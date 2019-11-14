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
    
/*function CheckExtension (x){
	let regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$")
	var maxSize = 5242880 //5MB
	let flag = false
	if(x.fsize >= maxSize){
		alert("파일 사이즈 초과")
		flag = true
	}
	if(regex.test(x.fname)){
		alert("해당 종류의 파일은 업로드할 수 없습니다.")
		flag = true
	}
	return flag
}*/
    

		$.prototype.checkExtension =x=>{
			let regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$")
			var maxSize = 5242880 //5MB
	
			if(x.fsize >= maxSize){
				alert("파일 사이즈 초과")
				return false
			}
			if(regex.test(x.fname)){
				alert("해당 종류의 파일은 업로드할 수 없습니다.")
				return false
			}
			return true
		}