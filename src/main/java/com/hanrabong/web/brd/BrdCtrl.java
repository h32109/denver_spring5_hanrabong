package com.hanrabong.web.brd;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

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
import com.hanrabong.web.cmm.ISupplier;
import com.hanrabong.web.pxy.Proxy;
import com.hanrabong.web.utl.Printer;

@RestController
@RequestMapping("/brds")
public class BrdCtrl {
	@Autowired Printer printer;
	@Autowired Map<String, Object> map;
	@Autowired BrdMapper brdMapper;
	@Autowired Brd brd;
	@Autowired Proxy brdPxy;
	
	@PutMapping("/{brdseq}")
	public Map<?,?> updateBrd(@PathVariable String brdseq, @RequestBody Brd brd) {
		IConsumer<Brd> c = t -> brdMapper.updateBrd(brd);
		c.accept(brd);
		map.clear();
		map.put("upmsg", "success");
		return map;
	}
	@DeleteMapping("/{brdseq}")
	public Map<?,?> deleteBrd(@PathVariable String brdseq) {
		IConsumer<String> c = t -> brdMapper.deleteBrd(brdseq);
		c.accept(brdseq);
		IConsumer<String> g = w -> brdMapper.updateBrdSeq(brdseq);
		g.accept(brdseq);
		map.clear();
		map.put("delmsg", "success");
		return map;
	}
	@GetMapping("/{pagenum}/{pagesize}")
	public Map<?,?> getBrd(@PathVariable String pagenum ,@PathVariable String pagesize) {
		List<Brd> result = new ArrayList<>();
		List<String> paging = new ArrayList<>();
		/*
		 * ISupplier<Integer> t = ()-> brdMapper.countBrd(); for(int i=t.get();i>0;i--)
		 * { int let =
		 *  i; IFunction<Integer, Brd> f =y-> brdMapper.readBrd(let);
		 * list.add(f.apply(i));}
		 */
		brdPxy.setPagenum(Integer.parseInt(pagenum));
		brdPxy.setPagesize(Integer.parseInt(pagesize));
		brdPxy.paging();
		IFunction<Proxy, List<Brd>> f = d -> brdMapper.pagingBrd(brdPxy);
		result = f.apply(brdPxy);
		map.clear();
		map.put("result", result);
		ISupplier<Integer> t = ()-> brdMapper.countBrd();
		for(int i =1;i<=Math.ceil(t.get()/Double.parseDouble(pagesize));i++) {
			paging.add(i+"");
		}
		map.put("pagenum", paging);
		return map;
	}
	@PostMapping("/")
	public Map<?,?> putBrd(@RequestBody Brd param) {
		ISupplier<Integer> s = ()-> brdMapper.countBrd();
		param.setBrdseq(String.valueOf(s.get()+1));
		IConsumer<Object> f = p -> brdMapper.insertContent(param);
		f.accept(param);
		map.clear();
		map.put("brdresult", "success");
		return map;
	}
	@GetMapping("/count")
	public Map<?,?> countBrd(){
		map.clear();
		ISupplier<Integer> t = ()-> brdMapper.countBrd();
		map.put("count", t.get());
		return map;
	}

	
}
