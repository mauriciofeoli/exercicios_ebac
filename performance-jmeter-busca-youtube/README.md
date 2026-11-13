# Plano de teste de performance com JMeter – Busca no YouTube

Plano de teste no Apache JMeter que simula usuários fazendo buscas no YouTube com termos lidos de um arquivo CSV.

## O que o plano usa

- **Thread Group** simulando os usuários;
- **CSV Data Set Config** lendo os termos de busca de `termos.yt.csv`;
- **HTTP Request** para o endpoint `/search`, com o host em variável (User Defined Variables);
- **Loop Controller** e **Think Time** para simular o intervalo entre ações de um usuário real;
- **Listeners**: Summary Report, View Results Tree, View Results in Table e Transactions per Second (plugin jp@gc).

## Executar

Abra `Test Plan - Exc - Youtube.jmx` no JMeter. O arquivo `termos.yt.csv` precisa estar na mesma pasta.

Em modo não gráfico:

```bash
jmeter -n -t "Test Plan - Exc - Youtube.jmx" -l resultados.jtl
```

O gráfico de Transactions per Second depende do plugin **jpgc - Standard Set**, instalado pelo JMeter Plugins Manager.
