---
title: "safecluster"
date: 2026-11-13
description: "Setups de day trade no índice futuro, testados um por um contra o acaso"
---

**Setups de day trade no mini índice, testados um por um contra o acaso.** As regras vêm prontas de um vídeo ou livro e não são ajustadas olhando os nossos dados. Cada uma é convertida para ATR, treinada até 2023 e testada de 2024 até hoje — e só aparece aqui se o resultado no teste não puder ser explicado por sorte.

*Atualizado em 13/11/2026 21:36 BRT · 17 setups no ar · dados de 01/11/2021 a 13/11/2026 · 15 pts de custo por operação já descontados.*

## A carteira recomendada

Operar vários setups juntos só vale se eles **ganharem juntos sem afundar juntos**. A escolha não é pelo maior retorno: é pela sobrevivência a uma sequência ruim.

| Setup | Família | Em uma frase |
|---|---|---|
| [**IFR de Tendência**](setups/ifr-de-tendencia) | ·TEN | Entra quando o IFR mostra força nos horários de tendência do dia (10h–11h e 14h–16h): vela a favor com o IFR acima de 70 ou abaixo de 30, stop curto e alvo longo. |
| [**Pullback na Média**](setups/pullback-na-media) | ·PUL | Compra a volta da correção: em dia já a favor, o preço encosta na média de 45, retoma e rompe a vela anterior. |
| [**Rompimento da Bollinger**](setups/rompimento-da-bollinger) | ·TEN | Três velas (a favor, contra, a favor) e a última rompe a banda de Bollinger a favor das médias de 50 e 200: stop curto e alvo 6× maior. |

Arriscando **1% do capital por operação**, dividido entre os 3: **+51% ao ano**, pior queda −5%, 34 dias no vermelho na pior sequência e −1% na pior janela de 60 dias. No mesmo período o CDI rendeu +13% ao ano e o Ibovespa comprado +10%, com queda de −21%.

[**Ver a carteira completa**](setups/carteira) — por que esses, o que muda acrescentando mais um, se os setups se ajudam e quantos contratos usar.

## Os primeiros do ranking

A ordem não é por retorno: é pela nota combinada em Sharpe, retorno ÷ pior queda, dias no vermelho e estabilidade entre treino e teste. Por isso o terceiro pode render mais ao ano que o primeiro — e cair bem mais também.

| # | Setup | Ao ano (risco 1%) | Pior queda |
|---|---|---|---|
| 1º | [**IFR**](setups/ifr-de-tendencia) ·TEN | **+66%** | −11% |
| 2º | [**Bollinger**](setups/rompimento-da-bollinger) ·TEN | **+52%** | −7% |
| 3º | [**Donchian**](setups/donchian-com-medias) ·TEN | **+83%** | −24% |
| 4º | [**Pôr do sol**](setups/por-do-sol) ·POR | **+20%** | −3% |
| 5º | [**GPS médias**](setups/gps-de-medias) ·TEN | **+67%** | −23% |

[Todos os setups testados](setups/) — inclusive os que não passaram, e por quê.

## Como um setup entra aqui

1. A regra vem pronta e **não é ajustada olhando os nossos dados**.
2. O resultado tem de ser positivo depois do custo e **bater o acaso** — entradas sem critério, com o mesmo alvo e o mesmo stop.
3. Tem de funcionar no **treino** (2021–2023) e no **teste** (2024 em diante), e aguentar pequenas mudanças nos parâmetros, sem depender de um número mágico.
4. Distância, stop e alvo ficam em **ATR**, não em pontos fixos: assim o setup continua valendo quando o índice muda de patamar.

## Onde olhar

- [Todos os setups](setups/) — um por um, com as estatísticas completas
- [Carteira recomendada](setups/carteira) — o que operar junto
- [Operações](setups/operacoes) — uma a uma, para conferir à mão

*Conteúdo educacional baseado em backtest. Não é recomendação de investimento.*
