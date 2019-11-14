package com.hanrabong.web.pxy;

import java.io.File;
import java.util.HashMap;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component("gfile")
public class GenFile<T> {
	
	private File file;
	
	public File makeFile(T t1, String t2) {

		
		if(t1 instanceof String) {
			file = new File((String) t1,t2);
		}else if(t1 instanceof File) {
			file = new File((File) t1, t2);
		}
		return file;
	}
	
	
	/*
	 * File uploadPath = new GenFile<String>().makeFile(uploadFolder, getFolder());
	 * File saveFile = new GenFile<File>().makeFile(uploadPath, "");
	 */
	
}
