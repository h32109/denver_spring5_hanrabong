package com.hanrabong.web.lamda;

public class GenericTest {
	static class Box<T>{
		T item;
		void setItem(T item) {this.item = item;}
		T getimte() {return item;}
	}
 public static <T> void main(String[] args) {
	Box<String> a = new Box<>();
	a.setItem( "dd");
}
}
