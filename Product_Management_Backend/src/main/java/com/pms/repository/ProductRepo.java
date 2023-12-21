package com.pms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.model.Product;

public interface ProductRepo extends JpaRepository<Product, Integer>{

}
