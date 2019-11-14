package com.hanrabong.web.tx;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.pxy.CrawlingProxy;
import com.hanrabong.web.pxy.Trunk;

@RestController
@Transactional
@RequestMapping("/txs")
public class TxController {
	@Autowired TxService txService;
	@Qualifier CrawlingProxy crawl;
	@Autowired Trunk<Object> trunk;
	
	@SuppressWarnings("unchecked")
	@PostMapping("/")
	public List<?> crawl(@RequestBody CrawlingProxy param){
		Map<String,Object> map = new HashMap<>();
		List<String> result = new ArrayList<>();
		map.put("search", param.getSearch());
		result=(List<String>) txService.crawl(map);
		return result;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/crawling/{site}/{search}")
	public List<?> search(@PathVariable String site, @PathVariable String search){
		List<String> result = new ArrayList<>();
		Map<String,Object> map = new HashMap<>();
		System.out.println(site+"/"+search);
		map.clear();
		map.put("site", site);
		map.put("search", search);
		result= (List<String>) txService.searchKeyWord(map);
		return result;
	}
	

	
	@GetMapping("/create")
	public Map<?,?> createDB(){
		trunk.accept(Arrays.asList("msg"), Arrays.asList("success"));
		crawl.crawler();
		return trunk.get();
	}
}
