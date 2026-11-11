---
title: Carteira de setups
date: 2026-11-11
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 11/11/2026 19:40 BRT · dados de 01/11/2021 a 11/11/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 17 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 39.164** (+32% ao ano · pior queda −12% · Sharpe 1,20)
> - CDI: **R\$ 18.221** (+13% ao ano) · Ibovespa: **R\$ 16.301** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 38.878, +31% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.135.706, +159% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Dobrando o risco (2% dividido em vez de 1%): R\$ 310.925, +99% ao ano, pior queda −11%** — contra +51% ao ano e queda −5% com 1%. O site continua recomendando 1%; o 2% está aí só para você ver os números.
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+0,6%** em 11 pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| Setup | Sharpe | Retorno ÷ queda | Dias no vermelho | Teste ÷ treino · meses > CDI | Correlação · op./mês |
|---|---|---|---|---|---|
| **1º** [IFR](ifr-de-tendencia) ·TEN | 1,58 | 3,1 | 69 d | 150% · 70% | 0,26 · 12,5 |
| **2º** [Bollinger](rompimento-da-bollinger) ·TEN | 1,61 | 2,2 | 84 d | 150% · 64% | 0,25 · 4,2 |
| **3º** [Donchian](donchian-com-medias) ·TEN | 1,34 | 2,1 | 188 d | 109% · 67% | 0,29 · 21,3 |
| **4º** [Pôr do sol](por-do-sol) ·POR | 1,17 | 0,6 | 328 d | 150% · 66% | −0,08 · 8,1 |
| **5º** [GPS médias](gps-de-medias) ·TEN | 1,08 | 1,3 | 205 d | 64% · 66% | 0,26 · 19,9 |
| **6º** [1ª vela 80](primeira-vela-80-min) ·VEL | 1,08 | 1,1 | 298 d | 150% · 62% | 0,17 · 7,7 |
| **7º** [ADX](adx-da-manha) ·ADX | 1,00 | 1,2 | 198 d | 150% · 62% | 0,22 · 29,2 |
| **8º** [MACD](macd-na-tendencia) ·TEN | 0,98 | 0,9 | 256 d | 150% · 64% | 0,28 · 14,5 |
| **9º** [Tendência](tendencia-forte-do-dia) ·TEN | 1,32 | 1,8 | 206 d | 89% · 59% | 0,32 · 28,4 |
| **10º** [Pullback](pullback-na-media) ·PUL | 1,20 | 1,8 | 204 d | 28% · 59% | −0,03 · 4,9 |
| **11º** [BB explosão](explosao-da-bollinger) ·TEN | 0,79 | 0,6 | 273 d | 150% · 59% | 0,29 · 19,5 |
| **12º** [Extremos sem](extremos-da-semana-virada) ·EXT | 0,73 | 0,4 | 545 d | 150% · 64% | 0,19 · 9,5 |
| **13º** [Onda](vai-na-onda) ·OND | 0,72 | 0,6 | 471 d | 150% · 56% | 0,15 · 19,2 |
| **14º** [VWAP](bandas-de-vwap) ·TEN | 0,47 | 0,2 | 511 d | 150% · 57% | 0,34 · 25,2 |
| **15º** [Quinta](primeira-vela-de-quinta) ·QUI | 0,88 | 0,5 | 186 d | 62% · 49% | −0,07 · 1,7 |
| **16º** [Fibo 50%](fibo-50-do-dia) ·FIB | 0,71 | 0,5 | 223 d | 37% · 54% | 0,20 · 3,6 |
| **17º** [Rompe 200](rompe-media-200) ·ROM | 0,43 | 0,2 | 194 d | 23% · 44% | 0,15 · 3,3 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|
| **1º** [IFR](ifr-de-tendencia) | +42% | **+67%** | −9% | **−11%** | 10 op · +0,02R |
| **2º** [Bollinger](rompimento-da-bollinger) | +25% | **+52%** | −5% | **−7%** | sem operações |
| **3º** [Donchian](donchian-com-medias) | +43% | **+84%** | −12% | **−24%** | 9 op · +1,18R |
| **4º** [Pôr do sol](por-do-sol) | +17% | **+20%** | −6% | **−3%** | 3 op · +0,36R |
| **5º** [GPS médias](gps-de-medias) | +37% | **+67%** | −17% | **−23%** | 9 op · +1,34R |
| **6º** [1ª vela 80](primeira-vela-80-min) | +31% | **+46%** | −16% | **−14%** | 6 op · +0,11R |
| **7º** [ADX](adx-da-manha) | +36% | **+63%** | −17% | **−31%** | 22 op · −0,25R |
| **8º** [MACD](macd-na-tendencia) | +32% | **+41%** | −18% | **−11%** | 8 op · +0,51R |
| **9º** [Tendência](tendencia-forte-do-dia) | +48% | **+71%** | −18% | **−24%** | 7 op · +0,91R |
| **10º** [Pullback](pullback-na-media) | +25% | **+32%** | −6% | **−9%** | sem operações |
| **11º** [BB explosão](explosao-da-bollinger) | +27% | **+40%** | −20% | **−33%** | 5 op · +2,54R |
| **12º** [Extremos sem](extremos-da-semana-virada) | +27% | **+31%** | −28% | **−18%** | 3 op · +0,54R |
| **13º** [Onda](vai-na-onda) | +30% | **+40%** | −26% | **−20%** | 7 op · +0,22R |
| **14º** [VWAP](bandas-de-vwap) | +21% | **+25%** | −31% | **−20%** | 13 op · −0,35R |
| **15º** [Quinta](primeira-vela-de-quinta) | +17% | **+18%** | −7% | **−3%** | sem operações |
| **16º** [Fibo 50%](fibo-50-do-dia) | +22% | **+17%** | −17% | **−3%** | 1 op · +1,41R |
| **17º** [Rompe 200](rompe-media-200) | +17% | **+20%** | −16% | **−10%** | sem operações |

- **IFR de Tendência:** entra na força medida pelo IFR · 10h–11h e 14h–16h
- **Rompimento da Bollinger:** rompimento da banda de Bollinger a favor da tendência · 10h15–11h e 14h–17h30
- **Donchian com Médias:** rompimento de canal a favor da tendência · 10h às 16h
- **Pôr do Sol (17h45):** scalp no fim do pregão, a favor do dia · 17h50 às 18h10
- **GPS de Médias:** tendência com alvo longo e stop curto · 10h–11h e 14h–16h
- **Primeira Vela de 80 Minutos:** força da primeira vela do dia, alvo longo com stop móvel · entra 10h20
- **ADX da Manhã:** pega o começo da tendência (ADX subindo), stop curto · 10h–11h
- **MACD na Tendência:** tendência do dia confirmada pelo MACD, com break even · 9h–11h30 e 14h–16h
- **Tendência Forte do Dia:** segue a tendência já formada (rompimento longe da abertura) · o dia todo, até 17h
- **Pullback na Média:** entra na volta da correção até a média · 10h30–12h30 e 14h45–15h45
- **Explosão da Bollinger:** rompimento de volatilidade a favor da tendência · 10h às 16h (zera às 17h)
- **Extremos da Semana (virada de mão):** rompimento dos extremos da semana com reversão no stop · abertura até 15h (ordens); posição zera às 18h20
- **Vai na Onda:** segue o fluxo: 3 velas a favor renovando o extremo do dia com volume · 9h45–16h
- **Bandas de VWAP:** rompimento da banda de VWAP a favor da média de 200 · 10h às 16h
- **Primeira Vela de Quinta:** rompimento da primeira vela do dia (dia da semana escolhido) · 9h15
- **Pullback no 50% do dia:** pullback na metade do range do dia, a favor da tendência · 10h às 11h30
- **Rompimento da Média de 200:** rompimento de média longa com alvo longo · 9h às 16h

*Correlação = com os outros setups (baixa é bom para a carteira). Como o ranking é feito: cada setup ganha uma posição em 4 critérios — **Sharpe** (retorno acima do CDI por oscilação), **retorno acima do CDI ÷ pior queda** (quanto rende para cada 1% de queda que você aguenta), **teste ÷ treino** (quanto do resultado por operação de 2021–2023 se manteve em 2024 em diante; 100% = manteve tudo) e **meses acima do CDI**. Vale a média das 4 posições. Correlação baixa com os outros é bom para a carteira, mas não entra na nota de cada setup.*

### Taxa de acerto, payoff e expectativa

As 5 melhores combinações e cada setup, vistos por operação em vez de por ano. [Ver todas as operações, uma a uma](operacoes).

| | Operações · acerto | Ganho · perda média | Payoff | Expectativa (pts · R) | Lucro total (pts · R\$) |
|---|---|---|---|---|---|
| ⭐ **Recomendada** (IFR + Pullback + Bollinger) | 1340 · 34,5% | +755 · 266 pts | 2,84 | **86,1 pts** · +0,34 R | 115.412 pts · R\$ 23.082 |
| **2ª** (Pullback + Bollinger) | 562 · 37,4% | +681 · 251 pts | 2,71 | **97,1 pts** · +0,42 R | 54.546 pts · R\$ 10.909 |
| **3ª** (IFR + Pullback + Rompe 200 + Bollinger) | 1545 · 35,1% | +761 · 286 pts | 2,66 | **81,1 pts** · +0,31 R | 125.270 pts · R\$ 25.054 |
| **4ª** (Fibo 50% + IFR + Pullback + Bollinger) | 1566 · 35,6% | +774 · 292 pts | 2,65 | **87,4 pts** · +0,30 R | 136.892 pts · R\$ 27.378 |
| **5ª** (Fibo 50% + Pullback + Bollinger) | 788 · 38,7% | +738 · 309 pts | 2,39 | **96,5 pts** · +0,33 R | 76.026 pts · R\$ 15.205 |
| [ADX](adx-da-manha) | 1808 · 18,3% | +1.115 · 214 pts | 5,22 | **28,8 pts** · +0,13 R | 52.015 pts · R\$ 10.403 |
| [VWAP](bandas-de-vwap) | 1564 · 25,1% | +716 · 222 pts | 3,22 | **13,5 pts** · +0,04 R | 21.161 pts · R\$ 4.232 |
| [Donchian](donchian-com-medias) | 1319 · 19,7% | +1.030 · 193 pts | 5,33 | **47,8 pts** · +0,21 R | 63.026 pts · R\$ 12.605 |
| [BB explosão](explosao-da-bollinger) | 1206 · 26,0% | +744 · 224 pts | 3,32 | **27,2 pts** · +0,11 R | 32.835 pts · R\$ 6.567 |
| [Extremos sem](extremos-da-semana-virada) | 588 · 35,7% | +950 · 442 pts | 2,15 | **55,5 pts** · +0,15 R | 32.617 pts · R\$ 6.523 |
| [Fibo 50%](fibo-50-do-dia) | 226 · 42,0% | +865 · 464 pts | 1,87 | **95,0 pts** · +0,08 R | 21.480 pts · R\$ 4.296 |
| [GPS médias](gps-de-medias) | 1231 · 23,0% | +945 · 227 pts | 4,16 | **42,5 pts** · +0,19 R | 52.318 pts · R\$ 10.464 |
| [IFR](ifr-de-tendencia) | 778 · 32,4% | +817 · 276 pts | 2,96 | **78,2 pts** · +0,27 R | 60.865 pts · R\$ 12.173 |
| [MACD](macd-na-tendencia) | 902 · 22,2% | +998 · 224 pts | 4,46 | **46,9 pts** · +0,13 R | 42.319 pts · R\$ 8.464 |
| [Pôr do sol](por-do-sol) | 500 · 53,4% | +121 · 101 pts | 1,20 | **17,7 pts** · +0,06 R | 8.834 pts · R\$ 1.767 |
| [1ª vela 80](primeira-vela-80-min) | 478 · 21,5% | +1.357 · 264 pts | 5,14 | **85,2 pts** · +0,30 R | 40.712 pts · R\$ 8.142 |
| [Quinta](primeira-vela-de-quinta) | 108 · 63,9% | +396 · 469 pts | 0,84 | **83,4 pts** · +0,23 R | 9.006 pts · R\$ 1.801 |
| [Pullback](pullback-na-media) | 303 · 38,0% | +729 · 300 pts | 2,43 | **90,7 pts** · +0,28 R | 27.482 pts · R\$ 5.496 |
| [Rompe 200](rompe-media-200) | 205 · 39,0% | +793 · 429 pts | 1,85 | **48,1 pts** · +0,17 R | 9.858 pts · R\$ 1.972 |
| [Bollinger](rompimento-da-bollinger) | 259 · 36,7% | +622 · 195 pts | 3,18 | **104,5 pts** · +0,60 R | 27.064 pts · R\$ 5.413 |
| [Tendência](tendencia-forte-do-dia) | 1758 · 34,5% | +723 · 317 pts | 2,28 | **41,8 pts** · +0,13 R | 73.534 pts · R\$ 14.707 |
| [Onda](vai-na-onda) | 1189 · 35,4% | +884 · 430 pts | 2,06 | **35,2 pts** · +0,11 R | 41.841 pts · R\$ 8.368 |
| Todos os 17 juntos | 14422 · 28,4% | +812 · 262 pts | 3,10 | **42,8 pts** · +0,15 R | 616.967 pts · R\$ 123.393 |

*Taxa de acerto = operações no lucro ÷ total. Payoff = ganho médio ÷ perda média. **Expectativa matemática** = quanto a operação rende em média (acerto × ganho médio − erro × perda média); em **R** é o mesmo em múltiplos do risco (stop + custo), que é o que o tamanho de 1% usa. Lucro total em pontos, já com o custo de 15 pontos por operação.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes — e vale reparar que a de maior retorno costuma ser a de maior queda, porque é a mesma coisa vista de dois lados.

| Perfil | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano · queda | Sharpe treino → teste |
|---|---|---|---|---|---|
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | **+159% · −17,1%** | +51% · −5,1% | +31% · −2,6% | 2,34 → 2,09 |
| 📈 Maior retorno | Tendência | **+71% · −23,6%** | +71% · −23,6% | +48% · −16,1% | 1,58 → 1,19 |
| 🛡️ Menor queda | Pôr do sol + Pullback + Bollinger | **+89% · −9,1%** | +35% · −2,5% | +23% · −1,6% | 2,30 → 1,91 |

*R\$ 10 mil viraram, na recomendada: R\$ 38.878 com 1 contrato por R\$ 10 mil · R\$ 78.508 com 1% dividido entre os setups · **R\$ 1.135.706 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · VWAP = Bandas de VWAP · Donchian = Donchian com Médias · BB explosão = Explosão da Bollinger · Extremos sem = Extremos da Semana (virada de mão) · Fibo 50% = Pullback no 50% do dia · GPS médias = GPS de Médias · MACD = MACD na Tendência · Pôr do sol = Pôr do Sol (17h45) · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Rompe 200 = Rompimento da Média de 200 · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*

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
| **Queda de 1 em 20** · 1% dividido (o tamanho recomendado) | **−12%** | **−13%** | **−9%** | **−9%** | **−9%** |
| **Queda de 1 em 20** · 1% por operação (o corte) | **−32%** | **−24%** | **−33%** | **−32%** | **−24%** |
| Operações · acerto | 1.340 · 34,5% | 562 · 37,4% | 1.545 · 35,1% | 1.566 · 35,6% | 788 · 38,7% |
| Ganho médio · perda média | +755 · −266 pts | +681 · −251 pts | +761 · −286 pts | +774 · −292 pts | +738 · −309 pts |
| Payoff · fator de lucro | 2,84 · 1,49 | 2,71 · 1,62 | 2,66 · 1,44 | 2,65 · 1,47 | 2,39 · 1,51 |
| **Expectativa** (pts · R) | **86,1 pts · +0,34 R** | **97,1 pts · +0,42 R** | **81,1 pts · +0,31 R** | **87,4 pts · +0,30 R** | **96,5 pts · +0,33 R** |
| Maior sequência de perdas | 15 seguidas | 10 seguidas | 13 seguidas | 19 seguidas | 12 seguidas |
| **Lucro** (pts · R\$, 1 contrato) | **115.412 · R\$ 23.082** | **54.546 · R\$ 10.909** | **125.270 · R\$ 25.054** | **136.892 · R\$ 27.378** | **76.026 · R\$ 15.205** |
| Pior queda em pontos (1 contrato) | −7.326 pts · −R\$ 1.465 | −3.439 pts · −R\$ 688 | −10.610 pts · −R\$ 2.122 | −11.493 pts · −R\$ 2.299 | −9.021 pts · −R\$ 1.804 |
| **1% dividido:** ao ano · queda | **+51% · −5,1%** | **+42% · −4,0%** | **+43% · −4,5%** | **+42% · −3,7%** | **+34% · −3,1%** |
| 1% por setup: ao ano · queda | +159% · −17,1% | +78% · −8,6% | +173% · −21,4% | +167% · −19,4% | +84% · −10,4% |
| 1 contrato: ao ano · queda | +31% · −2,6% | +26% · −2,1% | +28% · −3,1% | +29% · −3,7% | +25% · −3,0% |
| Tempo abaixo do topo (1% dividido) | 43 pregões | 68 pregões | 45 pregões | 47 pregões | 60 pregões |
| Pior 60 dias (período todo) | +0,7% | −1,1% | +0,5% | +0,4% | −0,7% |
| Sharpe: treino → teste | 2,34 → 2,09 | 2,24 → 1,64 | 2,29 → 1,83 | 2,43 → 1,80 | 2,40 → 1,27 |
| Sharpe · risco/retorno (período todo) | 2,18 · 7,1 | 1,90 · 6,1 | 2,00 · 4,8 | 2,03 · 4,4 | 1,70 · 3,9 |
| Pior ano · correlação média | +22% · 0,01 | +17% · −0,14 | +19% · 0,12 | +20% · 0,10 | +16% · 0,02 |
| **R\$ 10.000 viraram** (1% dividido) | **R\$ 78.508** | **R\$ 58.233** | **R\$ 59.584** | **R\$ 57.356** | **R\$ 42.207** |

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

### Quanto risco cada uma carrega

A tabela acima mostra cada combinação no tamanho de posição dela. Esta aqui nivela todas no **mesmo risco por operação** — 1% do capital em cada entrada — e pergunta uma coisa só: com o mesmo risco, qual é a que mais machuca quando a sorte vira? É a tabela para olhar quem carrega risco de ruína, e não quem rendeu mais.

| # | Combinação | Ao ano · R\$ 10.000 viram | Pior queda real · dias no vermelho | Sorteio: típica · 1 em 20 | Pior sequência |
|---|---|---|---|---|---|
| 1 | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN ⭐ | +159% · R\$ 1.135.706 | −17,1% · 59 d | −22% · **−32%** | 15 seguidas |
| 2 | Pullback ·PUL + Bollinger ·TEN | +78% · R\$ 174.985 | −8,6% · 68 d | −16% · **−24%** | 10 seguidas |
| 3 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | +173% · R\$ 1.485.937 | −21,4% · 68 d | −23% · **−33%** | 13 seguidas |
| 4 | Fibo 50% ·FIB + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | +167% · R\$ 1.321.858 | −19,4% · 61 d | −22% · **−32%** | 19 seguidas |
| 5 | Fibo 50% ·FIB + Pullback ·PUL + Bollinger ·TEN | +84% · R\$ 206.551 | −10,4% · 70 d | −16% · **−24%** | 12 seguidas |
| 6 | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | +89% · R\$ 235.243 | −16,3% · 78 d | −18% · **−27%** | 13 seguidas |
| 7 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | +174% · R\$ 1.525.561 | −17,2% · 59 d | −21% · **−31%** | 14 seguidas |
| 8 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | +106% · R\$ 365.075 | −15,3% · 102 d | −24% · **−36%** | 15 seguidas |
| 9 | Fibo 50% ·FIB + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | +181% · R\$ 1.724.202 | −23,7% · 68 d | −23% · **−32%** | 15 seguidas |
| 10 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | +190% · R\$ 1.991.762 | −21,5% · 61 d | −22% · **−32%** | 14 seguidas |
| 11 | Extremos sem ·EXT + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | +212% · R\$ 2.885.807 | −25,1% · 48 d | −26% · **−38%** | 19 seguidas |
| 12 | Pullback ·PUL + Rompe 200 ·ROM | +40% · R\$ 54.191 | −19,7% · 108 d | −18% · **−28%** | 17 seguidas |
| 13 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | +210% · R\$ 2.781.697 | −25,7% · 61 d | −24% · **−34%** | 20 seguidas |
| 14 | IFR ·TEN + Bollinger ·TEN | +121% · R\$ 523.845 | −16,6% · 61 d | −21% · **−31%** | 20 seguidas |
| 15 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | +226% · R\$ 3.575.465 | −29,7% · 68 d | −25% · **−36%** | 20 seguidas |
| 16 | Fibo 50% ·FIB + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | +112% · R\$ 426.044 | −17,4% · 110 d | −23% · **−35%** | 20 seguidas |
| 17 | Fibo 50% ·FIB + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | +183% · R\$ 1.775.550 | −19,5% · 61 d | −21% · **−31%** | 15 seguidas |
| 18 | IFR ·TEN + Pullback ·PUL | +95% · R\$ 277.441 | −12,9% · 72 d | −23% · **−34%** | 11 seguidas |
| 19 | Fibo 50% ·FIB + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | +95% · R\$ 276.803 | −16,3% · 84 d | −18% · **−27%** | 13 seguidas |
| 20 | Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | +89% · R\$ 236.716 | −9,1% · 68 d | −15% · **−23%** | 10 seguidas |

*Todas as linhas arriscam **1% do capital em cada operação**. em cada setup — não é o tamanho recomendado (que é 1% dividido entre os setups da carteira). e sim o nivelamento que torna o risco comparável: com o mesmo risco por operação. carteira com mais setups fica com mais risco aberto ao mesmo tempo. e é isso que a coluna de queda mostra. **Pior queda real** = o que de fato aconteceu. que foi um sorteio só. **Sorteio** = as mesmas operações em outra ordem. 1.000 vezes: a típica é a mediana e a de 1 em 20 é o percentil 5 — de cada 20 histórias. uma foi pior que aquilo. **Dimensione pela coluna de 1 em 20**. não pela queda real. **Pior sequência** = o maior número de operações perdedoras seguidas.*


**1% × 2% do capital: o que muda**

| Risco total | Por operação | Ao ano | Pior queda | Dias no vermelho | Pior 60 dias | R\$ 10.000 viraram |
|---|---|---|---|---|---|---|
| **1% (recomendado)** | 0,33% | +51% | −5% | 43 d | +1% | R\$ 78.508 |
| 2% (o dobro) | 0,67% | +99% | −11% | 55 d | −2% | R\$ 310.925 |

*Dobrar o risco quase dobra o retorno e quase dobra a queda, mas **não encurta o tempo no vermelho** — esse depende da sequência de acertos e erros, não do tamanho. A validação andando para frente (recalibrando de 6 em 6 meses só com o passado) indicou que esta carteira suporta algo perto de 2%, mas com apenas 7 semestres fora da amostra e nenhum estouro observado a amostra é pequena: zero estouros em 3,5 anos é compatível com uma chance real bem maior que zero. Por isso a recomendação segue 1%.*
### Por que a recomendada é IFR + Pullback + Bollinger

Ela tirou a maior **nota de sobrevivência**: 7,34 de 10, contra 7,04 da segunda colocada (Pullback + Bollinger). O que isso quer dizer, medida por medida, tudo no treino (até 2023) e sem o CDI na conta de risco — o CDI pinga todo dia, preenche as quedas pequenas e esconde a diferença entre as carteiras:

- **Eficiência:** rende 7,0 vezes ao ano o tamanho da sua pior queda. É a medida que impede uma carteira de ganhar a disputa rendendo um pouco mais e arriscando muito mais — diferença de retorno se resolve com o tamanho da posição, diferença de queda não.
- **Margem:** cada operação rende em média +0,32 R, ou seja, 32% do que arrisca. É a gordura entre o setup e o zero: com margem curta, um custo um pouco maior ou um ano mais fraco já viram prejuízo.
- **Sequência:** passou no máximo 34 pregões seguidos abaixo do topo anterior, e o pior trimestre de toda a série custou −1,4%.
- **Má sorte normal:** em 1.000 histórias alternativas — as mesmas operações em outra ordem — a queda que aparece em 1 de cada 20 é de −12% no tamanho recomendado. e de −32% se cada operação arriscar 1% sozinha. É por esses números que se dimensiona a posição. não pela queda que de fato aconteceu.
- **Fora do treino**, em dados que não participaram de escolha nenhuma, ela entregou +52% ao ano com 1% dividido (Sharpe 2,09).

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

**E há um corte antes da nota.** Entre as 40 melhores. cada uma passa por 1.000 histórias alternativas — as mesmas operações. reembaralhadas — e quem perde mais que −40% em 1 de cada 20 dessas histórias fica fora da recomendação. por melhor que seja a média. Esse teste é feito com **1% em cada operação**. e não com o 1% dividido do tamanho recomendado: dividido. todas as candidatas ficam entre −9% e −13% e o corte não separaria nada; nivelando por operação. a diferença entre elas aparece inteira. A ordem real dos acontecimentos foi um sorteio só. e planejar com ela é planejar com a sorte que se teve.

A régua é **fixa**: a nota de uma combinação não depende de quais outras existem, então a recomendada só troca quando os números dela mudam. Até 06/11/2026 a nota era a média das *posições* no ranking, e bastava um setup novo ser aprovado — trazendo milhares de combinações para o conjunto — para a recomendada mudar sem que nada nela tivesse piorado.

Das **9.401** combinações possíveis. a tabela mostra as **30 melhores**.

| # · nota | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | Sobrevivência no treino: ret÷queda · dias no vermelho · pior 60 d | Pior ano · correlação |
|---|---|---|---|---|---|
| 1 · **7,50** | Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+86% · −8,2%** | +34% · −2,4% | 7,0 · 57 d · −1,8% | +17% · −0,04 |
| 2 · **7,47** | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+171% · −17,1%** | +43% · −3,5% | 7,2 · 34 d · −0,8% | +20% · −0,01 |
| 3 · **7,34** | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN ⭐ | **+159% · −17,1%** | +51% · −5,1% | 7,0 · 34 d · −1,4% | +22% · 0,01 |
| 4 · **7,08** | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+47% · −19,8%** | +24% · −6,2% | 5,0 · 36 d · −0,5% | +13% · 0,09 |
| 5 · **7,04** | Pullback ·PUL + Bollinger ·TEN | **+78% · −8,6%** | +42% · −4,0% | 5,7 · 57 d · −3,1% | +17% · −0,14 |
| 6 · **7,01** | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+186% · −21,4%** | +38% · −3,0% | 6,1 · 34 d · −0,9% | +18% · 0,07 |
| 7 · **6,97** | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+173% · −21,4%** | +43% · −4,5% | 5,9 · 34 d · −0,9% | +19% · 0,12 |
| 8 · **6,88** | Fibo 50% ·FIB + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+180% · −19,4%** | +37% · −2,8% | 6,2 · 37 d · −1,0% | +19% · 0,06 |
| 9 · **6,87** | Fibo 50% ·FIB + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+93% · −10,5%** | +30% · −2,2% | 5,5 · 38 d · −1,6% | +16% · 0,03 |
| 10 · **6,87** | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+243% · −20,5%** | +44% · −3,3% | 6,7 · 40 d · −1,0% | +23% · −0,00 |
| 11 · **6,83** | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+188% · −17,3%** | +38% · −2,5% | 7,0 · 39 d · −0,9% | +20% · −0,01 |
| 12 · **6,81** | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+183% · −28,0%** | +47% · −5,6% | 6,9 · 39 d · −1,8% | +20% · 0,01 |
| 13 · **6,80** | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+98% · −16,5%** | +31% · −3,3% | 5,4 · 53 d · −1,6% | +15% · 0,04 |
| 14 · **6,74** | Fibo 50% ·FIB + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN | **+167% · −19,4%** | +42% · −3,7% | 6,0 · 37 d · −1,4% | +20% · 0,10 |
| 15 · **6,71** | Fibo 50% ·FIB + Pullback ·PUL + Bollinger ·TEN | **+84% · −10,4%** | +34% · −3,1% | 5,1 · 38 d · −2,1% | +16% · 0,02 |
| 16 · **6,69** | Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+89% · −16,3%** | +35% · −4,8% | 5,1 · 57 d · −1,8% | +15% · 0,07 |
| 17 · **6,69** | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+116% · −15,6%** | +34% · −3,3% | 6,0 · 54 d · +0,1% | +17% · 0,08 |
| 18 · **6,67** | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+174% · −17,2%** | +43% · −3,5% | 6,7 · 39 d · −1,3% | +21% · −0,03 |
| 19 · **6,67** | IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+104% · −12,8%** | +39% · −3,5% | 6,9 · 60 d · −1,7% | +19% · −0,07 |
| 20 · **6,59** | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM | **+106% · −15,3%** | +40% · −4,4% | 5,7 · 54 d · −0,2% | +17% · 0,19 |
| 21 · **6,59** | IFR ·TEN + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+132% · −17,4%** | +46% · −4,8% | 6,3 · 37 d · −2,2% | +22% · 0,06 |
| 22 · **6,56** | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+196% · −30,6%** | +42% · −5,2% | 6,1 · 39 d · −1,5% | +18% · 0,10 |
| 23 · **6,54** | Fibo 50% ·FIB + IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+181% · −23,7%** | +38% · −3,6% | 5,2 · 34 d · −1,2% | +18% · 0,13 |
| 24 · **6,50** | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+228% · −20,4%** | +51% · −4,4% | 6,5 · 54 d · −1,5% | +25% · 0,05 |
| 25 · **6,45** | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+225% · −25,8%** | +42% · −4,1% | 6,1 · 37 d · −1,1% | +23% · 0,07 |
| 26 · **6,45** | Quinta ·QUI + Pullback ·PUL ⚠️ | **+39% · −9,3%** | +25% · −4,2% | 6,2 · 105 d · −2,4% | +14% · −0,03 |
| 27 · **6,44** | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+190% · −21,5%** | +38% · −3,2% | 5,7 · 34 d · −1,1% | +19% · 0,04 |
| 28 · **6,42** | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+200% · −24,7%** | +42% · −4,0% | 6,5 · 39 d · −1,8% | +20% · −0,02 |
| 29 · **6,41** | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+247% · −20,5%** | +44% · −3,2% | 6,3 · 40 d · −1,0% | +22% · 0,01 |
| 30 · **6,41** | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+229% · −32,6%** | +46% · −6,1% | 6,5 · 37 d · −1,5% | +23% · 0,06 |
| | *CDI* | *+13% · 0%* | — | — | — |
| | *Ibovespa comprado* | *+10% · −20,9%* | — | — | — |

**A melhor de cada tamanho** — quanto muda acrescentar mais um setup à carteira:

| Setups | Melhor combinação desse tamanho | 1% dividido: ao ano · queda | Dias no vermelho | Pior 60 dias |
|---|---|---|---|---|
| 1 | Pullback ·PUL | +32% · −9,1% | 137 d | −5,5% |
| 2 | Pullback ·PUL + Bollinger ·TEN | +42% · −4,0% | 57 d | −3,1% |
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
> - **VWAP** e **IFR**: 47% dos dias em que pelo menos um deles operou
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
> - **Extremos sem** e **Pôr do sol**: 25% dos dias em que pelo menos um deles operou
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
> - **GPS médias** e **IFR**: 49% dos dias em que pelo menos um deles operou
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
| **⭐ Rec. 1%** | +3,6% | +258,9% | +97,7% | +105,5% | +279,5% | +98,1% | **+11257,1%** (+158,6% · R\$ 1.135.706) |
| **⭐ 1ª · IFR + Pullback + Bollinger** | +2,6% | +38,6% | +23,8% | +21,5% | +38,7% | +31,0% | **+288,8%** (+31,3% · R\$ 38.878) |
| **2ª · Pullback + Bollinger** | +5,7% | +32,1% | +21,4% | +16,9% | +30,6% | +20,4% | **+211,7%** (+25,6% · R\$ 31.169) |
| **3ª · IFR + Pullback + Rompe 200 + Bollinger** | +0,8% | +34,4% | +24,6% | +18,7% | +37,8% | +22,3% | **+237,8%** (+27,7% · R\$ 33.777) |
| **4ª · Fibo 50% + IFR + Pullback + Bollinger** | +2,8% | +40,7% | +20,3% | +19,7% | +36,3% | +25,9% | **+257,4%** (+29,1% · R\$ 35.740) |
| **5ª · Fibo 50% + Pullback + Bollinger** | +5,0% | +36,9% | +17,6% | +16,1% | +30,1% | +17,4% | **+199,7%** (+24,7% · R\$ 29.970) |
| **ADX** | +2,1% | +29,8% | +12,0% | +36,5% | +65,9% | +39,9% | **+370,2%** (+36,5% · R\$ 47.019) |
| **VWAP** | +0,6% | +37,6% | +4,1% | +10,4% | +42,4% | +13,4% | **+156,7%** (+20,8% · R\$ 25.674) |
| **Donchian** | −6,9% | +74,2% | +29,5% | +17,2% | +46,7% | +62,8% | **+488,3%** (+42,7% · R\$ 58.825) |
| **BB explosão** | −5,6% | +20,6% | +36,6% | +3,3% | +41,4% | +44,4% | **+227,9%** (+26,9% · R\$ 32.793) |
| **Extremos sem** | +6,1% | +28,5% | +5,7% | +29,5% | +26,8% | +36,6% | **+223,1%** (+26,6% · R\$ 32.312) |
| **Fibo 50%** | +3,5% | +46,3% | +10,2% | +14,2% | +28,7% | +10,1% | **+170,0%** (+22,1% · R\$ 26.997) |
| **GPS médias** | −0,6% | +40,1% | +54,4% | +22,4% | +15,5% | +55,6% | **+372,9%** (+36,6% · R\$ 47.291) |
| **IFR** | −3,6% | +51,5% | +28,3% | +30,7% | +55,3% | +53,1% | **+482,5%** (+42,5% · R\$ 58.247) |
| **MACD** | −2,9% | +20,7% | +25,7% | +36,6% | +40,1% | +40,0% | **+294,5%** (+31,7% · R\$ 39.451) |
| **Pôr do sol** | +3,9% | +16,5% | +11,6% | +21,5% | +17,1% | +12,9% | **+116,9%** (+16,8% · R\$ 21.690) |
| **1ª vela 80** | +7,7% | +9,1% | +27,7% | +37,8% | +46,7% | +28,2% | **+288,8%** (+31,3% · R\$ 38.876) |
| **Quinta** | +4,0% | +18,1% | +15,3% | +16,4% | +21,9% | +8,0% | **+117,2%** (+16,9% · R\$ 21.723) |
| **Pullback** | +7,5% | +47,1% | +19,7% | +10,8% | +21,2% | +21,6% | **+209,1%** (+25,4% · R\$ 30.907) |
| **Rompe 200** | −4,6% | +22,0% | +26,7% | +10,6% | +34,6% | −1,0% | **+117,4%** (+16,9% · R\$ 21.738) |
| **Bollinger** | +4,0% | +18,2% | +22,8% | +23,1% | +40,2% | +18,8% | **+209,5%** (+25,5% · R\$ 30.945) |
| **Tendência** | −1,7% | +58,4% | +50,3% | +21,6% | +32,2% | +86,3% | **+600,8%** (+47,8% · R\$ 70.082) |
| **Onda** | −3,9% | +5,0% | +26,9% | +62,1% | +22,7% | +44,2% | **+267,6%** (+29,9% · R\$ 36.761) |
| **Todos** | −0,7% | +38,0% | +17,5% | +19,2% | +45,1% | +40,6% | **+291,6%** (+31,5% · R\$ 39.164) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,0% | **+82,2%** (+12,8% · R\$ 18.221) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +6,8% | **+63,0%** (+10,3% · R\$ 16.301) |
| *Quem ganhou* | *1ª vela 80* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 11/11/2026.

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
> | nov/2026 | −0,1% | +0,3% | +0,0% | +0,0% | +0,3% | +0,3% |
> | **Acumulado** | **+288,8%** | **+211,7%** | **+237,8%** | **+257,4%** | **+199,7%** | **+82,2%** |
>
> *As 5 melhores combinações com 1 contrato por R\$ 10 mil. Cada setup tem o mês a mês dele na própria página.*

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = IFR + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **2ª a 5ª ÷** = as outras melhores combinações, também com 1% dividido: é a comparação mais justa entre elas. **Todos ⚠️** = os 17 setups com 1% cada: até 17% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **⭐ 1ª · IFR + Pullback + Bollinger** | +3,6% | +258,9% | +97,7% | +105,5% | +279,5% | +98,1% | **+11257,1%** (+158,6% · R\$ 1.135.706) |
| **⭐ 1ª · IFR + Pullback + Bollinger ÷** | +2,2% | +68,9% | +37,8% | +37,8% | +74,2% | +37,4% | **+685,1%** (+51,3% · R\$ 78.508) |
| **2ª · Pullback + Bollinger ÷** | +8,3% | +49,8% | +33,2% | +32,0% | +65,5% | +23,4% | **+482,3%** (+42,4% · R\$ 58.233) |
| **3ª · IFR + Pullback + Rompe 200 + Bollinger ÷** | +0,6% | +56,6% | +35,4% | +30,9% | +65,4% | +29,0% | **+495,8%** (+43,1% · R\$ 59.584) |
| **4ª · Fibo 50% + IFR + Pullback + Bollinger ÷** | +2,2% | +56,5% | +30,8% | +31,3% | +59,6% | +30,8% | **+473,6%** (+42,0% · R\$ 57.356) |
| **5ª · Fibo 50% + Pullback + Bollinger ÷** | +6,2% | +40,7% | +25,6% | +25,5% | +49,7% | +19,7% | **+322,1%** (+33,5% · R\$ 42.207) |
| **ADX** | +2,0% | +51,0% | +7,4% | +71,5% | +161,6% | +52,6% | **+1034,0%** (+62,8% · R\$ 113.402) |
| **VWAP** | +0,3% | +41,5% | +1,5% | +10,3% | +61,5% | +20,2% | **+208,3%** (+25,4% · R\$ 30.832) |
| **Donchian** | −14,9% | +173,6% | +51,8% | +25,9% | +129,6% | +104,0% | **+1984,3%** (+84,0% · R\$ 208.431) |
| **BB explosão** | −12,2% | +24,2% | +66,0% | −10,9% | +100,5% | +65,1% | **+433,6%** (+40,0% · R\$ 53.361) |
| **Extremos sem** | +5,5% | +42,6% | +0,9% | +39,3% | +35,4% | +36,5% | **+290,7%** (+31,5% · R\$ 39.071) |
| **Fibo 50%** | +2,0% | +23,6% | +11,4% | +13,0% | +21,9% | +12,1% | **+117,1%** (+16,8% · R\$ 21.710) |
| **GPS médias** | −4,2% | +68,9% | +118,4% | +46,2% | +29,3% | +93,3% | **+1191,6%** (+67,2% · R\$ 129.156) |
| **IFR** | −9,3% | +108,3% | +45,0% | +48,1% | +88,9% | +66,9% | **+1178,5%** (+66,8% · R\$ 127.847) |
| **MACD** | −2,8% | +27,8% | +30,3% | +51,6% | +60,7% | +39,7% | **+450,6%** (+40,9% · R\$ 55.063) |
| **Pôr do sol** | +4,7% | +21,1% | +10,0% | +33,5% | +18,5% | +12,5% | **+148,1%** (+20,0% · R\$ 24.810) |
| **1ª vela 80** | +10,2% | +7,2% | +36,6% | +73,1% | +77,3% | +35,0% | **+568,4%** (+46,4% · R\$ 66.840) |
| **Quinta** | +4,2% | +19,1% | +16,4% | +19,2% | +23,5% | +9,4% | **+132,4%** (+18,5% · R\$ 23.241) |
| **Pullback** | +10,2% | +70,5% | +24,7% | +9,6% | +29,0% | +21,0% | **+300,6%** (+32,1% · R\$ 40.061) |
| **Rompe 200** | −4,1% | +23,6% | +27,6% | +11,5% | +40,2% | +5,9% | **+150,3%** (+20,2% · R\$ 25.030) |
| **Bollinger** | +6,4% | +30,1% | +40,6% | +56,8% | +108,7% | +25,0% | **+696,6%** (+51,7% · R\$ 79.662) |
| **Tendência** | −2,9% | +94,7% | +78,7% | +31,5% | +62,2% | +102,4% | **+1358,7%** (+71,3% · R\$ 145.872) |
| **Onda** | −3,7% | +8,2% | +36,6% | +97,1% | +36,3% | +41,6% | **+441,5%** (+40,4% · R\$ 54.154) |
| **Todos ÷** | −3,7% | +65,2% | +26,1% | +26,8% | +97,4% | +57,5% | **+690,8%** (+51,5% · R\$ 79.076) |
| **Todos ⚠️** | −24,4% | +330,4% | +23,0% | +29,2% | +866,8% | +268,8% | **+18344,2%** (+185,1% · R\$ 1.844.415) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,0% | **+82,2%** (+12,8% · R\$ 18.221) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +6,8% | **+63,0%** (+10,3% · R\$ 16.301) |
| *Quem ganhou* | *Pullback* | *Todos ⚠️* | *GPS médias* | *⭐ 1ª · IFR + Pullback + Bollinger* | *Todos ⚠️* | *Todos ⚠️* | *Todos ⚠️* |

\* ano parcial: os dados vão de 01/11/2021 a 11/11/2026.

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
> | nov/2026 | −0,2% | +0,3% | −0,1% | −0,1% | +0,3% | +0,3% |
> | **Acumulado** | **+685,1%** | **+482,3%** | **+495,8%** | **+473,6%** | **+322,1%** | **+82,2%** |
>
> *As 5 melhores combinações com 1% dividido entre os setups de cada uma.*

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +31% | −3% | −5% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +74% | −8% | −12% | −18% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+159%** | **−17%** | −22% | −32% |
| Risco fixo de 2% por operação | 2,00% | +415% | −33% | −40% | −56% |
| Kelly ¼ | 2,95% | +898% | −44% | −56% | −72% |
| Kelly ½ | 5,89% | +2842% | −72% | −84% | −95% |
| Kelly cheio | 11,79% | +1707% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,66% | +303% | −30% | −36% | −51% |
| Larry Williams 5% | 3,32% | +887% | −53% | −61% | −78% |
| Larry Williams 10% | 6,64% | +2214% | −81% | −88% | −97% |

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
| ADX da Manhã | 260 pts · R\$ 55 | 1,8 | 9,1 | 18,2 | 36,3 |
| Bandas de VWAP | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Donchian com Médias | 432 pts · R\$ 89 | 1,1 | 5,6 | 11,2 | 22,4 |
| Explosão da Bollinger | 432 pts · R\$ 89 | 1,1 | 5,6 | 11,2 | 22,4 |
| Extremos da Semana (virada de mão) | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Pullback no 50% do dia | 2.378 pts · R\$ 479 | 0,2 | 1,0 | 2,1 | 4,2 |
| GPS de Médias | 432 pts · R\$ 89 | 1,1 | 5,6 | 11,2 | 22,4 |
| IFR de Tendência ⭐ | 347 pts · R\$ 72 | 1,4 | 6,9 | 13,8 | 27,6 |
| MACD na Tendência | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Pôr do Sol (17h45) | 649 pts · R\$ 133 | 0,8 | 3,8 | 7,5 | 15,1 |
| Primeira Vela de 80 Minutos | 648 pts · R\$ 133 | 0,8 | 3,8 | 7,5 | 15,1 |
| Primeira Vela de Quinta | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Pullback na Média ⭐ | 630 pts · R\$ 129 | 0,8 | 3,9 | 7,7 | 15,5 |
| Rompimento da Média de 200 | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |
| Rompimento da Bollinger ⭐ | 363 pts · R\$ 76 | 1,3 | 6,6 | 13,2 | 26,5 |
| Tendência Forte do Dia | 630 pts · R\$ 129 | 0,8 | 3,9 | 7,7 | 15,5 |
| Vai na Onda | 865 pts · R\$ 176 | 0,6 | 2,8 | 5,7 | 11,4 |

*Stops calculados com o ATR (4.202 pts) e o preço (173.570) de hoje — mudam todo dia. ⭐ = setups da combinação recomendada. Com risco de 0,5%, use a metade. Confira a margem de day trade da sua corretora para o número de contratos.*

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R\$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- **Risco 1%:** cada setup arrisca 1% do capital total em cada operação (contratos = capital × 1% ÷ (stop + custo) em R\$). Se dois setups estiverem posicionados ao mesmo tempo, o risco aberto é de 2%.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
