package com.hanrabong.web.tx;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hanrabong.web.pxy.Box;
import com.hanrabong.web.pxy.CrawlingProxy;

@Transactional
@Service
public class TxService {
		@Autowired TxMapper txMapper;
		@Autowired CrawlingProxy crawl;
		@Autowired Box<String> box;
		//@Autowired List<String> txServiceList;
		
		@SuppressWarnings("unchecked")
		public Box<String> crawl(Map<?,?> paramMap){
			box = (Box<String>) crawl.crawl(paramMap);
			return box;
		}
		
		@SuppressWarnings("unchecked")
		public Box<String> searchKeyWord(Map<?,?> paramMap){
			box = (Box<String>) crawl.searchKeyWord(paramMap);
			return box;
		}
	}
