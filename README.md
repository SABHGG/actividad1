# Proyecto de Aplicación Web con Flask

Este proyecto es una aplicación web sencilla desarrollada con **Flask**, que sirve como una plataforma para realizar diversas operaciones matemáticas y evaluaciones básicas. La aplicación cuenta con varias rutas que permiten a los usuarios interactuar con el sistema de diferentes maneras.

## Funcionalidades

- **Ruta Principal (`/`)**: Saludo básico que muestra "Hola Mundo!".
  
- **Ruta Secundaria (`/ruta2`)**: Muestra un mensaje indicando que el usuario se encuentra en la ruta 2.

- **Ruta Terciaria (`/ruta3`)**: Similar a la ruta secundaria, pero muestra un mensaje para la ruta 3.

- **Consulta de Edad (`/edad/`)**: Pide al usuario que ingrese su edad. También incluye una ruta que permite mostrar un mensaje basado en la edad ingresada:
  - Menor de 18 años: "Eres menor de edad".
  - Entre 18 y 59 años: "Eres mayor de edad".
  - 60 años o más: "Eres un adulto mayor".

- **Cálculo de Notas (`/notas/`)**: Permite ingresar tres notas y calcula la nota final basándose en un porcentaje predefinido para cada una.

- **Generación de Arreglos Aleatorios (`/arreglo/`)**: Genera un arreglo de números aleatorios. Puede ser unidimensional o bidimensional, dependiendo de los parámetros ingresados.

- **Cálculo de Ecuaciones (`/ecuacion/`)**: Permite realizar una operación matemática sencilla basada en dos valores ingresados.

- **Multiplicación (`/multiplicar/`)**: Genera la tabla de multiplicar para un número dado.

- **Cálculo de Áreas**:
  - **Círculo (`/calcular/circulo/<radio>/`)**: Calcula el área de un círculo basado en el radio proporcionado.
  - **Cuadrado (`/calcular/cuadrado/<lado>/`)**: Calcula el área de un cuadrado basado en el lado proporcionado.
  - **Triángulo (`/calcular/triangulo/<base>/<altura>/`)**: Calcula el área de un triángulo basado en la base y la altura proporcionadas.
