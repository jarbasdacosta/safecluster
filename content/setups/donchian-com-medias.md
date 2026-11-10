---
title: Donchian com Médias
date: 2026-11-10
tags: [setup, win]
---

**Quando o preço faz máxima de 20 velas com as três médias alinhadas abaixo, entra atrás da tendência: perde pouco muitas vezes e ganha muito de vez em quando.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · das 10h às 16h

🎬 **Vídeo de origem:** [Arthur 777 – "perde quase sempre, mas quando acerta paga tudo"](https://youtu.be/11F3W1gsnGM) · testado de forma independente nos nossos dados em 07/11/2026 · página gerada em 10/11/2026 19:40 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 59.326** na versão ATR 0,10 / 1,29 com o capital no CDI (+43% ao ano · pior queda −10%)
> - **R\$ 13.797** na versão como no vídeo (alvo 100, break even 300) com o capital no CDI (+7% ao ano · pior queda −12%)
> - **R\$ 46.483** na versão alvo 1.000 com o capital no CDI (+36% ao ano · pior queda −12%)
> - **R\$ 65.154** na versão alvo 2.500, stop 200 (payoff 5 do vídeo) com o capital no CDI (+46% ao ano · pior queda −11%)
> - **R\$ 13.797** na versão sem break even com o capital no CDI (+7% ao ano · pior queda −12%)
> - **R\$ 16.714** na versão canal de 40 períodos com o capital no CDI (+11% ao ano · pior queda −8%)
> - **R\$ 18.211** só no CDI (+13% ao ano)
> - **R\$ 16.233** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 210.428** na versão ATR 0,10 / 1,29 **arriscando 1% do capital por operação** (+84% ao ano · pior queda −24%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **8 operações** · acerto 38% · **+1,46R por operação** (no teste 2024 →: +0,24R) · líquido +4.993 pts (R\$ 999 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/donchian-com-medias_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Canal** | a vela fecha **acima da máxima das 20 velas anteriores** | fecha **abaixo da mínima das 20 anteriores** |
| **2. Médias** | fecha **acima** das médias exponenciais de 20, 50 e 200 | fecha **abaixo** das três |
| **3. Horário** | só das **10h às 16h** | igual |
| **Entrada** | **a mercado** na abertura da vela seguinte | igual |
| **Alvo · stop** | 100 · 300 pts no vídeo → em ATR aqui | igual |
| **Break even** | vela fechando com **300 pts** de lucro move o stop para a entrada | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,10 / 1,29** — stop 0,103 ATR · alvo 1,286 ATR (12,5× o stop); hoje ≈ 441 pts de stop e 5.517 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.289 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,10 / 1,29** (principal) | stop 0,103 ATR · alvo 1,286 ATR (12,5× o stop) | 20% · 5,33 | +45,6 → +50,2 | +43,0% | −10,5% |
| **como no vídeo (alvo 100, break even 300)** | stop 300 · alvo 100 pts | 77% · 0,27 | −8,8 → −2,0 | +6,7% | −12,2% |
| **alvo 1.000** | stop 300 · alvo 1.000 pts | 28% · 3,09 | +35,0 → +37,4 | +36,2% | −11,7% |
| **alvo 2.500, stop 200 (payoff 5 do vídeo)** | stop 200 · alvo 2.500 pts | 19% · 5,63 | +46,7 → +52,0 | +45,7% | −11,4% |
| **sem break even** | stop 300 · alvo 100 pts | 77% · 0,27 | −8,8 → −2,0 | +6,7% | −12,2% |
| **canal de 40 períodos** | stop 300 · alvo 100 pts | 78% · 0,27 | −6,1 → +1,6 | +10,9% | −8,3% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,10 / 1,29

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 577 | 741 | 1.318 |
| Operações por mês | 21,4 | 21,2 | 21,3 |
| Taxa de acerto | 20,3% | 19,3% | 19,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 67% / 20% | 1% / 65% / 18% | 1% / 66% / 19% |
| Stop típico | 197 pts | 190 pts | 194 pts |
| Ganho médio · perda média | +969 · −189 pts | +1.080 · −196 pts | +1.030 · −193 pts |
| Payoff (ganho médio ÷ perda média) | 5,12 | 5,51 | 5,33 |
| Fator de lucro (total ganho ÷ total perdido) | 1,30 | 1,32 | 1,31 |
| Resultado médio por operação | +45,6 pts (+60,6 sem custo) | +50,2 pts (+65,2 sem custo) | +48,2 pts (+63,2 sem custo) |
| **Lucro líquido** | **+26.291 pts · R\$ 5.258** | **+37.183 pts · R\$ 7.437** | **+63.474 pts · R\$ 12.695** |
| Pior queda (drawdown) | −6.545 pts · −R\$ 1.309 | −5.291 pts · −R\$ 1.058 | −6.545 pts · −R\$ 1.309 |
| Maior sequência de perdas | 22 seguidas | 20 seguidas | 22 seguidas |
| Compras: acerto · lucro | 25% · +25.065 pts | 19% · +19.682 pts | 22% · +44.747 pts |
| Vendas: acerto · lucro | 16% · +1.226 pts | 20% · +17.501 pts | 18% · +18.727 pts |

### Versão como no vídeo (alvo 100, break even 300)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 1.152 | 1.517 | 2.669 |
| Operações por mês | 42,7 | 43,3 | 43,0 |
| Taxa de acerto | 76,5% | 78,0% | 77,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 76% / 23% / 0% | 78% / 21% / 1% | 77% / 22% / 0% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +85 · −314 pts | +85 · −311 pts | +85 · −312 pts |
| Payoff (ganho médio ÷ perda média) | 0,27 | 0,27 | 0,27 |
| Fator de lucro (total ganho ÷ total perdido) | 0,88 | 0,97 | 0,93 |
| Resultado médio por operação | −8,8 pts (+6,2 sem custo) | −2,0 pts (+13,0 sem custo) | −4,9 pts (+10,1 sem custo) |
| **Lucro líquido** | **−10.120 pts · −R\$ 2.024** | **−3.035 pts · −R\$ 607** | **−13.155 pts · −R\$ 2.631** |
| Pior queda (drawdown) | −11.365 pts · −R\$ 2.273 | −7.150 pts · −R\$ 1.430 | −18.015 pts · −R\$ 3.603 |
| Maior sequência de perdas | 5 seguidas | 5 seguidas | 5 seguidas |
| Compras: acerto · lucro | 76% · −6.110 pts | 78% · −2.190 pts | 77% · −8.300 pts |
| Vendas: acerto · lucro | 77% · −4.010 pts | 78% · −845 pts | 78% · −4.855 pts |

### Versão alvo 1.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 607 | 779 | 1.386 |
| Operações por mês | 22,5 | 22,3 | 22,4 |
| Taxa de acerto | 27,8% | 28,2% | 28,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 17% / 56% / 13% | 17% / 53% / 14% | 17% / 54% / 13% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +773 · −250 pts | +746 · −241 pts | +758 · −245 pts |
| Payoff (ganho médio ÷ perda média) | 3,10 | 3,09 | 3,09 |
| Fator de lucro (total ganho ÷ total perdido) | 1,19 | 1,22 | 1,21 |
| Resultado médio por operação | +35,0 pts (+50,0 sem custo) | +37,4 pts (+52,4 sem custo) | +36,4 pts (+51,4 sem custo) |
| **Lucro líquido** | **+21.255 pts · R\$ 4.251** | **+29.130 pts · R\$ 5.826** | **+50.385 pts · R\$ 10.077** |
| Pior queda (drawdown) | −7.705 pts · −R\$ 1.541 | −7.260 pts · −R\$ 1.452 | −7.705 pts · −R\$ 1.541 |
| Maior sequência de perdas | 11 seguidas | 19 seguidas | 19 seguidas |
| Compras: acerto · lucro | 31% · +14.585 pts | 30% · +22.825 pts | 30% · +37.410 pts |
| Vendas: acerto · lucro | 25% · +6.670 pts | 26% · +6.305 pts | 26% · +12.975 pts |

### Versão alvo 2.500, stop 200 (payoff 5 do vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 596 | 769 | 1.365 |
| Operações por mês | 22,1 | 22,0 | 22,0 |
| Taxa de acerto | 19,6% | 19,0% | 19,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 66% / 20% | 2% / 66% / 17% | 2% / 66% / 18% |
| Stop típico | 200 pts | 200 pts | 200 pts |
| Ganho médio · perda média | +973 · −179 pts | +1.035 · −179 pts | +1.007 · −179 pts |
| Payoff (ganho médio ÷ perda média) | 5,42 | 5,80 | 5,63 |
| Fator de lucro (total ganho ÷ total perdido) | 1,32 | 1,36 | 1,34 |
| Resultado médio por operação | +46,7 pts (+61,7 sem custo) | +52,0 pts (+67,0 sem custo) | +49,6 pts (+64,6 sem custo) |
| **Lucro líquido** | **+27.820 pts · R\$ 5.564** | **+39.950 pts · R\$ 7.990** | **+67.770 pts · R\$ 13.554** |
| Pior queda (drawdown) | −7.220 pts · −R\$ 1.444 | −6.010 pts · −R\$ 1.202 | −7.220 pts · −R\$ 1.444 |
| Maior sequência de perdas | 24 seguidas | 23 seguidas | 24 seguidas |
| Compras: acerto · lucro | 23% · +22.380 pts | 18% · +19.045 pts | 20% · +41.425 pts |
| Vendas: acerto · lucro | 17% · +5.440 pts | 20% · +20.905 pts | 18% · +26.345 pts |

### Versão sem break even

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 1.152 | 1.517 | 2.669 |
| Operações por mês | 42,7 | 43,3 | 43,0 |
| Taxa de acerto | 76,5% | 78,0% | 77,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 76% / 23% / 0% | 78% / 21% / 1% | 77% / 22% / 0% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +85 · −314 pts | +85 · −311 pts | +85 · −312 pts |
| Payoff (ganho médio ÷ perda média) | 0,27 | 0,27 | 0,27 |
| Fator de lucro (total ganho ÷ total perdido) | 0,88 | 0,97 | 0,93 |
| Resultado médio por operação | −8,8 pts (+6,2 sem custo) | −2,0 pts (+13,0 sem custo) | −4,9 pts (+10,1 sem custo) |
| **Lucro líquido** | **−10.120 pts · −R\$ 2.024** | **−3.035 pts · −R\$ 607** | **−13.155 pts · −R\$ 2.631** |
| Pior queda (drawdown) | −11.365 pts · −R\$ 2.273 | −7.150 pts · −R\$ 1.430 | −18.015 pts · −R\$ 3.603 |
| Maior sequência de perdas | 5 seguidas | 5 seguidas | 5 seguidas |
| Compras: acerto · lucro | 76% · −6.110 pts | 78% · −2.190 pts | 77% · −8.300 pts |
| Vendas: acerto · lucro | 77% · −4.010 pts | 78% · −845 pts | 78% · −4.855 pts |

### Versão canal de 40 períodos

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 937 | 1.254 | 2.191 |
| Operações por mês | 34,7 | 35,8 | 35,3 |
| Taxa de acerto | 77,2% | 78,9% | 78,2% |
| Bateram o alvo / o stop / zeraram no fim do dia | 77% / 23% / 0% | 79% / 21% / 1% | 78% / 21% / 0% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +85 · −314 pts | +85 · −311 pts | +85 · −312 pts |
| Payoff (ganho médio ÷ perda média) | 0,27 | 0,27 | 0,27 |
| Fator de lucro (total ganho ÷ total perdido) | 0,92 | 1,02 | 0,98 |
| Resultado médio por operação | −6,1 pts (+8,9 sem custo) | +1,6 pts (+16,6 sem custo) | −1,7 pts (+13,3 sem custo) |
| **Lucro líquido** | **−5.670 pts · −R\$ 1.134** | **+1.965 pts · R\$ 393** | **−3.705 pts · −R\$ 741** |
| Pior queda (drawdown) | −6.805 pts · −R\$ 1.361 | −4.735 pts · −R\$ 947 | −10.870 pts · −R\$ 2.174 |
| Maior sequência de perdas | 4 seguidas | 4 seguidas | 4 seguidas |
| Compras: acerto · lucro | 76% · −5.460 pts | 79% · −175 pts | 77% · −5.635 pts |
| Vendas: acerto · lucro | 79% · −210 pts | 79% · +2.140 pts | 79% · +1.930 pts |

![Pontos acumulados com 1 contrato](setups/img/donchian-com-medias_pontos.png)

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
| **ATR 0,10 / 1,29** | **R\$ 59.326** · +43,0% | −10,5% | 18,9% · 1,35 | 67% · 57% | −5,4% · +16,8% |
| **como no vídeo (alvo 100, break even 300)** | **R\$ 13.797** · +6,7% | −12,2% | 7,7% · −0,69 | 39% · 43% | −3,0% · +6,2% |
| **alvo 1.000** | **R\$ 46.483** · +36,2% | −11,7% | 16,9% · 1,20 | 64% · 66% | −5,2% · +12,7% |
| **alvo 2.500, stop 200 (payoff 5 do vídeo)** | **R\$ 65.154** · +45,7% | −11,4% | 18,0% · 1,51 | 67% · 54% | −5,4% · +17,8% |
| **sem break even** | **R\$ 13.797** · +6,7% | −12,2% | 7,7% · −0,69 | 39% · 43% | −3,0% · +6,2% |
| **canal de 40 períodos** | **R\$ 16.714** · +10,9% | −8,3% | 6,9% · −0,22 | 46% · 43% | −2,2% · +5,3% |
| **risco 1%** | **R\$ 210.428** · +84,5% | −23,6% | 40,1% · 1,42 | 67% · 66% | −11,4% · +44,8% |
| **pura** | **R\$ 32.595** · +26,8% | −12,5% | 18,9% · 0,71 | 61% · 56% | −6,4% · +15,4% |
| **CDI** | **R\$ 18.211** · +12,8% | +0,0% | 0,1% · — | — · 44% | +0,3% · +1,3% |
| **Ibovespa** | **R\$ 16.233** · +10,2% | −20,9% | 18,7% · −0,03 | 56% · — | −11,5% · +12,6% |

![Quedas](setups/img/donchian-com-medias_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,10 / 1,29** | −6,9% | +74,2% | +29,5% | +17,2% | +46,7% | +64,2% | **+493,3%** (+43,0% · R\$ 59.326) |
| **como no vídeo (alvo 100, break even 300)** | +0,2% | +1,1% | +3,1% | +2,8% | +16,7% | +10,2% | **+38,0%** (+6,7% · R\$ 13.797) |
| **alvo 1.000** | −2,2% | +61,3% | +21,0% | +17,5% | +52,7% | +35,7% | **+364,8%** (+36,2% · R\$ 46.483) |
| **alvo 2.500, stop 200 (payoff 5 do vídeo)** | −9,5% | +80,0% | +33,1% | +16,1% | +46,2% | +77,0% | **+551,5%** (+45,7% · R\$ 65.154) |
| **sem break even** | +0,2% | +1,1% | +3,1% | +2,8% | +16,7% | +10,2% | **+38,0%** (+6,7% · R\$ 13.797) |
| **canal de 40 períodos** | −0,7% | +11,4% | +3,3% | +11,9% | +15,7% | +13,1% | **+67,1%** (+10,9% · R\$ 16.714) |
| **risco 1%** | −14,9% | +173,6% | +51,8% | +25,9% | +129,6% | +105,9% | **+2004,3%** (+84,5% · R\$ 210.428) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,0% | **+82,1%** (+12,8% · R\$ 18.211) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +6,3% | **+62,3%** (+10,2% · R\$ 16.233) |
| *Quem ganhou* | *CDI* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 10/11/2026.

![Retorno por ano](setups/img/donchian-com-medias_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,10 / 1,29 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | −1,8% | −3,9% | +0,6% | −3,4% |
> | dez/2021 | −5,1% | −11,4% | +0,7% | +2,9% |
> | jan/2022 | +3,7% | +8,4% | +0,7% | +7,0% |
> | fev/2022 | −3,8% | −10,9% | +0,8% | +0,9% |
> | mar/2022 | +6,5% | +12,4% | +0,9% | +6,1% |
> | abr/2022 | +5,0% | +10,8% | +0,8% | −10,1% |
> | mai/2022 | −1,6% | −4,4% | +1,0% | +3,2% |
> | jun/2022 | +2,6% | +3,5% | +1,0% | −11,5% |
> | jul/2022 | −1,6% | −5,0% | +1,0% | +4,7% |
> | ago/2022 | +16,8% | +44,8% | +1,2% | +6,2% |
> | set/2022 | +10,9% | +22,6% | +1,1% | +0,5% |
> | out/2022 | +7,3% | +13,6% | +1,0% | +5,5% |
> | nov/2022 | +4,8% | +6,2% | +1,0% | −3,1% |
> | dez/2022 | +7,8% | +13,0% | +1,1% | −2,4% |
> | jan/2023 | +2,8% | +3,8% | +1,1% | +3,4% |
> | fev/2023 | +3,2% | +5,6% | +0,9% | −7,5% |
> | mar/2023 | +2,7% | +4,5% | +1,2% | −2,9% |
> | abr/2023 | −0,1% | −1,4% | +0,9% | +2,5% |
> | mai/2023 | +7,7% | +17,3% | +1,1% | +3,7% |
> | jun/2023 | +3,7% | +7,5% | +1,1% | +9,0% |
> | jul/2023 | −1,7% | −5,4% | +1,1% | +3,3% |
> | ago/2023 | −1,8% | −6,1% | +1,1% | −5,1% |
> | set/2023 | −0,4% | −3,3% | +1,0% | +0,7% |
> | out/2023 | +0,3% | −1,4% | +1,0% | −2,9% |
> | nov/2023 | +6,7% | +14,0% | +0,9% | +12,5% |
> | dez/2023 | +3,7% | +10,4% | +0,9% | +5,4% |
> | jan/2024 | −0,1% | −2,5% | +1,0% | −4,8% |
> | fev/2024 | +4,0% | +9,3% | +0,8% | +1,0% |
> | mar/2024 | +2,2% | +4,9% | +0,8% | −0,7% |
> | abr/2024 | −3,4% | −9,2% | +0,9% | −1,7% |
> | mai/2024 | +0,5% | +0,4% | +0,8% | −3,0% |
> | jun/2024 | +1,4% | +2,5% | +0,8% | +1,5% |
> | jul/2024 | −0,7% | −2,6% | +0,9% | +3,0% |
> | ago/2024 | +2,8% | +6,1% | +0,9% | +6,5% |
> | set/2024 | −1,2% | −5,0% | +0,8% | −3,1% |
> | out/2024 | +0,1% | −0,9% | +0,9% | −1,6% |
> | nov/2024 | +2,4% | +4,7% | +0,8% | −3,1% |
> | dez/2024 | +8,4% | +18,3% | +0,8% | −4,3% |
> | jan/2025 | +7,3% | +18,6% | +1,0% | +4,9% |
> | fev/2025 | +4,9% | +10,7% | +1,0% | −2,6% |
> | mar/2025 | +5,3% | +12,1% | +1,0% | +6,1% |
> | abr/2025 | −5,4% | −10,1% | +1,1% | +3,7% |
> | mai/2025 | +8,2% | +19,0% | +1,1% | +1,5% |
> | jun/2025 | +0,5% | +0,3% | +1,1% | +1,3% |
> | jul/2025 | +2,4% | +4,4% | +1,3% | −4,2% |
> | ago/2025 | +4,6% | +8,8% | +1,2% | +6,3% |
> | set/2025 | +1,4% | +1,3% | +1,2% | +3,4% |
> | out/2025 | +0,8% | −0,3% | +1,3% | +2,3% |
> | nov/2025 | +5,8% | +14,2% | +1,1% | +6,4% |
> | dez/2025 | +3,8% | +10,9% | +1,1% | +1,3% |
> | jan/2026 | +6,0% | +11,2% | +1,2% | +12,6% |
> | fev/2026 | +2,4% | +2,5% | +1,0% | +4,1% |
> | mar/2026 | +4,0% | +4,6% | +1,2% | −0,7% |
> | abr/2026 | +2,8% | +4,9% | +1,1% | −0,1% |
> | mai/2026 | +4,9% | +7,7% | +1,1% | −7,2% |
> | jun/2026 | +1,5% | +2,0% | +1,1% | −1,0% |
> | jul/2026 | +13,2% | +22,9% | +1,2% | +3,5% |
> | ago/2026 | +4,9% | +7,0% | +1,1% | −0,3% |
> | set/2026 | −0,5% | −0,6% | +1,1% | +5,0% |
> | out/2026 | +6,0% | +7,4% | +1,1% | −9,9% |
> | nov/2026 | +6,1% | +6,8% | +0,3% | +2,0% |
> | **Acumulado** | **+493,3%** | **+2004,3%** | **+82,1%** | **+62,3%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,10 / 1,29** | +75% ao ano · queda −22% | +43% ao ano · queda −10% | +28% ao ano · queda −5% | +20% ao ano · queda −2% |
| **como no vídeo (alvo 100, break even 300)** | +0% ao ano · queda −36% | +7% ao ano · queda −12% | +10% ao ano · queda −3% | +11% ao ano · queda −1% |
| **alvo 1.000** | +60% ao ano · queda −24% | +36% ao ano · queda −12% | +24% ao ano · queda −5% | +19% ao ano · queda −2% |
| **alvo 2.500, stop 200 (payoff 5 do vídeo)** | +83% ao ano · queda −24% | +46% ao ano · queda −11% | +29% ao ano · queda −5% | +21% ao ano · queda −2% |
| **sem break even** | +0% ao ano · queda −36% | +7% ao ano · queda −12% | +10% ao ano · queda −3% | +11% ao ano · queda −1% |
| **canal de 40 períodos** | +8% ao ano · queda −23% | +11% ao ano · queda −8% | +12% ao ano · queda −2% | +12% ao ano · queda −1% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 07/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 2662 operações, 77% de acerto e fator de lucro 1,15. O vídeo mostra: 2.908 operações · 24% de acerto · payoff 3,46 (desde 2015, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,22R por operação no treino (p 0,072) e +0,24R no teste (p 0,005). |
| **É sorte de parâmetro?** | 9 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,06 a +0,24R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,22 → +0,24R · sem as três médias: +0,12 → +0,12R · canal de 10 períodos: +0,22 → +0,15R · sem break even: +0,20 → +0,24R · o dia todo (9h–17h): +0,16 → +0,18R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,22 → +0,24R · 25 pts: +0,17 → +0,19R · 30 pts: +0,15 → +0,16R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,10 / 1,29 foi de −R\$ 1.309 por contrato (começou em dez/2021, recuperada em ago/2022); 22 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,10 / 1,29 + CDI ficou abaixo do CDI em 33% dos meses. O resultado aparece no ano.
- **Stop curto** (~194 pts): o custo e o escorregão pesam mais — veja "E se o custo for maior?".
- **Anos negativos:** 2021.
- **As compras carregam o setup:** compras +0,37R × vendas +0,11R por operação.
- **Acerto de ~20%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 10/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
