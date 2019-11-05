package com.hanrabong.web.aop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hanrabong.web.pxy.Proxy;

@Transactional
@Service
public class TxService {
		@Autowired TxMapper txMapper;
		@Autowired Proxy ServicePxy;
		//@Autowired List<String> txServiceList;
		
		@SuppressWarnings("unchecked")
		public List<?> crawl(Map<?,?> paramMap){
			List<String> txServiceList = new ArrayList<>();
			txServiceList.clear();
			txServiceList = (List<String>) ServicePxy.crawl(paramMap);
			return txServiceList;
		}
		
		@SuppressWarnings("unchecked")
		public List<?> searchKeyWord(Map<?,?> paramMap){
			List<String> txServiceList = new ArrayList<>();
			txServiceList.clear();
			txServiceList = (List<String>) ServicePxy.searchKeyWord(paramMap);
			return txServiceList;
		}
	}
