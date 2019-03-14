package br.com.angleby;

import java.util.ArrayList;
import java.util.List;

import br.com.angleby.model.Cachorro;

public class Principal {

	public static void main(String[] args) {
		List<Cachorro> cachorros = new ArrayList<>();
		cachorros.add(new Cachorro("Pingo", 1));
		cachorros.add(new Cachorro("Shrek", 3));
		cachorros.add(new Cachorro("Apolo", 7));
		
		for (Cachorro cachorro : cachorros) {
			System.out.println(cachorro);
			cachorro.latir();
			cachorro.correr();
		}
	}
}
