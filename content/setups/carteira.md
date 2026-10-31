---
title: Carteira de setups
date: 2026-10-31
tags: [setup, carteira]
---

**O que acontece quando os setups aprovados são operados juntos? A carteira divide o capital igualmente entre eles e testa todas as combinações, sempre comparando com o CDI e com o Ibovespa comprado.**

*Página gerada em 31/10/2026 14:49 BRT · dados de 01/11/2021 a 30/10/2026 · [voltar para todos os setups](./)*

> [!success] Em resumo: com R\$ 10.000, operando os 16 setups juntos (capital dividido igualmente, capital no CDI)
> - **R\$ 38.282** (+31% ao ano · pior queda −12% · Sharpe 1,18)
> - CDI: **R\$ 18.156** (+13% ao ano) · Ibovespa: **R\$ 15.909** (+10% ao ano · pior queda −21%)
> - **Combinação recomendada (melhor equilíbrio entre retorno, queda e estabilidade): IFR de Tendência + Pullback na Média + Rompimento da Bollinger** — R\$ 38.885, +32% ao ano, pior queda −3%. **Arriscando 1% por operação: R\$ 1.149.641, +161% ao ano, pior queda −17%** (veja o tamanho de posição).
> - **Dobrando o risco (2% dividido em vez de 1%): R\$ 313.074, +100% ao ano, pior queda −11%** — contra +52% ao ano e queda −5% com 1%. O site continua recomendando 1%; o 2% está aí só para você ver os números.
> - **Ao vivo desde 27/10/2026** (dias que nenhum vídeo viu), a recomendada com 1% dividido: **+0,7%** em 4 pregões.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital da carteira](setups/img/carteira_curva.png)

## Ranking dos setups

Cada setup sozinho, na versão principal, com o capital no CDI.

**Nota de cada critério**

| Setup | Sharpe | Retorno ÷ queda | Dias no vermelho | Teste ÷ treino · meses > CDI | Correlação · op./mês |
|---|---|---|---|---|---|
| **1º** [IFR](ifr-de-tendencia) ·TEN | 1,60 | 3,1 | 69 d | 150% · 72% | 0,26 · 12,7 |
| **2º** [Bollinger](rompimento-da-bollinger) ·TEN | 1,61 | 2,2 | 84 d | 150% · 65% | 0,24 · 4,2 |
| **3º** [Donchian](donchian-com-medias) ·TEN | 1,30 | 2,0 | 188 d | 102% · 67% | 0,29 · 21,5 |
| **4º** [1ª vela 80](primeira-vela-80-min) ·VEL | 1,12 | 1,1 | 298 d | 150% · 63% | 0,17 · 7,8 |
| **5º** [ADX](adx-da-manha) ·ADX | 1,03 | 1,3 | 198 d | 150% · 63% | 0,21 · 29,4 |
| **6º** [Pôr do sol](por-do-sol) ·POR | 1,11 | 0,6 | 328 d | 150% · 65% | −0,07 · 8,2 |
| **7º** [Tendência](tendencia-forte-do-dia) ·TEN | 1,33 | 1,8 | 206 d | 90% · 60% | 0,31 · 28,8 |
| **8º** [MACD](macd-na-tendencia) ·TEN | 0,94 | 0,9 | 256 d | 150% · 63% | 0,28 · 14,7 |
| **9º** [GPS médias](gps-de-medias) ·TEN | 1,07 | 1,3 | 205 d | 62% · 65% | 0,25 · 20,1 |
| **10º** [Pullback](pullback-na-media) ·PUL | 1,20 | 1,8 | 204 d | 28% · 60% | −0,02 · 5,0 |
| **11º** [Extremos sem](extremos-da-semana-virada) ·EXT | 0,71 | 0,5 | 545 d | 150% · 63% | 0,19 · 9,6 |
| **12º** [Onda](vai-na-onda) ·OND | 0,73 | 0,6 | 471 d | 150% · 57% | 0,17 · 19,4 |
| **13º** [BB explosão](explosao-da-bollinger) ·TEN | 0,74 | 0,6 | 273 d | 139% · 58% | 0,28 · 19,7 |
| **14º** [Quinta](primeira-vela-de-quinta) ·QUI | 0,88 | 0,5 | 179 d | 62% · 50% | −0,08 · 1,8 |
| **15º** [VWAP](bandas-de-vwap) ·TEN | 0,46 | 0,2 | 511 d | 146% · 57% | 0,34 · 25,6 |
| **16º** [Rompe 200](rompe-media-200) ·ROM | 0,43 | 0,2 | 187 d | 23% · 45% | 0,16 · 3,4 |

**Resultado: 1 contrato por R\$ 10 mil × arriscando 1% por operação**

| Setup | Ao ano (1 contrato) | Ao ano (risco 1%) | Pior queda (1 contrato) | Pior queda (risco 1%) | Ao vivo desde 27/10 |
|---|---|---|---|---|---|
| **1º** [IFR](ifr-de-tendencia) | +43% | **+68%** | −9% | **−11%** | 4 op · +0,46R |
| **2º** [Bollinger](rompimento-da-bollinger) | +26% | **+52%** | −5% | **−7%** | sem operações |
| **3º** [Donchian](donchian-com-medias) | +42% | **+83%** | −12% | **−24%** | 4 op · +1,26R |
| **4º** [1ª vela 80](primeira-vela-80-min) | +32% | **+47%** | −16% | **−14%** | 3 op · +0,91R |
| **5º** [ADX](adx-da-manha) | +38% | **+65%** | −17% | **−31%** | 8 op · +0,15R |
| **6º** [Pôr do sol](por-do-sol) | +17% | **+20%** | −6% | **−3%** | 1 op · +0,17R |
| **7º** [Tendência](tendencia-forte-do-dia) | +48% | **+72%** | −18% | **−24%** | 3 op · +2,14R |
| **8º** [MACD](macd-na-tendencia) | +31% | **+40%** | −18% | **−11%** | 4 op · +0,48R |
| **9º** [GPS médias](gps-de-medias) | +36% | **+67%** | −17% | **−23%** | 4 op · +2,41R |
| **10º** [Pullback](pullback-na-media) | +25% | **+32%** | −6% | **−9%** | sem operações |
| **11º** [Extremos sem](extremos-da-semana-virada) | +26% | **+31%** | −25% | **−18%** | sem operações |
| **12º** [Onda](vai-na-onda) | +30% | **+41%** | −26% | **−20%** | 3 op · +0,54R |
| **13º** [BB explosão](explosao-da-bollinger) | +26% | **+39%** | −20% | **−33%** | 3 op · +2,54R |
| **14º** [Quinta](primeira-vela-de-quinta) | +17% | **+18%** | −7% | **−3%** | sem operações |
| **15º** [VWAP](bandas-de-vwap) | +21% | **+25%** | −31% | **−20%** | 10 op · −0,52R |
| **16º** [Rompe 200](rompe-media-200) | +17% | **+20%** | −16% | **−10%** | sem operações |

- **IFR de Tendência:** entra na força medida pelo IFR · 10h–11h e 14h–16h
- **Rompimento da Bollinger:** rompimento da banda de Bollinger a favor da tendência · 10h15–11h e 14h–17h30
- **Donchian com Médias:** rompimento de canal a favor da tendência · 10h às 16h
- **Primeira Vela de 80 Minutos:** força da primeira vela do dia, alvo longo com stop móvel · entra 10h20
- **ADX da Manhã:** pega o começo da tendência (ADX subindo), stop curto · 10h–11h
- **Pôr do Sol (17h45):** scalp no fim do pregão, a favor do dia · 17h50 às 18h10
- **Tendência Forte do Dia:** segue a tendência já formada (rompimento longe da abertura) · o dia todo, até 17h
- **MACD na Tendência:** tendência do dia confirmada pelo MACD, com break even · 9h–11h30 e 14h–16h
- **GPS de Médias:** tendência com alvo longo e stop curto · 10h–11h e 14h–16h
- **Pullback na Média:** entra na volta da correção até a média · 10h30–12h30 e 14h45–15h45
- **Extremos da Semana (virada de mão):** rompimento dos extremos da semana com reversão no stop · abertura até 15h (ordens); posição zera às 18h20
- **Vai na Onda:** segue o fluxo: 3 velas a favor renovando o extremo do dia com volume · 9h45–16h
- **Explosão da Bollinger:** rompimento de volatilidade a favor da tendência · 10h às 16h (zera às 17h)
- **Primeira Vela de Quinta:** rompimento da primeira vela do dia (dia da semana escolhido) · 9h15
- **Bandas de VWAP:** rompimento da banda de VWAP a favor da média de 200 · 10h às 16h
- **Rompimento da Média de 200:** rompimento de média longa com alvo longo · 9h às 16h

*Correlação = com os outros setups (baixa é bom para a carteira). Como o ranking é feito: cada setup ganha uma posição em 4 critérios — **Sharpe** (retorno acima do CDI por oscilação), **retorno acima do CDI ÷ pior queda** (quanto rende para cada 1% de queda que você aguenta), **teste ÷ treino** (quanto do resultado por operação de 2021–2023 se manteve em 2024 em diante; 100% = manteve tudo) e **meses acima do CDI**. Vale a média das 4 posições. Correlação baixa com os outros é bom para a carteira, mas não entra na nota de cada setup.*

### Taxa de acerto, payoff e expectativa

Os mesmos setups vistos por operação, não por ano. [Ver todas as operações, uma a uma](operacoes).

| | Operações · acerto | Ganho · perda média | Payoff | Expectativa (pts · R) | Lucro total (pts · R\$) |
|---|---|---|---|---|---|
| ⭐ **Recomendada** (IFR + Pullback + Bollinger) | 1334 · 34,6% | +754 · 265 pts | 2,84 | **86,9 pts** · +0,34 R | 115.970 pts · R\$ 23.194 |
| [ADX](adx-da-manha) | 1794 · 18,3% | +1.113 · 213 pts | 5,22 | **30,0 pts** · +0,13 R | 53.739 pts · R\$ 10.748 |
| [VWAP](bandas-de-vwap) | 1561 · 25,1% | +716 · 223 pts | 3,22 | **13,2 pts** · +0,04 R | 20.541 pts · R\$ 4.108 |
| [Donchian](donchian-com-medias) | 1314 · 19,6% | +1.023 · 193 pts | 5,31 | **46,1 pts** · +0,21 R | 60.588 pts · R\$ 12.118 |
| [BB explosão](explosao-da-bollinger) | 1204 · 25,9% | +739 · 224 pts | 3,30 | **25,4 pts** · +0,11 R | 30.625 pts · R\$ 6.125 |
| [Extremos sem](extremos-da-semana-virada) | 585 · 35,7% | +940 · 439 pts | 2,14 | **53,4 pts** · +0,14 R | 31.233 pts · R\$ 6.247 |
| [GPS médias](gps-de-medias) | 1226 · 23,0% | +938 · 226 pts | 4,15 | **41,8 pts** · +0,19 R | 51.282 pts · R\$ 10.256 |
| [IFR](ifr-de-tendencia) | 772 · 32,5% | +815 · 275 pts | 2,97 | **79,6 pts** · +0,28 R | 61.424 pts · R\$ 12.285 |
| [MACD](macd-na-tendencia) | 898 · 22,0% | +998 · 225 pts | 4,45 | **45,1 pts** · +0,13 R | 40.484 pts · R\$ 8.097 |
| [Pôr do sol](por-do-sol) | 498 · 53,2% | +120 · 101 pts | 1,19 | **16,6 pts** · +0,06 R | 8.244 pts · R\$ 1.649 |
| [1ª vela 80](primeira-vela-80-min) | 475 · 21,7% | +1.357 · 262 pts | 5,17 | **88,6 pts** · +0,30 R | 42.092 pts · R\$ 8.418 |
| [Quinta](primeira-vela-de-quinta) | 108 · 63,9% | +396 · 469 pts | 0,84 | **83,4 pts** · +0,23 R | 9.006 pts · R\$ 1.801 |
| [Pullback](pullback-na-media) | 303 · 38,0% | +729 · 300 pts | 2,43 | **90,7 pts** · +0,28 R | 27.482 pts · R\$ 5.496 |
| [Rompe 200](rompe-media-200) | 205 · 39,0% | +793 · 429 pts | 1,85 | **48,1 pts** · +0,17 R | 9.858 pts · R\$ 1.972 |
| [Bollinger](rompimento-da-bollinger) | 259 · 36,7% | +622 · 195 pts | 3,18 | **104,5 pts** · +0,60 R | 27.064 pts · R\$ 5.413 |
| [Tendência](tendencia-forte-do-dia) | 1754 · 34,5% | +721 · 317 pts | 2,28 | **41,9 pts** · +0,13 R | 73.564 pts · R\$ 14.713 |
| [Onda](vai-na-onda) | 1185 · 35,4% | +882 · 429 pts | 2,05 | **35,4 pts** · +0,11 R | 41.939 pts · R\$ 8.388 |
| Todos os 16 juntos | 14141 · 28,2% | +808 · 259 pts | 3,12 | **41,7 pts** · +0,16 R | 589.165 pts · R\$ 117.833 |

*Taxa de acerto = operações no lucro ÷ total. Payoff = ganho médio ÷ perda média. **Expectativa matemática** = quanto a operação rende em média (acerto × ganho médio − erro × perda média); em **R** é o mesmo em múltiplos do risco (stop + custo), que é o que o tamanho de 1% usa. Lucro total em pontos, já com o custo de 15 pontos por operação.*

## Qual combinação escolher

Não existe uma única "melhor": depende de quanto de queda você aguenta. As três de cima respondem a três perguntas diferentes:

| Perfil | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | 1 contrato: ao ano · queda | Sharpe treino → teste |
|---|---|---|---|---|---|
| ⭐ **Equilíbrio** (recomendada) | IFR + Pullback + Bollinger | **+161% · −17,1%** | +52% · −5,1% | +32% · −2,6% | 2,34 → 2,12 |
| 📈 Maior retorno | Tendência | **+72% · −23,6%** | +72% · −23,6% | +48% · −16,1% | 1,58 → 1,20 |
| 🛡️ Menor queda | Pôr do sol + Pullback + Bollinger | **+89% · −9,1%** | +35% · −2,5% | +23% · −1,6% | 2,30 → 1,89 |

*R\$ 10 mil viraram, na recomendada: R\$ 38.885 com 1 contrato por R\$ 10 mil · R\$ 78.636 com 1% dividido entre os setups · **R\$ 1.149.641 arriscando 1% por setup**. Nomes: Tendência = Tendência Forte do Dia · ADX = ADX da Manhã · IFR = IFR de Tendência · Pullback = Pullback na Média · VWAP = Bandas de VWAP · Donchian = Donchian com Médias · BB explosão = Explosão da Bollinger · Extremos sem = Extremos da Semana (virada de mão) · GPS médias = GPS de Médias · MACD = MACD na Tendência · Pôr do sol = Pôr do Sol (17h45) · 1ª vela 80 = Primeira Vela de 80 Minutos · Quinta = Primeira Vela de Quinta · Rompe 200 = Rompimento da Média de 200 · Bollinger = Rompimento da Bollinger · Onda = Vai na Onda.*


**1% × 2% do capital: o que muda**

| Risco total | Por operação | Ao ano | Pior queda | Dias no vermelho | Pior 60 dias | R\$ 10.000 viraram |
|---|---|---|---|---|---|---|
| **1% (recomendado)** | 0,33% | +52% | −5% | 43 d | +1% | R\$ 78.636 |
| 2% (o dobro) | 0,67% | +100% | −11% | 55 d | −2% | R\$ 313.074 |

*Dobrar o risco quase dobra o retorno e quase dobra a queda, mas **não encurta o tempo no vermelho** — esse depende da sequência de acertos e erros, não do tamanho. A validação andando para frente (recalibrando de 6 em 6 meses só com o passado) indicou que esta carteira suporta algo perto de 2%, mas com apenas 7 semestres fora da amostra e nenhum estouro observado a amostra é pequena: zero estouros em 3,5 anos é compatível com uma chance real bem maior que zero. Por isso a recomendação segue 1%.*
**Por que a recomendada é IFR de Tendência + Pullback na Média + Rompimento da Bollinger:** ela fica entre as melhores nos três critérios de SOBREVIVÊNCIA ao mesmo tempo, medidos **só no treino** (até 2023) e **sem o CDI na conta** (o CDI preenche as quedas pequenas e esconde a diferença entre as carteiras) — rende 7,0× ao ano para cada 1% de pior queda, passou no máximo 34 dias seguidos no vermelho e a pior janela de 60 dias foi de −1%. Fora do treino ela entregou +53% ao ano (Sharpe 2,12), com 1% dividido. O critério é de sequência, não de oscilação: o que quebra uma conta não é um dia ruim, é uma sequência ruim — e o Sharpe não distingue as duas coisas. A correlação média entre os setups dela é 0,01: eles ganham e perdem em momentos diferentes, e é isso que segura a queda. Com ADX da Manhã, Bandas de VWAP, Donchian com Médias, Explosão da Bollinger, Extremos da Semana (virada de mão), GPS de Médias, MACD na Tendência, Pôr do Sol (17h45), Primeira Vela de 80 Minutos, Primeira Vela de Quinta, Rompimento da Média de 200, Tendência Forte do Dia, Vai na Onda, a nota de equilíbrio piora (veja a tabela abaixo). A recomendação considera só combinações de **2 ou mais setups**: diversificar protege contra um setup que pare de funcionar, coisa que o backtest não consegue prever. Setups que dependem de um **dia da semana escolhido pelo autor do vídeo** (Primeira Vela de 80 Minutos, Primeira Vela de Quinta) ficam fora dos três perfis até os dados novos confirmarem — eles aparecem na tabela abaixo, mas não são recomendados.

## Todas as combinações

Cada linha divide R\$ 10.000 igualmente entre os setups da combinação (1 contrato para cada R\$ 10.000 dentro de cada setup), com o capital aplicado no CDI. A ordem é a nota média em 3 critérios de **sobrevivência**, medidos **só no treino** (até 2023) e **sem o CDI** na conta de risco: **retorno ÷ pior queda**, **dias seguidos no vermelho** (menos é melhor) e a **pior janela de 60 dias**. O que quebra uma conta não é um dia ruim, é uma sequência ruim — e o Sharpe, que era o critério antigo, não distingue as duas coisas.

Das **6.884** combinações possíveis. a tabela mostra as **30 melhores**.

| # | Combinação | **⭐ 1% por setup: ao ano · queda** | ⭐ 1% dividido: ao ano · queda | Sobrevivência no treino: ret÷queda · dias no vermelho · pior 60 d | Pior ano · correlação |
|---|---|---|---|---|---|
| 1 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+173% · −17,1%** | +43% · −3,5% | 7,2 · 34 d · −0,8% | +20% · −0,01 |
| 2 | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN ⭐ | **+161% · −17,1%** | +52% · −5,1% | 7,0 · 34 d · −1,4% | +22% · 0,01 |
| 3 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN ⚠️ | **+189% · −21,4%** | +38% · −3,0% | 6,1 · 34 d · −0,9% | +18% · 0,06 |
| 4 | Extremos sem ·EXT + IFR ·TEN + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN | **+314% · −29,2%** | +52% · −5,7% | 5,9 · 35 d · −0,3% | +23% · 0,17 |
| 5 | IFR ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+175% · −21,4%** | +43% · −4,5% | 5,9 · 34 d · −0,9% | +19% · 0,12 |
| 6 | Extremos sem ·EXT + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+233% · −29,3%** | +45% · −5,7% | 5,9 · 35 d · −0,9% | +22% · 0,05 |
| 7 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+191% · −21,5%** | +38% · −3,2% | 5,7 · 34 d · −1,1% | +19% · 0,04 |
| 8 | IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+190% · −17,3%** | +38% · −2,5% | 7,0 · 39 d · −0,9% | +20% · −0,01 |
| 9 | IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+226% · −25,8%** | +43% · −4,1% | 6,1 · 37 d · −1,1% | +23% · 0,06 |
| 10 | GPS médias ·TEN + IFR ·TEN + MACD ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+230% · −32,6%** | +46% · −6,1% | 6,5 · 37 d · −1,5% | +23% · 0,06 |
| 11 | IFR ·TEN + 1ª vela 80 ·VEL + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+248% · −20,5%** | +44% · −3,3% | 6,7 · 40 d · −1,0% | +23% · −0,01 |
| 12 | IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+176% · −17,2%** | +43% · −3,5% | 6,7 · 39 d · −1,3% | +21% · −0,04 |
| 13 | IFR ·TEN + Pôr do sol ·POR + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN ⚠️ | **+251% · −20,5%** | +45% · −3,2% | 6,3 · 40 d · −1,0% | +22% · 0,01 |
| 14 | Extremos sem ·EXT + IFR ·TEN + Quinta ·QUI + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+277% · −28,8%** | +49% · −5,0% | 5,4 · 35 d · −0,9% | +24% · 0,17 |
| 15 | Extremos sem ·EXT + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Bollinger ·TEN ⚠️ | **+184% · −24,5%** | +38% · −4,2% | 5,5 · 37 d · −0,8% | +17% · 0,07 |
| 16 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Bollinger ·TEN | **+211% · −25,7%** | +49% · −5,6% | 5,9 · 37 d · −1,6% | +24% · 0,13 |
| 17 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+287% · −33,2%** | +49% · −6,0% | 5,6 · 30 d · −1,8% | +21% · 0,06 |
| 18 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+197% · −30,6%** | +42% · −5,2% | 6,1 · 39 d · −1,5% | +18% · 0,09 |
| 19 | IFR ·TEN + MACD ·TEN + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | **+227% · −29,7%** | +43% · −5,2% | 5,2 · 34 d · −0,9% | +22% · 0,15 |
| 20 | GPS médias ·TEN + IFR ·TEN + Quinta ·QUI + Pullback ·PUL ⚠️ | **+184% · −28,0%** | +47% · −5,6% | 6,9 · 39 d · −1,8% | +20% · 0,00 |
| 21 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Pullback ·PUL ⚠️ | **+200% · −24,7%** | +42% · −4,0% | 6,5 · 39 d · −1,8% | +20% · −0,02 |
| 22 | Extremos sem ·EXT + IFR ·TEN + MACD ·TEN + Pullback ·PUL + Tendência ·TEN | **+266% · −33,7%** | +50% · −7,0% | 5,2 · 35 d · −0,5% | +26% · 0,20 |
| 23 | IFR ·TEN + MACD ·TEN + Pôr do sol ·POR + Pullback ·PUL + Bollinger ·TEN | **+229% · −25,8%** | +43% · −4,1% | 5,8 · 39 d · −1,4% | +22% · 0,05 |
| 24 | Extremos sem ·EXT + IFR ·TEN + Pôr do sol ·POR + Quinta ·QUI + Tendência ·TEN ⚠️ | **+206% · −23,6%** | +42% · −4,3% | 5,1 · 35 d · −0,8% | +22% · 0,05 |
| 25 | Extremos sem ·EXT + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+213% · −25,9%** | +42% · −5,2% | 5,5 · 41 d · −0,6% | +21% · 0,07 |
| 26 | Extremos sem ·EXT + IFR ·TEN + Bollinger ·TEN + Tendência ·TEN | **+260% · −28,7%** | +57% · −6,5% | 5,2 · 35 d · −1,1% | +26% · 0,33 |
| 27 | IFR ·TEN + 1ª vela 80 ·VEL + Pullback ·PUL + Bollinger ·TEN + Tendência ·TEN ⚠️ | **+361% · −35,7%** | +56% · −6,7% | 5,4 · 31 d · −1,8% | +25% · 0,12 |
| 28 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Tendência ·TEN ⚠️ | **+196% · −27,5%** | +48% · −6,1% | 5,5 · 42 d · −0,6% | +20% · 0,01 |
| 29 | GPS médias ·TEN + IFR ·TEN + Pôr do sol ·POR + Pullback ·PUL + Rompe 200 ·ROM | **+200% · −28,5%** | +42% · −5,0% | 5,6 · 39 d · −1,6% | +19% · 0,08 |
| 30 | Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM ⚠️ | **+48% · −19,8%** | +24% · −6,2% | 5,0 · 36 d · −0,5% | +13% · 0,09 |
| | *CDI* | *+13% · 0%* | — | — | — |
| | *Ibovespa comprado* | *+10% · −20,9%* | — | — | — |

**A melhor de cada tamanho** — quanto muda acrescentar mais um setup à carteira:

| Setups | Melhor combinação desse tamanho | 1% dividido: ao ano · queda | Dias no vermelho | Pior 60 dias |
|---|---|---|---|---|
| 1 | IFR ·TEN | +68% · −11,2% | 59 d | −6,9% |
| 2 | Pullback ·PUL + Tendência ·TEN | +53% · −12,0% | 35 d | −1,5% |
| 3 | IFR ·TEN + Pullback ·PUL + Bollinger ·TEN ⭐ | +52% · −5,1% | 34 d | −1,4% |
| 4 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Bollinger ·TEN | +43% · −3,5% | 34 d | −0,8% |
| 5 | IFR ·TEN + Quinta ·QUI + Pullback ·PUL + Rompe 200 ·ROM + Bollinger ·TEN | +38% · −3,0% | 34 d | −0,9% |

**As 6.884 combinações completas** ficam fora da página. numa planilha: [**planilha (.xlsx)**](setups/combinacoes.xlsx) (1.240 KB). Lá os números são numéricos de verdade, então dá para ordenar e filtrar por qualquer coluna — coisa que a lista na página não permitia. Ela saiu daqui porque deixava a página pesada demais para abrir.

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
| **·POR** | Pôr do sol | — |
| **·ROM** | Rompe 200 | — |
| **·OND** | Onda | — |

*Dois setups caem na mesma família quando a correlação mensal entre eles passa de 0,45 (ligação por vizinhança: se A anda com B e B anda com C, os três ficam juntos). A sigla vem do setup com mais operações da família. **⚠️ família com mais de um setup = uma aposta só, não várias:** operar dois deles com 1% cada arrisca perto de 2% na mesma ideia, e eles tendem a entrar no mesmo lado nos mesmos dias. As famílias são recalculadas a cada geração — se a correlação mudar, os grupos mudam.*

> [!example]- Quantas vezes operaram no mesmo dia (clique para abrir)
> - **ADX** e **VWAP**: 64% dos dias em que pelo menos um deles operou
> - **ADX** e **Donchian**: 68% dos dias em que pelo menos um deles operou
> - **ADX** e **BB explosão**: 65% dos dias em que pelo menos um deles operou
> - **ADX** e **Extremos sem**: 29% dos dias em que pelo menos um deles operou
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
> - **Donchian** e **GPS médias**: 68% dos dias em que pelo menos um deles operou
> - **Donchian** e **IFR**: 50% dos dias em que pelo menos um deles operou
> - **Donchian** e **MACD**: 62% dos dias em que pelo menos um deles operou
> - **Donchian** e **Pôr do sol**: 45% dos dias em que pelo menos um deles operou
> - **Donchian** e **1ª vela 80**: 36% dos dias em que pelo menos um deles operou
> - **Donchian** e **Quinta**: 8% dos dias em que pelo menos um deles operou
> - **Donchian** e **Pullback**: 24% dos dias em que pelo menos um deles operou
> - **Donchian** e **Rompe 200**: 16% dos dias em que pelo menos um deles operou
> - **Donchian** e **Bollinger**: 22% dos dias em que pelo menos um deles operou
> - **Donchian** e **Tendência**: 80% dos dias em que pelo menos um deles operou
> - **Donchian** e **Onda**: 66% dos dias em que pelo menos um deles operou
> - **BB explosão** e **Extremos sem**: 30% dos dias em que pelo menos um deles operou
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
> - **BB explosão** e **Onda**: 60% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **GPS médias**: 27% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **IFR**: 27% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **MACD**: 31% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Pôr do sol**: 25% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **1ª vela 80**: 19% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Quinta**: 7% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Pullback**: 18% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Rompe 200**: 6% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Bollinger**: 17% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Tendência**: 33% dos dias em que pelo menos um deles operou
> - **Extremos sem** e **Onda**: 29% dos dias em que pelo menos um deles operou
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
> - **IFR** e **Onda**: 45% dos dias em que pelo menos um deles operou
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
> - **1ª vela 80** e **Onda**: 37% dos dias em que pelo menos um deles operou
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

*Com 1 contrato por R\$ 10 mil (capital dividido). Todos = os 16 setups juntos · Recomendada = IFR + Pullback + Bollinger · Rec. 1% = a recomendada arriscando 1% por operação.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **⭐ Rec. 1%** | +3,6% | +258,9% | +97,7% | +105,5% | +279,5% | +100,6% | **+11396,4%** (+160,7% · R\$ 1.149.641) |
| **⭐ Recomendada** | +2,6% | +38,6% | +23,8% | +21,5% | +38,7% | +31,0% | **+288,8%** (+31,5% · R\$ 38.885) |
| **ADX** | +2,1% | +29,8% | +12,0% | +36,5% | +65,9% | +44,4% | **+385,3%** (+37,6% · R\$ 48.526) |
| **VWAP** | +0,6% | +37,6% | +4,1% | +10,4% | +42,4% | +11,6% | **+152,7%** (+20,6% · R\$ 25.270) |
| **Donchian** | −6,9% | +74,2% | +29,5% | +17,2% | +46,7% | +54,7% | **+458,9%** (+41,5% · R\$ 55.893) |
| **BB explosão** | −5,6% | +20,6% | +36,6% | +3,3% | +41,4% | +37,8% | **+213,0%** (+25,9% · R\$ 31.296) |
| **Extremos sem** | +6,1% | +28,5% | +5,7% | +29,5% | +26,8% | +32,8% | **+214,0%** (+26,0% · R\$ 31.401) |
| **GPS médias** | −0,6% | +40,1% | +54,4% | +22,4% | +15,5% | +52,2% | **+362,4%** (+36,2% · R\$ 46.242) |
| **IFR** | −3,6% | +51,5% | +28,3% | +30,7% | +55,3% | +54,3% | **+487,0%** (+43,0% · R\$ 58.699) |
| **MACD** | −2,9% | +20,7% | +25,7% | +36,6% | +40,1% | +34,5% | **+279,1%** (+30,9% · R\$ 37.908) |
| **Pôr do sol** | +3,9% | +16,5% | +11,6% | +21,5% | +17,1% | +11,2% | **+113,6%** (+16,6% · R\$ 21.361) |
| **1ª vela 80** | +7,7% | +9,1% | +27,7% | +37,8% | +46,7% | +31,3% | **+298,3%** (+32,2% · R\$ 39.829) |
| **Quinta** | +4,0% | +18,1% | +15,3% | +16,4% | +21,9% | +7,7% | **+116,5%** (+16,9% · R\$ 21.646) |
| **Pullback** | +7,5% | +47,1% | +19,7% | +10,8% | +21,2% | +21,1% | **+208,0%** (+25,5% · R\$ 30.798) |
| **Rompe 200** | −4,6% | +22,0% | +26,7% | +10,6% | +34,6% | −1,3% | **+116,6%** (+16,9% · R\$ 21.661) |
| **Bollinger** | +4,0% | +18,2% | +22,8% | +23,1% | +40,2% | +18,4% | **+208,4%** (+25,5% · R\$ 30.836) |
| **Tendência** | −1,7% | +58,4% | +50,3% | +21,6% | +32,2% | +85,9% | **+599,3%** (+48,1% · R\$ 69.931) |
| **Onda** | −3,9% | +5,0% | +26,9% | +62,1% | +22,7% | +44,2% | **+267,5%** (+30,1% · R\$ 36.747) |
| **Todos** | −0,7% | +38,0% | +17,5% | +19,2% | +45,1% | +37,4% | **+282,8%** (+31,1% · R\$ 38.282) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *1ª vela 80* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* | *⭐ Rec. 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano da carteira](setups/img/carteira_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ⭐ Rec. 1% | ⭐ Recomendada | Todos | CDI | Ibovespa |
> |---|---|---|---|---|---|
> | nov/2021 | +1,8% | +1,2% | −0,8% | +0,6% | −3,4% |
> | dez/2021 | +1,8% | +1,4% | +0,1% | +0,7% | +2,9% |
> | jan/2022 | +27,2% | +4,6% | +2,4% | +0,7% | +7,0% |
> | fev/2022 | −3,3% | +0,2% | −2,1% | +0,8% | +0,9% |
> | mar/2022 | +24,7% | +4,6% | +7,2% | +0,9% | +6,1% |
> | abr/2022 | +10,5% | +2,0% | +2,0% | +0,8% | −10,1% |
> | mai/2022 | +2,8% | +1,5% | +0,8% | +1,0% | +3,2% |
> | jun/2022 | +9,8% | +2,7% | +0,4% | +1,0% | −11,5% |
> | jul/2022 | +2,6% | +1,4% | −2,9% | +1,0% | +4,7% |
> | ago/2022 | +39,6% | +6,6% | +12,0% | +1,2% | +6,2% |
> | set/2022 | −3,7% | +0,6% | +2,4% | +1,1% | +0,5% |
> | out/2022 | +17,3% | +4,1% | +6,3% | +1,0% | +5,5% |
> | nov/2022 | +10,1% | +3,6% | +0,9% | +1,0% | −3,1% |
> | dez/2022 | +5,2% | +1,5% | +4,2% | +1,1% | −2,4% |
> | jan/2023 | +17,6% | +3,7% | +3,7% | +1,1% | +3,4% |
> | fev/2023 | −0,1% | +0,5% | +3,1% | +0,9% | −7,5% |
> | mar/2023 | −0,2% | +1,2% | −0,3% | +1,2% | −2,9% |
> | abr/2023 | −1,7% | +0,6% | +2,1% | +0,9% | +2,5% |
> | mai/2023 | +4,3% | +2,0% | +3,9% | +1,1% | +3,7% |
> | jun/2023 | +12,1% | +2,3% | +0,8% | +1,1% | +9,0% |
> | jul/2023 | +11,8% | +2,7% | +0,0% | +1,1% | +3,3% |
> | ago/2023 | +6,8% | +2,2% | +0,4% | +1,1% | −5,1% |
> | set/2023 | +8,1% | +1,6% | −0,6% | +1,0% | +0,7% |
> | out/2023 | +9,2% | +2,4% | −0,1% | +1,0% | −2,9% |
> | nov/2023 | +8,7% | +2,1% | +4,3% | +0,9% | +12,5% |
> | dez/2023 | −4,1% | +0,3% | −0,9% | +0,9% | +5,4% |
> | jan/2024 | +6,5% | +1,4% | +3,7% | +1,0% | −4,8% |
> | fev/2024 | +10,3% | +2,3% | +5,2% | +0,8% | +1,0% |
> | mar/2024 | +1,9% | +1,2% | −0,5% | +0,8% | −0,7% |
> | abr/2024 | +11,3% | +2,6% | −0,9% | +0,9% | −1,7% |
> | mai/2024 | −5,6% | −0,3% | −0,5% | +0,8% | −3,0% |
> | jun/2024 | +6,4% | +1,7% | +0,4% | +0,8% | +1,5% |
> | jul/2024 | +5,9% | +1,7% | −0,5% | +0,9% | +3,0% |
> | ago/2024 | +9,6% | +1,8% | +4,5% | +0,9% | +6,5% |
> | set/2024 | +17,3% | +3,4% | +1,4% | +0,8% | −3,1% |
> | out/2024 | +0,9% | +0,7% | −0,8% | +0,9% | −1,6% |
> | nov/2024 | +4,8% | +1,5% | −0,6% | +0,8% | −3,1% |
> | dez/2024 | +6,7% | +1,8% | +6,6% | +0,8% | −4,3% |
> | jan/2025 | +15,3% | +3,2% | +3,6% | +1,0% | +4,9% |
> | fev/2025 | +17,5% | +3,8% | +5,1% | +1,0% | −2,6% |
> | mar/2025 | +10,7% | +1,7% | +9,3% | +1,0% | +6,1% |
> | abr/2025 | −5,1% | −0,1% | −3,9% | +1,1% | +3,7% |
> | mai/2025 | +23,6% | +4,5% | +7,2% | +1,1% | +1,5% |
> | jun/2025 | +7,7% | +2,4% | +1,4% | +1,1% | +1,3% |
> | jul/2025 | +6,2% | +2,0% | +1,0% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +7,4% | +7,8% | +1,2% | +6,3% |
> | set/2025 | −5,3% | −0,2% | −0,2% | +1,2% | +3,4% |
> | out/2025 | +12,3% | +3,0% | +2,0% | +1,3% | +2,3% |
> | nov/2025 | +10,1% | +2,7% | +6,6% | +1,1% | +6,4% |
> | dez/2025 | +11,6% | +3,1% | −1,3% | +1,1% | +1,3% |
> | jan/2026 | +14,1% | +3,5% | +6,0% | +1,2% | +12,6% |
> | fev/2026 | −1,9% | −0,1% | −0,6% | +1,0% | +4,1% |
> | mar/2026 | +3,5% | +2,4% | +3,9% | +1,2% | −0,7% |
> | abr/2026 | +24,1% | +6,3% | +11,1% | +1,1% | −0,1% |
> | mai/2026 | +1,6% | +1,6% | +3,3% | +1,1% | −7,2% |
> | jun/2026 | −5,4% | −0,1% | +2,3% | +1,1% | −1,0% |
> | jul/2026 | +8,5% | +3,1% | +5,3% | +1,2% | +3,5% |
> | ago/2026 | +14,4% | +4,4% | +6,5% | +1,1% | −0,3% |
> | set/2026 | +3,4% | +2,2% | −0,9% | +1,1% | +5,0% |
> | out/2026 | +13,2% | +4,2% | −3,8% | +1,0% | −9,9% |
> | **Acumulado** | **+11396,4%** | **+288,8%** | **+282,8%** | **+81,6%** | **+59,1%** |
>
> *Cada setup tem o mês a mês dele na própria página — aqui ficam só as carteiras, para a tabela caber na tela.*

### Ano a ano arriscando 1% por operação

Os mesmos setups e carteiras, mas com o tamanho sugerido: cada operação usa os contratos que fazem o stop (mais o custo) custar **1% do capital do momento** — a posição diminui nas fases ruins e cresce nas boas. Na carteira, cada setup arrisca 1% do capital total.

*Recomendada = IFR + Pullback + Bollinger. **÷** = 1% dividido entre os setups da carteira (o mesmo risco total de um setup sozinho — compare com as colunas de cada setup). **Todos ⚠️** = os 16 setups com 1% cada: até 16% de risco aberto ao mesmo tempo, por isso rende e cai muito mais.*

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **⭐ Recomendada** | +3,6% | +258,9% | +97,7% | +105,5% | +279,5% | +100,6% | **+11396,4%** (+160,7% · R\$ 1.149.641) |
| **⭐ Recomendada ÷** | +2,2% | +68,9% | +37,8% | +37,8% | +74,2% | +37,7% | **+686,4%** (+51,7% · R\$ 78.636) |
| **ADX** | +2,0% | +51,0% | +7,4% | +71,5% | +161,6% | +62,3% | **+1106,0%** (+65,3% · R\$ 120.603) |
| **VWAP** | +0,3% | +41,5% | +1,5% | +10,3% | +61,5% | +18,9% | **+205,1%** (+25,3% · R\$ 30.511) |
| **Donchian** | −14,9% | +173,6% | +51,8% | +25,9% | +129,6% | +92,8% | **+1870,0%** (+82,6% · R\$ 197.004) |
| **BB explosão** | −12,2% | +24,2% | +66,0% | −10,9% | +100,5% | +56,9% | **+407,0%** (+38,8% · R\$ 50.700) |
| **Extremos sem** | +5,5% | +42,6% | +0,9% | +39,3% | +35,4% | +33,9% | **+283,5%** (+31,2% · R\$ 38.348) |
| **GPS médias** | −4,2% | +68,9% | +118,4% | +46,2% | +29,3% | +88,6% | **+1160,2%** (+66,8% · R\$ 126.024) |
| **IFR** | −9,3% | +108,3% | +45,0% | +48,1% | +88,9% | +69,0% | **+1194,2%** (+67,7% · R\$ 129.415) |
| **MACD** | −2,8% | +27,8% | +30,3% | +51,6% | +60,7% | +36,3% | **+437,5%** (+40,4% · R\$ 53.747) |
| **Pôr do sol** | +4,7% | +21,1% | +10,0% | +33,5% | +18,5% | +11,1% | **+145,0%** (+19,8% · R\$ 24.505) |
| **1ª vela 80** | +10,2% | +7,2% | +36,6% | +73,1% | +77,3% | +37,3% | **+579,7%** (+47,3% · R\$ 67.969) |
| **Quinta** | +4,2% | +19,1% | +16,4% | +19,2% | +23,5% | +9,0% | **+131,6%** (+18,5% · R\$ 23.158) |
| **Pullback** | +10,2% | +70,5% | +24,7% | +9,6% | +29,0% | +20,5% | **+299,2%** (+32,2% · R\$ 39.919) |
| **Rompe 200** | −4,1% | +23,6% | +27,6% | +11,5% | +40,2% | +5,5% | **+149,4%** (+20,3% · R\$ 24.941) |
| **Bollinger** | +6,4% | +30,1% | +40,6% | +56,8% | +108,7% | +24,6% | **+693,8%** (+51,9% · R\$ 79.379) |
| **Tendência** | −2,9% | +94,7% | +78,7% | +31,5% | +62,2% | +101,9% | **+1354,6%** (+71,7% · R\$ 145.463) |
| **Onda** | −3,7% | +8,2% | +36,6% | +97,1% | +36,3% | +41,3% | **+440,3%** (+40,6% · R\$ 54.029) |
| **Todos ÷** | −3,7% | +65,2% | +26,1% | +26,8% | +97,4% | +55,0% | **+678,3%** (+51,3% · R\$ 77.832) |
| **Todos ⚠️** | −24,4% | +330,4% | +23,0% | +29,2% | +866,8% | +247,7% | **+17292,9%** (+183,4% · R\$ 1.739.292) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *Pullback* | *Todos ⚠️* | *GPS médias* | *⭐ Recomendada* | *Todos ⚠️* | *Todos ⚠️* | *Todos ⚠️* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

> [!example]- Mês a mês arriscando 1% por operação (clique para abrir)
> | Mês | ⭐ Recomendada | ⭐ Recomendada ÷ | Todos ÷ | CDI | Ibovespa |
> |---|---|---|---|---|---|
> | nov/2021 | +1,8% | +1,1% | −1,4% | +0,6% | −3,4% |
> | dez/2021 | +1,8% | +1,1% | −2,4% | +0,7% | +2,9% |
> | jan/2022 | +27,2% | +9,1% | +4,7% | +0,7% | +7,0% |
> | fev/2022 | −3,3% | −0,6% | −5,4% | +0,8% | +0,9% |
> | mar/2022 | +24,7% | +8,5% | +10,9% | +0,9% | +6,1% |
> | abr/2022 | +10,5% | +4,1% | +3,0% | +0,8% | −10,1% |
> | mai/2022 | +2,8% | +1,7% | +1,0% | +1,0% | +3,2% |
> | jun/2022 | +9,8% | +4,0% | −0,7% | +1,0% | −11,5% |
> | jul/2022 | +2,6% | +1,8% | −7,1% | +1,0% | +4,7% |
> | ago/2022 | +39,6% | +13,0% | +25,6% | +1,2% | +6,2% |
> | set/2022 | −3,7% | −0,5% | +3,6% | +1,1% | +0,5% |
> | out/2022 | +17,3% | +6,5% | +9,9% | +1,0% | +5,5% |
> | nov/2022 | +10,1% | +4,1% | +1,3% | +1,0% | −3,1% |
> | dez/2022 | +5,2% | +2,6% | +8,2% | +1,1% | −2,4% |
> | jan/2023 | +17,6% | +6,5% | +4,5% | +1,1% | +3,4% |
> | fev/2023 | −0,1% | +0,6% | +7,0% | +0,9% | −7,5% |
> | mar/2023 | −0,2% | +0,8% | −1,6% | +1,2% | −2,9% |
> | abr/2023 | −1,7% | +0,2% | +5,1% | +0,9% | +2,5% |
> | mai/2023 | +4,3% | +2,4% | +8,0% | +1,1% | +3,7% |
> | jun/2023 | +12,1% | +4,8% | +0,3% | +1,1% | +9,0% |
> | jul/2023 | +11,8% | +4,6% | −0,9% | +1,1% | +3,3% |
> | ago/2023 | +6,8% | +3,1% | +0,2% | +1,1% | −5,1% |
> | set/2023 | +8,1% | +3,4% | −2,5% | +1,0% | +0,7% |
> | out/2023 | +9,2% | +3,7% | −1,6% | +1,0% | −2,9% |
> | nov/2023 | +8,7% | +3,6% | +7,8% | +0,9% | +12,5% |
> | dez/2023 | −4,1% | −0,7% | −2,0% | +0,9% | +5,4% |
> | jan/2024 | +6,5% | +2,9% | +5,9% | +1,0% | −4,8% |
> | fev/2024 | +10,3% | +4,0% | +10,0% | +0,8% | +1,0% |
> | mar/2024 | +1,9% | +1,2% | −1,9% | +0,8% | −0,7% |
> | abr/2024 | +11,3% | +4,4% | −2,3% | +0,9% | −1,7% |
> | mai/2024 | −5,6% | −1,3% | −3,2% | +0,8% | −3,0% |
> | jun/2024 | +6,4% | +2,7% | −0,6% | +0,8% | +1,5% |
> | jul/2024 | +5,9% | +2,6% | −1,2% | +0,9% | +3,0% |
> | ago/2024 | +9,6% | +3,8% | +8,1% | +0,9% | +6,5% |
> | set/2024 | +17,3% | +6,2% | +1,7% | +0,8% | −3,1% |
> | out/2024 | +0,9% | +1,0% | −1,9% | +0,9% | −1,6% |
> | nov/2024 | +4,8% | +2,3% | −1,1% | +0,8% | −3,1% |
> | dez/2024 | +6,7% | +2,8% | +12,1% | +0,8% | −4,3% |
> | jan/2025 | +15,3% | +5,9% | +8,5% | +1,0% | +4,9% |
> | fev/2025 | +17,5% | +6,5% | +8,7% | +1,0% | −2,6% |
> | mar/2025 | +10,7% | +4,3% | +16,4% | +1,0% | +6,1% |
> | abr/2025 | −5,1% | −1,0% | −4,7% | +1,1% | +3,7% |
> | mai/2025 | +23,6% | +8,4% | +14,6% | +1,1% | +1,5% |
> | jun/2025 | +7,7% | +3,4% | +2,1% | +1,1% | +1,3% |
> | jul/2025 | +6,2% | +3,0% | +2,0% | +1,3% | −4,2% |
> | ago/2025 | +44,6% | +14,4% | +12,2% | +1,2% | +6,3% |
> | set/2025 | −5,3% | −1,0% | −0,3% | +1,2% | +3,4% |
> | out/2025 | +12,3% | +4,9% | +2,7% | +1,3% | +2,3% |
> | nov/2025 | +10,1% | +4,1% | +12,9% | +1,1% | +6,4% |
> | dez/2025 | +11,6% | +4,7% | −2,4% | +1,1% | +1,3% |
> | jan/2026 | +14,1% | +5,6% | +8,9% | +1,2% | +12,6% |
> | fev/2026 | −1,9% | +0,1% | −2,6% | +1,0% | +4,1% |
> | mar/2026 | +3,5% | +2,1% | +3,5% | +1,2% | −0,7% |
> | abr/2026 | +24,1% | +8,5% | +13,3% | +1,1% | −0,1% |
> | mai/2026 | +1,6% | +1,3% | +3,7% | +1,1% | −7,2% |
> | jun/2026 | −5,4% | −1,0% | +1,5% | +1,1% | −1,0% |
> | jul/2026 | +8,5% | +3,7% | +8,1% | +1,2% | +3,5% |
> | ago/2026 | +14,4% | +5,5% | +7,4% | +1,1% | −0,3% |
> | set/2026 | +3,4% | +2,1% | +2,8% | +1,1% | +5,0% |
> | out/2026 | +13,2% | +5,1% | −0,8% | +1,0% | −9,9% |
> | **Acumulado** | **+11396,4%** | **+686,4%** | **+678,3%** | **+81,6%** | **+59,1%** |
>
> *Cada setup tem o mês a mês dele na própria página.*

## Tamanho de posição

Quanto colocar em cada operação da combinação recomendada (**IFR de Tendência + Pullback na Média + Rompimento da Bollinger**). O que manda é o **risco por operação**: quanto do capital se perde se o stop for atingido (stop + custo, em R\$). Hoje, com 1 contrato para cada R\$ 10.000 dividido entre os setups, cada operação arrisca só ~0,18% do capital — por isso a queda foi tão pequena. Dá para alavancar, mas **a queda cresce mais rápido que o retorno**, e o Sharpe não muda: alavancar não melhora o setup, só aumenta o tamanho dos ganhos e das perdas.

| Regra | Risco por operação | Ao ano | Pior queda (ordem real) | Queda típica (sorteio) | 1 vez em 20, pior que |
|---|---|---|---|---|---|
| Atual: 1 contrato por R\$ 10 mil (capital dividido) | 0,18% | +32% | −3% | −5% | −7% |
| Risco fixo de 0,5% por operação | 0,50% | +75% | −8% | −12% | −17% |
| **Risco fixo de 1% por operação ⭐ sugerido** | 1,00% | **+161%** | **−17%** | −22% | −32% |
| Risco fixo de 2% por operação | 2,00% | +423% | −33% | −40% | −55% |
| Kelly ¼ | 2,95% | +917% | −44% | −55% | −73% |
| Kelly ½ | 5,90% | +2935% | −72% | −83% | −95% |
| Kelly cheio | 11,81% | +1785% | −96% | −99% | −100% |
| Larry Williams 2,5% | 1,66% | +309% | −30% | −36% | −50% |
| Larry Williams 5% | 3,32% | +911% | −53% | −60% | −77% |
| Larry Williams 10% | 6,64% | +2312% | −81% | −88% | −97% |

*Capital no CDI, 15 pts de custo, sem imposto, contratos fracionários (com mais capital eles viram inteiros). **Sorteio:** a ordem das operações foi embaralhada 2.000 vezes — a queda de verdade depende da sorte na sequência, e a ordem real foi das mais favoráveis. Planeje pela queda do sorteio, não pela real.*

![Curva da combinação recomendada em cada tamanho de posição](setups/img/carteira_risco.png)

### Por que não usar o Kelly cheio ou o Larry Williams de 1987

- **Kelly padrão:** f = acerto − (1 − acerto) ÷ payoff = a fração do capital a arriscar por operação que, em teoria, faz o capital crescer mais rápido. Medido no treino: IFR de Tendência 7,7% · Pullback na Média 19,0% · Rompimento da Bollinger 15,7%. O problema: o Kelly calculado no backtest é **otimista** (quanto do acerto e do payoff vai se repetir?), e acima do ponto ótimo o retorno cai e a queda explode. Por isso quem usa costuma ficar em ¼ ou ½ Kelly — e mesmo assim as quedas são grandes.
- **Larry Williams:** no campeonato de 1987 ele usou o Kelly como fração do capital ÷ **margem** por contrato — a conta foi de US\$ 10 mil a ~US\$ 2,1 milhões, caiu para ~US\$ 700 mil e terminou o ano em ~US\$ 1,1 milhão. Depois ele passou a usar **contratos = capital × risco% ÷ maior perda já vista por contrato**, com ~5% (cauteloso), 10–12% (moderado) e 15–18% (agressivo). Esses percentuais eram para poucas operações por ano; estes setups operam muitas vezes por mês e a maior perda deles é ~1,5 vezes o stop típico, então **Larry com 2,5% ≈ arriscar 1,7% por operação** — perto do tamanho sugerido.

### Calculadora de contratos (risco de 1% por operação)

**contratos = capital × 1% ÷ ((stop em pts + 15) × R\$ 0,20)** — arredonde para baixo. Calcule para cada setup, a cada operação, com o capital do momento (assim a posição cresce quando ganha e diminui quando perde).

| Setup | Stop hoje · risco por contrato | R\$ 10.000 | R\$ 50.000 | R\$ 100.000 | R\$ 200.000 |
|---|---|---|---|---|---|
| ADX da Manhã | 255 pts · R\$ 54 | 1,8 | 9,2 | 18,5 | 37,0 |
| Bandas de VWAP | 892 pts · R\$ 181 | 0,6 | 2,8 | 5,5 | 11,0 |
| Donchian com Médias | 446 pts · R\$ 92 | 1,1 | 5,4 | 10,8 | 21,7 |
| Explosão da Bollinger | 446 pts · R\$ 92 | 1,1 | 5,4 | 10,8 | 21,7 |
| Extremos da Semana (virada de mão) | 892 pts · R\$ 181 | 0,6 | 2,8 | 5,5 | 11,0 |
| GPS de Médias | 446 pts · R\$ 92 | 1,1 | 5,4 | 10,8 | 21,7 |
| IFR de Tendência ⭐ | 341 pts · R\$ 71 | 1,4 | 7,0 | 14,1 | 28,1 |
| MACD na Tendência | 892 pts · R\$ 181 | 0,6 | 2,8 | 5,5 | 11,0 |
| Pôr do Sol (17h45) | 669 pts · R\$ 137 | 0,7 | 3,7 | 7,3 | 14,6 |
| Primeira Vela de 80 Minutos | 668 pts · R\$ 137 | 0,7 | 3,7 | 7,3 | 14,6 |
| Primeira Vela de Quinta | 892 pts · R\$ 181 | 0,6 | 2,8 | 5,5 | 11,0 |
| Pullback na Média ⭐ | 650 pts · R\$ 133 | 0,8 | 3,8 | 7,5 | 15,0 |
| Rompimento da Média de 200 | 892 pts · R\$ 181 | 0,6 | 2,8 | 5,5 | 11,0 |
| Rompimento da Bollinger ⭐ | 374 pts · R\$ 78 | 1,3 | 6,4 | 12,8 | 25,7 |
| Tendência Forte do Dia | 650 pts · R\$ 133 | 0,8 | 3,8 | 7,5 | 15,0 |
| Vai na Onda | 892 pts · R\$ 181 | 0,6 | 2,8 | 5,5 | 11,0 |

*Stops calculados com o ATR (4.335 pts) e o preço (170.320) de hoje — mudam todo dia. ⭐ = setups da combinação recomendada. Com risco de 0,5%, use a metade. Confira a margem de day trade da sua corretora para o número de contratos.*

## Como a carteira é montada

- Cada setup entra com a **versão principal** da sua página.
- O capital é **dividido igualmente** entre os setups da combinação, com 1 contrato para cada R\$ 10.000 dentro de cada setup, e fica aplicado no CDI. O resultado de cada dia é a média dos setups mais o CDI do dia.
- **Risco 1%:** cada setup arrisca 1% do capital total em cada operação (contratos = capital × 1% ÷ (stop + custo) em R\$). Se dois setups estiverem posicionados ao mesmo tempo, o risco aberto é de 2%.
- Custo de 15 pontos por operação, sem imposto. Resultado passado, em backtest.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
