---
title: Tendência Forte do Dia
date: 2026-10-31
tags: [setup, win]
---

**Entra a favor do dia que já mostrou força: preço do lado certo das 3 médias, bem longe da abertura e uma vela confirmando.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · sinais da 1ª vela do dia até 17h00

🎬 **Vídeo de origem:** [Arthur 777 – "encontrei uma coisa absurda nos testes"](https://youtu.be/N4CJ9Yv8To8) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 69.931** na versão ATR 0,36 / 0,15 / 3,75× com o capital no CDI (+48% ao ano · pior queda −16%)
> - **R\$ 49.431** na versão ATR ≈ 400/400 com o capital no CDI (+38% ao ano · pior queda −13%)
> - **R\$ 54.198** na versão pontos fixos 400/400 com o capital no CDI (+41% ao ano · pior queda −13%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 145.463** na versão ATR 0,36 / 0,15 / 3,75× **arriscando 1% do capital por operação** (+72% ao ano · pior queda −24%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **3 operações** · acerto 67% · **+2,14R por operação** (no teste 2024 →: +0,13R) · líquido +4.024 pts (R\$ 805 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/tendencia-forte-do-dia_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Tendência** | a vela **fecha acima** das médias exponenciais de 9, 50 e 200 períodos | a vela **fecha abaixo** das três médias |
| **2. Força do dia** | o fechamento está **pelo menos 0,36 ATR acima** da abertura do dia (≈ 1.560 pts hoje) | o fechamento está **pelo menos 0,36 ATR abaixo** da abertura do dia |
| **3. Gatilho** | a vela **fecha acima da máxima** da vela anterior | a vela **fecha abaixo da mínima** da vela anterior |
| **Entrada** | compra **a mercado** na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop** | **0,15 ATR** abaixo da entrada (≈ 650 pts hoje) | 0,15 ATR acima da entrada |
| **Alvo** | **3,75 × o stop** = 0,56 ATR (≈ 2.438 pts hoje) | o mesmo, para baixo |
| **Fim do dia** | se não bateu stop nem alvo, zera às 18h20 | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,36 / 0,15 / 3,75×** — stop 0,150 ATR · alvo 0,562 ATR (3,8× o stop); hoje ≈ 650 pts de stop e 2.438 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Quantas operações:** sem limite por dia, mas uma de cada vez — enquanto o dia continuar forte, o setup entra de novo depois que a operação anterior termina.
- **A ordem das médias entre si não importa**, só o preço estar do mesmo lado das três.
- **A ideia:** em dia de tendência forte, cada nova vela de força tende a ter continuação.
- **De onde veio:** o vídeo usa 700 / 400 / 1.500 pontos fixos. Aqui esses valores viraram múltiplos do ATR (testado em 26/10/2026), porque 700 pontos era 0,7% do índice em 2021 e hoje é menos da metade.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,36 / 0,15 / 3,75×** (principal) | stop 0,150 ATR · alvo 0,562 ATR (3,8× o stop) | 35% · 2,28 | +44,6 → +40,1 | +48,1% | −16,1% |
| **ATR ≈ 400/400** | stop 0,210 ATR · alvo 0,210 ATR (1,0× o stop) | 55% · 0,93 | +27,7 → +18,5 | +38,1% | −12,8% |
| **pontos fixos 400/400** | stop 400 · alvo 400 pts | 55% · 0,94 | +24,0 → +19,9 | +40,7% | −13,4% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,36 / 0,15 / 3,75×

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 715 | 1.039 | 1.754 |
| Operações por mês | 26,5 | 30,6 | 28,8 |
| Taxa de acerto | 36,1% | 33,5% | 34,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 12% / 60% / 28% | 16% / 62% / 22% | 14% / 61% / 24% |
| Stop típico | 286 pts | 281 pts | 283 pts |
| Ganho médio · perda média | +659 · −302 pts | +768 · −326 pts | +721 · −317 pts |
| Payoff (ganho médio ÷ perda média) | 2,18 | 2,35 | 2,28 |
| Fator de lucro (total ganho ÷ total perdido) | 1,23 | 1,18 | 1,20 |
| Resultado médio por operação | +44,6 pts (+59,6 sem custo) | +40,1 pts (+55,1 sem custo) | +41,9 pts (+56,9 sem custo) |
| **Lucro líquido** | **+31.898 pts · R\$ 6.380** | **+41.666 pts · R\$ 8.333** | **+73.564 pts · R\$ 14.713** |
| Pior queda (drawdown) | −5.514 pts · −R\$ 1.103 | −9.728 pts · −R\$ 1.946 | −9.728 pts · −R\$ 1.946 |
| Maior sequência de perdas | 14 seguidas | 14 seguidas | 14 seguidas |
| Compras: acerto · lucro | 38% · +16.421 pts | 34% · +26.023 pts | 36% · +42.444 pts |
| Vendas: acerto · lucro | 34% · +15.477 pts | 33% · +15.643 pts | 33% · +31.120 pts |

### Versão ATR ≈ 400/400

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 1.014 | 1.464 | 2.478 |
| Operações por mês | 37,6 | 43,1 | 40,6 |
| Taxa de acerto | 55,3% | 54,2% | 54,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 38% / 15% | 48% / 40% / 12% | 48% / 39% / 13% |
| Stop típico | 402 pts | 391 pts | 397 pts |
| Ganho médio · perda média | +370 · −396 pts | +395 · −428 pts | +385 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,92 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,16 | 1,09 | 1,12 |
| Resultado médio por operação | +27,7 pts (+42,7 sem custo) | +18,5 pts (+33,5 sem custo) | +22,3 pts (+37,3 sem custo) |
| **Lucro líquido** | **+28.091 pts · R\$ 5.618** | **+27.049 pts · R\$ 5.410** | **+55.140 pts · R\$ 11.028** |
| Pior queda (drawdown) | −8.238 pts · −R\$ 1.648 | −8.516 pts · −R\$ 1.703 | −8.516 pts · −R\$ 1.703 |
| Maior sequência de perdas | 8 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 56% · +14.763 pts | 55% · +14.052 pts | 55% · +28.816 pts |
| Vendas: acerto · lucro | 55% · +13.328 pts | 54% · +12.997 pts | 54% · +26.325 pts |

### Versão pontos fixos 400/400

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 1.131 | 1.612 | 2.743 |
| Operações por mês | 41,9 | 47,4 | 45,0 |
| Taxa de acerto | 54,8% | 54,4% | 54,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 48% / 39% / 13% | 49% / 41% / 10% | 49% / 40% / 12% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +357 · −380 pts | +360 · −386 pts | +359 · −383 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,93 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 1,14 | 1,11 | 1,12 |
| Resultado médio por operação | +24,0 pts (+39,0 sem custo) | +19,9 pts (+34,9 sem custo) | +21,6 pts (+36,6 sem custo) |
| **Lucro líquido** | **+27.155 pts · R\$ 5.431** | **+32.150 pts · R\$ 6.430** | **+59.305 pts · R\$ 11.861** |
| Pior queda (drawdown) | −8.935 pts · −R\$ 1.787 | −10.310 pts · −R\$ 2.062 | −10.310 pts · −R\$ 2.062 |
| Maior sequência de perdas | 8 seguidas | 10 seguidas | 10 seguidas |
| Compras: acerto · lucro | 56% · +14.665 pts | 55% · +19.400 pts | 55% · +34.065 pts |
| Vendas: acerto · lucro | 54% · +12.490 pts | 54% · +12.750 pts | 54% · +25.240 pts |

![Pontos acumulados com 1 contrato](setups/img/tendencia-forte-do-dia_pontos.png)

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
| **ATR 0,36 / 0,15 / 3,75×** | **R\$ 69.931** · +48,1% | −16,1% | 22,4% · 1,33 | 60% · 62% | −7,4% · +16,6% |
| **ATR ≈ 400/400** | **R\$ 49.431** · +38,1% | −12,8% | 20,2% · 1,10 | 58% · 55% | −7,2% · +14,0% |
| **pontos fixos 400/400** | **R\$ 54.198** · +40,7% | −13,4% | 19,3% · 1,24 | 58% · 57% | −6,3% · +16,5% |
| **risco 1%** | **R\$ 145.463** · +71,7% | −23,6% | 32,8% · 1,44 | 60% · 62% | −13,6% · +22,4% |
| **pura** | **R\$ 38.541** · +31,3% | −17,7% | 22,3% · 0,79 | 57% · 57% | −8,2% · +15,4% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/tendencia-forte-do-dia_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,36 / 0,15 / 3,75×** | −1,7% | +58,4% | +50,3% | +21,6% | +32,2% | +85,9% | **+599,3%** (+48,1% · R\$ 69.931) |
| **ATR ≈ 400/400** | +0,3% | +72,5% | +26,0% | +29,5% | +22,2% | +43,3% | **+394,3%** (+38,1% · R\$ 49.431) |
| **pontos fixos 400/400** | −5,2% | +68,7% | +33,5% | +31,5% | +19,8% | +61,0% | **+442,0%** (+40,7% · R\$ 54.198) |
| **risco 1%** | −2,9% | +94,7% | +78,7% | +31,5% | +62,2% | +101,9% | **+1354,6%** (+71,7% · R\$ 145.463) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *CDI* | *risco 1%* | *risco 1%* | *pontos fixos 400/400* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/tendencia-forte-do-dia_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,36 / 0,15 / 3,75× | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | −2,9% | −3,9% | +0,6% | −3,4% |
> | dez/2021 | +1,2% | +1,1% | +0,7% | +2,9% |
> | jan/2022 | −0,1% | −0,2% | +0,7% | +7,0% |
> | fev/2022 | −1,1% | −2,5% | +0,8% | +0,9% |
> | mar/2022 | +10,1% | +16,3% | +0,9% | +6,1% |
> | abr/2022 | +4,8% | +8,2% | +0,8% | −10,1% |
> | mai/2022 | −1,2% | −2,5% | +1,0% | +3,2% |
> | jun/2022 | +3,3% | +4,9% | +1,0% | −11,5% |
> | jul/2022 | −0,6% | −1,1% | +1,0% | +4,7% |
> | ago/2022 | +12,6% | +22,4% | +1,2% | +6,2% |
> | set/2022 | +8,3% | +11,7% | +1,1% | +0,5% |
> | out/2022 | +4,1% | +5,3% | +1,0% | +5,5% |
> | nov/2022 | +0,3% | +0,4% | +1,0% | −3,1% |
> | dez/2022 | +7,6% | +8,9% | +1,1% | −2,4% |
> | jan/2023 | +14,1% | +18,3% | +1,1% | +3,4% |
> | fev/2023 | +7,4% | +11,1% | +0,9% | −7,5% |
> | mar/2023 | +3,1% | +4,6% | +1,2% | −2,9% |
> | abr/2023 | −2,0% | −3,5% | +0,9% | +2,5% |
> | mai/2023 | −2,2% | −4,6% | +1,1% | +3,7% |
> | jun/2023 | +10,0% | +17,7% | +1,1% | +9,0% |
> | jul/2023 | +4,8% | +7,7% | +1,1% | +3,3% |
> | ago/2023 | +2,9% | +4,4% | +1,1% | −5,1% |
> | set/2023 | +0,4% | +0,3% | +1,0% | +0,7% |
> | out/2023 | +0,5% | +0,0% | +1,0% | −2,9% |
> | nov/2023 | +2,7% | +4,0% | +0,9% | +12,5% |
> | dez/2023 | +1,1% | +2,3% | +0,9% | +5,4% |
> | jan/2024 | +5,6% | +9,7% | +1,0% | −4,8% |
> | fev/2024 | +9,9% | +18,8% | +0,8% | +1,0% |
> | mar/2024 | +1,7% | +2,9% | +0,8% | −0,7% |
> | abr/2024 | −7,4% | −13,6% | +0,9% | −1,7% |
> | mai/2024 | −0,3% | −1,1% | +0,8% | −3,0% |
> | jun/2024 | −0,1% | −0,9% | +0,8% | +1,5% |
> | jul/2024 | −1,1% | −2,5% | +0,9% | +3,0% |
> | ago/2024 | +2,7% | +5,4% | +0,9% | +6,5% |
> | set/2024 | +4,8% | +8,8% | +0,8% | −3,1% |
> | out/2024 | −2,5% | −6,1% | +0,9% | −1,6% |
> | nov/2024 | +0,1% | −0,7% | +0,8% | −3,1% |
> | dez/2024 | +7,4% | +11,1% | +0,8% | −4,3% |
> | jan/2025 | +11,9% | +21,4% | +1,0% | +4,9% |
> | fev/2025 | +4,5% | +7,2% | +1,0% | −2,6% |
> | mar/2025 | +8,4% | +13,2% | +1,0% | +6,1% |
> | abr/2025 | −6,7% | −9,0% | +1,1% | +3,7% |
> | mai/2025 | +5,4% | +10,3% | +1,1% | +1,5% |
> | jun/2025 | −4,5% | −7,0% | +1,1% | +1,3% |
> | jul/2025 | −0,9% | −2,3% | +1,3% | −4,2% |
> | ago/2025 | +6,9% | +10,2% | +1,2% | +6,3% |
> | set/2025 | −2,4% | −5,1% | +1,2% | +3,4% |
> | out/2025 | −2,9% | −6,2% | +1,3% | +2,3% |
> | nov/2025 | +7,8% | +14,5% | +1,1% | +6,4% |
> | dez/2025 | +2,5% | +7,5% | +1,1% | +1,3% |
> | jan/2026 | +11,3% | +16,8% | +1,2% | +12,6% |
> | fev/2026 | −6,6% | −5,4% | +1,0% | +4,1% |
> | mar/2026 | +15,3% | +13,4% | +1,2% | −0,7% |
> | abr/2026 | +5,8% | +6,6% | +1,1% | −0,1% |
> | mai/2026 | −2,8% | −3,1% | +1,1% | −7,2% |
> | jun/2026 | −0,5% | −0,5% | +1,1% | −1,0% |
> | jul/2026 | +13,5% | +16,5% | +1,2% | +3,5% |
> | ago/2026 | +9,9% | +11,3% | +1,1% | −0,3% |
> | set/2026 | +4,2% | +5,0% | +1,1% | +5,0% |
> | out/2026 | +16,6% | +15,2% | +1,0% | −9,9% |
> | **Acumulado** | **+599,3%** | **+1354,6%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,36 / 0,15 / 3,75×** | +85% ao ano · queda −32% | +48% ao ano · queda −16% | +30% ao ano · queda −7% | +21% ao ano · queda −3% |
| **ATR ≈ 400/400** | +62% ao ano · queda −26% | +38% ao ano · queda −13% | +25% ao ano · queda −6% | +19% ao ano · queda −2% |
| **pontos fixos 400/400** | +69% ao ano · queda −28% | +41% ao ano · queda −13% | +27% ao ano · queda −6% | +20% ao ano · queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1754 operações, 35% de acerto e fator de lucro 1,29. O vídeo mostra: fator de lucro 1,19 (pontos fixos 700/400/400). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,16R por operação no treino (p 0,001) e +0,13R no teste (p 0,001). |
| **É sorte de parâmetro?** | 8 de 9 combinações de stop × alvo deram lucro no treino **e** no teste (−0,00 a +0,18R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,16 → +0,13R · sem as médias: +0,06 → +0,08R · sem a distância da abertura: +0,06 → +0,00R · sem fechar além da vela anterior: +0,14 → +0,09R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,16 → +0,13R · 25 pts: +0,12 → +0,10R · 30 pts: +0,11 → +0,08R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,36 / 0,15 / 3,75× foi de −R\$ 1.946 por contrato (começou em mai/2026, recuperada em jul/2026); 14 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,36 / 0,15 / 3,75× + CDI ficou abaixo do CDI em 40% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021.
- **Acerto de ~35%:** a maioria das operações dá stop; sequências de stops são normais.
- **Escolha entre 36 combinações:** a versão principal foi a melhor do treino numa grade de 36; as vizinhas também funcionam, mas é normal ela render um pouco menos daqui para frente.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*
