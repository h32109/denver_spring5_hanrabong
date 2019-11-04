package com.hanrabong.web.adm;

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

import com.hanrabong.web.cmm.IFunction;

@RestController
@RequestMapping("/admins")
public class HAdminCtrl {
	@Autowired HAdminMapper hAdminMapper;
	@Autowired Map<String,Object> adminMap;
	
	/*@PutMapping("/{anum}")
	public Map<?,?> updateAdmin(@PathVariable String anum, @RequestBody HAdmin param){
		return map;
	}
	
	@DeleteMapping("/{anum}")
	public Map<?,?> deleteAdmin(@PathVariable String anum){
		return map;
		
	}
	
	@GetMapping("/")
	public List<HAdmin> getAdmin(){
		return null;
	}*/
	
	@PostMapping("/{anum}")
	public Map<?,?> putAdmin(@PathVariable String anum, @RequestBody HAdmin param){
		System.out.println("들어옴!");
		HAdmin adm = new HAdmin();
		String msg = "";
		IFunction<HAdmin, HAdmin> f = t -> hAdminMapper.existAdmin(param);
		adm = f.apply(param);
		if(adm.getAname()!=null) {
			msg = "success";
		}else{
			msg = "fail";
		};
		System.out.println(msg);
		adminMap.clear();
		adminMap.put("msg", msg);
		return adminMap;
	}
	
}
