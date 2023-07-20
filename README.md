# NodeJS con TypeScript y TypeORM
API REST with relational database for 

## Tech stack:

- POO.
- Docker Compose como base de datos.
- Configuracion de TypeScript.
- Configuracion de rutas, controladores, servicios y entidades.

## Dependencies installed:

Dependencies used:

```
npm install bcrypt class-validator cors dotenv express morgan mysql typeorm typeorm-naming-strategies typescript jsonwebtoken passport passport-jwt passport-local reflect-metadata
```

Dev dependencies used:

```
npm install -D @types/bcrypt @types/cors @types/express @types/morgan concurrently nodemon @types/passport-local @types/passport-jwt @types/jsonwebtoken
```


Para correr el proyecto hay que tener dos procesos corriendo simultaneamente:
    Primero levantar el contenedor: 
    - docker-compose up 
    Luego levantar el servidor en un terminal zsh:
    - npm run start:dev
    Para generar la base de datos con migrations:
    - npm run m:gen -- src/migrations/{name}
    Para correr la migracion:
    - npm run m:run
