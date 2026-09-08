# ⚡ PokeExplorer Mobile

## 📌 Nombre del proyecto

**PokeExplorer Mobile**

Aplicación móvil desarrollada con **React Native y Expo** que permite explorar información sobre diferentes Pokémon utilizando una API externa. Los usuarios pueden buscar Pokémon, consultar sus características, guardar favoritos y navegar entre diferentes pantallas.

---

## 🛠️ Tecnologías utilizadas

* React Native
* Expo
* JavaScript
* Axios
* React Navigation
* PokéAPI
* AsyncStorage

---

## 🌐 API utilizada

Para obtener la información de los Pokémon utilizamos **PokéAPI**.

La aplicación realiza consultas a la API utilizando **Axios** y obtiene información como:

* Nombre.
* Imagen.
* Tipo.
* Altura.
* Peso.

---

## 📖 Descripción

PokeExplorer Mobile es la adaptación para dispositivos móviles de la aplicación web PokeExplorer.

La aplicación permite consultar un listado de Pokémon y visualizar información sobre cada uno de ellos.

El usuario puede buscar Pokémon mediante un buscador y agregar los que quiera a una lista de favoritos.

La aplicación cuenta con dos pantallas principales:

* **Home:** listado general y buscador.
* **Favoritos:** Pokémon seleccionados por el usuario.

La interfaz fue diseñada específicamente para dispositivos móviles utilizando componentes propios de React Native.

---

## 📱 Organización del proyecto

El proyecto está organizado separando componentes, pantallas y servicios.

```text
poke-explorer-mobile/
│
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   └── ItemCard.jsx
│
├── screens/
│   ├── HomeScreen.jsx
│   └── FavoritesScreen.jsx
│
├── services/
│   └── api.js
│
├── App.js
└── package.json
```

### Components

**Header.jsx**

Contiene el encabezado de la aplicación.

**SearchBar.jsx**

Contiene el campo de búsqueda y permite modificar el texto ingresado por el usuario.

**ItemCard.jsx**

Representa cada Pokémon y muestra su información junto con la opción de agregarlo o quitarlo de favoritos.

### Screens

**HomeScreen.jsx**

Es la pantalla principal. Se encarga de consultar la API, mostrar el listado, administrar el buscador y gestionar los favoritos.

**FavoritesScreen.jsx**

Muestra los Pokémon seleccionados como favoritos y permite quitarlos de la lista.

### Services

**api.js**

Contiene la lógica para realizar las consultas a PokéAPI utilizando Axios.

---

## ⚙️ Funcionalidades

La aplicación permite:

* 🔎 Buscar Pokémon por nombre.
* 📋 Visualizar un listado de Pokémon.
* 🖼️ Mostrar imágenes.
* 📊 Mostrar tipo, altura y peso.
* ❤️ Agregar Pokémon a favoritos.
* ❌ Quitar Pokémon de favoritos.
* 🚫 Evitar Pokémon repetidos en favoritos.
* ⏳ Mostrar un mensaje mientras se carga la información.
* ⚠️ Mostrar un mensaje si ocurre un error.
* 📭 Informar cuando no se encuentran resultados.
* 🧭 Navegar entre Home y Favoritos.
* 📱 Adaptar la interfaz para dispositivos móviles.

---

## 📦 Componentes de React Native utilizados

Durante el desarrollo se utilizaron componentes propios de React Native:

* `View`
* `Text`
* `Image`
* `Pressable`
* `TextInput`
* `FlatList`

No se utilizaron etiquetas HTML como `div`, `p` o `button`.

Para los estilos se utilizó:

```javascript
StyleSheet.create()
```

---

## 🧭 Navegación

La navegación entre pantallas se realizó utilizando **React Navigation**.

La aplicación cuenta con:

### Home

Muestra el listado de Pokémon, el buscador y permite agregar elementos a favoritos.

### Favoritos

Muestra los Pokémon seleccionados por el usuario y permite eliminarlos de la lista.

---

## 💾 Persistencia de favoritos

Para guardar los favoritos de manera persistente en React Native se utiliza **AsyncStorage**.

Esto permite almacenar información localmente en el dispositivo y recuperarla cuando se vuelve a abrir la aplicación.

Ejemplo:

```javascript
await AsyncStorage.setItem(
  "favorites",
  JSON.stringify(favorites)
);
```

Para recuperar los favoritos:

```javascript
const savedFavorites =
  await AsyncStorage.getItem("favorites");

const favorites =
  savedFavorites
    ? JSON.parse(savedFavorites)
    : [];
```

---

## 💻 Conceptos de JavaScript utilizados

Durante el desarrollo se utilizaron diferentes herramientas de JavaScript y React:

* `const` y `let`.
* Arrow functions.
* Arrays.
* Objetos.
* `.map()`.
* `.filter()`.
* `.some()`.
* Template strings.
* Spread operator.
* Destructuring.
* `useState`.
* `useEffect`.
* Renderizado condicional.
* AsyncStorage.

---

## 🧪 Manejo de errores

Durante el desarrollo se utilizaron las herramientas disponibles en Expo y React Native para detectar y solucionar errores.

Principalmente:

* Console.
* Mensajes de error de Expo.
* Mensajes de error del dispositivo o emulador.
* Debugger.

Se verificó el funcionamiento de la consulta a la API, el buscador, los favoritos y la navegación.

---

## 🚀 Instalación

Para ejecutar el proyecto:

### 1. Clonar el repositorio

```bash
git clone https://github.com/kiaribrukk/poke-explorer-mobile.git
```

### 2. Ingresar a la carpeta

```bash
cd poke-explorer-mobile
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Instalar las dependencias de Expo utilizadas

```bash
npx expo install
```

### 5. Ejecutar la aplicación

```bash
npx expo start
```

A continuación se puede ejecutar la aplicación utilizando Expo Go, un emulador Android o un dispositivo compatible.

---

## 🔄 Diferencias entre React Web y React Native

La principal diferencia encontrada fue la forma de construir la interfaz.

En React Web se utilizan elementos HTML como:

```html
<div>
<p>
<button>
<input>
```

Mientras que en React Native se utilizan componentes específicos para dispositivos móviles:

```text
View
Text
Pressable
TextInput
Image
FlatList
```

También cambió la forma de aplicar estilos. En React Web se utilizó CSS mediante un archivo `index.css`, mientras que en React Native se utilizó `StyleSheet.create()`.

Otra diferencia importante es el almacenamiento de información. En la versión Web se utiliza `localStorage`, mientras que en React Native se utiliza `AsyncStorage`.

Para el listado también se utilizó `FlatList` en React Native, ya que está pensado para mostrar listas de elementos de manera eficiente en dispositivos móviles.

Finalmente, la navegación se adapta a cada entorno: en la Web se utilizó **React Router**, mientras que en la versión Mobile se utilizó **React Navigation**.





