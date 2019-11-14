package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.hanrabong.web.brd.BrdMapper;
import com.hanrabong.web.cmm.ISupplier;

import lombok.Data;


@Data
@Component("pager")
@Lazy

public class PageProxy extends Proxy {
	private int countlast, startpage, endpage, pagenum, pagesize, startrow, pagecount, blockcount, blocknum, prenum,
	nextnum;
	private boolean next, previous;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired
	BrdMapper brdMapper;
	
	/*
	 * public void paging() { Supplier<Integer> s = ()->brdMapper.countAllArticle();
	 * totalCount = s.get(); pageCount =(totalCount %pageSize==0) ?
	 * totalCount/pageSize : (totalCount/pageSize)+1; startRow = (pageNum-1) *
	 * pageSize; System.out.println("pageNum>>>>>>>>>>>>>"+pageNum); endRow =
	 * (pageNum == pageCount) ? totalCount -1 : pageNum*pageSize-1; blockCount =
	 * (pageCount %BLOCK_SIZE==0) ? pageCount/BLOCK_SIZE : (pageCount/BLOCK_SIZE)+1;
	 * //블럭의 개수 startPage = ((pageNum-1)/BLOCK_SIZE)*BLOCK_SIZE+1; // endPage =
	 * ((pageCount-startPage)<(BLOCK_SIZE) ) ? pageCount : (startPage + BLOCK_SIZE
	 * -1); // existPrev = (startPage < (BLOCK_SIZE+1) ) ? false : true; // start
	 * Page가 BLOCK_SIZE+1보다 작으면 없음. existNext = (pageCount == endPage) ? false :
	 * true; // 페이지수가 endPage와 같으면 없음. blist = new ArrayList<>(); for (int i =
	 * startPage; i < endPage+1 ; i++) { blist.add(i); }
	 * 
	 * }
	 */
	
	
	public List<Integer> paging() {
		// endrow = (pagenum==pagecount?totalCount-1:pagesize*pagenum-1);
		blockcount = pagecount % BLOCK_SIZE != 0 ? pagecount / BLOCK_SIZE + 1 : pagecount / BLOCK_SIZE;
		List<Integer> paging = new ArrayList<>();
		ISupplier<Integer> t = () -> brdMapper.countBrd();
		startrow = pagesize * (pagenum - 1);
		pagecount = (t.get() % pagesize != 0 ? (t.get() / pagesize) + 1 : t.get() / pagesize);
		blocknum = (pagenum - 1) / BLOCK_SIZE;
		next = blocknum == blockcount - 1 ? false : true;
		previous = blocknum == 0 ? false : true;
		/*
		 * startpage = BLOCK_SIZE * blocknum + 1;
		 * endPage = ((pageCount-startPage)<(BLOCK_SIZE) ) ?  pagecount: (startPage + BLOCK_SIZE -1)
		 */
		countlast = (blocknum == (blockcount - 1)) ? pagecount - (blocknum * BLOCK_SIZE) : BLOCK_SIZE;
		 for(int i =0;i<blockcount;i++) {
		  if(pagenum>i*BLOCK_SIZE&&pagenum<=BLOCK_SIZE*(i+1)) { for(int
		  a=1;a<=countlast;a++) { paging.add(a+i*BLOCK_SIZE); if(a==1) {
		  nextnum=(a+i*BLOCK_SIZE)+BLOCK_SIZE; prenum=(a+i*BLOCK_SIZE)-BLOCK_SIZE; } }
		  }else { } }

	

		return paging;
	}
}
