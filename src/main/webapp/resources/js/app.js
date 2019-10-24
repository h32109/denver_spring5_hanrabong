"use strict";
var app = app || {};
app = (()=>{
		const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.';
		let _, js, authjs;
		let run =x=>$.getScript(x+'/resources/js/cmm/router.js',
				()=>{$.extend(new Session(x));
				onCreate();
		})
		let onCreate =()=>{
			init();
			$.when(
				$.getScript(authjs)
			)			
			.done(()=>{
				auth.onCreate()
			})
			.fail(()=>{
				alert(WHEN_ERR)
			})
		}
		let init =()=>{
			_ = $.ctx();
			js = $.js();
			authjs = $.authjs();
		}

		return {run}
})();

