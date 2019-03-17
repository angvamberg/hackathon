package com.stefanini.projeto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.projeto.exception.TreinaException;
import com.stefanini.projeto.model.Carteira;
import com.stefanini.projeto.repository.CarteiraRepository;

@Service
public class CarteiraService {

	@Autowired
	private CarteiraRepository repository;
	
	public List<Carteira> findAll() throws TreinaException {
		return (List<Carteira>) repository.findAll();
	}

	public Optional<Carteira> findById(Long id) throws TreinaException {
			return repository.findById(id);
	}
	
	public Carteira save(Carteira carteira) throws Exception {
		return repository.save(carteira);
	}

	public void delete(Long id) throws TreinaException {
		repository.deleteById(id);	
	}


}