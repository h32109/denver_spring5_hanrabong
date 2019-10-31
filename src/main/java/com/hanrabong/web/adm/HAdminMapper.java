package com.hanrabong.web.adm;

import org.springframework.stereotype.Repository;

@Repository
public interface HAdminMapper {
	public HAdmin existAdmin(HAdmin param);
}
