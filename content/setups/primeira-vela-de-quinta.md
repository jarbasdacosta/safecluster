---
title: Primeira Vela de Quinta
date: 2026-10-31
tags: [setup, win]
---

**Na quinta-feira, entra no rompimento da primeira vela de 15 minutos do dia, na direção da cor dela, com stop e alvo iguais.**

🟡 promissor · dia escolhido pelo autor · Mini índice (WIN) · gráfico de 15 minutos · só a primeira vela do dia

🎬 **Vídeo de origem:** [Arthur 777 – "descobri um padrão bizarro no mini índice"](https://youtu.be/5pmW0UMnXwE) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 21.646** na versão ATR 0,21 / 0,21 com o capital no CDI (+17% ao ano · pior queda −4%)
> - **R\$ 18.847** na versão todos os dias com o capital no CDI (+14% ao ano · pior queda −8%)
> - **R\$ 22.635** na versão só quinta (vídeo) com o capital no CDI (+18% ao ano · pior queda −3%)
> - **R\$ 26.393** na versão só quinta, entrada a mercado (vídeo) com o capital no CDI (+22% ao ano · pior queda −4%)
> - **R\$ 22.626** na versão só quinta, corpo de 100+ (vídeo) com o capital no CDI (+18% ao ano · pior queda −2%)
> - **R\$ 23.524** na versão todos os dias, entrada a mercado com o capital no CDI (+19% ao ano · pior queda −16%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 23.158** na versão ATR 0,21 / 0,21 **arriscando 1% do capital por operação** (+18% ao ano · pior queda −3%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> Ainda sem operações. O resultado aparece aqui conforme os dias passam.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/primeira-vela-de-quinta_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Primeira vela** | a vela das 9h00 fecha **positiva** | a vela das 9h00 fecha **negativa** |
| **2. Dia** | **quinta-feira** (no vídeo) | igual |
| **Entrada** | ordem de compra na **máxima** dela (só na vela seguinte) | ordem de venda na **mínima** |
| **Stop · alvo** | 400 · 400 pts no vídeo → em ATR aqui | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 0,21** — stop 0,206 ATR · alvo 0,206 ATR (1,0× o stop); hoje ≈ 892 pts de stop e 892 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 0,21** (principal) | stop 0,206 ATR · alvo 0,206 ATR (1,0× o stop) | 64% · 0,84 | +106,6 → +66,2 | +16,9% | −3,7% |
| **todos os dias** | stop 400 · alvo 400 pts | 53% · 0,93 | +30,4 → −12,8 | +13,7% | −8,4% |
| **só quinta (vídeo)** | stop 400 · alvo 400 pts | 63% · 0,93 | +104,3 → +75,7 | +17,9% | −2,5% |
| **só quinta, entrada a mercado (vídeo)** | stop 400 · alvo 400 pts | 62% · 0,94 | +96,1 → +65,5 | +21,6% | −3,9% |
| **só quinta, corpo de 100+ (vídeo)** | stop 400 · alvo 400 pts | 65% · 0,93 | +124,1 → +88,2 | +17,9% | −2,0% |
| **todos os dias, entrada a mercado** | stop 400 · alvo 400 pts | 53% · 0,93 | +10,2 → +13,9 | +18,9% | −15,7% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 0,21

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 46 | 62 | 108 |
| Operações por mês | 1,7 | 1,8 | 1,8 |
| Taxa de acerto | 65,2% | 62,9% | 63,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 65% / 35% / 0% | 63% / 37% / 0% | 64% / 36% / 0% |
| Stop típico | 389 pts | 382 pts | 385 pts |
| Ganho médio · perda média | +387 · −420 pts | +402 · −503 pts | +396 · −469 pts |
| Payoff (ganho médio ÷ perda média) | 0,92 | 0,80 | 0,84 |
| Fator de lucro (total ganho ÷ total perdido) | 1,73 | 1,35 | 1,49 |
| Resultado médio por operação | +106,6 pts (+121,6 sem custo) | +66,2 pts (+81,2 sem custo) | +83,4 pts (+98,4 sem custo) |
| **Lucro líquido** | **+4.904 pts · R\$ 981** | **+4.102 pts · R\$ 820** | **+9.006 pts · R\$ 1.801** |
| Pior queda (drawdown) | −1.031 pts · −R\$ 206 | −3.467 pts · −R\$ 693 | −3.467 pts · −R\$ 693 |
| Maior sequência de perdas | 2 seguidas | 4 seguidas | 4 seguidas |
| Compras: acerto · lucro | 59% · +1.064 pts | 59% · +2.031 pts | 59% · +3.095 pts |
| Vendas: acerto · lucro | 71% · +3.839 pts | 67% · +2.071 pts | 68% · +5.911 pts |

### Versão todos os dias

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 282 | 383 | 665 |
| Operações por mês | 10,4 | 11,3 | 10,9 |
| Taxa de acerto | 55,7% | 50,4% | 52,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 56% / 44% / 0% | 50% / 49% / 1% | 52% / 47% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +383 · −415 pts | +384 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,92 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,17 | 0,94 | 1,03 |
| Resultado médio por operação | +30,4 pts (+45,4 sem custo) | −12,8 pts (+2,2 sem custo) | +5,5 pts (+20,5 sem custo) |
| **Lucro líquido** | **+8.570 pts · R\$ 1.714** | **−4.905 pts · −R\$ 981** | **+3.665 pts · R\$ 733** |
| Pior queda (drawdown) | −4.200 pts · −R\$ 840 | −7.760 pts · −R\$ 1.552 | −7.760 pts · −R\$ 1.552 |
| Maior sequência de perdas | 5 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 55% · +3.205 pts | 50% · −2.510 pts | 52% · +695 pts |
| Vendas: acerto · lucro | 56% · +5.365 pts | 51% · −2.395 pts | 53% · +2.970 pts |

### Versão só quinta (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 57 | 75 | 132 |
| Operações por mês | 2,1 | 2,2 | 2,2 |
| Taxa de acerto | 64,9% | 61,3% | 62,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 65% / 35% / 0% | 61% / 39% / 0% | 63% / 37% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +385 · −415 pts | +385 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,72 | 1,47 | 1,57 |
| Resultado médio por operação | +104,3 pts (+119,3 sem custo) | +75,7 pts (+90,7 sem custo) | +88,0 pts (+103,0 sem custo) |
| **Lucro líquido** | **+5.945 pts · R\$ 1.189** | **+5.675 pts · R\$ 1.135** | **+11.620 pts · R\$ 2.324** |
| Pior queda (drawdown) | −1.780 pts · −R\$ 356 | −2.550 pts · −R\$ 510 | −2.550 pts · −R\$ 510 |
| Maior sequência de perdas | 4 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 59% · +1.595 pts | 56% · +1.090 pts | 57% · +2.685 pts |
| Vendas: acerto · lucro | 70% · +4.350 pts | 66% · +4.585 pts | 68% · +8.935 pts |

### Versão só quinta, entrada a mercado (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 108 | 139 | 247 |
| Operações por mês | 4,0 | 4,1 | 4,0 |
| Taxa de acerto | 63,9% | 59,7% | 61,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 64% / 36% / 0% | 60% / 40% / 1% | 62% / 38% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +385 · −408 pts | +385 · −411 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 1,64 | 1,40 | 1,50 |
| Resultado médio por operação | +96,1 pts (+111,1 sem custo) | +65,5 pts (+80,5 sem custo) | +78,9 pts (+93,9 sem custo) |
| **Lucro líquido** | **+10.380 pts · R\$ 2.076** | **+9.105 pts · R\$ 1.821** | **+19.485 pts · R\$ 3.897** |
| Pior queda (drawdown) | −1.810 pts · −R\$ 362 | −2.490 pts · −R\$ 498 | −2.520 pts · −R\$ 504 |
| Maior sequência de perdas | 4 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 65% · +5.945 pts | 60% · +3.870 pts | 62% · +9.815 pts |
| Vendas: acerto · lucro | 63% · +4.435 pts | 60% · +5.235 pts | 61% · +9.670 pts |

### Versão só quinta, corpo de 100+ (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 46 | 62 | 108 |
| Operações por mês | 1,7 | 1,8 | 1,8 |
| Taxa de acerto | 67,4% | 62,9% | 64,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 67% / 33% / 0% | 63% / 37% / 0% | 65% / 35% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +385 · −415 pts | +385 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,92 | 1,57 | 1,71 |
| Resultado médio por operação | +124,1 pts (+139,1 sem custo) | +88,2 pts (+103,2 sem custo) | +103,5 pts (+118,5 sem custo) |
| **Lucro líquido** | **+5.710 pts · R\$ 1.142** | **+5.470 pts · R\$ 1.094** | **+11.180 pts · R\$ 2.236** |
| Pior queda (drawdown) | −860 pts · −R\$ 172 | −1.660 pts · −R\$ 332 | −1.660 pts · −R\$ 332 |
| Maior sequência de perdas | 2 seguidas | 4 seguidas | 4 seguidas |
| Compras: acerto · lucro | 59% · +1.270 pts | 59% · +1.565 pts | 59% · +2.835 pts |
| Vendas: acerto · lucro | 75% · +4.440 pts | 67% · +3.905 pts | 70% · +8.345 pts |

### Versão todos os dias, entrada a mercado

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 540 | 700 | 1.240 |
| Operações por mês | 20,0 | 20,6 | 20,3 |
| Taxa de acerto | 53,1% | 53,6% | 53,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 53% / 47% / 0% | 53% / 46% / 1% | 53% / 46% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +384 · −413 pts | +384 · −414 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,05 | 1,07 | 1,06 |
| Resultado médio por operação | +10,2 pts (+25,2 sem custo) | +13,9 pts (+28,9 sem custo) | +12,3 pts (+27,3 sem custo) |
| **Lucro líquido** | **+5.500 pts · R\$ 1.100** | **+9.745 pts · R\$ 1.949** | **+15.245 pts · R\$ 3.049** |
| Pior queda (drawdown) | −12.015 pts · −R\$ 2.403 | −5.250 pts · −R\$ 1.050 | −12.015 pts · −R\$ 2.403 |
| Maior sequência de perdas | 9 seguidas | 7 seguidas | 9 seguidas |
| Compras: acerto · lucro | 55% · +7.625 pts | 55% · +8.025 pts | 55% · +15.650 pts |
| Vendas: acerto · lucro | 51% · −2.125 pts | 52% · +1.720 pts | 52% · −405 pts |

![Pontos acumulados com 1 contrato](setups/img/primeira-vela-de-quinta_pontos.png)

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
| **ATR 0,21 / 0,21** | **R\$ 21.646** · +16,9% | −3,7% | 4,1% · 0,88 | 50% · 50% | −2,1% · +3,4% |
| **todos os dias** | **R\$ 18.847** · +13,7% | −8,4% | 9,2% · 0,13 | 53% · 52% | −4,8% · +5,6% |
| **só quinta (vídeo)** | **R\$ 22.635** · +17,9% | −2,5% | 4,1% · 1,11 | 48% · 52% | −1,3% · +3,5% |
| **só quinta, entrada a mercado (vídeo)** | **R\$ 26.393** · +21,6% | −3,9% | 5,6% · 1,39 | 53% · 53% | −2,1% · +5,0% |
| **só quinta, corpo de 100+ (vídeo)** | **R\$ 22.626** · +17,9% | −2,0% | 3,7% · 1,22 | 45% · 50% | −0,6% · +3,4% |
| **todos os dias, entrada a mercado** | **R\$ 23.524** · +18,9% | −15,7% | 12,6% · 0,48 | 60% · 48% | −5,1% · +8,8% |
| **risco 1%** | **R\$ 23.158** · +18,5% | −2,6% | 4,4% · 1,13 | 48% · 50% | −1,0% · +3,9% |
| **pura** | **R\$ 11.923** · +3,6% | −6,8% | 4,1% · −2,04 | 22% · 42% | −3,1% · +2,4% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/primeira-vela-de-quinta_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 0,21** | +4,0% | +18,1% | +15,3% | +16,4% | +21,9% | +7,7% | **+116,5%** (+16,9% · R\$ 21.646) |
| **todos os dias** | +0,5% | +14,9% | +29,1% | +0,9% | +17,4% | +6,7% | **+88,5%** (+13,7% · R\$ 18.847) |
| **só quinta (vídeo)** | +2,7% | +16,8% | +19,5% | +19,8% | +20,7% | +9,1% | **+126,3%** (+17,9% · R\$ 22.635) |
| **só quinta, entrada a mercado (vídeo)** | +3,4% | +21,6% | +24,4% | +20,9% | +18,9% | +17,4% | **+163,9%** (+21,6% · R\$ 26.393) |
| **só quinta, corpo de 100+ (vídeo)** | +2,0% | +19,8% | +17,8% | +18,1% | +18,0% | +12,8% | **+126,3%** (+17,9% · R\$ 22.626) |
| **todos os dias, entrada a mercado** | +5,7% | −0,6% | +33,5% | +2,5% | +22,5% | +33,6% | **+135,2%** (+18,9% · R\$ 23.524) |
| **risco 1%** | +4,2% | +19,1% | +16,4% | +19,2% | +23,5% | +9,0% | **+131,6%** (+18,5% · R\$ 23.158) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *todos os dias, entrada a mercado* | *só quinta, entrada a mercado (vídeo)* | *todos os dias, entrada a mercado* | *só quinta, entrada a mercado (vídeo)* | *Ibovespa* | *todos os dias, entrada a mercado* | *só quinta, entrada a mercado (vídeo)* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/primeira-vela-de-quinta_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 0,21 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +1,6% | +1,5% | +0,6% | −3,4% |
> | dez/2021 | +2,4% | +2,6% | +0,7% | +2,9% |
> | jan/2022 | +1,4% | +1,6% | +0,7% | +7,0% |
> | fev/2022 | +0,7% | +0,7% | +0,8% | +0,9% |
> | mar/2022 | +0,9% | +0,9% | +0,9% | +6,1% |
> | abr/2022 | +2,2% | +2,7% | +0,8% | −10,1% |
> | mai/2022 | +1,9% | +2,0% | +1,0% | +3,2% |
> | jun/2022 | +3,4% | +3,9% | +1,0% | −11,5% |
> | jul/2022 | +1,0% | +0,9% | +1,0% | +4,7% |
> | ago/2022 | +0,2% | +0,1% | +1,2% | +6,2% |
> | set/2022 | +2,9% | +3,0% | +1,1% | +0,5% |
> | out/2022 | −0,1% | −0,1% | +1,0% | +5,5% |
> | nov/2022 | +1,0% | +1,0% | +1,0% | −3,1% |
> | dez/2022 | +1,2% | +1,0% | +1,1% | −2,4% |
> | jan/2023 | +1,1% | +1,1% | +1,1% | +3,4% |
> | fev/2023 | +2,7% | +2,8% | +0,9% | −7,5% |
> | mar/2023 | +0,3% | +0,2% | +1,2% | −2,9% |
> | abr/2023 | +0,8% | +0,8% | +0,9% | +2,5% |
> | mai/2023 | +1,1% | +1,0% | +1,1% | +3,7% |
> | jun/2023 | +1,8% | +2,0% | +1,1% | +9,0% |
> | jul/2023 | +1,0% | +1,0% | +1,1% | +3,3% |
> | ago/2023 | +1,0% | +1,1% | +1,1% | −5,1% |
> | set/2023 | +1,6% | +1,9% | +1,0% | +0,7% |
> | out/2023 | +0,9% | +0,9% | +1,0% | −2,9% |
> | nov/2023 | +0,7% | +0,8% | +0,9% | +12,5% |
> | dez/2023 | +1,4% | +1,7% | +0,9% | +5,4% |
> | jan/2024 | +0,3% | −0,0% | +1,0% | −4,8% |
> | fev/2024 | +1,3% | +1,7% | +0,8% | +1,0% |
> | mar/2024 | +1,9% | +2,7% | +0,8% | −0,7% |
> | abr/2024 | +1,5% | +1,7% | +0,9% | −1,7% |
> | mai/2024 | +1,4% | +1,7% | +0,8% | −3,0% |
> | jun/2024 | +0,8% | +0,7% | +0,8% | +1,5% |
> | jul/2024 | +1,4% | +1,8% | +0,9% | +3,0% |
> | ago/2024 | +1,1% | +1,6% | +0,9% | +6,5% |
> | set/2024 | +0,7% | +0,7% | +0,8% | −3,1% |
> | out/2024 | +1,6% | +1,8% | +0,9% | −1,6% |
> | nov/2024 | +0,7% | +0,7% | +0,8% | −3,1% |
> | dez/2024 | +2,5% | +2,7% | +0,8% | −4,3% |
> | jan/2025 | +1,0% | +1,0% | +1,0% | +4,9% |
> | fev/2025 | +2,4% | +2,9% | +1,0% | −2,6% |
> | mar/2025 | +0,6% | +0,8% | +1,0% | +6,1% |
> | abr/2025 | +3,4% | +3,0% | +1,1% | +3,7% |
> | mai/2025 | +1,8% | +2,0% | +1,1% | +1,5% |
> | jun/2025 | +1,9% | +2,0% | +1,1% | +1,3% |
> | jul/2025 | +2,1% | +2,2% | +1,3% | −4,2% |
> | ago/2025 | +2,0% | +2,1% | +1,2% | +6,3% |
> | set/2025 | +0,5% | +0,2% | +1,2% | +3,4% |
> | out/2025 | +2,6% | +3,1% | +1,3% | +2,3% |
> | nov/2025 | +1,1% | +1,1% | +1,1% | +6,4% |
> | dez/2025 | +0,7% | +1,0% | +1,1% | +1,3% |
> | jan/2026 | +3,0% | +3,1% | +1,2% | +12,6% |
> | fev/2026 | −2,1% | −1,0% | +1,0% | +4,1% |
> | mar/2026 | +1,2% | +1,2% | +1,2% | −0,7% |
> | abr/2026 | +1,0% | +1,0% | +1,1% | −0,1% |
> | mai/2026 | +2,1% | +2,0% | +1,1% | −7,2% |
> | jun/2026 | +1,1% | +1,1% | +1,1% | −1,0% |
> | jul/2026 | −1,1% | −0,8% | +1,2% | +3,5% |
> | ago/2026 | −1,4% | −0,9% | +1,1% | −0,3% |
> | set/2026 | +1,1% | +1,1% | +1,1% | +5,0% |
> | out/2026 | +2,6% | +2,0% | +1,0% | −9,9% |
> | **Acumulado** | **+116,5%** | **+131,6%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 0,21** | +21% ao ano · queda −8% | +17% ao ano · queda −4% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **todos os dias** | +14% ao ano · queda −22% | +14% ao ano · queda −8% | +13% ao ano · queda −3% | +13% ao ano · queda −1% |
| **só quinta (vídeo)** | +23% ao ano · queda −7% | +18% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **só quinta, entrada a mercado (vídeo)** | +31% ao ano · queda −9% | +22% ao ano · queda −4% | +17% ao ano · queda −1% | +15% ao ano · queda −0% |
| **só quinta, corpo de 100+ (vídeo)** | +23% ao ano · queda −5% | +18% ao ano · queda −2% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **todos os dias, entrada a mercado** | +23% ao ano · queda −32% | +19% ao ano · queda −16% | +16% ao ano · queda −6% | +14% ao ano · queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 665 operações, 53% de acerto e fator de lucro 1,11. O vídeo mostra: 126 operações · 70% de acerto · fator de lucro 2,41 (out/2021–2026, só quintas, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,27R por operação no treino (p 0,018) e +0,22R no teste (p 0,018). |
| **É sorte de parâmetro?** | 9 de 9 combinações de stop × alvo deram lucro no treino **e** no teste (+0,11 a +0,28R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,27 → +0,22R · só segunda: −0,10 → −0,05R · só terça: +0,08 → −0,04R · só quarta: −0,11 → +0,11R · só quinta: +0,27 → +0,22R · só sexta: +0,05 → −0,05R · entrada a mercado: +0,26 → +0,18R · corpo de 200+: +0,33 → +0,11R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,27 → +0,22R · 25 pts: +0,24 → +0,20R · 30 pts: +0,23 → +0,18R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 0,21 foi de −R\$ 693 por contrato (começou em jan/2026, ainda não recuperada); 4 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 0,21 + CDI ficou abaixo do CDI em 50% dos meses. O resultado aparece no ano.
- **Dia da semana escolhido pelo autor (só a quinta-feira):** o vídeo testou todos os dias no mesmo período que usamos e mostrou o que deu certo — pode ser sorte. Por regra, fica no máximo como promissor e **fora da carteira recomendada** até os dados novos confirmarem.
- **Opera pouco** (~1,8 operações por mês): os números têm mais incerteza.
- **Anos negativos:** 2026.
- **As vendas carregam o setup:** compras +0,14R × vendas +0,33R por operação.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
