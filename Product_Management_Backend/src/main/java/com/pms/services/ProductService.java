package com.pms.services;

import java.util.List;

import com.pms.model.Product;

public interface ProductService {

	public Product saveProduct(Product product);
	
	public List<Product> getAllProducts();
	
	public Product getProductById(Integer id);
	
	public String deleteProduct(Integer id);
	
	public Product updateProduct(Product product, Integer id);
}
