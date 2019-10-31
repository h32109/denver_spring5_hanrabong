package com.hanrabong.web.adm;


import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data 
@Component
@AllArgsConstructor
@NoArgsConstructor

public class HAdmin {
	
	private String anum, apw, aname, authority, department, pnum, shipnum;
	
	
}
