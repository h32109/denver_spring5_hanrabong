package com.hanrabong.web.enums;

public enum SQL {
	TRUNCATE_HCUST,CREATE_TABLE,DROP_TABLE,CREATE_DB;
	
	@Override
	public String toString() {
		String result = "";
		switch(this) {
		case CREATE_TABLE :
			result = "CREATE TABLE SHIPINFO(\r\n" + 
					"	SHIPNUM VARCHAR(10) PRIMARY KEY, \r\n" + 
					"	TEL VARCHAR(12), \r\n" + 
					"	ADDRESS VARCHAR(50),\r\n" + 
					"	SHIPMSG VARCHAR(100), \r\n" + 
					"	ANUM VARCHAR(2),\r\n" + 
					"	FOREIGN KEY (ANUM) REFERENCES hadmin(ANUM)\r\n" + 
					")";
			break;
		case DROP_TABLE:
			result = "DROP TABLE SHIPINFO";
			break;
		case CREATE_DB :
			result = "CREATE DATABASE JS_TEST";
			break;
		case TRUNCATE_HCUST:
			result = "TRUNCATE TABLE HCUST";
			break;
		}
		return result;
	}
} 
