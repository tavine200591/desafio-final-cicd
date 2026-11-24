
# Desafio Final - Esteira CI/CD

![Status da Pipeline](https://github.com/tavine200591/desafio-final-cicd/actions/workflows/ci-cd.yml/badge.svg)

## Sobre o projeto

Este projeto foi desenvolvido para demonstrar uma esteira de Integração e Entrega Contínua utilizando GitHub Actions.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Node.js
- Git e GitHub
- GitHub Actions
- GitHub Pages

## Etapas da esteira

### Job 1 - Test
- Instalação das dependências.
- Execução do HTMLHint.
- Validação do projeto.

### Job 2 - Build
- Criação da pasta dist.
- Preparação dos arquivos do site.
- Upload do artefato.

### Job 3 - Deploy
- Download do artefato.
- Publicação automática no GitHub Pages.

## Troubleshooting

Foi realizado um teste proposital alterando o diretório de saída de dist para build.

A pipeline identificou que o diretório esperado não existia. O problema foi corrigido restaurando o nome dist.

## Publicação

O projeto utiliza GitHub Pages para publicar o site automaticamente.

## Autora

Távine Andrade

Curso: Técnico em Desenvolvimento de Sistemas

GitHub: https://github.com/tavine200591

Ano: 2026
