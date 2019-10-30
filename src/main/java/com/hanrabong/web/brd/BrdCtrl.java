package com.hanrabong.web.brd;

import java.util.ArrayList;
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
import com.hanrabong.web.utl.Printer;

@RestController
@RequestMapping("/brds")
public class BrdCtrl {
	@Autowired Printer printer;
	@Autowired Map<String, Object> map;
	@Autowired BrdMapper brdMapper;
	@Autowired Brd brd;
	
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
	@GetMapping("/")
	public List<Brd> getBrd() {
		List<Brd> list = new ArrayList<>();
		ISupplier<Integer> t = ()-> brdMapper.countBrd();
		System.out.println(t.get());
		for(int i=t.get();i>0;i--) {
		int let = i;
		IFunction<Integer, Brd> f =y-> brdMapper.readBrd(let);
		System.out.println(f.apply(i).toString());
		list.add(f.apply(i));}
		return list;
	}
	@PostMapping("/")
	public Map<?,?> putBrd(@RequestBody Brd param) {
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
