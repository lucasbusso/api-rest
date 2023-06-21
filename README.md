# NodeJS con TypeScript y TypeORM
API REST compleja con NodeJS utilizando como lenguage core `TypeScript` y `TypeORM` como ORM SQL.

## Tecnologias a aplicar:

- POO.
- Docker Compose como base de datos.
- Configuracion de TypeScript.
- Configuracion de rutas, controladores, servicios y entidades.

## Lista de dependencias para instalacion:

Dependencias necesarias:

```
npm install class-validator cors dotenv express morgan mysql typeorm typeorm-naming-strategies typescript
```

Dependencias de desarrollo necesarias:

```
npm install -D @types/cors @types/express @types/morgan concurrently nodemon
```


Para correr el proyecto hay que tener dos procesos corriendo simultaneamente:
    Primero levantar el contenedor:
    - docker-compose up 
    Luego levantar el servidor en un terminal zsh:
    - npm run start:dev