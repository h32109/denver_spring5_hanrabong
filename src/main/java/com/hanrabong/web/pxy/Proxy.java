package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.hanrabong.web.brd.BrdMapper;
import com.hanrabong.web.cmm.ISupplier;

import lombok.Data;

@Data @Component @Lazy
public class Proxy {
	
	private int pagenum, pagesize, startrow;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired BrdMapper brdMapper;
	//@Autowired List<String> proxyList;

	
	public void paging(){
		ISupplier<Integer> t = ()-> brdMapper.countBrd();
		int totalCount = t.get();
		startrow = pagesize*(pagenum-1);
	}
	
	public List<?> crawl(Map<?,?> paramMap){
		String url = (String) paramMap.get("search");
		List<String> proxyList = new ArrayList<>();
		proxyList.clear();
		try {
			Connection.Response response = Jsoup.connect(url)
					.method(Connection.Method.GET)
					.execute();
			Document document = response.parse();
			String text = document.text();
			proxyList.add(text);
			System.out.println(text);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return proxyList;
	}
	public List<?> searchKeyWord(Map<?,?> paramMap){
		String url = "";
		switch((String)paramMap.get("site")) {
		case "naver" : 
			url = "https://search.naver.com/search.naver?&query="+paramMap.get("search")+"&oquery="+paramMap.get("search");
			break;
		case "google" :
			url = "https://www.google.co.kr/search?q="+paramMap.get("search")+"&oq="+paramMap.get("search");
			break;
		case "daum" :
			url = "https://search.daum.net/search?&q="+paramMap.get("search");
			break;
		case "youtube" :
			url = "https://www.youtube.com/results?search_query="+paramMap.get("search");
			break;
		default:
			url = "http://www."+paramMap.get("site")+".co.kr";
			break;
		}
		
		System.out.println(url);
		List<String> proxyList = new ArrayList<>();
		proxyList.clear();
		try {
			Connection.Response response = Jsoup.connect(url)
					.method(Connection.Method.GET)
					.execute();
			Document document = response.parse();
			String text = document.text();
			proxyList.add(text);
			System.out.println(text);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return proxyList;
	}
}
