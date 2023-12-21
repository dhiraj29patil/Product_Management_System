package com.pms.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.model.Product;
import com.pms.repository.ProductRepo;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepo prodRepo;
	
	@Override
	public Product saveProduct(Product product) {
		// TODO Auto-generated method stub
		return prodRepo.save(product);
	}

	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return prodRepo.findAll();
	}

	@Override
	public Product getProductById(Integer id) {
		// TODO Auto-generated method stub
		return prodRepo.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		// TODO Auto-generated method stub
		Product product = prodRepo.findById(id).get();
		
		if(product != null) {
			prodRepo.delete(product);
			return "Product Deleted SuccessFully";
		}
		return "Something Wrong on Server";
	}

	@Override
	public Product updateProduct(Product product, Integer id) {
		// TODO Auto-generated method stub
		Product oldProduct = prodRepo.findById(id).get();
		oldProduct.setProductName(product.getProductName());
		oldProduct.setDescription(product.getDescription());
		oldProduct.setPrice(product.getPrice());
		oldProduct.setStatus(product.getStatus());
		return prodRepo.save(oldProduct);
	}

}
