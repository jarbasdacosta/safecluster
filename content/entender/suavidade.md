---
title: 4 · Por que a carteira mais lisa rende mais
date: 2026-11-14
description: "A ideia central do método, em um exemplo"
tags: [entender]
---

Esta é a etapa que explica o método inteiro. Se você ler só uma, leia esta.

> [!tip] A ideia em uma frase
> **Uma carteira que balança menos permite apostar mais alto pelo mesmo desconforto — e apostar mais alto é o que vira dinheiro.**
>
> Então a carteira mais lisa não é a mais conservadora. Bem usada, ela é a que rende mais.

## O exemplo
Duas carteiras das nossas 20. Vamos ajustar o risco por operação de cada uma até as duas caírem exatamente **30%** — o mesmo desconforto, para ninguém levar vantagem por estar apostando mais alto:

| Carteira | Risco por operação para cair 30% | Virou | Por ano |
|---|---|---|---|
| ifr + por + pullback + rompimento | **1,60%** | R\$ 13.345.566 | +164% |
| fibo + por + pullback + rompe + rompimento | **1,85%** | R\$ 6.784.196 | +131% |

Mesma dor exata — as duas caem 30% — e a primeira termina com **2,0 vezes mais dinheiro**.

Nesta rodada as duas suportam risco parecido (1,60% e 1,85%), então a diferença de resultado vem mais da qualidade das operações que da suavidade. O mecanismo descrito abaixo continua valendo, mas neste conjunto de carteiras ele está menos visível.

> [!note] Por que uma suporta mais que a outra
> Porque a pior queda não vem do tamanho da aposta sozinho — vem do tamanho da aposta **multiplicado pelo quanto a carteira tropeça**. Uma carteira cujos erros vêm espalhados pode apostar alto e ainda assim nunca acumular uma sequência funda. Uma cujos erros vêm agrupados chega na mesma queda apostando muito menos.
>
> Suavidade, então, não é um conforto que se paga com retorno. É uma **permissão para arriscar mais**, e ela se converte em dinheiro.

## O erro que isso revela
Quase toda comparação de estratégias que você vai encontrar — inclusive as que este site fazia antes — compara resultados **com o mesmo risco por operação**, normalmente 1%. Isso parece justo e não é.

Com risco fixo, a carteira que mais rende é tipicamente a que balança mais, porque balançar mais com aposta igual produz números maiores — e também quedas maiores. **Você acaba premiando a mais alavancada e chamando isso de competência.** A comparação só fica honesta quando todas são ajustadas para doerem igual.

As seis melhores quando se compara a 1% fixo, e onde elas ficam quando todas são postas a cair 30%:

| A 1% fixo | Carteira | Virou a 1% | Ordenando por 30% | Virou a 30% |
|---|---|---|---|---|
| 1º | ifr + por + pullback + rompimento | R\$ 7.640.559 | 1º | R\$ 13.345.566 |
| 2º | fibo + ifr + pullback + rompimento | R\$ 6.953.188 | 2º | R\$ 12.656.691 |
| 3º | ifr + pullback + rompimento | R\$ 6.028.164 | 3º | R\$ 12.452.669 |
| 4º | fibo + ifr + por + rompe + rompimento | R\$ 5.952.512 | 11º | R\$ 9.565.811 |
| 5º | ifr + por + rompe + rompimento | R\$ 5.144.860 | 10º | R\$ 9.579.665 |
| 6º | fibo + ifr + rompe + rompimento | R\$ 4.571.064 | 19º | R\$ 8.146.341 |

3 das 6 mudam de posição. A ordem a 1% fixo **não é a ordem que importa** para quem tem um limite de perda em mente.

## Como você usa isso na prática
Cada carteira do [ranking](o-ranking) traz a linha **no limite**: o risco por operação que põe aquela carteira na sua tolerância de 30%, e quanto ela rende assim. Em vez de escolher 1% ou 2% no escuro e descobrir depois quanto dói, você parte da dor que aceita e lê o risco que corresponde.

Com um aviso importante, que a etapa [10 · O que pode dar errado](limites) detalha: esse número foi calibrado no passado, e o passado foi mais gentil que o futuro. Calibrar para 30% entregou 38% quando testado de verdade — então **calibra-se para 24% para viver 30%**.

---

← **anterior:** [3 · Por que combinar](por-que-combinar)  
→ **próxima:** [5 · O que o passado consegue prever](o-que-o-passado-preve)  

[a trilha toda](./) · [glossário](glossario)
