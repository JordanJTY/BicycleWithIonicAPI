package com.jordan.bicycles.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.jordan.bicycles.entity.models.Bicycle;

public interface IBicycleDao extends CrudRepository<Bicycle, Long> {
	
}
