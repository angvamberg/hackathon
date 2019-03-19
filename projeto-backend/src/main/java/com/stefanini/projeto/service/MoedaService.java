package com.stefanini.projeto.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.projeto.exception.TreinaException;
import com.stefanini.projeto.model.Carteira;
import com.stefanini.projeto.model.Moeda;
import com.stefanini.projeto.repository.CarteiraRepository;
import com.stefanini.projeto.repository.MoedaRepository;

@Service
public class MoedaService {

	@Autowired
	private MoedaRepository repository;
	@Autowired
	private CarteiraRepository reposCarteiraRepository;	
	
	public List<Moeda> findAll() throws TreinaException {
		return (List<Moeda>) repository.findAll();
	}
	
	public Moeda save(Moeda moeda) throws TreinaException {
		Optional<Carteira> carteira = reposCarteiraRepository.findById(moeda.getCarteira().getId());
		if ((carteira.isPresent()) && (carteira.get().getMoedas().size() >= 5)) {
			throw new TreinaException("Carteira já está cheia.");
		}
		return repository.save(moeda);
	}

	public void delete(Long id) throws TreinaException {
		repository.deleteById(id);
	}

	public Optional<Moeda> findById(@Valid Long id) throws TreinaException {
			return repository.findById(id);
	}
}