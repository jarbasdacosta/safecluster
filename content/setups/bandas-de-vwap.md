---
title: Bandas de VWAP
date: 2026-10-31
tags: [setup, win]
---

**Quando o preço se afasta da VWAP do dia a favor da média de 200, entra atrás de um alvo longo e protege a operação no primeiro lucro.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · das 10h às 16h

🎬 **Vídeo de origem:** [Arthur 777 – "criei uma VWAP secreta"](https://youtu.be/50zdea2qbsM) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 25.270** na versão ATR 0,21 / 0,62 com o capital no CDI (+21% ao ano · pior queda −30%)
> - **R\$ 23.764** na versão como no vídeo (alvo 1.900, break even 100) com o capital no CDI (+19% ao ano · pior queda −19%)
> - **R\$ 21.423** na versão sem break even com o capital no CDI (+17% ao ano · pior queda −18%)
> - **R\$ 24.813** na versão alvo 1.200 com o capital no CDI (+20% ao ano · pior queda −16%)
> - **R\$ 18.279** na versão alvo 2.000, stop 600 com o capital no CDI (+13% ao ano · pior queda −23%)
> - **R\$ 13.227** na versão bandas de 250 pts com o capital no CDI (+6% ao ano · pior queda −31%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 30.511** na versão ATR 0,21 / 0,62 **arriscando 1% do capital por operação** (+25% ao ano · pior queda −20%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **10 operações** · acerto 0% · **−0,52R por operação** (no teste 2024 →: +0,05R) · líquido −4.627 pts (−R\$ 925 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/bandas-de-vwap_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Direção** | fechamento **acima** da média exponencial de 200 | fechamento **abaixo** da média de 200 |
| **2. Vela** | vela **positiva** | vela **negativa** |
| **3. Banda** | fecha **acima da VWAP do dia + 500 pts** (em ATR aqui) | fecha **abaixo da VWAP do dia − 500 pts** |
| **4. Horário** | só das **10h às 16h** | igual |
| **Entrada** | **a mercado** na abertura da vela seguinte | igual |
| **Alvo · stop** | 1.900 · 400 pts no vídeo → em ATR aqui | igual |
| **Break even** | vela fechando com **100 pts** de lucro move o stop para a entrada | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 0,62** — stop 0,206 ATR · alvo 0,617 ATR (3,0× o stop); hoje ≈ 892 pts de stop e 2.676 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 0,62** (principal) | stop 0,206 ATR · alvo 0,617 ATR (3,0× o stop) | 25% · 3,22 | +10,4 → +15,2 | +20,6% | −30,3% |
| **como no vídeo (alvo 1.900, break even 100)** | stop 400 · alvo 1.900 pts | 23% · 3,51 | −2,8 → +22,3 | +19,1% | −18,7% |
| **sem break even** | stop 400 · alvo 1.900 pts | 36% · 1,83 | −7,5 → +23,6 | +16,6% | −18,1% |
| **alvo 1.200** | stop 400 · alvo 1.200 pts | 24% · 3,32 | +1,8 → +19,0 | +20,1% | −16,5% |
| **alvo 2.000, stop 600** | stop 600 · alvo 2.000 pts | 25% · 2,98 | −5,0 → +9,6 | +13,0% | −23,1% |
| **bandas de 250 pts** | stop 400 · alvo 1.900 pts | 21% · 3,58 | −4,7 → −3,3 | +5,8% | −31,1% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 0,62

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 667 | 894 | 1.561 |
| Operações por mês | 24,7 | 26,3 | 25,6 |
| Taxa de acerto | 23,4% | 26,4% | 25,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 8% / 34% / 20% | 9% / 33% / 23% | 9% / 34% / 21% |
| Stop típico | 391 pts | 379 pts | 386 pts |
| Ganho médio · perda média | +725 · −208 pts | +710 · −234 pts | +716 · −223 pts |
| Payoff (ganho médio ÷ perda média) | 3,49 | 3,03 | 3,22 |
| Fator de lucro (total ganho ÷ total perdido) | 1,07 | 1,09 | 1,08 |
| Resultado médio por operação | +10,4 pts (+25,4 sem custo) | +15,2 pts (+30,2 sem custo) | +13,2 pts (+28,2 sem custo) |
| **Lucro líquido** | **+6.950 pts · R\$ 1.390** | **+13.591 pts · R\$ 2.718** | **+20.541 pts · R\$ 4.108** |
| Pior queda (drawdown) | −11.540 pts · −R\$ 2.308 | −18.482 pts · −R\$ 3.696 | −18.482 pts · −R\$ 3.696 |
| Maior sequência de perdas | 22 seguidas | 17 seguidas | 22 seguidas |
| Compras: acerto · lucro | 26% · +11.546 pts | 26% · +4.785 pts | 26% · +16.332 pts |
| Vendas: acerto · lucro | 22% · −4.597 pts | 27% · +8.806 pts | 24% · +4.209 pts |

### Versão como no vídeo (alvo 1.900, break even 100)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 639 | 854 | 1.493 |
| Operações por mês | 23,7 | 25,1 | 24,5 |
| Taxa de acerto | 22,2% | 24,2% | 23,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 36% / 26% | 4% / 37% / 25% | 3% / 36% / 25% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +713 · −207 pts | +773 · −218 pts | +748 · −213 pts |
| Payoff (ganho médio ÷ perda média) | 3,44 | 3,55 | 3,51 |
| Fator de lucro (total ganho ÷ total perdido) | 0,98 | 1,14 | 1,07 |
| Resultado médio por operação | −2,8 pts (+12,2 sem custo) | +22,3 pts (+37,3 sem custo) | +11,6 pts (+26,6 sem custo) |
| **Lucro líquido** | **−1.785 pts · −R\$ 357** | **+19.075 pts · R\$ 3.815** | **+17.290 pts · R\$ 3.458** |
| Pior queda (drawdown) | −12.080 pts · −R\$ 2.416 | −10.945 pts · −R\$ 2.189 | −17.200 pts · −R\$ 3.440 |
| Maior sequência de perdas | 21 seguidas | 18 seguidas | 21 seguidas |
| Compras: acerto · lucro | 23% · +4.300 pts | 24% · +12.675 pts | 24% · +16.975 pts |
| Vendas: acerto · lucro | 21% · −6.085 pts | 25% · +6.400 pts | 23% · +315 pts |

### Versão sem break even

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 516 | 701 | 1.217 |
| Operações por mês | 19,1 | 20,6 | 20,0 |
| Taxa de acerto | 36,6% | 36,1% | 36,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 55% / 43% | 5% / 53% / 42% | 3% / 54% / 42% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +634 · −379 pts | +726 · −373 pts | +687 · −375 pts |
| Payoff (ganho médio ÷ perda média) | 1,68 | 1,95 | 1,83 |
| Fator de lucro (total ganho ÷ total perdido) | 0,97 | 1,10 | 1,04 |
| Resultado médio por operação | −7,5 pts (+7,5 sem custo) | +23,6 pts (+38,6 sem custo) | +10,4 pts (+25,4 sem custo) |
| **Lucro líquido** | **−3.880 pts · −R\$ 776** | **+16.540 pts · R\$ 3.308** | **+12.660 pts · R\$ 2.532** |
| Pior queda (drawdown) | −13.665 pts · −R\$ 2.733 | −10.565 pts · −R\$ 2.113 | −18.475 pts · −R\$ 3.695 |
| Maior sequência de perdas | 11 seguidas | 12 seguidas | 12 seguidas |
| Compras: acerto · lucro | 40% · +4.610 pts | 35% · +7.445 pts | 37% · +12.055 pts |
| Vendas: acerto · lucro | 34% · −8.490 pts | 37% · +9.095 pts | 36% · +605 pts |

### Versão alvo 1.200

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 695 | 949 | 1.644 |
| Operações por mês | 25,7 | 27,9 | 27,0 |
| Taxa de acerto | 22,3% | 25,9% | 24,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 8% / 35% / 20% | 10% / 37% / 20% | 9% / 36% / 20% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +724 · −206 pts | +712 · −224 pts | +717 · −216 pts |
| Payoff (ganho médio ÷ perda média) | 3,52 | 3,19 | 3,32 |
| Fator de lucro (total ganho ÷ total perdido) | 1,01 | 1,11 | 1,07 |
| Resultado médio por operação | +1,8 pts (+16,8 sem custo) | +19,0 pts (+34,0 sem custo) | +11,7 pts (+26,7 sem custo) |
| **Lucro líquido** | **+1.265 pts · R\$ 253** | **+18.045 pts · R\$ 3.609** | **+19.310 pts · R\$ 3.862** |
| Pior queda (drawdown) | −12.905 pts · −R\$ 2.581 | −9.000 pts · −R\$ 1.800 | −16.400 pts · −R\$ 3.280 |
| Maior sequência de perdas | 21 seguidas | 16 seguidas | 21 seguidas |
| Compras: acerto · lucro | 24% · +6.465 pts | 26% · +10.850 pts | 25% · +17.315 pts |
| Vendas: acerto · lucro | 21% · −5.200 pts | 26% · +7.195 pts | 24% · +1.995 pts |

### Versão alvo 2.000, stop 600

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 587 | 790 | 1.377 |
| Operações por mês | 21,7 | 23,2 | 22,6 |
| Taxa de acerto | 24,5% | 26,2% | 25,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 25% / 32% | 3% / 27% / 31% | 2% / 26% / 32% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +721 · −241 pts | +775 · −262 pts | +753 · −253 pts |
| Payoff (ganho médio ÷ perda média) | 2,99 | 2,96 | 2,98 |
| Fator de lucro (total ganho ÷ total perdido) | 0,97 | 1,05 | 1,02 |
| Resultado médio por operação | −5,0 pts (+10,0 sem custo) | +9,6 pts (+24,6 sem custo) | +3,4 pts (+18,4 sem custo) |
| **Lucro líquido** | **−2.930 pts · −R\$ 586** | **+7.575 pts · R\$ 1.515** | **+4.645 pts · R\$ 929** |
| Pior queda (drawdown) | −11.145 pts · −R\$ 2.229 | −13.795 pts · −R\$ 2.759 | −17.085 pts · −R\$ 3.417 |
| Maior sequência de perdas | 20 seguidas | 16 seguidas | 20 seguidas |
| Compras: acerto · lucro | 25% · +2.580 pts | 26% · +7.010 pts | 25% · +9.590 pts |
| Vendas: acerto · lucro | 24% · −5.510 pts | 27% · +565 pts | 26% · −4.945 pts |

### Versão bandas de 250 pts

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 1.025 | 1.396 | 2.421 |
| Operações por mês | 38,0 | 41,1 | 39,7 |
| Taxa de acerto | 21,2% | 21,6% | 21,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 38% / 23% | 3% / 39% / 22% | 3% / 38% / 22% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +764 · −211 pts | +788 · −222 pts | +778 · −217 pts |
| Payoff (ganho médio ÷ perda média) | 3,62 | 3,55 | 3,58 |
| Fator de lucro (total ganho ÷ total perdido) | 0,97 | 0,98 | 0,98 |
| Resultado médio por operação | −4,7 pts (+10,3 sem custo) | −3,3 pts (+11,7 sem custo) | −3,9 pts (+11,1 sem custo) |
| **Lucro líquido** | **−4.845 pts · −R\$ 969** | **−4.570 pts · −R\$ 914** | **−9.415 pts · −R\$ 1.883** |
| Pior queda (drawdown) | −20.865 pts · −R\$ 4.173 | −17.415 pts · −R\$ 3.483 | −21.060 pts · −R\$ 4.212 |
| Maior sequência de perdas | 25 seguidas | 22 seguidas | 25 seguidas |
| Compras: acerto · lucro | 23% · −485 pts | 22% · −4.115 pts | 22% · −4.600 pts |
| Vendas: acerto · lucro | 20% · −4.360 pts | 21% · −455 pts | 21% · −4.815 pts |

![Pontos acumulados com 1 contrato](setups/img/bandas-de-vwap_pontos.png)

> [!info]- O que significa cada número (clique para abrir)
> - **Taxa de acerto:** de cada 100 operações, quantas deram lucro.
> - **Payoff:** o ganho médio de uma operação boa dividido pela perda média de uma ruim. Payoff 2 = ganha o dobro do que perde.
> - **Fator de lucro:** tudo o que foi ganho dividido por tudo o que foi perdido. Acima de 1 = deu lucro.
> - **Risco/retorno:** o tamanho do alvo comparado com o do stop.
> - **Drawdown (pior queda):** a maior distância entre o ponto mais alto do lucro acumulado e o fundo que veio depois — o pior momento que alguém teria passado seguindo o setup.
> - **Sharpe:** quanto o investimento rendeu acima do CDI para cada unidade de oscilação. Acima de 1 é muito bom.
> - **Treino e teste:** os parâmetros vêm do vídeo; 2024 em diante funciona como prova — se o setup só funcionasse no passado, o teste ia mostrar.

## Comparação com o CDI e com o Ibovespa comprado

A conta usa **R\$ 10.000 de capital para cada contrato** (o número de contratos cresce junto com o capital). Na versão **+ CDI** o capital fica aplicado no CDI / Tesouro Selic (aceito como garantia) e o resultado do setup soma por cima — é a comparação justa. Na **pura**, o capital fica parado. Na linha **risco 1%**, cada operação usa o número de contratos que faz o stop (mais o custo) custar 1% do capital — em geral 3 a 4 vezes mais contratos que 1 por R\$ 10 mil. O Ibovespa já inclui dividendos. Sem imposto.

*Linhas: cada versão com 1 contrato por R\$ 10 mil e o capital no CDI · **risco 1%** = a versão principal arriscando 1% por operação · **pura** = a principal sem o CDI.*

| | R\$ 10.000 viraram · ao ano | Pior queda | Oscilação · Sharpe | Meses acima: CDI · Ibov | Pior · melhor mês |
|---|---|---|---|---|---|
| **ATR 0,21 / 0,62** | **R\$ 25.270** · +20,6% | −30,3% | 18,1% · 0,46 | 57% · 55% | −20,0% · +12,2% |
| **como no vídeo (alvo 1.900, break even 100)** | **R\$ 23.764** · +19,1% | −18,7% | 17,7% · 0,40 | 52% · 55% | −10,9% · +11,5% |
| **sem break even** | **R\$ 21.423** · +16,6% | −18,1% | 18,9% · 0,27 | 47% · 53% | −11,0% · +13,6% |
| **alvo 1.200** | **R\$ 24.813** · +20,1% | −16,5% | 17,3% · 0,45 | 57% · 62% | −7,9% · +11,2% |
| **alvo 2.000, stop 600** | **R\$ 18.279** · +13,0% | −23,1% | 18,7% · 0,10 | 50% · 53% | −13,4% · +12,5% |
| **bandas de 250 pts** | **R\$ 13.227** · +5,8% | −31,1% | 22,9% · −0,17 | 48% · 50% | −20,9% · +16,1% |
| **risco 1%** | **R\$ 30.511** · +25,3% | −19,7% | 19,9% · 0,63 | 57% · 57% | −12,2% · +14,9% |
| **pura** | **R\$ 13.920** · +6,9% | −31,5% | 18,0% · −0,21 | 45% · 50% | −20,8% · +11,0% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/bandas-de-vwap_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 0,62** | +0,6% | +37,6% | +4,1% | +10,4% | +42,4% | +11,6% | **+152,7%** (+20,6% · R\$ 25.270) |
| **como no vídeo (alvo 1.900, break even 100)** | −3,0% | +27,3% | −2,0% | +5,8% | +50,5% | +23,4% | **+137,6%** (+19,1% · R\$ 23.764) |
| **sem break even** | −3,8% | +22,1% | −1,7% | +7,6% | +38,6% | +24,5% | **+114,2%** (+16,6% · R\$ 21.423) |
| **alvo 1.200** | −1,2% | +33,6% | −2,6% | +8,5% | +48,7% | +19,6% | **+148,1%** (+20,1% · R\$ 24.813) |
| **alvo 2.000, stop 600** | −2,0% | +24,9% | −3,9% | +4,5% | +27,1% | +17,0% | **+82,8%** (+13,0% · R\$ 18.279) |
| **bandas de 250 pts** | −4,1% | +21,8% | −4,8% | +5,1% | +27,8% | −11,4% | **+32,3%** (+5,8% · R\$ 13.227) |
| **risco 1%** | +0,3% | +41,5% | +1,5% | +10,3% | +61,5% | +18,9% | **+205,1%** (+25,3% · R\$ 30.511) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *CDI* | *risco 1%* | *Ibovespa* | *CDI* | *risco 1%* | *sem break even* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/bandas-de-vwap_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 0,62 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | −5,2% | −4,9% | +0,6% | −3,4% |
> | dez/2021 | +6,1% | +5,5% | +0,7% | +2,9% |
> | jan/2022 | +0,9% | +1,1% | +0,7% | +7,0% |
> | fev/2022 | −2,8% | −3,6% | +0,8% | +0,9% |
> | mar/2022 | +8,3% | +8,9% | +0,9% | +6,1% |
> | abr/2022 | +4,7% | +6,2% | +0,8% | −10,1% |
> | mai/2022 | +0,1% | −0,3% | +1,0% | +3,2% |
> | jun/2022 | −1,2% | −1,5% | +1,0% | −11,5% |
> | jul/2022 | −5,0% | −5,8% | +1,0% | +4,7% |
> | ago/2022 | +11,7% | +14,9% | +1,2% | +6,2% |
> | set/2022 | +4,8% | +5,4% | +1,1% | +0,5% |
> | out/2022 | +7,1% | +7,2% | +1,0% | +5,5% |
> | nov/2022 | +1,4% | +1,3% | +1,0% | −3,1% |
> | dez/2022 | +3,6% | +3,3% | +1,1% | −2,4% |
> | jan/2023 | +7,1% | +7,2% | +1,1% | +3,4% |
> | fev/2023 | +3,8% | +4,0% | +0,9% | −7,5% |
> | mar/2023 | −2,5% | −2,8% | +1,2% | −2,9% |
> | abr/2023 | −5,5% | −6,3% | +0,9% | +2,5% |
> | mai/2023 | −1,8% | −2,4% | +1,1% | +3,7% |
> | jun/2023 | −0,3% | −0,5% | +1,1% | +9,0% |
> | jul/2023 | +1,6% | +1,8% | +1,1% | +3,3% |
> | ago/2023 | −0,8% | −1,2% | +1,1% | −5,1% |
> | set/2023 | −0,8% | −1,8% | +1,0% | +0,7% |
> | out/2023 | +3,6% | +4,7% | +1,0% | −2,9% |
> | nov/2023 | +0,7% | +0,4% | +0,9% | +12,5% |
> | dez/2023 | −0,3% | −0,7% | +0,9% | +5,4% |
> | jan/2024 | +5,6% | +7,9% | +1,0% | −4,8% |
> | fev/2024 | +4,6% | +6,1% | +0,8% | +1,0% |
> | mar/2024 | +0,5% | +0,4% | +0,8% | −0,7% |
> | abr/2024 | −4,4% | −5,4% | +0,9% | −1,7% |
> | mai/2024 | −0,1% | −0,4% | +0,8% | −3,0% |
> | jun/2024 | +1,4% | +1,6% | +0,8% | +1,5% |
> | jul/2024 | −0,3% | +0,2% | +0,9% | +3,0% |
> | ago/2024 | +3,7% | +5,0% | +0,9% | +6,5% |
> | set/2024 | +1,1% | +1,1% | +0,8% | −3,1% |
> | out/2024 | −7,1% | −10,7% | +0,9% | −1,6% |
> | nov/2024 | −2,0% | −3,0% | +0,8% | −3,1% |
> | dez/2024 | +7,8% | +8,8% | +0,8% | −4,3% |
> | jan/2025 | +8,4% | +10,9% | +1,0% | +4,9% |
> | fev/2025 | +4,8% | +6,0% | +1,0% | −2,6% |
> | mar/2025 | +6,7% | +8,8% | +1,0% | +6,1% |
> | abr/2025 | −6,3% | −6,9% | +1,1% | +3,7% |
> | mai/2025 | +7,3% | +10,0% | +1,1% | +1,5% |
> | jun/2025 | −0,1% | −0,2% | +1,1% | +1,3% |
> | jul/2025 | +2,6% | +3,1% | +1,3% | −4,2% |
> | ago/2025 | +11,3% | +13,2% | +1,2% | +6,3% |
> | set/2025 | −1,5% | −2,2% | +1,2% | +3,4% |
> | out/2025 | −0,8% | −1,4% | +1,3% | +2,3% |
> | nov/2025 | +6,5% | +8,9% | +1,1% | +6,4% |
> | dez/2025 | −1,4% | +0,8% | +1,1% | +1,3% |
> | jan/2026 | +2,1% | +2,3% | +1,2% | +12,6% |
> | fev/2026 | +3,5% | +2,8% | +1,0% | +4,1% |
> | mar/2026 | +5,7% | +4,3% | +1,2% | −0,7% |
> | abr/2026 | +12,2% | +9,4% | +1,1% | −0,1% |
> | mai/2026 | +2,4% | +2,3% | +1,1% | −7,2% |
> | jun/2026 | +4,0% | +3,7% | +1,1% | −1,0% |
> | jul/2026 | +2,9% | +3,0% | +1,2% | +3,5% |
> | ago/2026 | +10,5% | +8,4% | +1,1% | −0,3% |
> | set/2026 | −8,0% | −4,8% | +1,1% | +5,0% |
> | out/2026 | −20,0% | −12,2% | +1,0% | −9,9% |
> | **Acumulado** | **+152,7%** | **+205,1%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 0,62** | +25% ao ano · queda −53% | +21% ao ano · queda −30% | +17% ao ano · queda −16% | +15% ao ano · queda −7% |
| **como no vídeo (alvo 1.900, break even 100)** | +22% ao ano · queda −43% | +19% ao ano · queda −19% | +16% ao ano · queda −9% | +15% ao ano · queda −4% |
| **sem break even** | +16% ao ano · queda −46% | +17% ao ano · queda −18% | +15% ao ano · queda −9% | +14% ao ano · queda −4% |
| **alvo 1.200** | +24% ao ano · queda −40% | +20% ao ano · queda −16% | +17% ao ano · queda −7% | +15% ao ano · queda −3% |
| **alvo 2.000, stop 600** | +9% ao ano · queda −44% | +13% ao ano · queda −23% | +13% ao ano · queda −11% | +13% ao ano · queda −5% |
| **bandas de 250 pts** | −6% ao ano · queda −56% | +6% ao ano · queda −31% | +10% ao ano · queda −15% | +12% ao ano · queda −7% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1493 operações, 23% de acerto e fator de lucro 1,18. O vídeo mostra: 3.940 operações · ~50% de acerto · payoff 1,41 (desde 2015, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,02R por operação no treino (p 0,167) e +0,05R no teste (p 0,018). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,00 a +0,09R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,02 → +0,05R · sem o filtro da média de 200: −0,01 → +0,04R · sem exigir a cor da vela: +0,00 → +0,06R · bandas de 1.000 pts: −0,03 → +0,07R · sem break even: +0,01 → +0,05R · o dia todo (9h–17h): +0,02 → +0,03R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,02 → +0,05R · 25 pts: −0,00 → +0,03R · 30 pts: −0,01 → +0,02R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 0,62 foi de −R\$ 3.696 por contrato (começou em set/2026, ainda não recuperada); 22 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 0,62 + CDI ficou abaixo do CDI em 43% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021, 2023.
- **As compras carregam o setup:** compras +0,06R × vendas +0,02R por operação.
- **Acerto de ~25%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
