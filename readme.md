# Projeto para estudo de DDD (Domain Driven Design) de forma prática

## Criando o projeto typescript

```bash
npm i typescript --save-dev
```

## Criando o tsconfig.json para configurar o typescript
```bash
npx tsc --init
```

## Alterações no tsconfig
- incremental (Compila apenas o que foi alterado)
- outDir (Compila em um diretório apartado "/dist")
- include (Compila o que está em src)

## Compilando typescript
```bash
npx tsc
```

## Instalando o tslint
```bash
sudo npm i tslint --save-dev
```

## Configurando o tslint (gerando tslint.json)
```bash
npx tslint --init
```