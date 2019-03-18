package com.stefanini.projeto.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.stefanini.projeto.exception.TreinaException;
import com.stefanini.projeto.model.Carteira;
import com.stefanini.projeto.model.Moeda;
import com.stefanini.projeto.service.MoedaService;

@CrossOrigin
@Controller
@RequestMapping(value = "/moeda")
public class MoedaController {

	@Autowired
	private MoedaService service;

	@GetMapping
	public @ResponseBody List<Moeda> findAll() throws TreinaException {
		return service.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Moeda> salvar(@Valid @RequestBody Moeda moeda) throws TreinaException {
		Moeda moedaSalva;
		moedaSalva = service.save(moeda);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(moedaSalva.getId())
				.toUri();
		return ResponseEntity.created(uri).body(moedaSalva);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletar(@PathVariable Long id) throws TreinaException {
			service.delete(id);
	}
}