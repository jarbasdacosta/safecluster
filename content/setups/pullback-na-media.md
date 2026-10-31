---
title: Pullback na Média
date: 2026-10-31
tags: [setup, win]
---

**Compra a volta da correção: em dia já a favor, o preço encosta na média de 45, retoma e rompe a vela anterior.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · velas das 10h30 às 12h30 e das 14h45 às 15h45

🎬 **Vídeo de origem:** [Arthur 777 – "isso se repete milhares de vezes"](https://youtu.be/iIaJDFRbNpI) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 30.798** na versão ATR 0,15 / 0,15 / 5× com o capital no CDI (+25% ao ano · pior queda −5%)
> - **R\$ 24.186** na versão ATR ≈ 500/400/1.500 com o capital no CDI (+20% ao ano · pior queda −5%)
> - **R\$ 28.415** na versão pontos fixos (vídeo) com o capital no CDI (+23% ao ano · pior queda −3%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 39.919** na versão ATR 0,15 / 0,15 / 5× **arriscando 1% do capital por operação** (+32% ao ano · pior queda −9%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> Ainda sem operações. O resultado aparece aqui conforme os dias passam.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/pullback-na-media_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Horário** | a vela começa entre 10h30 e 12h30 **ou** entre 14h45 e 15h45 | igual |
| **2. Vela a favor** | a vela é **positiva** | a vela é **negativa** |
| **3. Médias** | fecha **acima** das médias exponenciais de 45 e de 200 | fecha **abaixo** das duas |
| **4. Correção na média** | a **mínima da vela anterior tocou** a média de 45 | a **máxima da vela anterior tocou** a média de 45 |
| **5. Retomada** | a vela **fecha acima da máxima** da anterior | a vela **fecha abaixo da mínima** da anterior |
| **6. Dia a favor** | o fechamento está **pelo menos 0,15 ATR acima** da abertura do dia (≈ 650 pts hoje) | pelo menos 0,15 ATR abaixo da abertura |
| **Entrada** | compra no **rompimento da máxima** da vela do sinal, só na vela seguinte | vende no rompimento da mínima, só na vela seguinte |
| **Stop** | **0,15 ATR** abaixo da entrada (≈ 650 pts hoje) | 0,15 ATR acima |
| **Alvo** | **5 × o stop** = 0,75 ATR (≈ 3.251 pts hoje) | o mesmo, para baixo |
| **Fim do dia** | se não bateu stop nem alvo, zera às 18h20 | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,15 / 0,15 / 5×** — stop 0,150 ATR · alvo 0,750 ATR (5,0× o stop); hoje ≈ 650 pts de stop e 3.251 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **É o pullback clássico:** o mercado anda a favor, corrige até a média de 45 e volta. As condições 3 a 6 garantem que a correção aconteceu dentro de um dia de tendência.
- **Poucas operações:** cerca de 5 por mês. Uma de cada vez.
- **De onde veio:** o vídeo usa 500 / 400 / 1.500 pontos fixos e zera às 16h00. Aqui os valores viraram ATR (escolhidos numa grade de 27, só no treino), e a zeragem às 18h20 foi melhor no treino (testado em 26/10/2026). A versão em pontos fixos continua na página para comparar.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,15 / 0,15 / 5×** (principal) | stop 0,150 ATR · alvo 0,750 ATR (5,0× o stop) | 38% · 2,43 | +155,4 → +43,4 | +25,5% | −4,6% |
| **ATR ≈ 500/400/1.500** | stop 0,210 ATR · alvo 0,787 ATR (3,8× o stop) | 43% · 1,74 | +117,1 → +37,8 | +19,5% | −4,7% |
| **pontos fixos (vídeo)** | stop 400 · alvo 1.500 pts | 44% · 1,89 | +127,0 → +92,4 | +23,5% | −3,3% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,15 / 0,15 / 5×

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 128 | 175 | 303 |
| Operações por mês | 4,7 | 5,1 | 5,0 |
| Taxa de acerto | 41,4% | 35,4% | 38,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 10% / 57% / 33% | 5% / 60% / 35% | 7% / 59% / 34% |
| Stop típico | 283 pts | 271 pts | 275 pts |
| Ganho médio · perda média | +797 · −298 pts | +670 · −301 pts | +729 · −300 pts |
| Payoff (ganho médio ÷ perda média) | 2,67 | 2,23 | 2,43 |
| Fator de lucro (total ganho ÷ total perdido) | 1,89 | 1,22 | 1,49 |
| Resultado médio por operação | +155,4 pts (+170,4 sem custo) | +43,4 pts (+58,4 sem custo) | +90,7 pts (+105,7 sem custo) |
| **Lucro líquido** | **+19.892 pts · R\$ 3.978** | **+7.590 pts · R\$ 1.518** | **+27.482 pts · R\$ 5.496** |
| Pior queda (drawdown) | −1.955 pts · −R\$ 391 | −3.198 pts · −R\$ 640 | −3.198 pts · −R\$ 640 |
| Maior sequência de perdas | 5 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 38% · +4.227 pts | 39% · +7.006 pts | 38% · +11.233 pts |
| Vendas: acerto · lucro | 45% · +15.665 pts | 33% · +584 pts | 38% · +16.249 pts |

### Versão ATR ≈ 500/400/1.500

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 91 | 120 | 211 |
| Operações por mês | 3,4 | 3,5 | 3,5 |
| Taxa de acerto | 46,2% | 40,8% | 43,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 9% / 51% / 41% | 7% / 49% / 44% | 8% / 50% / 43% |
| Stop típico | 391 pts | 381 pts | 385 pts |
| Ganho médio · perda média | +727 · −406 pts | +665 · −395 pts | +693 · −399 pts |
| Payoff (ganho médio ÷ perda média) | 1,79 | 1,68 | 1,74 |
| Fator de lucro (total ganho ÷ total perdido) | 1,54 | 1,16 | 1,32 |
| Resultado médio por operação | +117,1 pts (+132,1 sem custo) | +37,8 pts (+52,8 sem custo) | +72,0 pts (+87,0 sem custo) |
| **Lucro líquido** | **+10.655 pts · R\$ 2.131** | **+4.531 pts · R\$ 906** | **+15.186 pts · R\$ 3.037** |
| Pior queda (drawdown) | −3.089 pts · −R\$ 618 | −3.207 pts · −R\$ 641 | −3.207 pts · −R\$ 641 |
| Maior sequência de perdas | 4 seguidas | 5 seguidas | 5 seguidas |
| Compras: acerto · lucro | 45% · +2.249 pts | 48% · +7.258 pts | 47% · +9.507 pts |
| Vendas: acerto · lucro | 47% · +8.406 pts | 35% · −2.727 pts | 40% · +5.679 pts |

### Versão pontos fixos (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 93 | 125 | 218 |
| Operações por mês | 3,4 | 3,7 | 3,6 |
| Taxa de acerto | 47,3% | 41,6% | 44,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 11% / 52% / 38% | 12% / 50% / 38% | 11% / 51% / 38% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +728 · −412 pts | +752 · −378 pts | +741 · −392 pts |
| Payoff (ganho médio ÷ perda média) | 1,76 | 1,99 | 1,89 |
| Fator de lucro (total ganho ÷ total perdido) | 1,58 | 1,42 | 1,49 |
| Resultado médio por operação | +127,0 pts (+142,0 sem custo) | +92,4 pts (+107,4 sem custo) | +107,2 pts (+122,2 sem custo) |
| **Lucro líquido** | **+11.810 pts · R\$ 2.362** | **+11.550 pts · R\$ 2.310** | **+23.360 pts · R\$ 4.672** |
| Pior queda (drawdown) | −2.630 pts · −R\$ 526 | −2.605 pts · −R\$ 521 | −4.050 pts · −R\$ 810 |
| Maior sequência de perdas | 4 seguidas | 5 seguidas | 5 seguidas |
| Compras: acerto · lucro | 44% · +2.105 pts | 47% · +13.270 pts | 46% · +15.375 pts |
| Vendas: acerto · lucro | 50% · +9.705 pts | 37% · −1.720 pts | 43% · +7.985 pts |

![Pontos acumulados com 1 contrato](setups/img/pullback-na-media_pontos.png)

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
| **ATR 0,15 / 0,15 / 5×** | **R\$ 30.798** · +25,5% | −4,6% | 9,2% · 1,20 | 60% · 60% | −2,0% · +6,8% |
| **ATR ≈ 500/400/1.500** | **R\$ 24.186** · +19,5% | −4,7% | 8,3% · 0,74 | 57% · 57% | −3,0% · +7,2% |
| **pontos fixos (vídeo)** | **R\$ 28.415** · +23,5% | −3,3% | 8,8% · 1,07 | 58% · 57% | −2,4% · +10,6% |
| **risco 1%** | **R\$ 39.919** · +32,2% | −9,1% | 14,4% · 1,18 | 60% · 63% | −4,6% · +11,4% |
| **pura** | **R\$ 16.967** · +11,3% | −6,2% | 9,2% · −0,10 | 50% · 52% | −2,9% · +5,7% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/pullback-na-media_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,15 / 0,15 / 5×** | +7,5% | +47,1% | +19,7% | +10,8% | +21,2% | +21,1% | **+208,0%** (+25,5% · R\$ 30.798) |
| **ATR ≈ 500/400/1.500** | +4,4% | +33,3% | +13,3% | +12,0% | +21,5% | +12,6% | **+141,9%** (+19,5% · R\$ 24.186) |
| **pontos fixos (vídeo)** | +1,9% | +41,3% | +12,1% | +7,1% | +18,5% | +38,6% | **+184,1%** (+23,5% · R\$ 28.415) |
| **risco 1%** | +10,2% | +70,5% | +24,7% | +9,6% | +29,0% | +20,5% | **+299,2%** (+32,2% · R\$ 39.919) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *risco 1%* | *risco 1%* | *risco 1%* | *ATR ≈ 500/400/1.500* | *Ibovespa* | *pontos fixos (vídeo)* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/pullback-na-media_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,15 / 0,15 / 5× | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +2,6% | +3,0% | +0,6% | −3,4% |
> | dez/2021 | +4,8% | +7,0% | +0,7% | +2,9% |
> | jan/2022 | +5,1% | +8,7% | +0,7% | +7,0% |
> | fev/2022 | +2,7% | +4,7% | +0,8% | +0,9% |
> | mar/2022 | +2,6% | +3,6% | +0,9% | +6,1% |
> | abr/2022 | +2,2% | +3,4% | +0,8% | −10,1% |
> | mai/2022 | +2,2% | +3,0% | +1,0% | +3,2% |
> | jun/2022 | +3,6% | +4,7% | +1,0% | −11,5% |
> | jul/2022 | +2,5% | +4,1% | +1,0% | +4,7% |
> | ago/2022 | +4,7% | +7,5% | +1,2% | +6,2% |
> | set/2022 | +2,8% | +3,4% | +1,1% | +0,5% |
> | out/2022 | +4,4% | +5,7% | +1,0% | +5,5% |
> | nov/2022 | +6,8% | +6,5% | +1,0% | −3,1% |
> | dez/2022 | −0,2% | −0,4% | +1,1% | −2,4% |
> | jan/2023 | +3,3% | +4,4% | +1,1% | +3,4% |
> | fev/2023 | −1,4% | −2,6% | +0,9% | −7,5% |
> | mar/2023 | +2,3% | +2,9% | +1,2% | −2,9% |
> | abr/2023 | +0,3% | −0,1% | +0,9% | +2,5% |
> | mai/2023 | +4,8% | +7,3% | +1,1% | +3,7% |
> | jun/2023 | +0,7% | +0,3% | +1,1% | +9,0% |
> | jul/2023 | +0,1% | −0,5% | +1,1% | +3,3% |
> | ago/2023 | +1,0% | +0,9% | +1,1% | −5,1% |
> | set/2023 | +0,9% | +0,8% | +1,0% | +0,7% |
> | out/2023 | +3,0% | +5,0% | +1,0% | −2,9% |
> | nov/2023 | +2,4% | +4,0% | +0,9% | +12,5% |
> | dez/2023 | +0,7% | +0,4% | +0,9% | +5,4% |
> | jan/2024 | +1,4% | +1,3% | +1,0% | −4,8% |
> | fev/2024 | −0,1% | −1,0% | +0,8% | +1,0% |
> | mar/2024 | +2,1% | +3,8% | +0,8% | −0,7% |
> | abr/2024 | +0,5% | +0,4% | +0,9% | −1,7% |
> | mai/2024 | −0,6% | −2,2% | +0,8% | −3,0% |
> | jun/2024 | +2,7% | +4,3% | +0,8% | +1,5% |
> | jul/2024 | +0,4% | +0,0% | +0,9% | +3,0% |
> | ago/2024 | +0,1% | −0,8% | +0,9% | +6,5% |
> | set/2024 | +6,2% | +11,4% | +0,8% | −3,1% |
> | out/2024 | −1,4% | −3,8% | +0,9% | −1,6% |
> | nov/2024 | −2,0% | −4,6% | +0,8% | −3,1% |
> | dez/2024 | +1,2% | +1,2% | +0,8% | −4,3% |
> | jan/2025 | +1,3% | +1,4% | +1,0% | +4,9% |
> | fev/2025 | +3,2% | +5,0% | +1,0% | −2,6% |
> | mar/2025 | −0,5% | −1,2% | +1,0% | +6,1% |
> | abr/2025 | +0,3% | +0,7% | +1,1% | +3,7% |
> | mai/2025 | +2,0% | +2,7% | +1,1% | +1,5% |
> | jun/2025 | +3,8% | +5,7% | +1,1% | +1,3% |
> | jul/2025 | +2,9% | +4,3% | +1,3% | −4,2% |
> | ago/2025 | −0,7% | −1,8% | +1,2% | +6,3% |
> | set/2025 | +1,6% | +1,9% | +1,2% | +3,4% |
> | out/2025 | +3,6% | +5,2% | +1,3% | +2,3% |
> | nov/2025 | −0,8% | −2,4% | +1,1% | +6,4% |
> | dez/2025 | +2,9% | +4,8% | +1,1% | +1,3% |
> | jan/2026 | −0,2% | −1,0% | +1,2% | +12,6% |
> | fev/2026 | −2,0% | −1,3% | +1,0% | +4,1% |
> | mar/2026 | +5,3% | +4,6% | +1,2% | −0,7% |
> | abr/2026 | +2,2% | +2,6% | +1,1% | −0,1% |
> | mai/2026 | +0,4% | +0,3% | +1,1% | −7,2% |
> | jun/2026 | +3,4% | +3,7% | +1,1% | −1,0% |
> | jul/2026 | +0,3% | +0,4% | +1,2% | +3,5% |
> | ago/2026 | +4,1% | +4,0% | +1,1% | −0,3% |
> | set/2026 | +6,0% | +5,7% | +1,1% | +5,0% |
> | out/2026 | +0,0% | +0,3% | +1,0% | −9,9% |
> | **Acumulado** | **+208,0%** | **+299,2%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,15 / 0,15 / 5×** | +38% ao ano · queda −10% | +25% ao ano · queda −5% | +19% ao ano · queda −2% | +16% ao ano · queda −1% |
| **ATR ≈ 500/400/1.500** | +26% ao ano · queda −9% | +20% ao ano · queda −5% | +16% ao ano · queda −2% | +15% ao ano · queda −1% |
| **pontos fixos (vídeo)** | +34% ao ano · queda −8% | +23% ao ano · queda −3% | +18% ao ano · queda −1% | +15% ao ano · queda −1% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 303 operações, 39% de acerto e fator de lucro 1,60. O vídeo mostra: ~268 operações · 44–45% de acerto · payoff 2,1–2,4 (sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,52R por operação no treino (p 0,000) e +0,13R no teste (p 0,054). |
| **É sorte de parâmetro?** | 9 de 9 combinações de stop × alvo deram lucro no treino **e** no teste (+0,03 a +0,54R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,52 → +0,13R · sem o toque na MME45: +0,17 → +0,15R · sem a distância da abertura: +0,29 → −0,05R · sem a MME200: +0,18 → −0,03R · sem fechar além da vela anterior: +0,37 → +0,10R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,52 → +0,13R · 25 pts: +0,48 → +0,09R · 30 pts: +0,46 → +0,07R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,15 / 0,15 / 5× foi de −R\$ 640 por contrato (começou em set/2024, recuperada em jul/2025); 8 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,15 / 0,15 / 5× + CDI ficou abaixo do CDI em 40% dos meses. O resultado aparece no ano.
- **Opera pouco** (~5,0 operações por mês): os números têm mais incerteza.
- **Rendeu menos no teste:** +0,52R → +0,13R por operação.
- **Acerto de ~39%:** a maioria das operações dá stop; sequências de stops são normais.
- **O teste rendeu bem menos que o treino:** a versão principal caiu de +0,52R para +0,13R por operação, e 2024 ficou no zero a zero. Parte do resultado do treino foi sorte da escolha na grade.
- **Parecido com o Tendência Forte do Dia** (médias, distância da abertura, rompimento da vela anterior) — veja na carteira se ele acrescenta ou só repete.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
