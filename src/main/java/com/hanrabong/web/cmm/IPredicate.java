package com.hanrabong.web.cmm;

@FunctionalInterface
public interface IPredicate<T> {
	public Boolean test(T t);
}
