**Inicialización de proyecto de Nodejs**

npm init -y
npm install express
node index.js

**Para usar un archivo .env**
pnpm add dotenv

**Hay que modificar esa parte de scripts por esto en el archivo packege.json**
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }

**instalamos nodemon para uso de pnpm o npm start**
pnpm add -D nodemon

**Para conectar la base de datos**
pnpm add mssql

**Para instalar bycryp**
pnpm add bcrypt
pnpm add -D @types/bcrypt


**habilita los cors**
pnpm add cors

** instalar nest ** 
pnpm add -g @nestjs/cli

**Instalar Frontend**

- ng new [nombreProyect]
**inicializar el servidor**
- ng serve
