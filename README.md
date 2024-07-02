# Projeto Angular com Clean Architecture

Este projeto foi criado utilizando o padrão Clean Architecture para organizar e desacoplar o código, facilitando a manutenção e escalabilidade do sistema.

## Estrutura de Diretórios

A estrutura de diretórios do projeto segue as principais camadas de organização do Clean Architecture:

src/
│
├── app/
│ ├── core/
│ │ └── services/ # Implementação dos serviços
│ │
│ ├── Domain/ # Camada de Aplicação
│ │ ├── models/ # Entidades
│ │ ├── repositories/ # Camada de persistência
| |
│ ├── presentation/ # Camada de apresentação
│ │ ├── components/ # Componentes da aplicação
│
└── assets/ # Arquivos estáticos
