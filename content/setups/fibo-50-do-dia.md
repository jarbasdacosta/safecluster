---
title: Pullback no 50% do dia
date: 2026-11-26
tags: [setup, win]
---

**Na primeira hora e meia, se o dia já subiu bem e a vela corrige até a metade do range do dia e fecha positiva acima das médias, entra a favor da tendência com stop móvel.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · das 10h às 11h30

🎬 **Vídeo de origem:** [usei a retração de fibo e achei um padrão bizarro](https://youtu.be/krHN5ziozlA) · testado de forma independente nos nossos dados em 21/11/2026 · página gerada em 26/11/2026 20:22 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 118.089** arriscando **1% do capital** por operação (+3% ao ano · pior queda −4% · cauda −7%)
> - **R\$ 139.239** arriscando **2% do capital** por operação (+7% ao ano · pior queda −9% · cauda −13%)
>
> - **R\$ 182.850** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **3 operações** · acerto 67% · **+0,53R por operação** (no teste 2024 →: +0,07R) · líquido +3.763 pts (R\$ 753 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/fibo-50-do-dia_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Médias** | fechamento **acima** das médias de **5** e de **200** | fechamento **abaixo** das duas |
| **2. Retração** | a vela **toca a linha de 50%** do range do dia e **fecha acima** dela | toca a linha e **fecha abaixo** dela |
| **3. Cor da vela** | vela **positiva** | vela **negativa** |
| **4. Força do dia** | fechamento pelo menos **700 pts acima** da abertura do dia (em ATR aqui) | pelo menos **700 pts abaixo** |
| **5. Horário** | só as velas das **10h às 11h30** | igual |
| **Entrada** | **a mercado** na abertura da vela seguinte | igual |
| **Alvo · stop** | 2.500 · 1.500 pts no vídeo → em ATR aqui | igual |
| **Break even · stop móvel** | **300 pts** de lucro trazem o stop para a entrada; de **1.000 pts** em diante o stop segue a mínima de cada vela | igual, pela máxima |

- **Versão principal (escolhida só pelo treino): ATR 0,57 / 1,29** — stop 0,566 ATR · alvo 1,286 ATR (2,3× o stop); hoje ≈ 1.667 pts de stop e 3.790 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 2.946 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,57 / 1,29** (principal) | stop 0,566 ATR · alvo 1,286 ATR (2,3× o stop) | 42% · 1,86 | +154,0 → +59,5 | +22,2% | −12,6% |
| **como no vídeo: pontos fixos** | stop 1.500 · alvo 2.500 pts | 41% · 1,91 | +74,8 → +106,5 | +23,1% | −10,5% |
| **distância da abertura em ATR** | stop 1.500 · alvo 2.500 pts | 43% · 1,85 | +117,5 → +94,2 | +23,1% | −11,6% |
| **sem stop móvel (só break even)** | stop 1.500 · alvo 2.500 pts | 39% · 2,16 | +139,6 → +77,0 | +22,8% | −15,0% |
| **sem break even nem stop móvel** | stop 1.500 · alvo 2.500 pts | 54% · 1,02 | +107,0 → +45,0 | +19,0% | −18,3% |
| **stop 1.100 (variação do vídeo)** | stop 1.100 · alvo 2.500 pts | 42% · 1,93 | +115,2 → +105,1 | +23,9% | −12,9% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,57 / 1,29

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 140 | 228 |
| Operações por mês | 3,3 | 4,0 | 3,7 |
| Taxa de acerto | 47,7% | 38,6% | 42,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 0% / 16% / 33% | 0% / 17% / 27% | 0% / 17% / 29% |
| Stop típico | 1.075 pts | 1.084 pts | 1.077 pts |
| Ganho médio · perda média | +745 · −386 pts | +980 · −518 pts | +877 · −472 pts |
| Payoff (ganho médio ÷ perda média) | 1,93 | 1,89 | 1,86 |
| Fator de lucro (total ganho ÷ total perdido) | 1,76 | 1,19 | 1,35 |
| Resultado médio por operação | +154,0 pts (+169,0 sem custo) | +59,5 pts (+74,5 sem custo) | +96,0 pts (+111,0 sem custo) |
| **Lucro líquido** | **+13.554 pts · R\$ 2.711** | **+8.328 pts · R\$ 1.666** | **+21.883 pts · R\$ 4.377** |
| Pior queda (drawdown) | −4.567 pts · −R\$ 913 | −8.608 pts · −R\$ 1.722 | −8.608 pts · −R\$ 1.722 |
| Maior sequência de perdas | 6 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 53% · +6.997 pts | 46% · +9.464 pts | 49% · +16.461 pts |
| Vendas: acerto · lucro | 41% · +6.557 pts | 30% · −1.135 pts | 34% · +5.422 pts |

### Versão como no vídeo: pontos fixos

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 99 | 156 | 255 |
| Operações por mês | 3,7 | 4,5 | 4,1 |
| Taxa de acerto | 41,4% | 41,0% | 41,2% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 10% / 36% | 4% / 15% / 27% | 3% / 13% / 31% |
| Stop típico | 1.500 pts | 1.500 pts | 1.500 pts |
| Ganho médio · perda média | +768 · −415 pts | +998 · −514 pts | +908 · −476 pts |
| Payoff (ganho médio ÷ perda média) | 1,85 | 1,94 | 1,91 |
| Fator de lucro (total ganho ÷ total perdido) | 1,31 | 1,35 | 1,34 |
| Resultado médio por operação | +74,8 pts (+89,8 sem custo) | +106,5 pts (+121,5 sem custo) | +94,2 pts (+109,2 sem custo) |
| **Lucro líquido** | **+7.405 pts · R\$ 1.481** | **+16.620 pts · R\$ 3.324** | **+24.025 pts · R\$ 4.805** |
| Pior queda (drawdown) | −4.885 pts · −R\$ 977 | −7.730 pts · −R\$ 1.546 | −7.730 pts · −R\$ 1.546 |
| Maior sequência de perdas | 6 seguidas | 9 seguidas | 9 seguidas |
| Compras: acerto · lucro | 49% · +5.140 pts | 49% · +14.085 pts | 49% · +19.225 pts |
| Vendas: acerto · lucro | 32% · +2.265 pts | 32% · +2.535 pts | 32% · +4.800 pts |

### Versão distância da abertura em ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 141 | 229 |
| Operações por mês | 3,3 | 4,0 | 3,7 |
| Taxa de acerto | 44,3% | 41,8% | 42,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 7% / 39% | 3% / 15% / 30% | 2% / 12% / 34% |
| Stop típico | 1.500 pts | 1.500 pts | 1.500 pts |
| Ganho médio · perda média | +736 · −375 pts | +958 · −527 pts | +869 · −470 pts |
| Payoff (ganho médio ÷ perda média) | 1,96 | 1,82 | 1,85 |
| Fator de lucro (total ganho ÷ total perdido) | 1,56 | 1,31 | 1,38 |
| Resultado médio por operação | +117,5 pts (+132,5 sem custo) | +94,2 pts (+109,2 sem custo) | +103,2 pts (+118,2 sem custo) |
| **Lucro líquido** | **+10.340 pts · R\$ 2.068** | **+13.285 pts · R\$ 2.657** | **+23.625 pts · R\$ 4.725** |
| Pior queda (drawdown) | −4.560 pts · −R\$ 912 | −7.960 pts · −R\$ 1.592 | −7.960 pts · −R\$ 1.592 |
| Maior sequência de perdas | 6 seguidas | 9 seguidas | 9 seguidas |
| Compras: acerto · lucro | 49% · +5.415 pts | 49% · +11.465 pts | 49% · +16.880 pts |
| Vendas: acerto · lucro | 38% · +4.925 pts | 34% · +1.820 pts | 36% · +6.745 pts |

### Versão sem stop móvel (só break even)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 141 | 229 |
| Operações por mês | 3,3 | 4,0 | 3,7 |
| Taxa de acerto | 39,8% | 38,3% | 38,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 7% / 52% | 4% / 15% / 48% | 4% / 12% / 50% |
| Stop típico | 1.500 pts | 1.500 pts | 1.500 pts |
| Ganho médio · perda média | +877 · −347 pts | +1.003 · −498 pts | +954 · −441 pts |
| Payoff (ganho médio ÷ perda média) | 2,52 | 2,02 | 2,16 |
| Fator de lucro (total ganho ÷ total perdido) | 1,67 | 1,25 | 1,37 |
| Resultado médio por operação | +139,6 pts (+154,6 sem custo) | +77,0 pts (+92,0 sem custo) | +101,1 pts (+116,1 sem custo) |
| **Lucro líquido** | **+12.285 pts · R\$ 2.457** | **+10.860 pts · R\$ 2.172** | **+23.145 pts · R\$ 4.629** |
| Pior queda (drawdown) | −4.560 pts · −R\$ 912 | −10.730 pts · −R\$ 2.146 | −10.730 pts · −R\$ 2.146 |
| Maior sequência de perdas | 7 seguidas | 9 seguidas | 9 seguidas |
| Compras: acerto · lucro | 45% · +6.255 pts | 42% · +7.010 pts | 43% · +13.265 pts |
| Vendas: acerto · lucro | 33% · +6.030 pts | 34% · +3.850 pts | 34% · +9.880 pts |

### Versão sem break even nem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 141 | 229 |
| Operações por mês | 3,3 | 4,0 | 3,7 |
| Taxa de acerto | 59,1% | 50,4% | 53,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 11% / 85% | 4% / 16% / 79% | 4% / 14% / 82% |
| Stop típico | 1.500 pts | 1.500 pts | 1.500 pts |
| Ganho médio · perda média | +759 · −834 pts | +886 · −808 pts | +832 · −817 pts |
| Payoff (ganho médio ÷ perda média) | 0,91 | 1,10 | 1,02 |
| Fator de lucro (total ganho ÷ total perdido) | 1,31 | 1,11 | 1,18 |
| Resultado médio por operação | +107,0 pts (+122,0 sem custo) | +45,0 pts (+60,0 sem custo) | +68,8 pts (+83,8 sem custo) |
| **Lucro líquido** | **+9.415 pts · R\$ 1.883** | **+6.340 pts · R\$ 1.268** | **+15.755 pts · R\$ 3.151** |
| Pior queda (drawdown) | −8.305 pts · −R\$ 1.661 | −12.130 pts · −R\$ 2.426 | −12.130 pts · −R\$ 2.426 |
| Maior sequência de perdas | 5 seguidas | 5 seguidas | 5 seguidas |
| Compras: acerto · lucro | 61% · +6.160 pts | 55% · +5.215 pts | 58% · +11.375 pts |
| Vendas: acerto · lucro | 56% · +3.255 pts | 45% · +1.125 pts | 49% · +4.380 pts |

### Versão stop 1.100 (variação do vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 143 | 231 |
| Operações por mês | 3,3 | 4,1 | 3,7 |
| Taxa de acerto | 44,3% | 41,3% | 42,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 17% / 28% | 3% / 22% / 26% | 2% / 20% / 27% |
| Stop típico | 1.100 pts | 1.100 pts | 1.100 pts |
| Ganho médio · perda média | +736 · −379 pts | +958 · −494 pts | +869 · −451 pts |
| Payoff (ganho médio ÷ perda média) | 1,94 | 1,94 | 1,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,55 | 1,36 | 1,42 |
| Resultado médio por operação | +115,2 pts (+130,2 sem custo) | +105,1 pts (+120,1 sem custo) | +109,0 pts (+124,0 sem custo) |
| **Lucro líquido** | **+10.140 pts · R\$ 2.028** | **+15.035 pts · R\$ 3.007** | **+25.175 pts · R\$ 5.035** |
| Pior queda (drawdown) | −3.920 pts · −R\$ 784 | −8.560 pts · −R\$ 1.712 | −8.560 pts · −R\$ 1.712 |
| Maior sequência de perdas | 6 seguidas | 10 seguidas | 10 seguidas |
| Compras: acerto · lucro | 49% · +4.885 pts | 49% · +15.850 pts | 49% · +20.735 pts |
| Vendas: acerto · lucro | 38% · +5.255 pts | 33% · −815 pts | 35% · +4.440 pts |

![Pontos acumulados com 1 contrato](setups/img/fibo-50-do-dia_pontos.png)

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
| **ATR 0,57 / 1,29** | **R\$ 27.319** · +22,2% | −12,6% | 12,2% · 0,71 | 56% · 56% | −7,9% · +9,7% |
| **como no vídeo: pontos fixos** | **R\$ 28.397** · +23,1% | −10,5% | 12,9% · 0,74 | 57% · 51% | −7,9% · +7,5% |
| **distância da abertura em ATR** | **R\$ 28.356** · +23,1% | −11,6% | 11,8% · 0,79 | 59% · 51% | −7,9% · +10,3% |
| **sem stop móvel (só break even)** | **R\$ 27.983** · +22,8% | −15,0% | 12,5% · 0,74 | 51% · 48% | −7,9% · +11,4% |
| **sem break even nem stop móvel** | **R\$ 23.954** · +19,0% | −18,3% | 13,6% · 0,46 | 57% · 51% | −10,7% · +11,4% |
| **stop 1.100 (variação do vídeo)** | **R\$ 29.319** · +23,9% | −12,9% | 11,4% · 0,88 | 57% · 51% | −5,6% · +10,3% |
| **risco 1%** | **R\$ 21.858** · +16,9% | −3,3% | 4,5% · 0,80 | 56% · 46% | −2,9% · +4,8% |
| **pura** | **R\$ 14.920** · +8,3% | −16,6% | 12,2% · −0,27 | 49% · 44% | −8,8% · +8,6% |
| **CDI** | **R\$ 18.313** · +12,8% | 0,0% | 0,1% · — | — · 44% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 16.750** · +10,8% | −21,5% | 18,8% · 0,00 | 56% · — | −11,5% · +12,6% |

![Quedas](setups/img/fibo-50-do-dia_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,57 / 1,29** | +3,5% | +46,3% | +10,2% | +14,2% | +28,7% | +11,4% | **+173,2%** (+22,2% · R\$ 27.319) |
| **como no vídeo: pontos fixos** | +5,0% | +26,5% | +10,7% | +22,0% | +26,7% | +24,8% | **+184,0%** (+23,1% · R\$ 28.397) |
| **distância da abertura em ATR** | +3,5% | +39,3% | +8,5% | +27,4% | +24,8% | +14,0% | **+183,6%** (+23,1% · R\$ 28.356) |
| **sem stop móvel (só break even)** | +1,3% | +49,4% | +7,3% | +25,2% | +30,8% | +5,3% | **+179,8%** (+22,8% · R\$ 27.983) |
| **sem break even nem stop móvel** | 0,0% | +52,0% | +0,4% | +17,7% | +29,7% | +2,9% | **+139,5%** (+19,0% · R\$ 23.954) |
| **stop 1.100 (variação do vídeo)** | +3,5% | +40,8% | +6,9% | +24,1% | +29,2% | +17,3% | **+193,2%** (+23,9% · R\$ 29.319) |
| **risco 1%** | +2,0% | +23,6% | +11,4% | +13,0% | +21,9% | +12,9% | **+118,6%** (+16,9% · R\$ 21.858) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,6% | **+83,1%** (+12,8% · R\$ 18.313) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +9,7% | **+67,5%** (+10,8% · R\$ 16.750) |
| *Quem ganhou* | *como no vídeo: pontos fixos* | *sem break even nem stop móvel* | *Ibovespa* | *distância da abertura em ATR* | *Ibovespa* | *como no vídeo: pontos fixos* | *stop 1.100 (variação do vídeo)* |

\* ano parcial: os dados vão de 01/11/2021 a 26/11/2026.

![Retorno por ano](setups/img/fibo-50-do-dia_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,57 / 1,29 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +0,6% | +0,6% | +0,6% | −3,4% |
> | dez/2021 | +2,9% | +1,5% | +0,7% | +2,9% |
> | jan/2022 | +0,6% | +0,7% | +0,7% | +7,0% |
> | fev/2022 | −0,7% | 0,0% | +0,8% | +0,9% |
> | mar/2022 | +4,1% | +2,1% | +0,9% | +6,1% |
> | abr/2022 | +4,7% | +2,8% | +0,8% | −10,1% |
> | mai/2022 | +3,4% | +1,9% | +1,0% | +3,2% |
> | jun/2022 | +5,4% | +3,0% | +1,0% | −11,5% |
> | jul/2022 | −7,9% | −2,9% | +1,0% | +4,7% |
> | ago/2022 | +6,4% | +3,7% | +1,2% | +6,2% |
> | set/2022 | −0,3% | +0,6% | +1,1% | +0,5% |
> | out/2022 | +5,6% | +2,7% | +1,0% | +5,5% |
> | nov/2022 | +9,0% | +3,1% | +1,0% | −3,1% |
> | dez/2022 | +9,7% | +3,9% | +1,1% | −2,4% |
> | jan/2023 | +0,5% | +0,9% | +1,1% | +3,4% |
> | fev/2023 | +0,9% | +0,9% | +0,9% | −7,5% |
> | mar/2023 | +3,5% | +2,2% | +1,2% | −2,9% |
> | abr/2023 | −1,8% | −0,2% | +0,9% | +2,5% |
> | mai/2023 | −3,6% | −1,1% | +1,1% | +3,7% |
> | jun/2023 | +2,4% | +1,7% | +1,1% | +9,0% |
> | jul/2023 | +5,9% | +3,4% | +1,1% | +3,3% |
> | ago/2023 | +3,4% | +2,2% | +1,1% | −5,1% |
> | set/2023 | −0,2% | +0,3% | +1,0% | +0,7% |
> | out/2023 | −2,2% | −0,7% | +1,0% | −2,9% |
> | nov/2023 | +3,5% | +2,2% | +0,9% | +12,5% |
> | dez/2023 | −2,0% | −0,8% | +0,9% | +5,4% |
> | jan/2024 | +2,3% | +1,7% | +1,0% | −4,8% |
> | fev/2024 | +4,5% | +2,7% | +0,8% | +1,0% |
> | mar/2024 | +1,8% | +1,4% | +0,8% | −0,7% |
> | abr/2024 | +2,1% | +1,9% | +0,9% | −1,7% |
> | mai/2024 | −1,6% | −0,6% | +0,8% | −3,0% |
> | jun/2024 | +0,1% | +0,4% | +0,8% | +1,5% |
> | jul/2024 | −0,9% | +0,2% | +0,9% | +3,0% |
> | ago/2024 | +0,4% | +0,4% | +0,9% | +6,5% |
> | set/2024 | +0,8% | +0,8% | +0,8% | −3,1% |
> | out/2024 | −0,9% | −0,1% | +0,9% | −1,6% |
> | nov/2024 | +3,8% | +2,5% | +0,8% | −3,1% |
> | dez/2024 | +1,1% | +0,9% | +0,8% | −4,3% |
> | jan/2025 | +2,4% | +1,5% | +1,0% | +4,9% |
> | fev/2025 | +0,9% | +1,0% | +1,0% | −2,6% |
> | mar/2025 | +7,5% | +4,0% | +1,0% | +6,1% |
> | abr/2025 | +0,4% | +0,9% | +1,1% | +3,7% |
> | mai/2025 | +2,7% | +2,0% | +1,1% | +1,5% |
> | jun/2025 | −3,5% | −0,9% | +1,1% | +1,3% |
> | jul/2025 | +3,1% | +2,2% | +1,3% | −4,2% |
> | ago/2025 | +4,1% | +2,5% | +1,2% | +6,3% |
> | set/2025 | −1,8% | −0,3% | +1,2% | +3,4% |
> | out/2025 | +1,8% | +1,5% | +1,3% | +2,3% |
> | nov/2025 | +8,0% | +4,8% | +1,1% | +6,4% |
> | dez/2025 | +0,4% | +0,9% | +1,1% | +1,3% |
> | jan/2026 | +4,9% | +2,3% | +1,2% | +12,6% |
> | fev/2026 | −1,5% | +0,5% | +1,0% | +4,1% |
> | mar/2026 | +3,6% | +2,1% | +1,2% | −0,7% |
> | abr/2026 | +3,9% | +1,8% | +1,1% | −0,1% |
> | mai/2026 | −2,5% | +0,1% | +1,1% | −7,2% |
> | jun/2026 | +1,8% | +1,3% | +1,1% | −1,0% |
> | jul/2026 | −3,5% | −0,3% | +1,2% | +3,5% |
> | ago/2026 | −4,8% | −0,6% | +1,1% | −0,3% |
> | set/2026 | +5,5% | +2,7% | +1,1% | +5,0% |
> | out/2026 | +2,5% | +1,3% | +1,1% | −9,9% |
> | nov/2026 | +1,5% | +1,0% | +0,8% | +5,3% |
> | **Acumulado** | **+173,2%** | **+118,6%** | **+83,1%** | **+67,5%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,57 / 1,29** | +30% ao ano · queda −28% | +22% ao ano · queda −13% | +18% ao ano · queda −5% | +15% ao ano · queda −2% |
| **como no vídeo: pontos fixos** | +32% ao ano · queda −25% | +23% ao ano · queda −11% | +18% ao ano · queda −4% | +15% ao ano · queda −2% |
| **distância da abertura em ATR** | +32% ao ano · queda −26% | +23% ao ano · queda −12% | +18% ao ano · queda −4% | +15% ao ano · queda −2% |
| **sem stop móvel (só break even)** | +32% ao ano · queda −33% | +23% ao ano · queda −15% | +18% ao ano · queda −5% | +15% ao ano · queda −2% |
| **sem break even nem stop móvel** | +23% ao ano · queda −37% | +19% ao ano · queda −18% | +16% ao ano · queda −8% | +15% ao ano · queda −2% |
| **stop 1.100 (variação do vídeo)** | +34% ao ano · queda −27% | +24% ao ano · queda −13% | +18% ao ano · queda −5% | +16% ao ano · queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +11% ao ano, pior queda −22%.*

## O que os testes mostraram

*Testes de robustez rodados em 21/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 253 operações, 41% de acerto e fator de lucro 1,37. O vídeo mostra: 424 operações · ~76% de acerto · fator de lucro 1,59 · pior queda 8% (desde 2021, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,10R por operação no treino (p 0,065) e +0,07R no teste (p 0,023). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,04 a +0,11R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,10 → +0,07R · sem as médias: +0,10 → +0,03R · sem exigir a cor da vela: +0,10 → +0,07R · sem exigir o toque na linha de 50%: +0,04 → +0,02R · sem a força do dia (distância 0): +0,02 → +0,02R · sem break even nem stop móvel: +0,08 → +0,05R · o dia todo (9h–16h): +0,03 → +0,07R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,10 → +0,07R · 25 pts: +0,10 → +0,06R · 30 pts: +0,09 → +0,05R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,57 / 1,29 foi de −R\$ 1.722 por contrato (começou em mai/2026, ainda não recuperada); 6 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,57 / 1,29 + CDI ficou abaixo do CDI em 44% dos meses. O resultado aparece no ano.
- **Opera pouco** (~3,6 operações por mês): os números têm mais incerteza.
- **Anos negativos:** 2023.
- **As compras carregam o setup:** compras +0,11R × vendas +0,05R por operação.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 26/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

<!-- FICHA-COMPLETA-INICIO -->

## Todas as medidas

Os três modos de risco lado a lado. **dividido** é 1% repartido entre os setups da carteira; **1%** e **2%** são por operação, independentemente de quantos setups você opera.


<details>
<summary><b>Ficha completa de Pullback no 50% do dia</b></summary>

| Medida | Risco dividido | Risco 1% | Risco 2% |
|---|---|---|---|
| Operações | 228 | 228 | 228 |
| Operações por ano | 45 | 45 | 45 |
| Taxa de acerto | 42,1% | 42,1% | 42,1% |
| Payoff (ganho médio ÷ perda média) | 1,89 | 1,89 | 1,89 |
| Expectativa por operação (em R) | 0,080 | 0,080 | 0,080 |
| Fator de lucro | 1,37 | 1,37 | 1,37 |
| Pontos no período | 21.883 | 21.883 | 21.883 |
| Lucro com 1 contrato fixo | R\$ 4.377 | R\$ 4.377 | R\$ 4.377 |
| Capital final | R\$ 118.089 | R\$ 118.089 | R\$ 139.239 |
| Múltiplo do capital | 1,18× | 1,18× | 1,39× |
| Rentabilidade ao ano | +3,3% | +3,3% | +6,7% |
| Pior queda do período | -4,4% | -4,4% | -9,0% |
| Pior queda dentro de um ano | -4,4% | -4,4% | -9,0% |
| Cauda — pior em 1 de 20 anos | -6,5% | -6,5% | -12,8% |
| Maior tempo sem novo topo (dias) | 326 | 326 | 326 |
| Meses positivos | 55% | 55% | 55% |
| Sharpe | 0,84 | 0,84 | 0,81 |
| Sortino | 0,55 | 0,55 | 0,53 |
| Contratos na 1ª operação | 3 | 3 | 6 |
| Maior lote | 8 | 8 | 17 |
| Operações no teto de contratos | 0% | 0% | 0% |

</details>

<!-- FICHA-COMPLETA-FIM -->
