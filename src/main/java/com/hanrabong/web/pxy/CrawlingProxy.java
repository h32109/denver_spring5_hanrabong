package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component("crawl")
@Lazy
public class CrawlingProxy extends Proxy{
	private String search;
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
