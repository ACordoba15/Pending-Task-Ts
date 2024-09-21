# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Typescript
- `npm install -g typescript` Instalar typescript
- `tsc -init`   Inicializa un proyecto ts
- `tsc -w `     Entra en modo observador, revisa todos los archivos en busca de errores 

# Proyecto de React con Vite 
- [Vite](https://vitejs.dev/guide/) is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- `npm create vite@latest` Crea un proyecto de react con vite
- `npm i` Instala las dependencias
- `npm run dev` Ejecuta el proyecto
# Tipos de datos

## Number
> Se definen de la siguiente forma: 
- `const num1: number = 10;`

## String
> Se definen de la siguiente forma: 
- `const str1: string = "hola";`
- `const str2: string = 'Andres';`
- `` const str3 = `Hola mundo, mi nombre es #{str2}`; ``

## Booleans
> Se definen de la siguiente forma: 
- `const bool1: boolean = true/false;`

## Undefined
> Se definen de la siguiente forma: 
- `let varUndefined: undefined;`

## Null
> Se definen de la siguiente forma: 
- `let varNull: null;`

## Objeto
> Se definen de la siguiente forma: 
```
const programador = {
    nombre: "Dev",
    lenguajes: ["C#", "Python", "Javascript"]
    edad: 27,
    entusiasmado: true
};
```

## Arrays
> Se definen de la siguiente forma: 
- `const numeros: number[] = [1,2,3,4];`
- `const letras: string[] = ["a", "b", "c", "d"];`
- `const bools: boolean[] = [true, false];`

## Enums
> Se definen de la siguiente forma: 
```
enum Dias {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
};

enum Colores {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul"
};
```

## Funciones
> Se definen de la siguiente forma:
```
// Funciones con tipado explícito
function sum(a: number, b: number): number {
    return a+b;
}

// Funciones flecha con retorno implícito (se infiere por typescript)
const div = (a: number, b: number) => a/b;

// Funiciones con parámentros opcionales
functions saludo (nombre: string, edad?: number): string {
    if(edad !== undefined) {
        return `Hola, mi nombre es #{nombre} y tengo #{edad} años.`;
    }
    else {
        return `Hola, mi nombre es #{nombre}.`;
    }
}

// Funciones con parámetros por defecto
function saludo(nombre: string, edad: number = 27): string {
    return `Hola, mi nombre es #{nombre} y tengo #{edad} años.`;
}
```

## Clases
> Se definen de la siguiente forma:
```
class Persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`;)
    }
}
```

## Interfacez
> Se definen de la siguiente forma:
```
// Interface básica
interface Persona {
    nombre: string;
    edad: number;
}

// Interface con propiedades opcionales
interface Producto {
    nombre: string;
    precio: number;
    descripcion?: string;
}

// Interface para funciones
interface Comparador {
    (a: number, b: number) : boolean;
}

// Interface para clases (class interfaces)
interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
}
```

## Types
> Se definen de la siguiente forma:
```
// Type básico
type Numero = number;

// Type básico Objeto literal
type Persona1 = {nombre: string; edad: number;}

// Type con union types 
type Nombre = string | null;

// Type con propiedades opcionales
type Producto = {
    nombre: string;
    precio: number;
    descripcion?: string;
}

// Type para funciones
type Comparador = {
    (a: number, b: number) : boolean;
}

// Type Persona ={
    nombre: string;
    edad: number;
    saludar(): void;
}
```

## Uso de 'any'
> Si no se le asigna un tipo de dato a la variable, funcion, etc, se inferirá que es de tipo any, por ende infiere que puede ser de cualquier tipo, `string`,`number`, `bool`, pasa lo mismo si se le asigna `any`.
**Se recomienda no usar any, se debe de cambiar por el tipo correspondiente**
```
let data; // let data: any; 

// Infiere que es string
data = "Hola";
console.log(data);

// Infiere que es number
data = 12345;
console.log(data);

// Infiere que es boolean
data = true;
console.log(data);
```

## Ejemplos
> Uso de type con objetos
```
type Programador = {
    nombre: string,
    tecnologia: string[],
    // Se puede decir que el valor no viene y 
    // en caso de que venga, que puede ser de tipo 
    // boolean o null
    tomaCafe?: boolean | null 
}

let programador1: Programador = {
    nombre: "Andrés",
    tecnologia: ["React"],
    tomaCafe: true
}


let programador2: Programador = {
    nombre: "Andrés",
    tecnologia: ["React"],
    tomaCafe: null
}

let programador3: Programador = {
    nombre: "Andrés",
    tecnologia: ["React"]
}
```

> Uso de interface con objeto
```
interface Programador {
    nombre: string,
    tecnologia: string[],
    tomaCafe?: boolean | null
}

let programador1: Programador = {
    nombre: "Andrés",
    tecnologia: ["React"],
    tomaCafe: true
}


let programador2: Programador = {
    nombre: "Andrés",
    tecnologia: ["React"],
    tomaCafe: null
}

let programador3: Programador = {
    nombre: "Andrés",
    tecnologia: ["React"]
}

function enviarCurriculum(programador: Programador) {
    console.log(`Este CV es de ${programador.nombre}`);
}

enviarCurriculum(programador1);
```

> Uso de clases
```
class Pelicula {
    nombre?: string; // Si se deja sin '?' da error porque ts pide o inicializarlo o ponerle un '?'
    protagonistas?: string[];
    actores?: string[];

    proyectarCine(){
        console.log(`La película ${this.nombre} está siendo proyectada`);
    }

    constructor(nombre: string, protagonistas: string[], actores: string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}

const pelicula = new Pelicula("F&F5", ["Dom", "Hobbs"], ["Vin", "Rock"]);
const pelicula2 = new Pelicula("F&F9", ["Shaw", "Hobbs"], ["Stateman", "Rock"]);

pelicula.proyectarCine();
pelicula2.proyectarCine();
```

```
// Clases genéricas con get y set
class Sorteo<T> //<T> Hace referencia a un dato genérico, puede ser number, string, etc.
{
    private ticket?: T;

    constructor(private nombre: string){}

    setTicket(ticket:T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}

let sorteo = new Sorteo<number>("Andrés");
sorteo.setTicket(5);
console.log(sorteo.sortear());

let sorteo2 = new Sorteo<string>("Andrés");
sorteo2.setTicket("24A");
console.log(sorteo2.sortear());
```