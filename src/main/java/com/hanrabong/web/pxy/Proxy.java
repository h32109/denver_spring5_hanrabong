package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.function.BiPredicate;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.hanrabong.web.brd.BrdMapper;
import com.hanrabong.web.cmm.ISupplier;
import com.sun.xml.internal.ws.api.policy.subject.BindingSubject;

import lombok.Data;

@Data
@Component
@Lazy
public class Proxy {

	private int countlast, startpage, endpage, pagenum, pagesize, startrow, pagecount, blockcount, blocknum, prenum,
			nextnum;
	private boolean next, previous;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired
	BrdMapper brdMapper;
	// @Autowired List<String> proxyList;

	public int intify(String param) {
		Function<String, Integer> f = a -> Integer.parseInt(param);
		return f.apply(param);

	}

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

	public int getRan(int param1, int param2) {
		BiFunction<Integer, Integer, Integer> f = (t, u) -> (int) (Math.random() * u) + t;
		return f.apply(param1, param2);
	}

	public List<?> crawl(Map<?, ?> paramMap) {
		String url = (String) paramMap.get("search");
		List<String> proxyList = new ArrayList<>();
		proxyList.clear();
		try {
			Connection.Response response = Jsoup.connect(url).method(Connection.Method.GET).execute();
			Document document = response.parse();
			String text = document.text();
			proxyList.add(text);
			System.out.println(text);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return proxyList;
	}

	public List<?> searchKeyWord(Map<?, ?> paramMap) {
		String url = "";
		switch ((String) paramMap.get("site")) {
		case "naver":
			url = "https://search.naver.com/search.naver?&query=" + paramMap.get("search") + "&oquery="
					+ paramMap.get("search");
			break;
		case "google":
			url = "https://www.google.co.kr/search?q=" + paramMap.get("search") + "&oq=" + paramMap.get("search");
			break;
		case "daum":
			url = "https://search.daum.net/search?&q=" + paramMap.get("search");
			break;
		case "youtube":
			url = "https://www.youtube.com/results?search_query=" + paramMap.get("search");
			break;
		default:
			url = "http://www." + paramMap.get("site") + ".co.kr";
			break;
		}

		System.out.println(url);
		List<String> proxyList = new ArrayList<>();
		proxyList.clear();
		try {
			Connection.Response response = Jsoup.connect(url).method(Connection.Method.GET).execute();
			Document document = response.parse();
			String text = document.text();
			proxyList.add(text);
			System.out.println(text);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return proxyList;
	}

	public Map<?, ?> crawler() {
		Map<String, Object> map = new HashMap<>();
		try {
			Document rawDate = Jsoup.connect(("")).timeout(10 * 1000).get();
			Elements pricelist = rawDate.select("");
			Elements namelist = rawDate.select("");
			List<String> prices = new ArrayList<>();
			List<String> names = new ArrayList<>();
			for (Element e : pricelist) {
				prices.add(e.text());
			}
			for (Element e : namelist) {
				names.add(e.text());
			}
			map.put("prices", prices);
			map.put("names", names);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
}
