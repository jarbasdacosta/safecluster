---
title: Primeira Vela de 80 Minutos
date: 2026-11-10
tags: [setup, win]
---

**Se a primeira vela de 80 minutos do dia fecha forte (quase sem sombra contra), entra a favor às 10h20 com alvo longo, break even e stop móvel.**

🟡 promissor · dia escolhido pelo autor · Mini índice (WIN) · gráfico de 80 minutos · só a primeira vela do dia (9h00–10h20)

🎬 **Vídeo de origem:** [Arthur 777 – "encontrei algo muito estranho no mini índice"](https://youtu.be/UFLCVkzcghU) · testado de forma independente nos nossos dados em 07/11/2026 · página gerada em 10/11/2026 19:40 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 38.868** na versão ATR 0,15 / 1,28 com o capital no CDI (+31% ao ano · pior queda −13%)
> - **R\$ 28.443** na versão como no vídeo: ter–qui, pontos fixos com o capital no CDI (+23% ao ano · pior queda −14%)
> - **R\$ 27.752** na versão ter–qui, sombra em ATR com o capital no CDI (+23% ao ano · pior queda −17%)
> - **R\$ 23.927** na versão todos os dias, sombra em ATR com o capital no CDI (+19% ao ano · pior queda −21%)
> - **R\$ 39.201** na versão 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR com o capital no CDI (+32% ao ano · pior queda −9%)
> - **R\$ 18.211** só no CDI (+13% ao ano)
> - **R\$ 16.233** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 66.820** na versão ATR 0,15 / 1,28 **arriscando 1% do capital por operação** (+46% ao ano · pior queda −14%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **5 operações** · acerto 20% · **+0,14R por operação** (no teste 2024 →: +0,45R) · líquido +358 pts (R\$ 72 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/primeira-vela-80-min_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Primeira vela** | a vela das 9h00 (80 min) **fecha positiva** | a vela das 9h00 **fecha negativa** |
| **2. Força** | **sombra superior** de no máximo 300 pts (em ATR aqui) | **sombra inferior** de no máximo 300 pts |
| **Entrada** | compra a mercado às 10h20 | vende a mercado às 10h20 |
| **Stop · alvo** | 600 · 2.500 pts no vídeo → em ATR aqui | igual |
| **Break even** | quando uma vela de 80 min fecha no lucro, o stop vai para o preço de entrada | igual |
| **Stop móvel** | depois de uma vela fechar com 300+ pts de lucro, stop na mínima de cada vela que fecha | na máxima de cada vela que fecha |

- **Versão principal (escolhida só pelo treino): ATR 0,15 / 1,28** — stop 0,154 ATR · alvo 1,285 ATR (8,3× o stop); hoje ≈ 661 pts de stop e 5.510 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.289 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,15 / 1,28** (principal) | stop 0,154 ATR · alvo 1,285 ATR (8,3× o stop) | 22% · 5,12 | +41,9 → +119,0 | +31,4% | −12,8% |
| **como no vídeo: ter–qui, pontos fixos** | stop 600 · alvo 2.500 pts | 35% · 2,28 | −1,1 → +97,3 | +23,4% | −14,4% |
| **ter–qui, sombra em ATR** | stop 600 · alvo 2.500 pts | 33% · 2,38 | −19,8 → +104,5 | +22,8% | −16,9% |
| **todos os dias, sombra em ATR** | stop 600 · alvo 2.500 pts | 32% · 2,28 | −4,5 → +44,0 | +19,2% | −21,1% |
| **1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR** | stop 300 · alvo 2.500 pts | 21% · 5,30 | +51,6 → +111,8 | +31,6% | −9,0% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,15 / 1,28

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 208 | 269 | 477 |
| Operações por mês | 7,7 | 7,7 | 7,7 |
| Taxa de acerto | 19,2% | 23,4% | 21,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 63% / 14% | 3% / 56% / 17% | 2% / 59% / 16% |
| Stop típico | 300 pts | 287 pts | 294 pts |
| Ganho médio · perda média | +1.311 · −260 pts | +1.386 · −268 pts | +1.357 · −265 pts |
| Payoff (ganho médio ÷ perda média) | 5,04 | 5,16 | 5,12 |
| Fator de lucro (total ganho ÷ total perdido) | 1,20 | 1,58 | 1,41 |
| Resultado médio por operação | +41,9 pts (+56,9 sem custo) | +119,0 pts (+134,0 sem custo) | +85,4 pts (+100,4 sem custo) |
| **Lucro líquido** | **+8.716 pts · R\$ 1.743** | **+32.011 pts · R\$ 6.402** | **+40.727 pts · R\$ 8.145** |
| Pior queda (drawdown) | −8.323 pts · −R\$ 1.665 | −8.159 pts · −R\$ 1.632 | −8.323 pts · −R\$ 1.665 |
| Maior sequência de perdas | 19 seguidas | 19 seguidas | 19 seguidas |
| Compras: acerto · lucro | 21% · +8.696 pts | 24% · +14.396 pts | 23% · +23.091 pts |
| Vendas: acerto · lucro | 17% · +20 pts | 23% · +17.616 pts | 21% · +17.636 pts |

### Versão como no vídeo: ter–qui, pontos fixos

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 206 | 258 | 464 |
| Operações por mês | 7,6 | 7,4 | 7,5 |
| Taxa de acerto | 32,5% | 36,4% | 34,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 44% / 1% | 3% / 37% / 7% | 3% / 40% / 5% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +834 · −403 pts | +915 · −371 pts | +881 · −386 pts |
| Payoff (ganho médio ÷ perda média) | 2,07 | 2,46 | 2,28 |
| Fator de lucro (total ganho ÷ total perdido) | 1,00 | 1,41 | 1,21 |
| Resultado médio por operação | −1,1 pts (+13,9 sem custo) | +97,3 pts (+112,3 sem custo) | +53,6 pts (+68,6 sem custo) |
| **Lucro líquido** | **−235 pts · −R\$ 47** | **+25.100 pts · R\$ 5.020** | **+24.865 pts · R\$ 4.973** |
| Pior queda (drawdown) | −11.090 pts · −R\$ 2.218 | −6.225 pts · −R\$ 1.245 | −11.090 pts · −R\$ 2.218 |
| Maior sequência de perdas | 11 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 33% · −1.580 pts | 34% · +10.480 pts | 33% · +8.900 pts |
| Vendas: acerto · lucro | 32% · +1.345 pts | 39% · +14.620 pts | 36% · +15.965 pts |

### Versão ter–qui, sombra em ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 208 | 269 | 477 |
| Operações por mês | 7,7 | 7,7 | 7,7 |
| Taxa de acerto | 30,3% | 35,7% | 33,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 46% / 2% | 4% / 40% / 7% | 3% / 43% / 5% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +874 · −408 pts | +1.003 · −394 pts | +952 · −401 pts |
| Payoff (ganho médio ÷ perda média) | 2,14 | 2,54 | 2,38 |
| Fator de lucro (total ganho ÷ total perdido) | 0,93 | 1,41 | 1,19 |
| Resultado médio por operação | −19,8 pts (−4,8 sem custo) | +104,5 pts (+119,5 sem custo) | +50,3 pts (+65,3 sem custo) |
| **Lucro líquido** | **−4.120 pts · −R\$ 824** | **+28.100 pts · R\$ 5.620** | **+23.980 pts · R\$ 4.796** |
| Pior queda (drawdown) | −12.555 pts · −R\$ 2.511 | −6.015 pts · −R\$ 1.203 | −12.555 pts · −R\$ 2.511 |
| Maior sequência de perdas | 14 seguidas | 11 seguidas | 14 seguidas |
| Compras: acerto · lucro | 31% · −3.345 pts | 36% · +13.755 pts | 33% · +10.410 pts |
| Vendas: acerto · lucro | 30% · −775 pts | 36% · +14.345 pts | 33% · +13.570 pts |

### Versão todos os dias, sombra em ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 349 | 451 | 800 |
| Operações por mês | 12,9 | 12,9 | 12,9 |
| Taxa de acerto | 31,2% | 33,0% | 32,2% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 45% / 4% | 3% / 43% / 7% | 3% / 44% / 6% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +883 · −407 pts | +954 · −405 pts | +924 · −406 pts |
| Payoff (ganho médio ÷ perda média) | 2,17 | 2,36 | 2,28 |
| Fator de lucro (total ganho ÷ total perdido) | 0,98 | 1,16 | 1,08 |
| Resultado médio por operação | −4,5 pts (+10,5 sem custo) | +44,0 pts (+59,0 sem custo) | +22,9 pts (+37,9 sem custo) |
| **Lucro líquido** | **−1.555 pts · −R\$ 311** | **+19.855 pts · R\$ 3.971** | **+18.300 pts · R\$ 3.660** |
| Pior queda (drawdown) | −11.440 pts · −R\$ 2.288 | −15.235 pts · −R\$ 3.047 | −15.235 pts · −R\$ 3.047 |
| Maior sequência de perdas | 12 seguidas | 16 seguidas | 16 seguidas |
| Compras: acerto · lucro | 31% · −5.110 pts | 35% · +15.490 pts | 33% · +10.380 pts |
| Vendas: acerto · lucro | 31% · +3.555 pts | 31% · +4.365 pts | 31% · +7.920 pts |

### Versão 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 208 | 269 | 477 |
| Operações por mês | 7,7 | 7,7 | 7,7 |
| Taxa de acerto | 19,7% | 22,7% | 21,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 62% / 14% | 4% / 59% / 16% | 3% / 61% / 15% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +1.274 · −249 pts | +1.331 · −246 pts | +1.308 · −247 pts |
| Payoff (ganho médio ÷ perda média) | 5,13 | 5,42 | 5,30 |
| Fator de lucro (total ganho ÷ total perdido) | 1,26 | 1,59 | 1,44 |
| Resultado médio por operação | +51,6 pts (+66,6 sem custo) | +111,8 pts (+126,8 sem custo) | +85,5 pts (+100,5 sem custo) |
| **Lucro líquido** | **+10.725 pts · R\$ 2.145** | **+30.065 pts · R\$ 6.013** | **+40.790 pts · R\$ 8.158** |
| Pior queda (drawdown) | −7.015 pts · −R\$ 1.403 | −4.595 pts · −R\$ 919 | −7.015 pts · −R\$ 1.403 |
| Maior sequência de perdas | 19 seguidas | 14 seguidas | 19 seguidas |
| Compras: acerto · lucro | 21% · +9.130 pts | 22% · +14.510 pts | 22% · +23.640 pts |
| Vendas: acerto · lucro | 18% · +1.595 pts | 23% · +15.555 pts | 21% · +17.150 pts |

![Pontos acumulados com 1 contrato](setups/img/primeira-vela-80-min_pontos.png)

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
| **ATR 0,15 / 1,28** | **R\$ 38.868** · +31,4% | −12,8% | 15,2% · 1,08 | 62% · 59% | −4,0% · +13,8% |
| **como no vídeo: ter–qui, pontos fixos** | **R\$ 28.443** · +23,4% | −14,4% | 14,5% · 0,69 | 51% · 51% | −6,3% · +10,1% |
| **ter–qui, sombra em ATR** | **R\$ 27.752** · +22,8% | −16,9% | 15,4% · 0,63 | 54% · 51% | −6,3% · +13,2% |
| **todos os dias, sombra em ATR** | **R\$ 23.927** · +19,2% | −21,1% | 19,5% · 0,38 | 51% · 51% | −10,4% · +15,5% |
| **1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR** | **R\$ 39.201** · +31,6% | −9,0% | 14,1% · 1,16 | 61% · 57% | −3,9% · +13,5% |
| **risco 1%** | **R\$ 66.820** · +46,5% | −13,6% | 22,4% · 1,28 | 64% · 67% | −6,8% · +17,3% |
| **pura** | **R\$ 21.350** · +16,5% | −15,6% | 15,2% · 0,28 | 51% · 48% | −5,0% · +12,7% |
| **CDI** | **R\$ 18.211** · +12,8% | +0,0% | 0,1% · — | — · 44% | +0,3% · +1,3% |
| **Ibovespa** | **R\$ 16.233** · +10,2% | −20,9% | 18,7% · −0,03 | 56% · — | −11,5% · +12,6% |

![Quedas](setups/img/primeira-vela-80-min_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,15 / 1,28** | +7,7% | +9,1% | +27,7% | +37,8% | +46,7% | +28,2% | **+288,7%** (+31,4% · R\$ 38.868) |
| **como no vídeo: ter–qui, pontos fixos** | +9,8% | −0,2% | +14,3% | +32,8% | +39,4% | +22,7% | **+184,4%** (+23,4% · R\$ 28.443) |
| **ter–qui, sombra em ATR** | +1,6% | −0,4% | +14,3% | +32,9% | +47,4% | +22,4% | **+177,5%** (+22,8% · R\$ 27.752) |
| **todos os dias, sombra em ATR** | −1,4% | +3,2% | +18,0% | +32,0% | +54,7% | −2,3% | **+139,3%** (+19,2% · R\$ 23.927) |
| **1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR** | +6,5% | +14,7% | +27,8% | +29,8% | +44,5% | +33,7% | **+292,0%** (+31,6% · R\$ 39.201) |
| **risco 1%** | +10,2% | +7,2% | +36,6% | +73,1% | +77,3% | +35,0% | **+568,2%** (+46,5% · R\$ 66.820) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,0% | **+82,1%** (+12,8% · R\$ 18.211) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +6,3% | **+62,3%** (+10,2% · R\$ 16.233) |
| *Quem ganhou* | *risco 1%* | *1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 10/11/2026.

![Retorno por ano](setups/img/primeira-vela-80-min_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,15 / 1,28 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +1,9% | +2,2% | +0,6% | −3,4% |
> | dez/2021 | +5,6% | +7,8% | +0,7% | +2,9% |
> | jan/2022 | +2,1% | +3,2% | +0,7% | +7,0% |
> | fev/2022 | −0,0% | −0,8% | +0,8% | +0,9% |
> | mar/2022 | −3,1% | −5,0% | +0,9% | +6,1% |
> | abr/2022 | −0,9% | −2,2% | +0,8% | −10,1% |
> | mai/2022 | +13,8% | +17,3% | +1,0% | +3,2% |
> | jun/2022 | −4,0% | −6,6% | +1,0% | −11,5% |
> | jul/2022 | −0,2% | −1,6% | +1,0% | +4,7% |
> | ago/2022 | +6,7% | +10,8% | +1,2% | +6,2% |
> | set/2022 | −1,0% | −1,9% | +1,1% | +0,5% |
> | out/2022 | −2,9% | −4,0% | +1,0% | +5,5% |
> | nov/2022 | −3,1% | −3,0% | +1,0% | −3,1% |
> | dez/2022 | +2,8% | +3,3% | +1,1% | −2,4% |
> | jan/2023 | +4,3% | +5,1% | +1,1% | +3,4% |
> | fev/2023 | +1,3% | +1,4% | +0,9% | −7,5% |
> | mar/2023 | +1,7% | +1,8% | +1,2% | −2,9% |
> | abr/2023 | −0,7% | −1,3% | +0,9% | +2,5% |
> | mai/2023 | +4,3% | +6,8% | +1,1% | +3,7% |
> | jun/2023 | +3,0% | +4,7% | +1,1% | +9,0% |
> | jul/2023 | +5,8% | +9,2% | +1,1% | +3,3% |
> | ago/2023 | −3,6% | −6,8% | +1,1% | −5,1% |
> | set/2023 | −0,8% | −2,2% | +1,0% | +0,7% |
> | out/2023 | +1,2% | +1,2% | +1,0% | −2,9% |
> | nov/2023 | +9,6% | +15,9% | +0,9% | +12,5% |
> | dez/2023 | −0,7% | −2,4% | +0,9% | +5,4% |
> | jan/2024 | +7,5% | +14,6% | +1,0% | −4,8% |
> | fev/2024 | +1,8% | +2,9% | +0,8% | +1,0% |
> | mar/2024 | +0,8% | +0,6% | +0,8% | −0,7% |
> | abr/2024 | +2,8% | +3,8% | +0,9% | −1,7% |
> | mai/2024 | +4,6% | +8,9% | +0,8% | −3,0% |
> | jun/2024 | +1,5% | +3,1% | +0,8% | +1,5% |
> | jul/2024 | +3,6% | +8,6% | +0,9% | +3,0% |
> | ago/2024 | +6,2% | +11,5% | +0,9% | +6,5% |
> | set/2024 | +0,8% | +1,4% | +0,8% | −3,1% |
> | out/2024 | −1,7% | −4,2% | +0,9% | −1,6% |
> | nov/2024 | +2,5% | +3,3% | +0,8% | −3,1% |
> | dez/2024 | +2,2% | +3,1% | +0,8% | −4,3% |
> | jan/2025 | +6,4% | +10,2% | +1,0% | +4,9% |
> | fev/2025 | +2,1% | +2,9% | +1,0% | −2,6% |
> | mar/2025 | +5,2% | +8,0% | +1,0% | +6,1% |
> | abr/2025 | +1,7% | +2,6% | +1,1% | +3,7% |
> | mai/2025 | +5,9% | +9,8% | +1,1% | +1,5% |
> | jun/2025 | +0,2% | +0,1% | +1,1% | +1,3% |
> | jul/2025 | +2,5% | +3,0% | +1,3% | −4,2% |
> | ago/2025 | +6,8% | +9,7% | +1,2% | +6,3% |
> | set/2025 | +2,9% | +4,0% | +1,2% | +3,4% |
> | out/2025 | +1,4% | +1,3% | +1,3% | +2,3% |
> | nov/2025 | +5,5% | +8,8% | +1,1% | +6,4% |
> | dez/2025 | −1,2% | −0,9% | +1,1% | +1,3% |
> | jan/2026 | +5,6% | +8,1% | +1,2% | +12,6% |
> | fev/2026 | +13,8% | +11,6% | +1,0% | +4,1% |
> | mar/2026 | −1,7% | −1,0% | +1,2% | −0,7% |
> | abr/2026 | +5,1% | +5,9% | +1,1% | −0,1% |
> | mai/2026 | −1,8% | −2,0% | +1,1% | −7,2% |
> | jun/2026 | −0,4% | −0,5% | +1,1% | −1,0% |
> | jul/2026 | +10,1% | +12,2% | +1,2% | +3,5% |
> | ago/2026 | +4,8% | +4,9% | +1,1% | −0,3% |
> | set/2026 | −3,5% | −3,0% | +1,1% | +5,0% |
> | out/2026 | −2,9% | −2,4% | +1,1% | −9,9% |
> | nov/2026 | −2,5% | −1,7% | +0,3% | +2,0% |
> | **Acumulado** | **+288,7%** | **+568,2%** | **+82,1%** | **+62,3%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,15 / 1,28** | +50% ao ano · queda −26% | +31% ao ano · queda −13% | +22% ao ano · queda −5% | +17% ao ano · queda −2% |
| **como no vídeo: ter–qui, pontos fixos** | +32% ao ano · queda −32% | +23% ao ano · queda −14% | +18% ao ano · queda −5% | +16% ao ano · queda −1% |
| **ter–qui, sombra em ATR** | +31% ao ano · queda −36% | +23% ao ano · queda −17% | +18% ao ano · queda −6% | +15% ao ano · queda −1% |
| **todos os dias, sombra em ATR** | +21% ao ano · queda −44% | +19% ao ano · queda −21% | +16% ao ano · queda −9% | +15% ao ano · queda −3% |
| **1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR** | +51% ao ano · queda −20% | +32% ao ano · queda −9% | +22% ao ano · queda −3% | +17% ao ano · queda −1% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 07/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 463 operações, 35% de acerto e fator de lucro 1,29. O vídeo mostra: stop 300: 677 operações, 21% de acerto, payoff 5,65; stop 600: fator de lucro 1,61, 27% de acerto (2018–2026, só terça a quinta, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,14R por operação no treino (p 0,499) e +0,46R no teste (p 0,008). |
| **É sorte de parâmetro?** | 7 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,04 a +0,46R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,14 → +0,46R · sem o filtro da sombra: +0,03 → +0,31R · sombra máxima de 150: +0,56 → +0,41R · sombra máxima de 500: +0,07 → +0,34R · todos os dias da semana: +0,09 → +0,20R · sem break even: +0,14 → +0,43R · sem stop móvel: +0,15 → +0,44R · sem break even e sem stop móvel: +0,15 → +0,41R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,14 → +0,46R · 25 pts: +0,10 → +0,42R · 30 pts: +0,09 → +0,41R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,15 / 1,28 foi de −R\$ 1.665 por contrato (começou em mai/2022, recuperada em jul/2023); 19 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,15 / 1,28 + CDI ficou abaixo do CDI em 38% dos meses. O resultado aparece no ano.
- **Dia da semana escolhido pelo autor (terça a quinta):** o vídeo testou todos os dias no mesmo período que usamos e mostrou o que deu certo — pode ser sorte. Por regra, fica no máximo como promissor e **fora da carteira recomendada** até os dados novos confirmarem.
- **Anos negativos:** 2022.
- **Acerto de ~22%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 10/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
