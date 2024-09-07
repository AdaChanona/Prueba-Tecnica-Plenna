# Prueba Técnica Plenna

## Características

- **TypeScript**: Lenguaje de programación que ofrece tipado estático para JavaScript.
- **Node.js**: Entorno de ejecución para JavaScript en el lado del servidor.
- **Express**: Framework para Node.js que simplifica la construcción de aplicaciones web.

## Requisitos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [TypeScript](https://www.typescriptlang.org/) (instalado globalmente)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/AdaChanona/Prueba-Tecnica-Plenna.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd tu_repositorio
   ```

3. **Instala las dependencias:**
   
   ```bash
   npm install
   ```

## Uso
**Inicia la aplicación:**

   ```bash
     npm start
   ```
La aplicación se ejecutará en `http://localhost:8080`.

**Compilar aplicación:**

   ```bash
     npm run build
   ```
**Ejecutar test:**

   ```bash
     npm test
   ```

## Estructura del Proyecto
- `src/`: Código fuente de la aplicación.
  - `index.ts`: Punto de entrada principal de la aplicación.
  - `routes/`: Contiene las rutas de la aplicación.
  - `controllers/`: Lógica de los controladores.
  - `db/`: Modelo de base de datos.
  - `utils/`: Función de unificación y json.
  - `middlewares/`: Middlewares personalizados.
- `dist/`: Código transpilado de TypeScript a JavaScript (generado después de ejecutar `npm run build`).
- `tests/`: Código para ejecutar los test.
- `package.json`: Archivo de configuración de npm.
- `tsconfig.json`: Configuración de TypeScript.
- `.gitignore`: Archivos y directorios a ignorar por Git.
- `combined.log`: Archivo de registro de logs.
- `jest.config.ts`: Archivo de configuración de jest.
- `nodemon.json`: Archivo de configuración de nodemon.
- `Dockerfile`: Archivo de configuración de docker.
- `deployment.yaml`: Archivo de configuración de kubernetes.

## Configuración
Puedes configurar la aplicación generando los archivos `.env` y `env.ts` para definir variables de entorno y otros parámetros de configuración.
**Estructura de .env**
 ```bash
   PORT=8080,
   HOST='localhost',
   MONGO_URL= 'url-mongo-db',
 ```
**Estructura de env.ts**
 ```bash
   import { z } from "zod";

   const envSchema = z.object({
     PORT: z.string().default("port"),
     HOST: z.string().default("localhost"),
     MONGO_URL: z.string().default("url-mongo-db"),
   });

   export const env = envSchema.parse(process.env);
 ```

## Autor
Ada Chanona
