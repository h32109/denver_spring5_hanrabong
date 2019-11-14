package com.hanrabong.web.pxy;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;




@Component
@Lazy
public class Proxy {

	public int intify(String param) {
		Function<String, Integer> f = a -> Integer.parseInt(param);
		return f.apply(param);
	}

	public int getRan(int param1, int param2) {
		BiFunction<Integer, Integer, Integer> f = (t, u) -> (int) (Math.random() * u) + t;
		return f.apply(param1, param2);
	}

	public String currentData() {
		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	}
	
	public String currentTime() {
		return new SimpleDateFormat("yyyy-MM-dd hh:mm").format(new Date());
	}
	
	public File makeDir(String t, String u) {
		BiFunction<String, String, File> f = File::new;
		return f.apply(t, u);
	}
	
	public File makeFile(File t, String u) {
		BiFunction<File, String, File> f = File::new;
		return f.apply(t, u);
	}
}
