package com.hanrabong.web.adm;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface HAdminMapper {
	public HAdmin existAdmin(HAdmin param);
	public HAdmin selectAdIn(HashMap<?,?> param);
}
