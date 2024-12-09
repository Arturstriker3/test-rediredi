# Repositório para teste técnico RediRedi.

Esse repositório contém o teste técnico RediRedi realizado com Vue/Typescript/Tailwind.

## Tabela de Conteúdo

- [Instalação](#instalação)
- [Testes](#testes-unitários)
- [Visual](#design-visual)

## Instalação

Intruções para rodar o projeto. Para rodar o projeto poder ser usado o ambiente de desenvolvimento ou a imagem docker do projeto.

### Execução com ambiente de desenvolvimento

```bash
# Clonar Repositório
git clone https://github.com/Arturstriker3/test-rediredi

# Navegue até o diretório do projeto
cd test-rediredi

# Instalar PNPM
npm install -g pnpm

# Instalar Dependências
pnpm install

# Rodar localmente:
pnpm run dev
```

### Execução com docker

```bash
# Clonar Repositório
git clone https://github.com/Arturstriker3/test-rediredi

# Navegue até o diretório do projeto
cd test-rediredi

# Buildar Imagem e Rodar o Container
docker build -t test-rediredi:1.0 .
docker run -d -p 9192:80 test-rediredi:1.0
```

## Testes Unitários

Para rodar os testes, precisa ter seguido o fluxo de \*Rodar com ambiente de desenvolvimento

```bash
# Rodar testes no terminal
pnpm vitest,

# Rodar testes com interface do vitest
pnpm vitest --ui
```

## Design Visual

<div align="center" style="display: flex; flex-direction: column; gap: 16px;">
    <img src="https://github.com/user-attachments/assets/c9c80f42-ae07-43bc-89a7-fc86fc4d08f3" alt="alt text" width="300" height="499" />
    <img src="https://github.com/user-attachments/assets/ceab5d71-c712-4bf4-98db-f94b20120d72" alt="alt text" width="300" height="499" />
    <img src="https://github.com/user-attachments/assets/ae7e2538-9a65-4531-b136-11c28e5f0d88" alt="alt text" width="300" height="499" />
    <img src="https://github.com/user-attachments/assets/6313894b-04bb-453d-afce-6b06c3b0668b" alt="alt text" width="300" height="499" />
</div>
