# az-webapp-helloworld

Simple Hello World Node.js app for Azure App Service demo.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Deploy to Azure App Service

```bash
az login
az webapp up --name <your-app-name> --resource-group <your-rg> --runtime "NODE:20-lts" --sku F1
```