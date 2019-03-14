package br.com.angleby.model;

public class Cachorro {
	private String nome;
	private Integer idade;

	public void latir() {
		System.out.println("Latindo.");
	}

	public void correr() {
		System.out.println("Correndo.");
	}

	public Cachorro() {
		super();
	}

	public Cachorro(String nome, Integer idade) {
		super();
		this.nome = nome;
		this.idade = idade;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getIdade() {
		return idade;
	}

	public void setIdade(Integer idade) {
		this.idade = idade;
	}

	@Override
	public String toString() {
		return "Cachorro [nome=" + nome + ", idade=" + idade + "]";
	}
}
