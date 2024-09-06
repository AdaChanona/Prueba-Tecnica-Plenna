```markdown
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
   git clone https://github.com/tu_usuario/tu_repositorio.git
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

## Estructura del Proyecto
- `src/`: Código fuente de la aplicación.
  - `index.ts`: Punto de entrada principal de la aplicación.
  - `routes/`: Contiene las rutas de la aplicación.
  - `controllers/`: Lógica de los controladores.
  - `db/`: Modelo de base de datos.
  - `utils/`: Función de unificación y json.
  - `middlewares/`: Middlewares personalizados.
- `dist/`: Código transpilado de TypeScript a JavaScript (generado después de ejecutar `npm run build`).
- `package.json`: Archivo de configuración de npm.
- `tsconfig.json`: Configuración de TypeScript.
- `.gitignore`: Archivos y directorios a ignorar por Git.

## Configuración
Puedes configurar la aplicación generando los archivos `.env` y `env.ts` para definir variables de entorno y otros parámetros de configuración.

## Autor
Ada Chanona   
```

Este `README.md` cubre los aspectos esenciales para comenzar con la aplicación. Puedes personalizarlo según las necesidades específicas de tu proyecto.
