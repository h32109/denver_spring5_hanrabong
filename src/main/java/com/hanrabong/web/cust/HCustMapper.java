package com.hanrabong.web.cust;

import org.springframework.stereotype.Repository;

@Repository
public interface HCustMapper {
	public void insertHCust(HCust hCust);
	public HCust selectByIdAndPw(HCust hCust);
	public int existId(String cid);
}
