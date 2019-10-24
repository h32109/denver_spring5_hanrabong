package com.hanrabong.web.cust;


import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.cmm.IConsumer;
import com.hanrabong.web.cmm.IFunction;
import com.hanrabong.web.cmm.IPredicate;
import com.hanrabong.web.utl.Printer;


@RestController
@RequestMapping("/customers")
public class HCustCtrl {
	private static final Logger logger = LoggerFactory.getLogger(HCustCtrl.class);
	@Autowired Map<String, Object> map;
	@Autowired HCust hCust;
	@Autowired Printer printer;
	@Autowired HCustMapper hCustMapper;

	@PostMapping("/")
	public  Map<?,?> join(@RequestBody HCust param) {
		logger.info("Ajax가 보내서 서블릿에서 받은 아이디와 비번 : {}", param.getCid()+", "+param.getCpw());
		IConsumer<HCust> c = t -> hCustMapper.insertHCust(param);
		c.accept(param);
		map.clear();
		map.put("msg", "success");
		return map;	
	} 
	
	@PostMapping("/{cid}")
	public HCust login(@PathVariable String cid, @RequestBody HCust param){
		IFunction<HCust, HCust> f = t -> hCustMapper.selectByIdAndPw(param);
		return f.apply(param);
	}
	
	@GetMapping("/{cid}")
	public Map<?,?> existId(@PathVariable String cid) {
		IFunction<String, Integer> f = o -> hCustMapper.existId(cid);
		map.clear();
		map.put("msg", (f.apply(cid)==0)?"success" :"fail");
		return map;
	}
	
	@PutMapping("/{cid}")
	public String updateHCust(@PathVariable String cid, @RequestBody HCust param) {
		IConsumer<HCust> c = t -> hCustMapper.insertHCust(param);
		c.accept(param);
		return "success";
	}
	
	@DeleteMapping("/{cid}")
	public String removeHCust(@PathVariable String cid, @RequestBody HCust param) {
		IConsumer<HCust> c = t -> hCustMapper.insertHCust(param);
		c.accept(param);
		return "success";
	}
}
