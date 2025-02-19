# 🎵 ArtSound

ArtSound es un sitio web informativo sobre géneros musicales y artistas, desarrollado como una **SPA (Single Page Application)** con **React** y **SCSS**.

## 🚀 Tecnologías Utilizadas

- **React** + Vite ⚡
- **SCSS** 🎨
- **React Router** para navegación 🛤️
- **React Helmet Async** para SEO 🏷️

## 💂️👤 Estructura del Proyecto

```
README.md
📦 ArtSound
├── 📂 public        # Contiene imágenes, iconos y canciones
├── 📂 src
│   ├── 📂 assets      # Recursos necesarios (fuentes, imagenes, estilos)
│   ├── 📂 components  # Componentes reutilizables
│   ├── 📂 pages       # Páginas del sitio
│   ├── 📂 data        # Datos en formato JSON (genres.json, artists.json)
│   ├── 📂 styles      # Estilos en SCSS
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
└── README.md
```


## 📊 Datos Utilizados

Toda la información de géneros y artistas está almacenada en archivos **JSON** dentro de `src/data/`:

- **`genres.json`** → Contiene los géneros musicales y sus descripciones.
- **`artists.json`** → Contiene información de artistas destacados.

## 🎯 Características Principales

✅ Información detallada de géneros musicales y artistas  
✅ Navegación fluida con React Router  
✅ Optimización SEO con React Helmet Async  
✅ Diseño atractivo con SCSS  
✅ Datos dinámicos desde archivos JSON  

## 📆 Instalación y Ejecución

1️⃣ Clona el repositorio:

```sh
git clone https://github.com/DarlinMelgarejo/artsound.git
```

2️⃣ Accede al proyecto:

```sh
cd ArtSound
```

3️⃣ Instala las dependencias:

```sh
npm install
```

4️⃣ Ejecuta el servidor de desarrollo:

```sh
npm run dev
```