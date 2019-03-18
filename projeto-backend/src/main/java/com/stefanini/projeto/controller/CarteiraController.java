package com.stefanini.projeto.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.stefanini.projeto.exception.TreinaException;
import com.stefanini.projeto.model.Carteira;
import com.stefanini.projeto.service.CarteiraService;

@CrossOrigin
@Controller
@RequestMapping(value = "/carteira")
public class CarteiraController {

	@Autowired
	private CarteiraService service;

	@GetMapping
	public @ResponseBody List<Carteira> findAll() throws TreinaException {
		return service.findAll();
	}

	@PostMapping
	public ResponseEntity<Carteira> salvar(@Valid @RequestBody Carteira carteira) throws TreinaException {
		Carteira carteiraSalva;
		carteiraSalva = service.save(carteira);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
				.buildAndExpand(carteiraSalva.getId()).toUri();
		return ResponseEntity.created(uri).body(carteiraSalva);
	}

	@PutMapping
	public ResponseEntity<Carteira> atualizar(@Valid @RequestBody Carteira carteira) throws TreinaException {
		Carteira carteiraSalva;
		carteiraSalva = service.save(carteira);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
				.buildAndExpand(carteiraSalva.getId()).toUri();
		return ResponseEntity.created(uri).body(carteiraSalva);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Carteira>> buscarPeloId(@Valid @PathVariable Long id) {
		Optional<Carteira> carteira;
		try {
			carteira = service.findById(id);
			return ResponseEntity.ok(carteira);
		} catch (TreinaException e) {
			return ResponseEntity.badRequest().build();
		}
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletar(@PathVariable Long id) throws TreinaException {
		service.delete(id);
	}
}