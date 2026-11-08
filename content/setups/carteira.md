---
title: Carteira de setups
date: 2026-11-07
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 07/11/2026 21:21 BRT · dados de 01/11/2021 a 06/11/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 17 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 38.304** (+31% ao ano · pior queda −12% · Sharpe 1,18)
> - CDI: **R\$ 18.193** (+13% ao ano) · Ibovespa: **R\$ 15.964** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 38.872, +31% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.140.470, +159% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Dobrando o risco (2% dividido em vez de 1%): R\$ 311.621, +100% ao ano, pior queda −11%** — contra +51% ao ano e queda −5% com 1%. O site continua recomendando 1%; o 2% está aí só para você ver os números.
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+0,6%** em 8 pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| Setup | Sharpe | Retorno ÷ queda | Dias no vermelho | Teste ÷ treino · meses > CDI | Correlação · op./mês |
|---|---|---|---|---|---|
| **1º** [IFR](ifr-de-tendencia) ·TEN | 1,59 | 3,1 | 69 d | 150% · 70% | 0,26 · 12,5 |
| **2º** [Bollinger](rompimento-da-bollinger) ·TEN | 1,61 | 2,2 | 84 d | 150% · 64% | 0,25 · 4,2 |
| **3º** [Donchian](donchian-com-medias) ·TEN | 1,33 | 2,1 | 188 d | 107% · 67% | 0,29 · 21,2 |
| **4º** [Pôr do sol](por-do-sol) ·POR | 1,15 | 0,6 | 328 d | 150% · 66% | −0,08 · 8,0 |
| **5º** [1ª vela 80](primeira-vela-80-min) ·VEL | 1,10 | 1,1 | 298 d | 150% · 62% | 0,17 · 7,7 |
| **6º** [ADX](adx-da-manha) ·ADX | 1,03 | 1,3 | 198 d | 150% · 62% | 0,22 · 29,1 |
| **7º** [MACD](macd-na-tendencia) ·TEN | 0,96 | 0,9 | 256 d | 150% · 64% | 0,28 · 14,5 |
| **8º** [Tendência](tendencia-forte-do-dia) ·TEN | 1,30 | 1,7 | 206 d | 86% · 59% | 0,32 · 28,3 |
| **9º** [GPS médias](gps-de-medias) ·TEN | 1,04 | 1,2 | 205 d | 58% · 64% | 0,26 · 19,8 |
| **10º** [Pullback](pullback-na-media) ·PUL | 1,20 | 1,8 | 204 d | 28% · 59% | −0,02 · 4,9 |
| **11º** [Onda](vai-na-onda) ·OND | 0,73 | 0,6 | 471 d | 150% · 57% | 0,16 · 19,2 |
| **12º** [Extremos sem](extremos-da-semana-virada) ·EXT | 0,67 | 0,4 | 545 d | 150% · 62% | 0,19 · 9,5 |
| **13º** [BB explosão](explosao-da-bollinger) ·TEN | 0,74 | 0,6 | 273 d | 139% · 57% | 0,29 · 19,4 |
| **14º** [Quinta](primeira-vela-de-quinta) ·QUI | 0,88 | 0,5 | 183 d | 62% · 49% | −0,07 · 1,7 |
| **15º** [VWAP](bandas-de-vwap) ·TEN | 0,46 | 0,2 | 511 d | 146% · 56% | 0,34 · 25,2 |
| **16º** [Fibo 50%](fibo-50-do-dia) ·FIB | 0,71 | 0,5 | 223 d | 37% · 54% | 0,20 · 3,6 |
| **17º** [Rompe 200](rompe-media-200) ·ROM | 0,43 | 0,2 | 191 d | 23% · 44% | 0,15 · 3,3 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|
| **1º** [IFR](ifr-de-tendencia) | +43% | **+67%** | −9% | **−11%** | 5 op · +0,16R |
| **2º** [Bollinger](rompimento-da-bollinger) | +25% | **+52%** | −5% | **−7%** | sem operações |
| **3º** [Donchian](donchian-com-medias) | +42% | **+84%** | −12% | **−24%** | 5 op · +1,73R |
| **4º** [Pôr do sol](por-do-sol) | +17% | **+20%** | −6% | **−3%** | 2 op · +0,35R |
| **5º** [1ª vela 80](primeira-vela-80-min) | +32% | **+47%** | −16% | **−14%** | 4 op · +0,43R |
| **6º** [ADX](adx-da-manha) | +37% | **+65%** | −17% | **−31%** | 16 op · +0,06R |
| **7º** [MACD](macd-na-tendencia) | +31% | **+41%** | −18% | **−11%** | 7 op · +0,42R |
| **8º** [Tendência](tendencia-forte-do-dia) | +47% | **+71%** | −18% | **−24%** | 6 op · +0,65R |
| **9º** [GPS médias](gps-de-medias) | +35% | **+66%** | −17% | **−23%** | 7 op · +0,93R |
| **10º** [Pullback](pullback-na-media) | +25% | **+32%** | −6% | **−9%** | sem operações |
| **11º** [Onda](vai-na-onda) | +30% | **+41%** | −26% | **−20%** | 6 op · +0,35R |
| **12º** [Extremos sem](extremos-da-semana-virada) | +25% | **+31%** | −28% | **−18%** | 2 op · −1,02R |
| **13º** [BB explosão](explosao-da-bollinger) | +26% | **+39%** | −20% | **−33%** | 3 op · +2,54R |
| **14º** [Quinta](primeira-vela-de-quinta) | +17% | **+18%** | −7% | **−3%** | sem operações |
| **15º** [VWAP](bandas-de-vwap) | +21% | **+25%** | −31% | **−20%** | 11 op · −0,48R |
| **16º** [Fibo 50%](fibo-50-do-dia) | +22% | **+17%** | −17% | **−3%** | 1 op · +1,41R |
| **17º** [Rompe 200](rompe-media-200) | +17% | **+20%** | −16% | **−10%** | sem operações |

- **IFR de Tendência:** entra na força medida pelo IFR · 10h–11h e 14h–16h
- **Rompimento da Bollinger:** rompimento da banda de Bollinger a favor da tendência · 10h15–11h e 14h–17h30
- **Donchian com Médias:** rompimento de canal a favor da tendência · 10h às 16h
- **Pôr do Sol (17h45):** scalp no fim do pregão, a favor do dia · 17h50 às 18h10
- **Primeira Vela de 80 Minutos:** força da primeira vela do dia, alvo longo com stop móvel · entra 10h20
- **ADX da Manhã:** pega o começo da tendência (ADX subindo), stop curto · 10h–11h
- **MACD na Tendência:** tendência do dia confirmada pelo MACD, com break even · 9h–11h30 e 14h–16h
- **Tendência Forte do Dia:** segue a tendência já formada (rompimento longe da abertura) · o dia todo, até 17h
- **GPS de Médias:** tendência com alvo longo e stop curto · 10h–11h e 14h–16h
- **Pullback na Média:** entra na volta da correção até a média · 10h30–12h30 e 14h45–15h45
- **Vai na Onda:** segue o fluxo: 3 velas a favor renovando o extremo do dia com volume · 9h45–16h
- **Extremos da Semana (virada de mão):** rompimento dos extremos da semana com reversão no stop · abertura até 15h (ordens); posição zera às 18h20
- **Explosão da Bollinger:** rompimento de volatilidade a favor da tendência · 10h às 16h (zera às 17h)
- **Primeira Vela de Quinta:** rompimento da primeira vela do dia (dia da semana escolhido) · 9h15
- **Bandas de VWAP:** rompimento da banda de VWAP a favor da média de 200 · 10h às 16h
- **Pullback no 50% do dia:** pullback na metade do range do dia, a favor da tendência · 10h às 11h30
- **Rompimento da Média de 200:** rompimento de média longa com alvo longo · 9h às 16h

*Correlação = com os outros setups (baixa é bom para a carteira). Como o ranking é feito: cada setup ganha uma posição em 4 critérios — **Sharpe** (retorno acima do CDI por oscilação), **retorno acima do CDI ÷ pior queda** (quanto rende para cada 1% de queda que você aguenta), **teste ÷ treino** (quanto do resultado por operação de 2021–2023 se manteve em 2024 em diante; 100% = manteve tudo) e **meses acima do CDI**. Vale a média das 4 posições. Correlação baixa com os outros é bom para a carteira, mas não entra na nota de cada setup.*

### Taxa de acerto, payoff e expectativa

As 5 melhores combinações e cada setup, vistos por operação em vez de por ano. [Ver todas as operações, uma a uma](operacoes).

| | Operações · acerto | Ganho · perda média | Payoff | Expectativa (pts · R) | Lucro total (pts · R\$) |
|---|---|---|---|---|---|
| ⭐ **Recomendada** (IFR + Pullback + Bollinger) | 1335 · 34,5% | +754 · 265 pts | 2,84 | **86,6 pts** · +0,34 R | 115.616 pts · R\$ 23.123 |
| **2ª** (Pullback + Bollinger) | 562 · 37,4% | +681 · 251 pts | 2,71 | **97,1 pts** · +0,42 R | 54.546 pts · R\$ 10.909 |
| **3ª** (IFR + Pullback + Rompe 200 + Bollinger) | 1540 · 35,1% | +760 · 286 pts | 2,66 | **81,5 pts** · +0,32 R | 125.474 pts · R\$ 25.095 |
| **4ª** (Fibo 50% + IFR + Pullback + Bollinger) | 1561 · 35,6% | +773 · 291 pts | 2,65 | **87,8 pts** · +0,30 R | 137.096 pts · R\$ 27.419 |
| **5ª** (Fibo 50% + Pullback + Bollinger) | 788 · 38,7% | +738 · 309 pts | 2,39 | **96,5 pts** · +0,33 R | 76.026 pts · R\$ 15.205 |
| [ADX](adx-da-manha) | 1802 · 18,3% | +1.115 · 214 pts | 5,22 | **29,8 pts** · +0,13 R | 53.663 pts · R\$ 10.733 |
| [VWAP](bandas-de-vwap) | 1562 · 25,1% | +716 · 222 pts | 3,22 | **13,1 pts** · +0,04 R | 20.526 pts · R\$ 4.105 |
| [Donchian](donchian-com-medias) | 1315 · 19,7% | +1.025 · 193 pts | 5,32 | **47,3 pts** · +0,21 R | 62.143 pts · R\$ 12.429 |
| [BB explosão](explosao-da-bollinger) | 1204 · 25,9% | +739 · 224 pts | 3,30 | **25,4 pts** · +0,11 R | 30.625 pts · R\$ 6.125 |
| [Extremos sem](extremos-da-semana-virada) | 587 · 35,6% | +940 · 442 pts | 2,13 | **50,1 pts** · +0,14 R | 29.417 pts · R\$ 5.883 |
| [Fibo 50%](fibo-50-do-dia) | 226 · 42,0% | +865 · 464 pts | 1,87 | **95,0 pts** · +0,08 R | 21.480 pts · R\$ 4.296 |
| [GPS médias](gps-de-medias) | 1229 · 22,9% | +938 · 227 pts | 4,14 | **40,6 pts** · +0,19 R | 49.906 pts · R\$ 9.981 |
| [IFR](ifr-de-tendencia) | 773 · 32,5% | +815 · 275 pts | 2,96 | **79,0 pts** · +0,27 R | 61.069 pts · R\$ 12.214 |
| [MACD](macd-na-tendencia) | 901 · 22,1% | +998 · 224 pts | 4,46 | **45,9 pts** · +0,13 R | 41.324 pts · R\$ 8.265 |
| [Pôr do sol](por-do-sol) | 499 · 53,3% | +121 · 101 pts | 1,20 | **17,2 pts** · +0,06 R | 8.594 pts · R\$ 1.719 |
| [1ª vela 80](primeira-vela-80-min) | 476 · 21,6% | +1.357 · 264 pts | 5,15 | **87,0 pts** · +0,30 R | 41.403 pts · R\$ 8.281 |
| [Quinta](primeira-vela-de-quinta) | 108 · 63,9% | +396 · 469 pts | 0,84 | **83,4 pts** · +0,23 R | 9.006 pts · R\$ 1.801 |
| [Pullback](pullback-na-media) | 303 · 38,0% | +729 · 300 pts | 2,43 | **90,7 pts** · +0,28 R | 27.482 pts · R\$ 5.496 |
| [Rompe 200](rompe-media-200) | 205 · 39,0% | +793 · 429 pts | 1,85 | **48,1 pts** · +0,17 R | 9.858 pts · R\$ 1.972 |
| [Bollinger](rompimento-da-bollinger) | 259 · 36,7% | +622 · 195 pts | 3,18 | **104,5 pts** · +0,60 R | 27.064 pts · R\$ 5.413 |
| [Tendência](tendencia-forte-do-dia) | 1757 · 34,5% | +721 · 317 pts | 2,27 | **40,9 pts** · +0,13 R | 71.924 pts · R\$ 14.385 |
| [Onda](vai-na-onda) | 1188 · 35,4% | +884 · 430 pts | 2,06 | **35,7 pts** · +0,11 R | 42.356 pts · R\$ 8.471 |
| Todos os 17 juntos | 14394 · 28,4% | +810 · 262 pts | 3,09 | **42,2 pts** · +0,15 R | 607.839 pts · R\$ 121.568 |

*Taxa de acerto = operações no lucro ÷ total. Payoff = ganho médio ÷ perda média. **Expectativa matemática** = quanto a operação rende em média (acerto × ganho médio − erro × perda média); em **R** é o mesmo em múltiplos do risco (stop + custo), que é o que o tamanho de 1% usa. Lucro total em pontos, já com o custo de 15 pontos por operação.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes — e vale reparar que a de maior retorno costuma ser a de maior queda, porque é a mesma coisa vista de dois lados.

| Perfil | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano · queda | Sharpe treino → teste |
|---|---|---|---|---|---|
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | **+159% · −17,1%** | +51% · −5,1% | +31% · −2,6% | 2,34 → 2,10 |
| 📈 Maior retorno | Tendência | **+71% · −23,6%** | +71% · −23,6% | +47% · −16,1% | 1,58 → 1,15 |
| 🛡️ Menor queda | Pôr do sol + Pullback + Bollinger | **+89% · −9,1%** | +35% · −2,5% | +23% · −1,6% | 2,30 → 1,90 |

*R\$ 10 mil viraram, na recomendada: R\$ 38.872 com 1 contrato por R\$ 10 mil · R\$ 78.534 com 1% dividido entre os setups · **R\$ 1.140.470 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · VWAP = Bandas de VWAP · Donchian = Donchian com Médias · BB explosão = Explosão da Bollinger · Extremos sem = Extremos da Semana (virada de mão) · Fibo 50% = Pullback no 50% do dia · GPS médias = GPS de Médias · MACD = MACD na Tendência · Pôr do sol = Pôr do Sol (17h45) · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Rompe 200 = Rompimento da Média de 200 · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

### As 5 melhores combinações, lado a lado

A recomendada é a 1ª, mas a diferença para as outras quatro costuma ser pequena, e o que separa uma da outra quase nunca é o retorno. Esta tabela existe para você poder discordar da nota com dados na mão: se duas rendem praticamente o mesmo e uma delas tem metade da pior queda, metade da sequência de perdas e mais margem por operação, é ela que vale a pena — e aumentar um pouco a posição recupera a diferença de retorno com folga. O contrário não funciona: não existe como diminuir a queda de uma carteira ruim sem diminuir o retorno junto.

| | 1ª ⭐ | 2ª | 3ª | 4ª | 5ª |
|---|---|---|---|---|---|
| **Setups** | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | Pullback ·PUL + Bollinger ·TEN | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | Fibo 50% ·FIB + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | Fibo 50% ·FIB + Pullback ·PUL + Bollinger ·TEN |
| **Nota de sobrevivência** (0 a 10) | **7,34** | **7,04** | **6,97** | **6,74** | **6,71** |
| ├ retorno ÷ queda (treino) · peso 2 | 7,0 · nota 7,0 | 5,7 · nota 5,7 | 5,9 · nota 5,9 | 6,0 · nota 6,0 | 5,1 · nota 5,1 |
| ├ expectativa por operação (treino) · peso 2 | +0,32 R · nota 6,4 | +0,44 R · nota 8,9 | +0,31 R · nota 6,2 | +0,29 R · nota 5,8 | +0,35 R · nota 7,0 |
| ├ dias no vermelho (treino) · peso 1 | 34 d · nota 8,6 | 57 d · nota 6,3 | 34 d · nota 8,6 | 37 d · nota 8,3 | 38 d · nota 8,2 |
| └ pior 60 dias (treino) · peso 1 | −1,4% · nota 8,6 | −3,1% · nota 6,9 | −0,9% · nota 9,1 | −1,4% · nota 8,6 | −2,1% · nota 7,9 |
| **Queda de 1 história em 20** (sorteio) | **−14%** | **−13%** | **−11%** | **−10%** | **−9%** |
| Operações · acerto | 1.335 · 34,5% | 562 · 37,4% | 1.540 · 35,1% | 1.561 · 35,6% | 788 · 38,7% |
| Ganho médio · perda média | +754 · −265 pts | +681 · −251 pts | +760 · −286 pts | +773 · −291 pts | +738 · −309 pts |
| Payoff · fator de lucro | 2,84 · 1,50 | 2,71 · 1,62 | 2,66 · 1,44 | 2,65 · 1,47 | 2,39 · 1,51 |
| **Expectativa** (pts · R) | **86,6 pts · +0,34 R** | **97,1 pts · +0,42 R** | **81,5 pts · +0,32 R** | **87,8 pts · +0,30 R** | **96,5 pts · +0,33 R** |
| Maior sequência de perdas | 15 seguidas | 10 seguidas | 13 seguidas | 19 seguidas | 12 seguidas |
| **Lucro** (pts · R\$, 1 contrato) | **115.616 · R\$ 23.123** | **54.546 · R\$ 10.909** | **125.474 · R\$ 25.095** | **137.096 · R\$ 27.419** | **76.026 · R\$ 15.205** |
| Pior queda em pontos (1 contrato) | −7.326 pts · −R\$ 1.465 | −3.439 pts · −R\$ 688 | −10.610 pts · −R\$ 2.122 | −11.493 pts · −R\$ 2.299 | −9.021 pts · −R\$ 1.804 |
| **1% dividido:** ao ano · queda | **+51% · −5,1%** | **+43% · −4,0%** | **+43% · −4,5%** | **+42% · −3,7%** | **+34% · −3,1%** |
| 1% por setup: ao ano · queda | +159% · −17,1% | +78% · −8,6% | +174% · −21,4% | +167% · −19,4% | +84% · −10,4% |
| 1 contrato: ao ano · queda | +31% · −2,6% | +26% · −2,1% | +28% · −3,1% | +29% · −3,7% | +25% · −3,0% |
| Tempo abaixo do topo (1% dividido) | 43 pregões | 68 pregões | 45 pregões | 47 pregões | 60 pregões |
| Pior 60 dias (período todo) | +0,7% | −1,1% | +0,5% | +0,4% | −0,7% |
| Sharpe: treino → teste | 2,34 → 2,10 | 2,24 → 1,64 | 2,29 → 1,84 | 2,43 → 1,81 | 2,40 → 1,27 |
| Sharpe · risco/retorno (período todo) | 2,18 · 7,1 | 1,90 · 6,1 | 2,00 · 4,8 | 2,03 · 4,4 | 1,70 · 4,0 |
| Pior ano · correlação média | +22% · 0,01 | +17% · −0,14 | +19% · 0,12 | +20% · 0,10 | +16% · 0,02 |
| **R\$ 10.000 viraram** (1% dividido) | **R\$ 78.534** | **R\$ 58.145** | **R\$ 59.576** | **R\$ 57.348** | **R\$ 42.142** |

*Referência no mesmo período: CDI +13% ao ano · Ibovespa comprado +10% ao ano com pior queda −21%. **Expectativa** = quanto cada operação rende em média (acerto × ganho médio − erro × perda média); em **R** é o mesmo em múltiplos do risco (stop + custo). **Risco/retorno** = retorno acima do CDI ÷ pior queda, no período todo. **Tempo abaixo do topo** = o maior número de pregões seguidos sem recuperar o valor mais alto já atingido — é o que de fato cansa quem opera. Operações, payoff, expectativa e lucro são das operações dos setups da combinação, com 15 pts de custo; as linhas de ao ano e queda usam o capital no CDI.*

> [!info]- Quando a carteira recomendada mudou (clique para abrir)
> | Desde | Combinação | Setups | Nota | Medida pelo critério |
> |---|---|---|---|---|
> | 07/11/2026 | IFR + Pullback + Bollinger | 3 | 7,34 | 4 medidas · eficiência e margem com peso 2 |
> | 07/11/2026 | Extremos sem + IFR + Pullback + Bollinger + Tendência | 5 | 7,42 | 3 medidas em escala fixa (sem expectativa nem ruína) |
> | 06/11/2026 | IFR + Pullback + Bollinger | 3 | — | posição no ranking das combinações |
>
> *Cada nota foi medida pelo critério em vigor naquele dia, por isso linhas de critérios diferentes não se comparam diretamente: a carteira de 5 setups, que valia 7,42 pela régua de três medidas, vale 6,40 pela de quatro — foi justamente por isso que ela deixou de ser a recomendada.*
>
> *A recomendada só troca quando os números dela mudam. Antes de 07/11/2026 a nota era a média das POSIÇÕES no ranking das combinações, então ela podia trocar sozinha quando um setup novo era aprovado e milhares de combinações entravam no conjunto — foi o que aconteceu naquele dia, ao aprovar o 17º setup (as combinações passaram de 6.884 para 9.401). Com a nota em escala fixa isso não acontece mais.*


**1% × 2% do capital: o que muda**

| Risco total | Por operação | Ao ano | Pior queda | Dias no vermelho | Pior 60 dias | R\$ 10.000 viraram |
|---|---|---|---|---|---|---|
| **1% (recomendado)** | 0,33% | +51% | −5% | 43 d | +1% | R\$ 78.534 |
| 2% (o dobro) | 0,67% | +100% | −11% | 55 d | −2% | R\$ 311.621 |

*Dobrar o risco quase dobra o retorno e quase dobra a queda, mas **não encurta o tempo no vermelho** — esse depende da sequência de acertos e erros, não do tamanho. A validação andando para frente (recalibrando de 6 em 6 meses só com o passado) indicou que esta carteira suporta algo perto de 2%, mas com apenas 7 semestres fora da amostra e nenhum estouro observado a amostra é pequena: zero estouros em 3,5 anos é compatível com uma chance real bem maior que zero. Por isso a recomendação segue 1%.*
### Por que a recomendada é IFR + Pullback + Bollinger

Ela tirou a maior **nota de sobrevivência**: 7,34 de 10, contra 7,04 da segunda colocada (Pullback + Bollinger). O que isso quer dizer, medida por medida, tudo no treino (até 2023) e sem o CDI na conta de risco — o CDI pinga todo dia, preenche as quedas pequenas e esconde a diferença entre as carteiras:

- **Eficiência:** rende 7,0 vezes ao ano o tamanho da sua pior queda. É a medida que impede uma carteira de ganhar a disputa rendendo um pouco mais e arriscando muito mais — diferença de retorno se resolve com o tamanho da posição, diferença de queda não.
- **Margem:** cada operação rende em média +0,32 R, ou seja, 32% do que arrisca. É a gordura entre o setup e o zero: com margem curta, um custo um pouco maior ou um ano mais fraco já viram prejuízo.
- **Sequência:** passou no máximo 34 pregões seguidos abaixo do topo anterior, e o pior trimestre de toda a série custou −1,4%.
- **Má sorte normal:** em 1.000 histórias alternativas — os mesmos dias em outra ordem — a queda que aparece em 1 de cada 20 é de −14%. É por esse número que se dimensiona a posição. não pela queda que de fato aconteceu.
- **Fora do treino**, em dados que não participaram de escolha nenhuma, ela entregou +52% ao ano com 1% dividido (Sharpe 2,10).

A correlação média entre os setups dela é 0,01: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Acrescentar qualquer um dos outros 14 setups aprovados piora a nota dela — a tabela das combinações mostra onde cada mistura fica. A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (1ª vela 80, Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, com ⚠️, mas não são recomendados.

> [!info]- O que cada medida de risco quer dizer (clique para abrir)
> Todas olham a mesma carteira por ângulos diferentes, e nenhuma sozinha conta a história.
> - **Pior queda (drawdown):** a maior distância entre o ponto mais alto que o capital já atingiu e o fundo que veio depois. É o pior momento que alguém teria atravessado seguindo a carteira — e é por ela que se escolhe o tamanho da posição.
> - **Dias no vermelho:** quantos pregões seguidos a carteira passou **abaixo** daquele topo anterior antes de recuperá-lo. Duas carteiras podem cair os mesmos 5%: uma recupera em duas semanas, a outra leva seis meses. A segunda é muito mais difícil de aguentar.
> - **Pior janela de 60 dias:** o resultado somado dos 60 pregões seguidos mais feios de toda a série, caiam onde caírem no calendário — não são os últimos 60 dias. Responde "qual foi o pior trimestre que isso já deu?".
> - **Expectativa por operação (R):** quanto cada operação rende, em média, em múltiplos do que ela arrisca (stop mais custo). +0,30 R quer dizer que, repetida muitas vezes, cada operação devolve 30% do risco que correu. É a margem que separa o setup do zero a zero.
> - **Retorno ÷ queda:** quanto a carteira rende por ano para cada 1% de queda que exige. É a medida de eficiência: render mais arriscando mais não é mérito, porque qualquer um faz isso aumentando a posição.
> - **Queda de 1 história em 20:** a pior queda no percentil 5 de milhares de reembaralhamentos dos mesmos dias. A ordem real foi um sorteio só; esta coluna mostra o azar que chega uma vez em vinte, e é o número pelo qual se deve planejar.
> - **Sharpe:** retorno acima do CDI dividido pela oscilação. Útil, mas trata oscilação para cima e para baixo como a mesma coisa, e não enxerga sequência — por isso deixou de ser o critério de escolha.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a **nota de sobrevivência**, de 0 a 10.

A pergunta que a nota tenta responder não é *qual rendeu mais*. É **qual tem mais chance de ainda estar de pé daqui a alguns anos** — porque o que tira alguém do jogo não é um dia ruim, é uma sequência ruim, e porque uma carteira que rende o mesmo arriscando o dobro não é equivalente: é pior. Quatro medidas, todas calculadas **só no treino** (até 2023) e **sem o CDI** na conta de risco, cada uma numa régua fixa:

| Medida | Peso | Nota 0 | Nota 10 | Para que serve |
|---|---|---|---|---|
| **Retorno ÷ pior queda** | 2 | 0,0× | 10,0× | **eficiência**: quanto rende por ano para cada 1% de queda que você precisa aguentar. Render 30% caindo 3% é melhor do que render 40% caindo 10% — e o tamanho da posição resolve a diferença de retorno, o de queda não |
| **Expectativa por operação** | 2 | +0,00 R | +0,50 R | **margem**: quanto cada operação rende, em média, em múltiplos do que ela arrisca. É a gordura que separa o setup do zero — com pouca margem, um aumento de custo ou uma piora discreta já viram prejuízo |
| Dias seguidos no vermelho | 1 | 120 pregões | 20 pregões | **sequência**: o maior tempo que a carteira passou abaixo do seu melhor momento sem recuperar. É o que cansa e faz desistir |
| Pior janela de 60 pregões | 1 | −10% | +0% | **o pior trimestre**: o resultado acumulado dos 60 pregões seguidos mais feios de toda a série, caiam onde caírem no calendário |

**Por que eficiência e margem pesam o dobro.** Entre as carteiras boas, as duas últimas medidas são quase iguais: todas passam de 34 a 44 pregões no vermelho e perdem de 0,3% a 1,4% no pior trimestre. Com peso igual, uma diferença de um ponto percentual num trimestre específico de 2011 — que é ruído, não qualidade — decidia a carteira sozinha. Foi o que aconteceu em 07/11/2026: a carteira eleita perdia da segunda colocada em sete das nove medidas e ganhou só por essa. As duas primeiras, ao contrário, separam de verdade.

**E há um corte antes da nota.** Entre as 40 melhores. cada uma passa por 1.000 histórias alternativas — os mesmos dias. reembaralhados — e quem tem queda pior que −25% em 1 de cada 20 dessas histórias fica fora da recomendação. por melhor que seja a média. A ordem real dos acontecimentos foi um sorteio só; planejar com ela é planejar com a sorte que se teve.

A régua é **fixa**: a nota de uma combinação não depende de quais outras existem, então a recomendada só troca quando os números dela mudam. Até 06/11/2026 a nota era a média das *posições* no ranking, e bastava um setup novo ser aprovado — trazendo milhares de combinações para o conjunto — para a recomendada mudar sem que nada nela tivesse piorado.

Das **9.401** combinações possíveis. a tabela mostra as **30 melhores**.

| # · nota | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | Sobrevivência no treino: ret÷queda · dias no vermelho · pior 60 d | Pior ano · correlação |
|---|---|---|---|---|---|
| 1 · **7,50** | Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+87% · −8,2%** | +34% · −2,4% | 7,0 · 57 d · −1,8% | +17% · −0,04 |
| 2 · **7,47** | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+172% · −17,1%** | +43% · −3,5% | 7,2 · 34 d · −0,8% | +20% · −0,01 |
| 3 · **7,34** | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN ⭐ | **+159% · −17,1%** | +51% · −5,1% | 7,0 · 34 d · −1,4% | +22% · 0,01 |
| 4 · **7,08** | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+47% · −19,8%** | +24% · −6,2% | 5,0 · 36 d · −0,5% | +13% · 0,09 |
| 5 · **7,04** | Pullback ·PUL + Bollinger ·TEN | **+78% · −8,6%** | +43% · −4,0% | 5,7 · 57 d · −3,1% | +17% · −0,14 |
| 6 · **7,01** | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+187% · −21,4%** | +38% · −3,0% | 6,1 · 34 d · −0,9% | +18% · 0,06 |
| 7 · **6,97** | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+174% · −21,4%** | +43% · −4,5% | 5,9 · 34 d · −0,9% | +19% · 0,12 |
| 8 · **6,88** | Fibo 50% ·FIB + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+181% · −19,4%** | +37% · −2,8% | 6,2 · 37 d · −1,0% | +19% · 0,06 |
| 9 · **6,87** | Fibo 50% ·FIB + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+93% · −10,5%** | +30% · −2,2% | 5,5 · 38 d · −1,6% | +16% · 0,03 |
| 10 · **6,87** | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+245% · −20,5%** | +44% · −3,3% | 6,7 · 40 d · −1,0% | +23% · −0,00 |
| 11 · **6,83** | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+189% · −17,3%** | +38% · −2,5% | 7,0 · 39 d · −0,9% | +20% · −0,00 |
| 12 · **6,81** | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+181% · −28,0%** | +47% · −5,6% | 6,9 · 39 d · −1,8% | +20% · 0,01 |
| 13 · **6,80** | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+98% · −16,5%** | +31% · −3,3% | 5,4 · 53 d · −1,6% | +15% · 0,04 |
| 14 · **6,74** | Fibo 50% ·FIB + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+167% · −19,4%** | +42% · −3,7% | 6,0 · 37 d · −1,4% | +20% · 0,10 |
| 15 · **6,71** | Fibo 50% ·FIB + Pullback ·PUL + Bollinger ·TEN | **+84% · −10,4%** | +34% · −3,1% | 5,1 · 38 d · −2,1% | +16% · 0,02 |
| 16 · **6,69** | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+89% · −16,3%** | +35% · −4,8% | 5,1 · 57 d · −1,8% | +15% · 0,07 |
| 17 · **6,69** | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+117% · −15,6%** | +34% · −3,3% | 6,0 · 54 d · +0,1% | +17% · 0,08 |
| 18 · **6,67** | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+175% · −17,2%** | +43% · −3,5% | 6,7 · 39 d · −1,3% | +21% · −0,03 |
| 19 · **6,67** | IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+105% · −12,8%** | +39% · −3,5% | 6,9 · 60 d · −1,7% | +19% · −0,07 |
| 20 · **6,59** | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+106% · −15,3%** | +40% · −4,4% | 5,7 · 54 d · −0,2% | +17% · 0,19 |
| 21 · **6,59** | IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+133% · −17,4%** | +46% · −4,8% | 6,3 · 37 d · −2,2% | +22% · 0,06 |
| 22 · **6,56** | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+194% · −30,6%** | +42% · −5,2% | 6,1 · 39 d · −1,5% | +18% · 0,10 |
| 23 · **6,54** | Fibo 50% ·FIB + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+182% · −23,7%** | +38% · −3,6% | 5,2 · 34 d · −1,2% | +18% · 0,13 |
| 24 · **6,50** | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+229% · −20,4%** | +51% · −4,4% | 6,5 · 54 d · −1,5% | +25% · 0,05 |
| 25 · **6,45** | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+225% · −25,8%** | +42% · −4,1% | 6,1 · 37 d · −1,1% | +23% · 0,07 |
| 26 · **6,45** | Quinta ·QUI + Pullback ·PUL ⚠️ | **+39% · −9,3%** | +25% · −4,2% | 6,2 · 105 d · −2,4% | +14% · −0,03 |
| 27 · **6,44** | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+190% · −21,5%** | +38% · −3,2% | 5,7 · 34 d · −1,1% | +19% · 0,04 |
| 28 · **6,42** | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+197% · −24,7%** | +41% · −4,0% | 6,5 · 39 d · −1,8% | +20% · −0,02 |
| 29 · **6,41** | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+249% · −20,5%** | +44% · −3,2% | 6,3 · 40 d · −1,0% | +22% · 0,01 |
| 30 · **6,41** | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+226% · −32,6%** | +46% · −6,1% | 6,5 · 37 d · −1,5% | +23% · 0,07 |
| | *CDI* | *+13% · 0%* | — | — | — |
| | *Ibovespa comprado* | *+10% · −20,9%* | — | — | — |

**A melhor de cada tamanho** — quanto muda acrescentar mais um setup à carteira:

| Setups | Melhor combinação desse tamanho | 1% dividido: ao ano · queda | Dias no vermelho | Pior 60 dias |
|---|---|---|---|---|
| 1 | Pullback ·PUL | +32% · −9,1% | 137 d | −5,5% |
| 2 | Pullback ·PUL + Bollinger ·TEN | +43% · −4,0% | 57 d | −3,1% |
| 3 | Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN | +34% · −2,4% | 57 d | −1,8% |
| 4 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN | +43% · −3,5% | 34 d | −0,8% |
| 5 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | +38% · −3,0% | 34 d | −0,9% |

**As 9.401 combinações completas** ficam fora da página. numa planilha: [**planilha (.xlsx)**](setups/combinacoes.xlsx) (2.018 KB). Lá os números são numéricos de verdade, então dá para ordenar e filtrar por qualquer coluna — coisa que a lista na página não permitia. Ela saiu daqui porque deixava a página pesada demais para abrir.

*⚠️ = tem setup com dia da semana escolhido pelo autor do vídeo (fora da recomendação). O resultado com 1 contrato por R\$ 10 mil de cada combinação está na planilha. Correlação = média entre os setups da combinação. **Retorno ÷ queda, dias no vermelho e pior 60 dias** são medidos no TREINO (até 2023) e **sem o CDI**: é com eles que a recomendada é escolhida, e o CDI pingando todo dia preencheria as quedas pequenas e esconderia a diferença entre as combinações. Retorno ÷ queda de 2 = rendeu por ano o dobro da pior queda. **1% dividido** = 1% de risco repartido entre os setups (0,5% cada com 2, 0,33% com 3, 0,25% com 4): o mesmo risco total em todas as linhas, a comparação mais justa entre combinações. **1% por setup** = cada setup arrisca 1% do capital total em cada operação (veja abaixo) — com mais setups, mais risco aberto ao mesmo tempo, por isso as combinações grandes rendem e caem mais.*

## Os setups se ajudam?

Setups que ganham e perdem em **momentos diferentes** se completam: um segura a carteira enquanto o outro atravessa uma fase ruim. A correlação mede isso (1 = andam juntos, 0 = independentes, negativo = opostos).

![Correlação mensal entre os setups](setups/img/carteira_correlacao.png)

*Correlação do resultado mensal, medido com risco de 1% do capital por operação em cada setup — é como a carteira é operada, e é a mesma definição usada nos estudos.*

**Famílias (a sigla ·XXX ao lado de cada setup)**

| Sigla | Setups da família | Correlação média dentro dela |
|---|---|---|
| **·TEN** ⚠️ | VWAP, Donchian, BB explosão, GPS médias, IFR, MACD, Bollinger, Tendência | 0,45 |
| **·ADX** | ADX | — |
| **·EXT** | Extremos sem | — |
| **·VEL** | 1ª vela 80 | — |
| **·QUI** | Quinta | — |
| **·PUL** | Pullback | — |
| **·FIB** | Fibo 50% | — |
| **·POR** | Pôr do sol | — |
| **·ROM** | Rompe 200 | — |
| **·OND** | Onda | — |

*Dois setups caem na mesma família quando a correlação mensal entre eles passa de 0,45 (ligação por vizinhança: se A anda com B e B anda com C, os três ficam juntos). A sigla vem do setup com mais operações da família. **⚠️ família com mais de um setup = uma aposta só, não várias:** operar dois deles com 1% cada arrisca perto de 2% na mesma ideia, e eles tendem a entrar no mesmo lado nos mesmos dias. As famílias são recalculadas a cada geração — se a correlação mudar, os grupos mudam.*

> [!example]- Quantas vezes operaram no mesmo dia (clique para abrir)
> - **ADX** e **VWAP**: 64% dos dias em que pelo menos um deles operou
> - **ADX** e **Donchian**: 68% dos dias em que pelo menos um deles operou
> - **ADX** e **BB explosão**: 65% dos dias em que pelo menos um deles operou
> - **ADX** e **Extremos sem**: 29% dos dias em que pelo menos um deles operou
> - **ADX** e **Fibo 50%**: 19% dos dias em que pelo menos um deles operou
> - **ADX** e **GPS médias**: 71% dos dias em que pelo menos um deles operou
> - **ADX** e **IFR**: 48% dos dias em que pelo menos um deles operou
> - **ADX** e **MACD**: 54% dos dias em que pelo menos um deles operou
> - **ADX** e **Pôr do sol**: 39% dos dias em que pelo menos um deles operou
> - **ADX** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **ADX** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **ADX** e **Pullback**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **Rompe 200**: 14% dos dias em que pelo menos um deles operou
> - **ADX** e **Bollinger**: 20% dos dias em que pelo menos um deles operou
> - **ADX** e **Tendência**: 65% dos dias em que pelo menos um deles operou
> - **ADX** e **Onda**: 65% dos dias em que pelo menos um deles operou
> - **VWAP** e **Donchian**: 81% dos dias em que pelo menos um deles operou
> - **VWAP** e **BB explosão**: 71% dos dias em que pelo menos um deles operou
> - **VWAP** e **Extremos sem**: 30% dos dias em que pelo menos um deles operou
> - **VWAP** e **Fibo 50%**: 22% dos dias em que pelo menos um deles operou
> - **VWAP** e **GPS médias**: 63% dos dias em que pelo menos um deles operou
> - **VWAP** e **IFR**: 48% dos dias em que pelo menos um deles operou
> - **VWAP** e **MACD**: 62% dos dias em que pelo menos um deles operou
> - **VWAP** e **Pôr do sol**: 47% dos dias em que pelo menos um deles operou
> - **VWAP** e **1ª vela 80**: 35% dos dias em que pelo menos um deles operou
> - **VWAP** e **Quinta**: 9% dos dias em que pelo menos um deles operou
> - **VWAP** e **Pullback**: 27% dos dias em que pelo menos um deles operou
> - **VWAP** e **Rompe 200**: 18% dos dias em que pelo menos um deles operou
> - **VWAP** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **VWAP** e **Tendência**: 80% dos dias em que pelo menos um deles operou
> - **VWAP** e **Onda**: 64% dos dias em que pelo menos um deles operou
> - **Donchian** e **BB explosão**: 79% dos dias em que pelo menos um deles operou
> - **Donchian** e **Extremos sem**: 32% dos dias em que pelo menos um deles operou
> - **Donchian** e **Fibo 50%**: 23% dos dias em que pelo menos um deles operou
> - **Donchian** e **GPS médias**: 68% dos dias em que pelo menos um deles operou
> - **Donchian** e **IFR**: 50% dos dias em que pelo menos um deles operou
> - **Donchian** e **MACD**: 62% dos dias em que pelo menos um deles operou
> - **Donchian** e **Pôr do sol**: 44% dos dias em que pelo menos um deles operou
> - **Donchian** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **Donchian** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **Donchian** e **Pullback**: 24% dos dias em que pelo menos um deles operou
> - **Donchian** e **Rompe 200**: 16% dos dias em que pelo menos um deles operou
> - **Donchian** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **Donchian** e **Tendência**: 80% dos dias em que pelo menos um deles operou
> - **Donchian** e **Onda**: 66% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Extremos sem**: 30% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Fibo 50%**: 21% dos dias em que pelo menos um deles operou
> - **BB explosão** e **GPS médias**: 76% dos dias em que pelo menos um deles operou
> - **BB explosão** e **IFR**: 49% dos dias em que pelo menos um deles operou
> - **BB explosão** e **MACD**: 56% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Pôr do sol**: 41% dos dias em que pelo menos um deles operou
> - **BB explosão** e **1ª vela 80**: 34% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Pullback**: 24% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Rompe 200**: 17% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Bollinger**: 25% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Tendência**: 71% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Onda**: 59% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Fibo 50%**: 16% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **GPS médias**: 27% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **IFR**: 27% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **MACD**: 32% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Pôr do sol**: 24% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **1ª vela 80**: 19% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Quinta**: 7% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Pullback**: 18% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Rompe 200**: 6% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Bollinger**: 17% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Tendência**: 33% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Onda**: 29% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **GPS médias**: 19% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **IFR**: 22% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **MACD**: 26% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **Pôr do sol**: 20% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **1ª vela 80**: 14% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **Quinta**: 6% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **Pullback**: 14% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **Rompe 200**: 11% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **Bollinger**: 14% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **Tendência**: 25% dos dias em que pelo menos um deles operou
> - **Fibo 50%** e **Onda**: 16% dos dias em que pelo menos um deles operou
> - **GPS médias** e **IFR**: 48% dos dias em que pelo menos um deles operou
> - **GPS médias** e **MACD**: 55% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Pôr do sol**: 38% dos dias em que pelo menos um deles operou
> - **GPS médias** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Pullback**: 20% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Rompe 200**: 14% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Bollinger**: 24% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Tendência**: 62% dos dias em que pelo menos um deles operou
> - **GPS médias** e **Onda**: 61% dos dias em que pelo menos um deles operou
> - **IFR** e **MACD**: 55% dos dias em que pelo menos um deles operou
> - **IFR** e **Pôr do sol**: 43% dos dias em que pelo menos um deles operou
> - **IFR** e **1ª vela 80**: 29% dos dias em que pelo menos um deles operou
> - **IFR** e **Quinta**: 6% dos dias em que pelo menos um deles operou
> - **IFR** e **Pullback**: 10% dos dias em que pelo menos um deles operou
> - **IFR** e **Rompe 200**: 12% dos dias em que pelo menos um deles operou
> - **IFR** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **IFR** e **Tendência**: 50% dos dias em que pelo menos um deles operou
> - **IFR** e **Onda**: 44% dos dias em que pelo menos um deles operou
> - **MACD** e **Pôr do sol**: 46% dos dias em que pelo menos um deles operou
> - **MACD** e **1ª vela 80**: 31% dos dias em que pelo menos um deles operou
> - **MACD** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **MACD** e **Pullback**: 17% dos dias em que pelo menos um deles operou
> - **MACD** e **Rompe 200**: 13% dos dias em que pelo menos um deles operou
> - **MACD** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **MACD** e **Tendência**: 67% dos dias em que pelo menos um deles operou
> - **MACD** e **Onda**: 51% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **1ª vela 80**: 27% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Quinta**: 9% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Pullback**: 18% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Rompe 200**: 16% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Bollinger**: 21% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Tendência**: 48% dos dias em que pelo menos um deles operou
> - **Pôr do sol** e **Onda**: 42% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Quinta**: 13% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Pullback**: 15% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Rompe 200**: 11% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Bollinger**: 17% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Tendência**: 35% dos dias em que pelo menos um deles operou
> - **1ª vela 80** e **Onda**: 36% dos dias em que pelo menos um deles operou
> - **Quinta** e **Pullback**: 7% dos dias em que pelo menos um deles operou
> - **Quinta** e **Rompe 200**: 7% dos dias em que pelo menos um deles operou
> - **Quinta** e **Bollinger**: 5% dos dias em que pelo menos um deles operou
> - **Quinta** e **Tendência**: 9% dos dias em que pelo menos um deles operou
> - **Quinta** e **Onda**: 8% dos dias em que pelo menos um deles operou
> - **Pullback** e **Rompe 200**: 21% dos dias em que pelo menos um deles operou
> - **Pullback** e **Bollinger**: 12% dos dias em que pelo menos um deles operou
> - **Pullback** e **Tendência**: 27% dos dias em que pelo menos um deles operou
> - **Pullback** e **Onda**: 22% dos dias em que pelo menos um deles operou
> - **Rompe 200** e **Bollinger**: 10% dos dias em que pelo menos um deles operou
> - **Rompe 200** e **Tendência**: 17% dos dias em que pelo menos um deles operou
> - **Rompe 200** e **Onda**: 13% dos dias em que pelo menos um deles operou
> - **Bollinger** e **Tendência**: 21% dos dias em que pelo menos um deles operou
> - **Bollinger** e **Onda**: 18% dos dias em que pelo menos um deles operou
> - **Tendência** e **Onda**: 65% dos dias em que pelo menos um deles operou

![Quedas da carteira](setups/img/carteira_queda.png)

## Ano a ano

*Com 1 contrato por R\$ 10 mil (capital dividido). Todos = os 17 setups juntos · Recomendada = IFR + Pullback + Bollinger · Rec. 1% = a recomendada arriscando 1% por operação · 2ª a 5ª = as outras quatro melhores combinações, na ordem da nota.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **⭐ Rec. 1%** | +3,6% | +258,9% | +97,7% | +105,5% | +279,5% | +99,0% | **+11304,7%** (+159,4% · R\$ 1.140.470) |
| **⭐ 1ª · IFR + Pullback + Bollinger** | +2,6% | +38,6% | +23,8% | +21,5% | +38,7% | +31,0% | **+288,7%** (+31,4% · R\$ 38.872) |
| **2ª · Pullback + Bollinger** | +5,7% | +32,1% | +21,4% | +16,9% | +30,6% | +20,2% | **+211,2%** (+25,7% · R\$ 31.122) |
| **3ª · IFR + Pullback + Rompe 200 + Bollinger** | +0,8% | +34,4% | +24,6% | +18,7% | +37,8% | +22,3% | **+237,6%** (+27,7% · R\$ 33.760) |
| **4ª · Fibo 50% + IFR + Pullback + Bollinger** | +2,8% | +40,7% | +20,3% | +19,7% | +36,3% | +25,8% | **+257,2%** (+29,2% · R\$ 35.722) |
| **5ª · Fibo 50% + Pullback + Bollinger** | +5,0% | +36,9% | +17,6% | +16,1% | +30,1% | +17,2% | **+199,2%** (+24,7% · R\$ 29.924) |
| **ADX** | +2,1% | +29,8% | +12,0% | +36,5% | +65,9% | +44,4% | **+385,3%** (+37,4% · R\$ 48.530) |
| **VWAP** | +0,6% | +37,6% | +4,1% | +10,4% | +42,4% | +11,8% | **+153,1%** (+20,6% · R\$ 25.314) |
| **Donchian** | −6,9% | +74,2% | +29,5% | +17,2% | +46,7% | +59,9% | **+477,5%** (+42,3% · R\$ 57.748) |
| **BB explosão** | −5,6% | +20,6% | +36,6% | +3,3% | +41,4% | +38,1% | **+213,6%** (+25,9% · R\$ 31.360) |
| **Extremos sem** | +6,1% | +28,5% | +5,7% | +29,5% | +26,8% | +28,2% | **+203,2%** (+25,0% · R\$ 30.323) |
| **Fibo 50%** | +3,5% | +46,3% | +10,2% | +14,2% | +28,7% | +9,9% | **+169,6%** (+22,1% · R\$ 26.956) |
| **GPS médias** | −0,6% | +40,1% | +54,4% | +22,4% | +15,5% | +48,3% | **+350,7%** (+35,4% · R\$ 45.069) |
| **IFR** | −3,6% | +51,5% | +28,3% | +30,7% | +55,3% | +53,5% | **+484,0%** (+42,6% · R\$ 58.402) |
| **MACD** | −2,9% | +20,7% | +25,7% | +36,6% | +40,1% | +37,0% | **+286,2%** (+31,3% · R\$ 38.623) |
| **Pôr do sol** | +3,9% | +16,5% | +11,6% | +21,5% | +17,1% | +12,2% | **+115,5%** (+16,7% · R\$ 21.554) |
| **1ª vela 80** | +7,7% | +9,1% | +27,7% | +37,8% | +46,7% | +29,8% | **+293,6%** (+31,8% · R\$ 39.360) |
| **Quinta** | +4,0% | +18,1% | +15,3% | +16,4% | +21,9% | +7,9% | **+116,9%** (+16,9% · R\$ 21.690) |
| **Pullback** | +7,5% | +47,1% | +19,7% | +10,8% | +21,2% | +21,4% | **+208,6%** (+25,5% · R\$ 30.860) |
| **Rompe 200** | −4,6% | +22,0% | +26,7% | +10,6% | +34,6% | −1,1% | **+117,0%** (+16,9% · R\$ 21.705) |
| **Bollinger** | +4,0% | +18,2% | +22,8% | +23,1% | +40,2% | +18,6% | **+209,0%** (+25,5% · R\$ 30.898) |
| **Tendência** | −1,7% | +58,4% | +50,3% | +21,6% | +32,2% | +80,2% | **+577,9%** (+47,0% · R\$ 67.793) |
| **Onda** | −3,9% | +5,0% | +26,9% | +62,1% | +22,7% | +45,5% | **+270,9%** (+30,2% · R\$ 37.088) |
| **Todos** | −0,7% | +38,0% | +17,5% | +19,2% | +45,1% | +37,5% | **+283,0%** (+31,0% · R\$ 38.304) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,9% | **+81,9%** (+12,8% · R\$ 18.193) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,6% | **+59,6%** (+9,9% · R\$ 15.964) |
| *Quem ganhou* | *1ª vela 80* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 06/11/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ⭐ IFR + Pullback + Bollinger | Pullback + Bollinger | IFR + Pullback + Rompe 200 + Bollinger | Fibo 50% + IFR + Pullback + Bollinger | Fibo 50% + Pullback + Bollinger | CDI |
> |---|---|---|---|---|---|---|
> | nov/2021 | +1,2% | +2,7% | −0,0% | +1,0% | +2,0% | +0,6% |
> | dez/2021 | +1,4% | +3,0% | +0,8% | +1,8% | +3,0% | +0,7% |
> | jan/2022 | +4,6% | +3,6% | +4,7% | +3,6% | +2,6% | +0,7% |
> | fev/2022 | +0,2% | +1,6% | −0,3% | −0,0% | +0,8% | +0,8% |
> | mar/2022 | +4,6% | +3,0% | +4,6% | +4,5% | +3,4% | +0,9% |
> | abr/2022 | +2,0% | +2,8% | +1,7% | +2,7% | +3,4% | +0,8% |
> | mai/2022 | +1,5% | +1,2% | +1,4% | +2,0% | +2,0% | +1,0% |
> | jun/2022 | +2,7% | +2,2% | +2,2% | +3,3% | +3,3% | +1,0% |
> | jul/2022 | +1,4% | +1,5% | +1,4% | −1,0% | −1,7% | +1,0% |
> | ago/2022 | +6,6% | +4,1% | +6,1% | +6,5% | +4,9% | +1,2% |
> | set/2022 | +0,6% | +1,6% | +0,3% | +0,4% | +0,9% | +1,1% |
> | out/2022 | +4,1% | +3,0% | +2,8% | +4,5% | +3,9% | +1,0% |
> | nov/2022 | +3,6% | +4,6% | +3,8% | +5,0% | +6,1% | +1,0% |
> | dez/2022 | +1,5% | −0,8% | +1,4% | +3,5% | +2,6% | +1,1% |
> | jan/2023 | +3,7% | +4,6% | +3,6% | +2,9% | +3,2% | +1,1% |
> | fev/2023 | +0,5% | +0,1% | +1,7% | +0,6% | +0,3% | +0,9% |
> | mar/2023 | +1,2% | +1,5% | +0,9% | +1,8% | +2,2% | +1,2% |
> | abr/2023 | +0,6% | −0,2% | +0,8% | +0,0% | −0,7% | +0,9% |
> | mai/2023 | +2,0% | +2,7% | +2,3% | +0,6% | +0,5% | +1,1% |
> | jun/2023 | +2,3% | +2,8% | +2,0% | +2,3% | +2,7% | +1,1% |
> | jul/2023 | +2,7% | +1,1% | +3,2% | +3,5% | +2,7% | +1,1% |
> | ago/2023 | +2,2% | +0,7% | +2,2% | +2,5% | +1,6% | +1,1% |
> | set/2023 | +1,6% | +2,3% | +0,9% | +1,1% | +1,4% | +1,0% |
> | out/2023 | +2,4% | +1,8% | +2,3% | +1,3% | +0,5% | +1,0% |
> | nov/2023 | +2,1% | +2,0% | +2,7% | +2,4% | +2,5% | +0,9% |
> | dez/2023 | +0,3% | +0,2% | −0,3% | −0,3% | −0,6% | +0,9% |
> | jan/2024 | +1,4% | +2,5% | +1,3% | +1,6% | +2,4% | +1,0% |
> | fev/2024 | +2,3% | +0,5% | +1,4% | +2,8% | +1,9% | +0,8% |
> | mar/2024 | +1,2% | +1,1% | +2,5% | +1,4% | +1,3% | +0,8% |
> | abr/2024 | +2,6% | +1,4% | +2,2% | +2,5% | +1,6% | +0,9% |
> | mai/2024 | −0,3% | +0,2% | −0,2% | −0,6% | −0,4% | +0,8% |
> | jun/2024 | +1,7% | +1,9% | +1,3% | +1,3% | +1,3% | +0,8% |
> | jul/2024 | +1,7% | +0,8% | +1,5% | +1,0% | +0,2% | +0,9% |
> | ago/2024 | +1,8% | +1,6% | +1,5% | +1,5% | +1,2% | +0,9% |
> | set/2024 | +3,4% | +4,0% | +3,6% | +2,8% | +3,0% | +0,8% |
> | out/2024 | +0,7% | +0,3% | −0,6% | +0,3% | −0,1% | +0,9% |
> | nov/2024 | +1,5% | −0,1% | +1,2% | +2,0% | +1,2% | +0,8% |
> | dez/2024 | +1,8% | +1,6% | +1,7% | +1,6% | +1,4% | +0,8% |
> | jan/2025 | +3,2% | +2,1% | +3,4% | +3,0% | +2,2% | +1,0% |
> | fev/2025 | +3,8% | +2,6% | +4,6% | +3,1% | +2,0% | +1,0% |
> | mar/2025 | +1,7% | +2,7% | +0,7% | +3,1% | +4,3% | +1,0% |
> | abr/2025 | −0,1% | −0,2% | +0,2% | +0,0% | +0,0% | +1,1% |
> | mai/2025 | +4,5% | +3,3% | +3,8% | +4,0% | +3,1% | +1,1% |
> | jun/2025 | +2,4% | +2,5% | +2,0% | +0,9% | +0,5% | +1,1% |
> | jul/2025 | +2,0% | +2,6% | +1,9% | +2,3% | +2,8% | +1,3% |
> | ago/2025 | +7,4% | +3,8% | +5,7% | +6,5% | +3,9% | +1,2% |
> | set/2025 | −0,2% | +1,5% | +0,7% | −0,6% | +0,4% | +1,2% |
> | out/2025 | +3,0% | +3,4% | +2,7% | +2,7% | +2,9% | +1,3% |
> | nov/2025 | +2,7% | +1,1% | +2,3% | +4,0% | +3,4% | +1,1% |
> | dez/2025 | +3,1% | +1,8% | +4,6% | +2,4% | +1,3% | +1,1% |
> | jan/2026 | +3,5% | +2,8% | +4,1% | +3,9% | +3,5% | +1,2% |
> | fev/2026 | −0,1% | −0,9% | −0,5% | −0,4% | −1,1% | +1,0% |
> | mar/2026 | +2,4% | +2,9% | +0,8% | +2,7% | +3,2% | +1,2% |
> | abr/2026 | +6,3% | +5,9% | +4,6% | +5,7% | +5,2% | +1,1% |
> | mai/2026 | +1,6% | −0,2% | +0,4% | +0,6% | −0,9% | +1,1% |
> | jun/2026 | −0,1% | +1,2% | −0,4% | +0,4% | +1,4% | +1,1% |
> | jul/2026 | +3,1% | +0,3% | +3,5% | +1,4% | −1,0% | +1,2% |
> | ago/2026 | +4,4% | +3,6% | +3,6% | +2,0% | +0,8% | +1,1% |
> | set/2026 | +2,2% | +3,6% | +1,2% | +3,1% | +4,3% | +1,1% |
> | out/2026 | +4,3% | −0,4% | +3,2% | +3,9% | +0,6% | +1,1% |
> | nov/2026 | −0,1% | +0,2% | −0,0% | −0,0% | +0,2% | +0,2% |
> | **Acumulado** | **+288,7%** | **+211,2%** | **+237,6%** | **+257,2%** | **+199,2%** | **+81,9%** |
>
> *As 5 melhores combinações com 1 contrato por R\$ 10 mil. Cada setup tem o mês a mês dele na própria página.*

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = IFR + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **2ª a 5ª ÷** = as outras melhores combinações, também com 1% dividido: é a comparação mais justa entre elas. **Todos ⚠️** = os 17 setups com 1% cada: até 17% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **⭐ 1ª · IFR + Pullback + Bollinger** | +3,6% | +258,9% | +97,7% | +105,5% | +279,5% | +99,0% | **+11304,7%** (+159,4% · R\$ 1.140.470) |
| **⭐ 1ª · IFR + Pullback + Bollinger ÷** | +2,2% | +68,9% | +37,8% | +37,8% | +74,2% | +37,5% | **+685,3%** (+51,4% · R\$ 78.534) |
| **2ª · Pullback + Bollinger ÷** | +8,3% | +49,8% | +33,2% | +32,0% | +65,5% | +23,2% | **+481,4%** (+42,5% · R\$ 58.145) |
| **3ª · IFR + Pullback + Rompe 200 + Bollinger ÷** | +0,6% | +56,6% | +35,4% | +30,9% | +65,4% | +29,0% | **+495,8%** (+43,2% · R\$ 59.576) |
| **4ª · Fibo 50% + IFR + Pullback + Bollinger ÷** | +2,2% | +56,5% | +30,8% | +31,3% | +59,6% | +30,8% | **+473,5%** (+42,1% · R\$ 57.348) |
| **5ª · Fibo 50% + Pullback + Bollinger ÷** | +6,2% | +40,7% | +25,6% | +25,5% | +49,7% | +19,5% | **+321,4%** (+33,6% · R\$ 42.142) |
| **ADX** | +2,0% | +51,0% | +7,4% | +71,5% | +161,6% | +62,0% | **+1103,2%** (+65,0% · R\$ 120.317) |
| **VWAP** | +0,3% | +41,5% | +1,5% | +10,3% | +61,5% | +19,1% | **+205,7%** (+25,2% · R\$ 30.567) |
| **Donchian** | −14,9% | +173,6% | +51,8% | +25,9% | +129,6% | +99,9% | **+1942,7%** (+83,5% · R\$ 204.270) |
| **BB explosão** | −12,2% | +24,2% | +66,0% | −10,9% | +100,5% | +57,2% | **+408,0%** (+38,7% · R\$ 50.803) |
| **Extremos sem** | +5,5% | +42,6% | +0,9% | +39,3% | +35,4% | +31,5% | **+276,6%** (+30,6% · R\$ 37.658) |
| **Fibo 50%** | +2,0% | +23,6% | +11,4% | +13,0% | +21,9% | +12,0% | **+116,8%** (+16,8% · R\$ 21.677) |
| **GPS médias** | −4,2% | +68,9% | +118,4% | +46,2% | +29,3% | +83,4% | **+1125,2%** (+65,6% · R\$ 122.520) |
| **IFR** | −9,3% | +108,3% | +45,0% | +48,1% | +88,9% | +67,6% | **+1183,8%** (+67,2% · R\$ 128.383) |
| **MACD** | −2,8% | +27,8% | +30,3% | +51,6% | +60,7% | +37,9% | **+443,7%** (+40,6% · R\$ 54.371) |
| **Pôr do sol** | +4,7% | +21,1% | +10,0% | +33,5% | +18,5% | +11,9% | **+146,8%** (+19,9% · R\$ 24.684) |
| **1ª vela 80** | +10,2% | +7,2% | +36,6% | +73,1% | +77,3% | +36,2% | **+574,3%** (+46,8% · R\$ 67.427) |
| **Quinta** | +4,2% | +19,1% | +16,4% | +19,2% | +23,5% | +9,2% | **+132,1%** (+18,5% · R\$ 23.206) |
| **Pullback** | +10,2% | +70,5% | +24,7% | +9,6% | +29,0% | +20,8% | **+300,0%** (+32,2% · R\$ 40.000) |
| **Rompe 200** | −4,1% | +23,6% | +27,6% | +11,5% | +40,2% | +5,8% | **+149,9%** (+20,2% · R\$ 24.992) |
| **Bollinger** | +6,4% | +30,1% | +40,6% | +56,8% | +108,7% | +24,8% | **+695,4%** (+51,8% · R\$ 79.541) |
| **Tendência** | −2,9% | +94,7% | +78,7% | +31,5% | +62,2% | +97,2% | **+1321,4%** (+70,6% · R\$ 142.145) |
| **Onda** | −3,7% | +8,2% | +36,6% | +97,1% | +36,3% | +42,2% | **+443,9%** (+40,6% · R\$ 54.391) |
| **Todos ÷** | −3,7% | +65,2% | +26,1% | +26,8% | +97,4% | +55,7% | **+681,7%** (+51,3% · R\$ 78.167) |
| **Todos ⚠️** | −24,4% | +330,4% | +23,0% | +29,2% | +866,8% | +251,7% | **+17492,0%** (+183,1% · R\$ 1.759.202) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,9% | **+81,9%** (+12,8% · R\$ 18.193) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,6% | **+59,6%** (+9,9% · R\$ 15.964) |
| *Quem ganhou* | *Pullback* | *Todos ⚠️* | *GPS médias* | *⭐ 1ª · IFR + Pullback + Bollinger* | *Todos ⚠️* | *Todos ⚠️* | *Todos ⚠️* |

\* ano parcial: os dados vão de 01/11/2021 a 06/11/2026.

> [!example]- Mês a mês arriscando 1% por operação (clique para abrir)
> | Mês | ⭐ IFR + Pullback + Bollinger ÷ | Pullback + Bollinger ÷ | IFR + Pullback + Rompe 200 + Bollinger ÷ | Fibo 50% + IFR + Pullback + Bollinger ÷ | Fibo 50% + Pullback + Bollinger ÷ | CDI |
> |---|---|---|---|---|---|---|
> | nov/2021 | +1,1% | +4,1% | −0,0% | +1,0% | +2,9% | +0,6% |
> | dez/2021 | +1,1% | +4,1% | +0,7% | +1,2% | +3,2% | +0,7% |
> | jan/2022 | +9,1% | +6,9% | +8,5% | +7,0% | +4,8% | +0,7% |
> | fev/2022 | −0,6% | +2,3% | −1,0% | −0,4% | +1,5% | +0,8% |
> | mar/2022 | +8,5% | +5,0% | +7,9% | +6,9% | +4,0% | +0,9% |
> | abr/2022 | +4,1% | +5,8% | +3,3% | +3,8% | +4,8% | +0,8% |
> | mai/2022 | +1,7% | +1,0% | +1,5% | +1,8% | +1,3% | +1,0% |
> | jun/2022 | +4,0% | +2,5% | +3,1% | +3,7% | +2,6% | +1,0% |
> | jul/2022 | +1,8% | +2,2% | +1,7% | +0,6% | +0,5% | +1,0% |
> | ago/2022 | +13,0% | +7,9% | +11,2% | +10,6% | +6,5% | +1,2% |
> | set/2022 | −0,5% | +1,2% | −0,6% | −0,2% | +1,0% | +1,1% |
> | out/2022 | +6,5% | +4,1% | +4,6% | +5,6% | +3,6% | +1,0% |
> | nov/2022 | +4,1% | +4,9% | +3,9% | +3,9% | +4,3% | +1,0% |
> | dez/2022 | +2,6% | −2,2% | +2,3% | +3,0% | −0,2% | +1,1% |
> | jan/2023 | +6,5% | +8,3% | +5,6% | +5,1% | +5,8% | +1,1% |
> | fev/2023 | +0,6% | −0,0% | +1,9% | +0,7% | +0,3% | +0,9% |
> | mar/2023 | +0,8% | +1,4% | +0,5% | +1,2% | +1,7% | +1,2% |
> | abr/2023 | +0,2% | −1,6% | +0,5% | +0,1% | −1,1% | +0,9% |
> | mai/2023 | +2,4% | +3,2% | +2,6% | +1,5% | +1,8% | +1,1% |
> | jun/2023 | +4,8% | +6,3% | +3,8% | +4,0% | +4,8% | +1,1% |
> | jul/2023 | +4,6% | +1,7% | +4,9% | +4,3% | +2,3% | +1,1% |
> | ago/2023 | +3,1% | +0,1% | +3,0% | +2,9% | +0,8% | +1,1% |
> | set/2023 | +3,4% | +5,4% | +2,0% | +2,6% | +3,7% | +1,0% |
> | out/2023 | +3,7% | +2,4% | +3,4% | +2,6% | +1,4% | +1,0% |
> | nov/2023 | +3,6% | +3,5% | +4,2% | +3,2% | +3,1% | +0,9% |
> | dez/2023 | −0,7% | −1,3% | −1,6% | −0,7% | −1,2% | +0,9% |
> | jan/2024 | +2,9% | +5,5% | +2,4% | +2,6% | +4,3% | +1,0% |
> | fev/2024 | +4,0% | +1,1% | +2,4% | +3,7% | +1,6% | +0,8% |
> | mar/2024 | +1,2% | +0,8% | +3,5% | +1,3% | +1,0% | +0,8% |
> | abr/2024 | +4,4% | +2,4% | +3,7% | +3,8% | +2,2% | +0,9% |
> | mai/2024 | −1,3% | −0,4% | −1,1% | −1,1% | −0,5% | +0,8% |
> | jun/2024 | +2,7% | +3,2% | +2,0% | +2,2% | +2,2% | +0,8% |
> | jul/2024 | +2,6% | +1,0% | +2,2% | +2,0% | +0,7% | +0,9% |
> | ago/2024 | +3,8% | +4,3% | +2,9% | +3,0% | +3,0% | +0,9% |
> | set/2024 | +6,2% | +7,8% | +6,1% | +4,9% | +5,4% | +0,8% |
> | out/2024 | +1,0% | +0,6% | −1,0% | +0,7% | +0,4% | +0,9% |
> | nov/2024 | +2,3% | −0,3% | +1,8% | +2,3% | +0,7% | +0,8% |
> | dez/2024 | +2,8% | +2,5% | +2,5% | +2,4% | +2,0% | +0,8% |
> | jan/2025 | +5,9% | +4,2% | +5,8% | +4,8% | +3,3% | +1,0% |
> | fev/2025 | +6,5% | +4,6% | +7,1% | +5,1% | +3,4% | +1,0% |
> | mar/2025 | +4,3% | +7,1% | +2,5% | +4,2% | +6,1% | +1,0% |
> | abr/2025 | −1,0% | −1,1% | −0,5% | −0,5% | −0,4% | +1,1% |
> | mai/2025 | +8,4% | +7,0% | +6,6% | +6,7% | +5,3% | +1,1% |
> | jun/2025 | +3,4% | +3,5% | +2,7% | +2,3% | +2,0% | +1,1% |
> | jul/2025 | +3,0% | +4,3% | +2,6% | +2,8% | +3,6% | +1,3% |
> | ago/2025 | +14,4% | +9,4% | +11,0% | +11,4% | +7,1% | +1,2% |
> | set/2025 | −1,0% | +1,8% | +0,4% | −0,8% | +1,1% | +1,2% |
> | out/2025 | +4,9% | +6,0% | +4,3% | +4,1% | +4,5% | +1,3% |
> | nov/2025 | +4,1% | +2,0% | +3,4% | +4,3% | +2,9% | +1,1% |
> | dez/2025 | +4,7% | +3,1% | +6,1% | +3,8% | +2,4% | +1,1% |
> | jan/2026 | +5,6% | +5,1% | +5,9% | +4,8% | +4,2% | +1,2% |
> | fev/2026 | +0,1% | −0,8% | −0,1% | +0,2% | −0,4% | +1,0% |
> | mar/2026 | +2,1% | +2,4% | +1,1% | +2,1% | +2,3% | +1,2% |
> | abr/2026 | +8,5% | +8,4% | +6,4% | +6,8% | +6,2% | +1,1% |
> | mai/2026 | +1,3% | −1,1% | +0,5% | +1,0% | −0,7% | +1,1% |
> | jun/2026 | −1,0% | +0,4% | −1,0% | −0,5% | +0,7% | +1,1% |
> | jul/2026 | +3,7% | −0,2% | +3,8% | +2,7% | −0,2% | +1,2% |
> | ago/2026 | +5,5% | +4,4% | +4,4% | +4,0% | +2,7% | +1,1% |
> | set/2026 | +2,1% | +3,7% | +1,4% | +2,3% | +3,3% | +1,1% |
> | out/2026 | +5,1% | −0,8% | +3,9% | +4,1% | −0,1% | +1,1% |
> | nov/2026 | −0,2% | +0,2% | −0,1% | −0,1% | +0,2% | +0,2% |
> | **Acumulado** | **+685,3%** | **+481,4%** | **+495,8%** | **+473,5%** | **+321,4%** | **+81,9%** |
>
> *As 5 melhores combinações com 1% dividido entre os setups de cada uma.*

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +31% | −3% | −5% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +74% | −8% | −12% | −18% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+159%** | **−17%** | −22% | −33% |
| Risco fixo de 2% por operação | 2,00% | +418% | −33% | −40% | −56% |
| Kelly ¼ | 2,95% | +906% | −44% | −56% | −73% |
| Kelly ½ | 5,90% | +2880% | −72% | −83% | −95% |
| Kelly cheio | 11,80% | +1739% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,66% | +305% | −30% | −35% | −50% |
| Larry Williams 5% | 3,32% | +897% | −53% | −60% | −78% |
| Larry Williams 10% | 6,64% | +2255% | −81% | −88% | −97% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros).*

> [!tip] As três colunas de queda, e qual delas usar
> A ordem em que as suas operações aconteceram na vida real foi **um sorteio só**. As mesmas operações, em outra ordem, teriam produzido outra queda. Por isso o sistema monta **2.000 histórias alternativas** com as mesmas operações, sorteando-as ao acaso e com reposição (numa história a mesma operação pode sair duas vezes e outra pode não aparecer), e mede a pior queda de cada uma.
>
> - **Pior queda (ordem real)** — o que de fato aconteceu. Um sorteio só, e você não escolhe qual tira.
> - **Queda típica (sorteio)** — a mediana das histórias simuladas: o que esperar numa vida normal.
> - **1 vez em 20, pior que** — o percentil 5. De cada 20 histórias, **uma foi pior que esse número**.
>
> **Dimensione pela última coluna, não pela primeira.** Olhar a queda real e concluir "aguento isso" é planejar com a sorte que você teve. Se a carteira um dia cair o que está na última coluna, isso **não** significa que os setups pararam de funcionar — é o azar de 1 em 20 chegando, e ele chega.
>
> *Ressalva do método: o sorteio trata cada operação como independente das outras. Se as perdas vierem em cacho — vários setups errando na mesma semana ruim, que é o que acontece em crise — a queda real pode ser pior que a simulada. O número é piso de planejamento, não teto.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: IFR de Tendência 7,7% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
- **Larry Williams:** no campeonato de 1987 ele usou o Kelly como fração do capital ÷ **margem** por contrato — a conta foi de US\$ 10 mil a ~US\$ 2,1 milhões, caiu para ~US\$ 700 mil e terminou o ano em ~US\$ 1,1 milhão. Depois ele passou a usar **contratos = capital × risco% ÷ maior perda já vista por contrato**, com ~5% (cauteloso), 10–12% (moderado) e 15–18% (agressivo). Esses percentuais eram para poucas operações por ano; estes setups operam muitas vezes por mês e a maior perda deles é ~1,5 vezes o stop típico, então **Larry com 2,5% ≈ arriscar 1,7% por operação** — perto do tamanho sugerido.

### Calculadora de contratos (risco de 1% por operação)

**contratos = capital × 1% ÷ ((stop em pts + 15) × R\$ 0,20)** — arredonde para baixo. Calcule para cada setup, a cada operação, com o capital do momento (assim a posição cresce quando ganha e diminui quando perde).

| Setup | Stop hoje · risco por contrato | R\$ 10.000 | R\$ 50.000 | R\$ 100.000 | R\$ 200.000 |
|---|---|---|---|---|---|
| ADX da Manhã | 256 pts · R\$ 54 | 1,8 | 9,2 | 18,5 | 36,9 |
| Bandas de VWAP | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Donchian com Médias | 432 pts · R\$ 89 | 1,1 | 5,6 | 11,2 | 22,4 |
| Explosão da Bollinger | 432 pts · R\$ 89 | 1,1 | 5,6 | 11,2 | 22,4 |
| Extremos da Semana (virada de mão) | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Pullback no 50% do dia | 2.378 pts · R\$ 479 | 0,2 | 1,0 | 2,1 | 4,2 |
| GPS de Médias | 432 pts · R\$ 89 | 1,1 | 5,6 | 11,2 | 22,4 |
| IFR de Tendência ⭐ | 341 pts · R\$ 71 | 1,4 | 7,0 | 14,0 | 28,1 |
| MACD na Tendência | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Pôr do Sol (17h45) | 648 pts · R\$ 133 | 0,8 | 3,8 | 7,5 | 15,1 |
| Primeira Vela de 80 Minutos | 648 pts · R\$ 133 | 0,8 | 3,8 | 7,5 | 15,1 |
| Primeira Vela de Quinta | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Pullback na Média ⭐ | 630 pts · R\$ 129 | 0,8 | 3,9 | 7,8 | 15,5 |
| Rompimento da Média de 200 | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Rompimento da Bollinger ⭐ | 363 pts · R\$ 76 | 1,3 | 6,6 | 13,2 | 26,5 |
| Tendência Forte do Dia | 630 pts · R\$ 129 | 0,8 | 3,9 | 7,8 | 15,5 |
| Vai na Onda | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |

*Stops calculados com o ATR (4.201 pts) e o preço (170.645) de hoje — mudam todo dia. ⭐ = setups da combinação recomendada. Com risco de 0,5%, use a metade. Confira a margem de day trade da sua corretora para o número de contratos.*

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R\$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- **Risco 1%:** cada setup arrisca 1% do capital total em cada operação (contratos = capital × 1% ÷ (stop + custo) em R\$). Se dois setups estiverem posicionados ao mesmo tempo, o risco aberto é de 2%.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
