package com.db;

import org.junit.Assert;
import org.junit.Test;


public class CalculatorTest {

	@Test
	public void test_7() {
		Assert.assertEquals(7, Calculator.add(3, 4));
	}
	@Test
	public void test_10() {
		Assert.assertEquals(10, Calculator.add(6, 4));
	}

}
