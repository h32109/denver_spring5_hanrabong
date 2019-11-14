package com.hanrabong.web.enums;

public enum Path {
	UPLOAD_PATH;
	
	@Override
	public String toString() {
		String result = "";
		switch(this) {
		case UPLOAD_PATH :
			result = "C:\\Users\\User\\W\\sts_workspace\\hanrabong5\\src\\main\\webapp\\resources\\upload\\temp";
			break;

		}
		return result;
	}
}
