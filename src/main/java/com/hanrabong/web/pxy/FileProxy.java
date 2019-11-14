package com.hanrabong.web.pxy;

import java.io.File;
import java.util.UUID;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.hanrabong.web.enums.Path;


@Component("filemgr")
public class FileProxy extends Proxy{
	public void fileUpload(MultipartFile[] uploadfile) {
		File uploadPath = 	super.makeDir(Path.UPLOAD_PATH.toString(), getFolder());
		if(uploadPath.exists() == false) {
			uploadPath.mkdirs();
		}
		for(MultipartFile multipartFile : uploadfile) {
			String uploadFileName = multipartFile.getOriginalFilename();
			//String extension = uploadFileName.substring(uploadFileName.lastIndexOf(".")+1);
			try {
				multipartFile.transferTo(super.makeFile(uploadPath, UUID.randomUUID().toString() + "_" + 
						uploadFileName.substring(uploadFileName.lastIndexOf("\\")+1, uploadFileName.lastIndexOf(".")+1)));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public String getFolder() {
		return super.currentData().replace("-", File.separator);
	}
}
