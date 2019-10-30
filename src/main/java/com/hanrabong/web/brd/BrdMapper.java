package com.hanrabong.web.brd;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface BrdMapper {
	public void insertContent(Brd param);
	public Brd readBrd(int brdseq); 
	public int countBrd();
	public void deleteBrd(String brdseq);
	public void updateBrd(Brd param);
	public void updateBrdSeq(String brdseq);
}
