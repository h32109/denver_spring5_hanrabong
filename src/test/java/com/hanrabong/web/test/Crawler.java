package com.hanrabong.web.test;

import java.util.ArrayList;

import java.util.List;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.hanrabong.web.brd.BrdMapper;
import com.hanrabong.web.cmm.ISupplier;
import javax.swing.JOptionPane;

public class Crawler {
	public static void main(String[] args) {
		/*
		 * String url = "http://google.co.kr"; try { Connection.Response response =
		 * Jsoup.connect(url) .method(Connection.Method.GET) .execute(); Document
		 * document = response.parse(); String text = document.text();
		 * System.out.println(text); } catch (Exception e) { e.printStackTrace(); }
		 */
		
		/*
		 * int pagenum = Integer.parseInt(JOptionPane.showInputDialog("페이지 번호 입력")); int
		 * pagesize = 5; int totalCount = 51; int startrow = pagesize*(pagenum-1);
		 * List<String> paging = new ArrayList<>(); for(int i
		 * =1;i<=(51%pagesize!=0?(51/pagesize)+1:51/pagesize);i++) { paging.add(i+""); }
		 * 
		 * System.out.println(paging);
		 */
		try {
			Document rawData = Jsoup.connect("http://www.oliveyoung.co.kr/store/display/getMCategoryList.do?dispCatNo=100000100010001&isLoginCnt=7&aShowCnt=0&bShowCnt=0&cShowCnt=0").timeout(10*1000).get();
			  Elements pricelist = rawData.select("span[class=tx_num]"); 
			  Elements namelist = rawData.select("p[class=tx_name]"); 
			  List<String> prices = new ArrayList<>();
			  List<String> names = new ArrayList<>();
			  for(Element e : pricelist) {
				  prices.add(e.text());
			  }
			  for(Element e : namelist) {
				  names.add(e.text());
			  }
			  prices.remove(0);
			  System.out.println(prices); 
			  System.out.println("---------------");
			  System.out.println(names); 

		} catch (Exception e2) {
			e2.printStackTrace();
		}
		
	}
}
