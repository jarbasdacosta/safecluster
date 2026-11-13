---
title: GPS de Médias
date: 2026-11-13
tags: [setup, win]
---

**Quando as oito médias curtas estão enfileiradas e o preço rompe a banda de Bollinger, entra a favor com stop curto e alvo seis vezes maior.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · 10h–11h e 14h–16h

🎬 **Vídeo de origem:** [Arthur 777 – "criei um GPS BRUTAL de médias"](https://youtu.be/g0FJNSNubW8) · testado de forma independente nos nossos dados em 07/11/2026 · página gerada em 13/11/2026 19:40 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 682.834** arriscando **1% do capital** por operação (+46% ao ano · pior queda −25% · cauda −41%)
> - **R\$ 2.298.642** arriscando **2% do capital** por operação (+86% ao ano · pior queda −44% · cauda −68%)
>
> - **R\$ 182.017** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **11 operações** · acerto 36% · **+1,18R por operação** (no teste 2024 →: +0,18R) · líquido +5.657 pts (R\$ 1.131 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/gps-de-medias_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Rompimento** | a vela fecha **acima da banda superior** (Bollinger 20, desvio 2) | fecha **abaixo da banda inferior** |
| **2. Nuvem** | a vela fecha **acima** das médias exponenciais de 3 a 10 | fecha **abaixo** de todas elas |
| **3. Alinhamento** | as médias estão em ordem: **3 > 4 > 5 > … > 10** | em ordem inversa: **3 < 4 < … < 10** |
| **4. Horário** | só das **10h às 11h** e das **14h às 16h** | igual |
| **Entrada** | **a mercado** na abertura da vela seguinte | igual |
| **Alvo · stop** | 1.800 · 300 pts no vídeo → em ATR aqui | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,10 / 1,29** — stop 0,103 ATR · alvo 1,286 ATR (12,5× o stop); hoje ≈ 398 pts de stop e 4.979 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 3.871 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,10 / 1,29** (principal) | stop 0,103 ATR · alvo 1,286 ATR (12,5× o stop) | 23% · 4,16 | +53,7 → +34,9 | +36,8% | −15,3% |
| **como no vídeo (alvo 1.800)** | stop 300 · alvo 1.800 pts | 29% · 2,74 | +31,7 → +20,7 | +24,8% | −11,1% |
| **alvo 1.000** | stop 300 · alvo 1.000 pts | 31% · 2,32 | +15,8 → +9,2 | +18,1% | −12,0% |
| **alvo 2.500, stop 200** | stop 200 · alvo 2.500 pts | 22% · 4,19 | +44,2 → +15,3 | +27,8% | −13,8% |
| **com break even a 300 pts** | stop 300 · alvo 1.800 pts | 24% · 3,76 | +26,9 → +31,1 | +27,6% | −8,7% |
| **o dia todo (9h–17h)** | stop 300 · alvo 1.800 pts | 27% · 2,84 | +12,7 → +3,5 | +16,3% | −20,8% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,10 / 1,29

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 512 | 721 | 1.233 |
| Operações por mês | 19,0 | 20,6 | 19,9 |
| Taxa de acerto | 23,2% | 22,9% | 23,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 74% / 24% | 1% / 76% / 23% | 1% / 75% / 23% |
| Stop típico | 197 pts | 191 pts | 195 pts |
| Ganho médio · perda média | +944 · −216 pts | +945 · −235 pts | +944 · −227 pts |
| Payoff (ganho médio ÷ perda média) | 4,37 | 4,02 | 4,16 |
| Fator de lucro (total ganho ÷ total perdido) | 1,32 | 1,19 | 1,24 |
| Resultado médio por operação | +53,7 pts (+68,7 sem custo) | +34,9 pts (+49,9 sem custo) | +42,7 pts (+57,7 sem custo) |
| **Lucro líquido** | **+27.498 pts · R\$ 5.500** | **+25.196 pts · R\$ 5.039** | **+52.693 pts · R\$ 10.539** |
| Pior queda (drawdown) | −5.843 pts · −R\$ 1.169 | −8.974 pts · −R\$ 1.795 | −8.974 pts · −R\$ 1.795 |
| Maior sequência de perdas | 16 seguidas | 19 seguidas | 19 seguidas |
| Compras: acerto · lucro | 25% · +16.290 pts | 24% · +15.897 pts | 24% · +32.187 pts |
| Vendas: acerto · lucro | 21% · +11.208 pts | 22% · +9.298 pts | 22% · +20.506 pts |

### Versão como no vídeo (alvo 1.800)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 488 | 681 | 1.169 |
| Operações por mês | 18,1 | 19,5 | 18,9 |
| Taxa de acerto | 28,5% | 29,2% | 28,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 68% / 27% | 6% / 68% / 26% | 5% / 68% / 26% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +878 · −306 pts | +813 · −307 pts | +840 · −306 pts |
| Payoff (ganho médio ÷ perda média) | 2,87 | 2,65 | 2,74 |
| Fator de lucro (total ganho ÷ total perdido) | 1,14 | 1,10 | 1,12 |
| Resultado médio por operação | +31,7 pts (+46,7 sem custo) | +20,7 pts (+35,7 sem custo) | +25,3 pts (+40,3 sem custo) |
| **Lucro líquido** | **+15.450 pts · R\$ 3.090** | **+14.085 pts · R\$ 2.817** | **+29.535 pts · R\$ 5.907** |
| Pior queda (drawdown) | −8.085 pts · −R\$ 1.617 | −6.195 pts · −R\$ 1.239 | −8.085 pts · −R\$ 1.617 |
| Maior sequência de perdas | 14 seguidas | 18 seguidas | 18 seguidas |
| Compras: acerto · lucro | 31% · +11.835 pts | 32% · +17.625 pts | 32% · +29.460 pts |
| Vendas: acerto · lucro | 26% · +3.615 pts | 26% · −3.540 pts | 26% · +75 pts |

### Versão alvo 1.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 515 | 731 | 1.246 |
| Operações por mês | 19,1 | 20,9 | 20,1 |
| Taxa de acerto | 31,3% | 31,3% | 31,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 17% / 66% / 17% | 18% / 66% / 16% | 18% / 66% / 16% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +723 · −306 pts | +701 · −306 pts | +710 · −306 pts |
| Payoff (ganho médio ÷ perda média) | 2,36 | 2,29 | 2,32 |
| Fator de lucro (total ganho ÷ total perdido) | 1,08 | 1,04 | 1,06 |
| Resultado médio por operação | +15,8 pts (+30,8 sem custo) | +9,2 pts (+24,2 sem custo) | +11,9 pts (+26,9 sem custo) |
| **Lucro líquido** | **+8.140 pts · R\$ 1.628** | **+6.695 pts · R\$ 1.339** | **+14.835 pts · R\$ 2.967** |
| Pior queda (drawdown) | −8.590 pts · −R\$ 1.718 | −9.040 pts · −R\$ 1.808 | −9.040 pts · −R\$ 1.808 |
| Maior sequência de perdas | 14 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 34% · +10.215 pts | 35% · +14.920 pts | 35% · +25.135 pts |
| Vendas: acerto · lucro | 28% · −2.075 pts | 28% · −8.225 pts | 28% · −10.300 pts |

### Versão alvo 2.500, stop 200

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 533 | 749 | 1.282 |
| Operações por mês | 19,7 | 21,4 | 20,7 |
| Taxa de acerto | 22,0% | 21,6% | 21,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 76% / 23% | 2% / 78% / 21% | 2% / 77% / 22% |
| Stop típico | 200 pts | 200 pts | 200 pts |
| Ganho médio · perda média | +949 · −210 pts | +844 · −213 pts | +888 · −212 pts |
| Payoff (ganho médio ÷ perda média) | 4,51 | 3,96 | 4,19 |
| Fator de lucro (total ganho ÷ total perdido) | 1,27 | 1,09 | 1,16 |
| Resultado médio por operação | +44,2 pts (+59,2 sem custo) | +15,3 pts (+30,3 sem custo) | +27,3 pts (+42,3 sem custo) |
| **Lucro líquido** | **+23.545 pts · R\$ 4.709** | **+11.495 pts · R\$ 2.299** | **+35.040 pts · R\$ 7.008** |
| Pior queda (drawdown) | −5.950 pts · −R\$ 1.190 | −8.860 pts · −R\$ 1.772 | −8.860 pts · −R\$ 1.772 |
| Maior sequência de perdas | 25 seguidas | 18 seguidas | 25 seguidas |
| Compras: acerto · lucro | 24% · +13.465 pts | 22% · +7.310 pts | 23% · +20.775 pts |
| Vendas: acerto · lucro | 20% · +10.080 pts | 21% · +4.185 pts | 21% · +14.265 pts |

### Versão com break even a 300 pts

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 493 | 688 | 1.181 |
| Operações por mês | 18,3 | 19,7 | 19,0 |
| Taxa de acerto | 23,3% | 23,7% | 23,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 59% / 20% | 5% / 56% / 20% | 5% / 57% / 20% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +933 · −249 pts | +899 · −238 pts | +913 · −243 pts |
| Payoff (ganho médio ÷ perda média) | 3,75 | 3,77 | 3,76 |
| Fator de lucro (total ganho ÷ total perdido) | 1,14 | 1,17 | 1,16 |
| Resultado médio por operação | +26,9 pts (+41,9 sem custo) | +31,1 pts (+46,1 sem custo) | +29,4 pts (+44,4 sem custo) |
| **Lucro líquido** | **+13.280 pts · R\$ 2.656** | **+21.430 pts · R\$ 4.286** | **+34.710 pts · R\$ 6.942** |
| Pior queda (drawdown) | −5.745 pts · −R\$ 1.149 | −5.395 pts · −R\$ 1.079 | −5.745 pts · −R\$ 1.149 |
| Maior sequência de perdas | 14 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 25% · +10.580 pts | 26% · +20.370 pts | 25% · +30.950 pts |
| Vendas: acerto · lucro | 22% · +2.700 pts | 22% · +1.060 pts | 22% · +3.760 pts |

### Versão o dia todo (9h–17h)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 930 | 1.316 | 2.246 |
| Operações por mês | 34,4 | 37,6 | 36,2 |
| Taxa de acerto | 28,3% | 25,5% | 26,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 68% / 27% | 6% / 71% / 22% | 6% / 70% / 24% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +822 · −307 pts | +906 · −306 pts | +869 · −306 pts |
| Payoff (ganho médio ÷ perda média) | 2,68 | 2,96 | 2,84 |
| Fator de lucro (total ganho ÷ total perdido) | 1,06 | 1,02 | 1,03 |
| Resultado médio por operação | +12,7 pts (+27,7 sem custo) | +3,5 pts (+18,5 sem custo) | +7,3 pts (+22,3 sem custo) |
| **Lucro líquido** | **+11.785 pts · R\$ 2.357** | **+4.655 pts · R\$ 931** | **+16.440 pts · R\$ 3.288** |
| Pior queda (drawdown) | −12.130 pts · −R\$ 2.426 | −13.885 pts · −R\$ 2.777 | −13.885 pts · −R\$ 2.777 |
| Maior sequência de perdas | 17 seguidas | 19 seguidas | 19 seguidas |
| Compras: acerto · lucro | 30% · +12.590 pts | 28% · +22.780 pts | 29% · +35.370 pts |
| Vendas: acerto · lucro | 26% · −805 pts | 23% · −18.125 pts | 24% · −18.930 pts |

![Pontos acumulados com 1 contrato](setups/img/gps-de-medias_pontos.png)

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
| **ATR 0,10 / 1,29** | **R\$ 47.688** · +36,8% | −15,3% | 19,4% · 1,09 | 66% · 59% | −6,9% · +12,6% |
| **como no vídeo (alvo 1.800)** | **R\$ 30.138** · +24,8% | −11,1% | 19,0% · 0,62 | 56% · 48% | −6,4% · +12,1% |
| **alvo 1.000** | **R\$ 22.970** · +18,1% | −12,0% | 16,3% · 0,36 | 51% · 46% | −4,1% · +12,0% |
| **alvo 2.500, stop 200** | **R\$ 34.016** · +27,8% | −13,8% | 17,8% · 0,79 | 54% · 52% | −4,8% · +10,8% |
| **com break even a 300 pts** | **R\$ 33.736** · +27,6% | −8,7% | 17,9% · 0,78 | 59% · 59% | −3,8% · +10,4% |
| **o dia todo (9h–17h)** | **R\$ 21.272** · +16,3% | −20,8% | 26,7% · 0,25 | 49% · 44% | −9,4% · +17,3% |
| **risco 1%** | **R\$ 130.488** · +67,4% | −23,3% | 40,9% · 1,16 | 66% · 64% | −11,4% · +26,2% |
| **pura** | **R\$ 26.157** · +21,3% | −16,5% | 19,4% · 0,47 | 57% · 49% | −7,9% · +11,3% |
| **CDI** | **R\$ 18.239** · +12,8% | +0,0% | 0,1% · — | — · 44% | +0,4% · +1,3% |
| **Ibovespa** | **R\$ 16.339** · +10,3% | −20,9% | 18,6% · −0,02 | 56% · — | −11,5% · +12,6% |

![Quedas](setups/img/gps-de-medias_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,10 / 1,29** | −0,6% | +40,1% | +54,4% | +22,4% | +15,5% | +56,9% | **+376,9%** (+36,8% · R\$ 47.688) |
| **como no vídeo (alvo 1.800)** | −3,0% | +22,6% | +41,9% | +17,5% | +21,1% | +25,5% | **+201,4%** (+24,8% · R\$ 30.138) |
| **alvo 1.000** | +0,3% | +7,3% | +36,8% | +15,2% | +29,6% | +4,6% | **+129,7%** (+18,1% · R\$ 22.970) |
| **alvo 2.500, stop 200** | −5,0% | +33,7% | +56,5% | +16,5% | +16,2% | +26,4% | **+240,2%** (+27,8% · R\$ 34.016) |
| **com break even a 300 pts** | −1,3% | +29,9% | +26,4% | +24,5% | +32,3% | +26,4% | **+237,4%** (+27,6% · R\$ 33.736) |
| **o dia todo (9h–17h)** | −12,1% | +17,0% | +48,0% | +14,2% | +2,3% | +19,6% | **+112,7%** (+16,3% · R\$ 21.272) |
| **risco 1%** | −4,2% | +68,9% | +118,4% | +46,2% | +29,3% | +95,3% | **+1204,9%** (+67,4% · R\$ 130.488) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,1% | **+82,4%** (+12,8% · R\$ 18.239) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +7,0% | **+63,4%** (+10,3% · R\$ 16.339) |
| *Quem ganhou* | *CDI* | *risco 1%* | *risco 1%* | *risco 1%* | *Ibovespa* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 13/11/2026.

![Retorno por ano](setups/img/gps-de-medias_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,10 / 1,29 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +2,2% | +3,3% | +0,6% | −3,4% |
> | dez/2021 | −2,7% | −7,3% | +0,7% | +2,9% |
> | jan/2022 | +2,6% | +5,4% | +0,7% | +7,0% |
> | fev/2022 | −0,6% | −2,6% | +0,8% | +0,9% |
> | mar/2022 | +6,2% | +13,1% | +0,9% | +6,1% |
> | abr/2022 | +3,7% | +7,6% | +0,8% | −10,1% |
> | mai/2022 | +3,2% | +5,6% | +1,0% | +3,2% |
> | jun/2022 | −0,9% | −4,8% | +1,0% | −11,5% |
> | jul/2022 | −3,6% | −9,6% | +1,0% | +4,7% |
> | ago/2022 | +11,2% | +26,2% | +1,2% | +6,2% |
> | set/2022 | −3,1% | −7,2% | +1,1% | +0,5% |
> | out/2022 | +3,2% | +5,4% | +1,0% | +5,5% |
> | nov/2022 | +8,1% | +11,0% | +1,0% | −3,1% |
> | dez/2022 | +5,5% | +8,7% | +1,1% | −2,4% |
> | jan/2023 | +7,4% | +13,7% | +1,1% | +3,4% |
> | fev/2023 | +9,3% | +19,3% | +0,9% | −7,5% |
> | mar/2023 | +5,8% | +11,8% | +1,2% | −2,9% |
> | abr/2023 | +3,7% | +7,4% | +0,9% | +2,5% |
> | mai/2023 | +5,4% | +11,6% | +1,1% | +3,7% |
> | jun/2023 | −1,4% | −5,4% | +1,1% | +9,0% |
> | jul/2023 | +4,9% | +10,1% | +1,1% | +3,3% |
> | ago/2023 | +5,5% | +12,5% | +1,1% | −5,1% |
> | set/2023 | −3,3% | −10,1% | +1,0% | +0,7% |
> | out/2023 | +3,2% | +6,4% | +1,0% | −2,9% |
> | nov/2023 | +3,4% | +5,5% | +0,9% | +12,5% |
> | dez/2023 | +1,0% | +1,6% | +0,9% | +5,4% |
> | jan/2024 | +0,5% | −0,4% | +1,0% | −4,8% |
> | fev/2024 | +6,9% | +17,8% | +0,8% | +1,0% |
> | mar/2024 | +3,1% | +8,1% | +0,8% | −0,7% |
> | abr/2024 | +6,2% | +16,6% | +0,9% | −1,7% |
> | mai/2024 | −2,8% | −9,4% | +0,8% | −3,0% |
> | jun/2024 | +1,2% | +1,9% | +0,8% | +1,5% |
> | jul/2024 | −1,1% | −2,9% | +0,9% | +3,0% |
> | ago/2024 | +5,7% | +14,7% | +0,9% | +6,5% |
> | set/2024 | +3,6% | +8,8% | +0,8% | −3,1% |
> | out/2024 | −1,6% | −6,3% | +0,9% | −1,6% |
> | nov/2024 | +0,3% | −1,7% | +0,8% | −3,1% |
> | dez/2024 | −1,2% | −4,1% | +0,8% | −4,3% |
> | jan/2025 | +2,3% | +5,8% | +1,0% | +4,9% |
> | fev/2025 | −1,5% | −5,1% | +1,0% | −2,6% |
> | mar/2025 | +6,4% | +13,6% | +1,0% | +6,1% |
> | abr/2025 | −6,9% | −11,4% | +1,1% | +3,7% |
> | mai/2025 | +6,7% | +15,8% | +1,1% | +1,5% |
> | jun/2025 | +1,5% | +2,8% | +1,1% | +1,3% |
> | jul/2025 | +4,5% | +9,3% | +1,3% | −4,2% |
> | ago/2025 | +4,7% | +8,7% | +1,2% | +6,3% |
> | set/2025 | −1,7% | −5,4% | +1,2% | +3,4% |
> | out/2025 | −0,1% | −2,3% | +1,3% | +2,3% |
> | nov/2025 | +2,6% | +4,4% | +1,1% | +6,4% |
> | dez/2025 | −2,9% | −6,1% | +1,1% | +1,3% |
> | jan/2026 | +12,6% | +25,2% | +1,2% | +12,6% |
> | fev/2026 | +0,5% | −0,3% | +1,0% | +4,1% |
> | mar/2026 | −1,9% | −2,7% | +1,2% | −0,7% |
> | abr/2026 | +8,9% | +11,5% | +1,1% | −0,1% |
> | mai/2026 | +5,6% | +8,1% | +1,1% | −7,2% |
> | jun/2026 | +0,3% | +0,1% | +1,1% | −1,0% |
> | jul/2026 | +12,2% | +21,1% | +1,2% | +3,5% |
> | ago/2026 | +1,1% | +1,2% | +1,1% | −0,3% |
> | set/2026 | +1,8% | +3,2% | +1,1% | +5,0% |
> | out/2026 | +3,0% | +1,8% | +1,1% | −9,9% |
> | nov/2026 | +3,1% | +3,5% | +0,4% | +2,7% |
> | **Acumulado** | **+376,9%** | **+1204,9%** | **+82,4%** | **+63,4%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,10 / 1,29** | +60% ao ano · queda −29% | +37% ao ano · queda −15% | +25% ao ano · queda −7% | +19% ao ano · queda −3% |
| **como no vídeo (alvo 1.800)** | +33% ao ano · queda −25% | +25% ao ano · queda −11% | +19% ao ano · queda −5% | +16% ao ano · queda −2% |
| **alvo 1.000** | +21% ao ano · queda −28% | +18% ao ano · queda −12% | +16% ao ano · queda −5% | +14% ao ano · queda −2% |
| **alvo 2.500, stop 200** | +41% ao ano · queda −28% | +28% ao ano · queda −14% | +21% ao ano · queda −6% | +17% ao ano · queda −2% |
| **com break even a 300 pts** | +40% ao ano · queda −19% | +28% ao ano · queda −9% | +20% ao ano · queda −4% | +17% ao ano · queda −2% |
| **o dia todo (9h–17h)** | +12% ao ano · queda −43% | +16% ao ano · queda −21% | +16% ao ano · queda −9% | +14% ao ano · queda −4% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 07/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1165 operações, 29% de acerto e fator de lucro 1,20. O vídeo mostra: 2.374 operações · 27% de acerto · payoff 3,48 (desde 2015, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,25R por operação no treino (p 0,005) e +0,17R no teste (p 0,017). |
| **É sorte de parâmetro?** | 9 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,02 a +0,25R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,25 → +0,17R · sem exigir o alinhamento das médias: +0,25 → +0,17R · sem exigir estar acima da nuvem: +0,25 → +0,17R · sem a Bollinger (só a nuvem): −0,03 → +0,01R · o dia todo (9h–17h): +0,11 → +0,05R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,25 → +0,17R · 25 pts: +0,20 → +0,12R · 30 pts: +0,17 → +0,09R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,10 / 1,29 foi de −R\$ 1.795 por contrato (começou em set/2026, ainda não recuperada); 19 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,10 / 1,29 + CDI ficou abaixo do CDI em 34% dos meses. O resultado aparece no ano.
- **Stop curto** (~195 pts): o custo e o escorregão pesam mais — veja "E se o custo for maior?".
- **Anos negativos:** 2021.
- **As compras carregam o setup:** compras +0,28R × vendas +0,13R por operação.
- **Acerto de ~23%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 13/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
