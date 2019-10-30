package com.hanrabong.web.brd;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Brd {
	private String brdseq, writer, writedate, cnum, bpoint, content, comseq, title;
}
