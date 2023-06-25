# Frontend Architecture

Este repositorio contiene un ejemplo de una arquitectura frontend para una SPA.

Explicaciones más detalladas estrán disponibles en el libro `Frontend Architecture` de [@iagolast](https://twitter.com/iagolast)

--

⚠️ Work in progress ⚠️

- Ni el libro ni el repositorio están terminados de momento.

--

## Getting started

### Pre-requisites

- Node 20

### Installation

```bash
npm install
```

### Build for production

```bash
npm run build
```

### Run for dev

```bash
npm run dev
```

## Repo details

### Dev tools

- node: Permite ejecutar javascript typescript sin un navegador.
- nvm: Permite instalar y usar diferentes versiones de node simultaneamente.
- build:
  - vite: Es una herramienta que permite construir y compilar el proyecto.
- code style:
  - Prettier: Es una herramienta que permite formatear el código.
  - Eslint: Es una herramienta que permite detectar errores o problemas potenciales en el código.
- testing:
  - vitest: Es una herramienta que permite ejecutar tests
  - testing-library: Permite ejecutar test interactuando con la app de forma similar a como lo haría un usuario.
  - user-event: Permite simular a un usuario interactuando con la aplicación.
  - msw: Permite simular llamadas a servidores.

### Libraries

TBD

### Folder structure

- **.vscode:** : Contiene configuraciones y opciones para VSCode.
  - De esa forma todas las personas que trabajan en el proyecto, tienen la misma configuración.
  - **extensions.json:** Contiene las extensiones que se recomiendan para el proyecto.
  - **launch.json:** Contiene la configuración para debuggear el proyecto.
  - **settings.json:** Contiene las configuraciones específicas del editor.
    - Por ejemplo, que al guardar se auto-organicen los imports y se formatee el código.
- **node_modules:** Contiene las dependencias npm del proyecto.
- **public:** Contiene los archivos estáticos del proyecto.
- **src:** Contiene código del proyecto.
- **.editorconfig:** Es un archivo que sirve para que diferentes editores de código se comporten de la misma forma.
  - Por ejemplo, decidir usar tabuladores en lugar de espacios o añadir una linea al final de cada archivo.
- **.eslintrc.cjs:** Es un archivo de configuración de eslint.
  - EsLint es una herramienta que sirve para detectar errores o problemas potenciales en el código.
  - Ejemplos: variables sin usar, o asignar en lugar de comparar (=) vs ===
- **.gitignore:** Es un archivo que le dice a git que archivos o carpetas no debe subir al repositorio.
- **.nvmrc** Es un archivo que le dice a nvm que versión de node debe usar.
  - Es importante que todos los desarrolladores usen la misma versión de node para evitar problemas.
- **.prettierrc:** Es un archivo de configuración de prettier.
  - Prettier es una herramienta que sirve para formatear el código.
  - A diferencia de EsLint, Prettier no detecta errores, solo formatea el código.
- **index.html:** Es la única página HTML del proyecto.
- **package-lock.json:** Contiene informacion exacta de las dependencias del proyecto.
- **package.json:** Es un archivo que contiene información del proyecto y sus dependencias.
- **README.md:** Es un archivo que contiene información útil sobre el proyecto.
- **tsconfig.json:** Es el archivo de configuración de typescript.
- **tsconfig.node.json:** Es el archivo de configuración de typescript específico para los comandos de node.
- **vite.config.ts:** Es el archivo de configuración de Vite. La herramienta que se usa para compilar el proyecto.
- **vitest.config.ts:** Es el archivo de configuración de Vitest. La herramienta que se usa para probar el proyecto.

#### SRC

En esta carpeta encontramos el código del proyecto.

El punto de entrada es `main.tsx` que a su vez monta una aplicación React `App.tsx` en el elemento `root` del `index.html`. Al tener App aislado podemos realizar tests unitarios que imitan casi perfectamente el comportamiento de usuarios interactuando con la aplicación.

- **main.tsx:** Punto de entrada de la aplicación.
- **App.tsx:** Componente padre de la aplicación.
- **router.tsx:** Contiene las rutas de la aplicación (usando react-router).
- **assets**: En esta carpeta se encuentran recursos estáticos que pueden ser procesados por vitest.
- **types:**: En esta carpeta encontramos los objetos de dominio de la aplicación representados como tipos de typescript.
- **services:**: En esta carpeta encontramos los `servicios` de la aplicación.
  - Los servicios representan los casos de uso de la aplicación.
  - Se implementan mediante funciones puras y únicamente dependen de los objetos de dominio.
- **client:** En esta carpeta se encuentra el codigo del cliente que se encarga de comunicarse con el servidor.
  - Tenemos un único cliente que se encarga de comunicarse con el servidor.
  - Las credenciales se extraen automáticamente de localstorage y se añaden a cada petición.
  - Se utiliza Axios
- **repositories:** En esta carpeta encontramos los `repositorios` de los recursos de la aplicación.
  - Un repositorio es una abstracción que nos permite interactuar con un recurso.
    - Por ejemplo, un repositorio de usuarios nos permite obtener, crear, actualizar y borrar usuarios.
  - Similar al [patrón repositorio](https://martinfowler.com/eaaCatalog/repository.html)
- **queries:** En esta carpeta encontramos las `queries` y las mutaciones de los recursos de la aplicación.
  - Podemos pensar en una adaptación del [patrón CQRS](https://martinfowler.com/bliki/CQRS.html)
  - Una [query](https://tanstack.com/query/latest/docs/react/guides/queries) es una dependencia declarativa de un recurso asíncrono.
  - Una [mutación](https://tanstack.com/query/latest/docs/react/guides/mutations) es una función que contiene "efectos secundarios".
- **components:** En esta carpeta encontramos los componentes que reutilizamos de forma global en la aplicación.
- **pages:** En esta carpeta encontramos componentes asociados a rutas (página)
  - Por ejemplo `auth.page.tsx` es el componente asociado a la ruta `/auth`.
  - Cada página tiene su propio directorio donde encontramos los siguientes archivos:
    - name.page.tsx: Componente de react que representa la página.
    - name.test.tsx: Tests unitarios del componente.
    - name.controller.tsx: Controlador de la página.
    - name.route.tsx: Información de la ruta.
    - `components`: En esta carpeta encontramos los componentes o páginas hijas que se usan en esta página.
      - si un componente se usa en más de una página, se debe mover a la carpeta `components` de la aplicación.
      - Este proceso se repite de foma recursiva.
      - Los imports hacia arriba están prohibidos.
      - De esta forma podemos controlar el alcance de los cambios --> Cambios en una carpeta no afectan a sus hermanos.
        - En el ejemplo cambios en /pages/auth/dashboard/ no afectan a /pages/auth/login/
