---
title: "Lote inteiro: a curva que você viveria"
date: 2026-11-25
description: "A curva de capital com contratos inteiros e teto de liquidez, ao lado da fracionária que os outros gráficos usam"
---

*Carteira operada (ifr, pullback, rompimento) · 1351 operações de 26/10/2021 a 25/11/2026 · risco de 2,23% por operação · capital inicial R\$ 100.000*

Os gráficos de capital deste site usam **contratos fracionários**. É a régua certa para calibrar risco, e tem uma propriedade que convém saber: **ela nunca zera**. Sempre sobra uma fração de contrato para arriscar. A conta que você executaria não tem essa saída — ou são 3 contratos, ou são 4, e abaixo de 1 não existe.

Esta página mostra as duas no mesmo eixo.

![Curva de capital: lote inteiro contra fracionário](setups/img/lote-inteiro_curva.png)

## O que foi medido

| | lote inteiro | fracionário |
|---|---:|---:|
| Capital final | **R\$ 20.344.948** | R\$ 507.858.679 |
| Quantas vezes maior | — | **25,0x** |
| Chegou a zerar | não | impossível por construção |
| Operações no teto de 2.000 contratos | **574 de 1.351 (42%)** | sem teto |

## O que isso quer dizer na prática

**O teto de contratos é o que separa as duas curvas.** Em 42% das operações a posição travou em 2.000 contratos: ali o risco de 2,23% por operação **não foi aplicado**, porque a conta pedia mais contratos do que o teto permite. Dali em diante o capital cresce e a posição não, então o retorno percentual encolhe conforme a conta engorda.

**Por isso o múltiplo da curva fracionária não é uma meta.** Ele descreve uma carteira sem limite de tamanho, que não existe no mini índice. O número que vale para planejar é o da coluna da esquerda.

*Isto é leitura de risco sobre um histórico simulado, não recomendação nem promessa de resultado. O teto de 2.000 contratos é uma suposição de liquidez; com teto menor as duas curvas se separam ainda antes. Quem opera decide, e o risco é de quem opera.*

