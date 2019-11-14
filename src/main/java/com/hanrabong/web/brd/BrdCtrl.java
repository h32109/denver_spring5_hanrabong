package com.hanrabong.web.brd;

import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hanrabong.web.cmm.IConsumer;
import com.hanrabong.web.cmm.IFunction;
import com.hanrabong.web.cmm.ISupplier;
import com.hanrabong.web.enums.Path;
import com.hanrabong.web.pxy.FileProxy;
import com.hanrabong.web.pxy.PageProxy;
import com.hanrabong.web.pxy.Proxy;
import com.hanrabong.web.pxy.Trunk;
import com.hanrabong.web.utl.Printer;

@RestController
@RequestMapping("/brds")
public class BrdCtrl {
	@Autowired Printer printer;
	@Autowired Map<String, Object> map;
	@Autowired BrdMapper brdMapper;
	@Autowired Brd brd;
	@Qualifier PageProxy pager;
	@Autowired Trunk<Object> trunk;
	@Autowired FileProxy filemgr;
	
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
		pager.setPagenum(Integer.parseInt(pagenum));
		pager.setPagesize(Integer.parseInt(pagesize));
		pager.paging();
		IFunction<Proxy, List<Brd>> f = d -> brdMapper.pagingBrd(pager);
		map.clear();
		trunk.accept(Arrays.asList("result","pagenum","pxy"),
				Arrays.asList(f.apply(pager), pager.paging(), pager));
		return trunk.get();
	}
	@PostMapping("/")
	public Map<?,?> putBrd(@RequestBody Brd param) {
		ISupplier<Integer> s = ()-> brdMapper.countBrd();
		param.setBrdseq(String.valueOf(s.get()+1));
		IConsumer<Object> f = p -> brdMapper.insertContent(param);
		f.accept(param);
		trunk.accept(Arrays.asList("msg"), Arrays.asList("success"));
		System.out.println(trunk.get().get("msg"));
		return trunk.get();
	}
	@GetMapping("/count")
	public Map<?,?> countBrd(){
		map.clear();
		ISupplier<Integer> t = ()-> brdMapper.countBrd();
		map.put("count", t.get());
		return map;
	}
	
	@GetMapping("/fileupload")
	public void FileUpload(MultipartFile[] uploadfile) {
		filemgr.fileUpload(uploadfile);
	}

	
}
