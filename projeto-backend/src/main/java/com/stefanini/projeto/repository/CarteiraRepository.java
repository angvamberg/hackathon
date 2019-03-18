package com.stefanini.projeto.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.stefanini.projeto.model.Carteira;

public interface CarteiraRepository extends CrudRepository<Carteira, Long>{
	List<Carteira> findAllByNomeContaining(String nome);
}
