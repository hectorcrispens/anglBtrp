# Angular

[![angular](https://img.shields.io/badge/angular-12.2.0-red?style=flat-square&logo=angular)](https://angular.io/)

## Guia para desarrolladores

<img src="../imag/angl.png" alt="angular" style="zoom:40%;" />



------



## Tabla de Contenido

[TOC]

------



## Descripción

Esta guia esta destinada a aquellos desarrolladores que utilicen este proyecto para el desarrollo de nuevas aplicaciones. Se provee a continuación una descripción de la estructura del proyecto para que pueda escalar de forma ordenada.  Nuestro desarrollo esta concentrado dentro de la carpeta code/src/app. Allí se encuentran una serie de carpetas que organizan el desarrollo. 

Si está familiarizado con el desarrollo de aplicaciones en **Angular** se hace aqui una pequeña aclaración acerca de algunos de los elementos más importantes del mismo:

#### Componente:

> Los componentes son el bloque de creación principal para las aplicaciones  angulares. 
>
> Cada componente consta de: 
>
> - Una plantilla HTML que declara lo  que se representa en la página 
> - Una clase Typescript que define el  comportamiento 
> - Un selector CSS que define cómo se utiliza el componente  en una plantilla 
> - Opcionalmente, estilos CSS aplicados a la plantilla



#### Modulo:

> Un módulo de características es una práctica recomendada de la organización, en lugar de un concepto de la API angular principal. 
>
> Un módulo de características ofrece un conjunto cohesivo de funcionalidad centrada en una necesidad específica de la aplicación, como un flujo de trabajo de usuario, enrutamiento o formularios. 
>
> Aunque puede hacer todo dentro del módulo raíz, los módulos de características le ayudan a dividir la aplicación en áreas enfocadas. 
>
> Un módulo de características colabora con el módulo raíz y con otros módulos a través de los servicios que proporciona y los componentes, directivas y canalizaciones que comparte.



#### Servicio:

> Los componentes no deben obtener o guardar datos directamente y ciertamente no deben presentar a sabiendas datos falsos. Deben centrarse en  presentar datos y delegar el acceso a los datos a un servicio.

------



## Estructura de carpetas del proyecto

```bash
├── app
│   ├── mole
│   ├── temp
│   ├── modl
│   ├── page
│   ├── rout
│   ├── serv
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets
├── environments
├── favicon.ico
├── index.html
├── main.ts
├── polifills.ts
├── styles.css
└── test.ts

```

------



## Detalles de las carpetas

#### Moléculas (mole)

> "Things start getting more interesting and tangible when we start  combining atoms together. Molecules are groups of atoms bonded together  and are the smallest fundamental units of a compound. These molecules  take on their own properties and serve as the backbone of our design  systems."

Basados en atom design, la carpeta **mole** contiene componentes moleculares de atom design. Mientras un atomo esta representado por cualquier tag html, por ejemplo un <input type="text">, un conjunto de ellos con un proposito general respresenta una molécula, por ejemplo un input con un boton para un cuadro de busqueda. Una card también es  un componente que puede ir en esta sección.

En esta sección encontrará los componentes que le permitiran construir las interfaces de cualquier proyecto.



#### Templates (temp)

> "At the template stage, we break our chemistry analogy to get into  language that makes more sense to our clients and our final output.  Templates consist mostly of groups of organisms stitched together to  form pages. It’s here where we start to see the design coming together  and start seeing things like layout in action."

Saltando lo que sería un organismo en atom design, los cuales se construiran dentro de los templates. Esta carpeta contendrá todos los templates, es decir aquellos layouts que proporcionarán estructura a las páginas. Un ejemplo claro de un template es un panel que contendra dentro un listado de post para un blog.



#### Model (modl)

En el modelo estarán ubicados aquellos modelos de la aplicación que mapearán directamente con los modelos del backend; o en su defecto con los DTO. Un producto, un usuario son ejemplo de un modelo. En esta carpeta habrá únicamente clases de typescript o si se desea se puede crear una capeta dentro para separar las interfaces de las implementaciones. Pero en general esta carpeta solo puede contener definiciones de interfaces y/o implementaciones de clases del modelo.



#### Pages (page)

> "Pages are specific instances of templates. Here, placeholder content is  replaced with real representative content to give an accurate depiction  of what a user will ultimately see."

La carpeta pages, es la que contiene el conjunto de componentes con las páginas que expone la aplicación.  Cada componente de página contiene en su interior uno o más componentes de template como también el conjunto de componentes moleculares que forman parte de la vista.

Cada una de las rutas de la aplicación solo puede invocar a un componente **page**, nunca mapeará con un template, ni una molecula, ni un model. Solo las páginas son las que muestran contenido al exterior a través de alguna de las definiciones de ruta.



#### Route (rout)

> "A configuration object that defines a single route. A set of routes are collected in a `Routes` array to define a `Router` configuration. The router attempts to match segments of a given URL against each route, using the configuration options defined in this object."

La carpeta **route** contiene el modulo específico para la creación de rutas. Un ruta es aquella parte de la *url* que permite definir cual es la vista que va devolver la aplicación.

Como primera instancia, la aplicación provee un único RouterModule. Sin embargo es posible crear y encadenar más de un módulo de rutas. Ver la documentación de **Angular**.



#### Servicios (serv)

> Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

Los componentes por si mismos, en este caso los componentes pages no pueden acceder a los datos por si mismo. Sino que lo hacen a través de los servicios. Los servicios tienen el propósito, y son los únicos que intercambian información con el servidor. Un page para mostrar datos en una tabla por ejemplo, hace uso de un servicio para que este le proporcióne un listado de datos para mostrar. Lo mismo si desde una pagina se desea enviar un producto/usuario o cualquier otra de las instancias del modelo, para ser almacenadas en una base de datos, lo hará a traves de alguno de los métodos de un servicio.

Un servicio es la única puerta para ir hacia el backend.



#### App.component

Este componente, es un componente especial. Es el componente principal de la aplicación, en general no se deberia tocar. Es el componente **root**, obviamente puede haber una situación especial que requiera cambiar el componente root, pero en general no será necesario. 

Cualquier cambio o incorporación de estilos en el componente root afectará al resto de componentes, ya que la filosofía de angular es que todos los componentes de paginas sean renderizados en una sola página y ello lo lleva a cabo en el renderizado del componte **root**. Solo debe ser modificado cuando desee un cambio que afecte a toda la aplicación, en cambio si desea cambios en una página especifica solo debe modificar el componente para esa página.
