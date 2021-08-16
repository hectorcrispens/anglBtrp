![](imag/head.png)





<center><h1>Angular Bootstrap</h1></center>

<center>Proyecto de Angular  con incorporación de boostrap</center>

<center><a href="https://angular.io/)"><img src="https://img.shields.io/badge/angular-12.2.0-red?style=flat-square&logo=angular"></a> <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/bootstrap-5.1.0-green?style=flat-square&logo=bootstrap"</a><a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/badge/node-14lts-success?style=flat-square&logo=node.js"></a></center>



Versión 01.08.2021

Documento léeme

------



## Contributors

[<img src="http://0.gravatar.com/avatar/5cb744a885a509cbccc66817ec2927e1" style="border-radius:50%; width:60px; height:60px; margin-right:10px;">](https://www.linkedin.com/in/hector-orlando-25124a18a/)  [<img src="https://media-exp1.licdn.com/dms/image/C4E03AQEDPFISYGfh3Q/profile-displayphoto-shrink_800_800/0/1585863103638?e=1634774400&v=beta&t=Ae6ZRNZ6iNNWA1rbdQs2Vt6UAM9NXHAVjzewj_80054" style="border-radius:50%; width:60px; height:60px; margin-right:10px;">](https://www.linkedin.com/in/sergio-ridaura/)

------





------



## Tabla de contenido

- [Contributors](#contributors)
- [Tabla de contenido](#tabla-de-contenido)
- [Descripción](#descripción)
- [Requirimientos](#requirimientos)
- [Instalación y primeros pasos](#instalación-y-primeros-pasos)
- [Instalación con contenedores docker](#instalación-con-contenedores-docker)
- [Otros comandos](#otros-comandos)
- [Licencia](#licencia)
  - [GNU General Public License](#gnu-general-public-license)

## Descripción

Proyecto de Angular con la incoporación de Bootstrap como framework de css como también de un conjunto de componentes moleculares (según la metodología de Atom Design).

- Angular es un framework para el diseño de aplicaciones y una plataforma de desarrollo para crear aplicaciones de una sola página eficientes y sofisticadas. 

- Bootstrap es un kit de herramientas de front-end de código abierto , con un sistema de grillas responsivo, amplios componentes prediseñados y potentes complementos de JavaScript. 
- Atom Design es una metodología para el diseño de páginas como un sistema compuesto de partes, las cuales se estructuran en distintos niveles. hay cinco niveles distintos en el atom design:
  - Átomos
  - Moléculas
  - Organismos
  - Plantillas
  - Páginas 

------



## Requirimientos

Para tener instalado el proyecto de angular para el desarrollo de aplicaciones, previamente debe estar instalado en el sistema **Node** y **NPM**, en especial la versión 14 (Fermium) de Node (el software de Node ya incluye el manejador de paquetes NPM).

> El software de node se puede descargar de la pagina oficial [aquí](https://nodejs.org/es/)



También se recomienda instalar el @Angular/Cli que esta la interface de linea de comandos de **Angular**, la misma incluye un conjunto de comandos que facilitan la creación de componentes, módulos, servicios como también la correspondiente compilación del proyecto para la puesta en producción.

> Una vez instalado **Node**  se instala ejecutando en una terminal
>
> ```sh
> npm install -g @angular/cli 
> ```
>
> 

------



## Instalación y primeros pasos

Una vez instalados la versión de node como también angular/cli proceder a clonar este repositorio.

> 
>
> ```bash
> git clone https://github.com/hectorcrispens/anglBtrp
> ```
>
> 

Y posteriormente levantar el servidor web

> 
>
> ```bash
> ng serve
> ```
>
> 

para visualizar el contenido de la aplicación abrir un navegador web en la direccion [http://localhost:4200](http://localhost:4200)

------



## Instalación con contenedores docker

Puede consultar el proyecto **dockMspa** que puede acceder desde [aqui](https://github.com/sergrida/dockMspa), el cual provee un contenedor de docker preparado para trabajar con esta aplicación, además de proveer herramientas para trabajar con todo el stack. Por el contrario si solo va a trabajar con esta aplicación puede descargar de docker hub la imagen [dockAng]() para trabajar solamente con este proyecto de **Angular** descartando asi el resto del stack.

------



## Otros comandos 

El comando **ng** instalado con angular/cli tiene multiples funciones, a continuación se detallan dos argumentos utiles para la construcción de una aplicación en angular, el argumento **generate** y el argumento **build**

**ng generate**

> El comando ng generate permite generar diferentes archivos, según un proposito, a continuación se detallan todos los argumentos que puede tomar el subcomando <schematic>, para mas detalle consulte [aqui](https://angular.io/cli/generate#ng-generate)

```bash
ng generate <schematic> [options]
```

<schematic>

- app-shell
- application
- class
- component
- directive
- enum
- guard
- interceptor
- interface
- library
- module
- pipe
- resolver
- service
- service-worker
- web-worker



**ng build**

> El comando ng build permite compilar la aplicación para que la misma pueda ser deployada a través de cualquier servidor web, despues de utilizar el comando ng build se creará una carpeta llamada */dist* en la cual se encontrará un documento *index.html* con sus correspondientes *css* y *js* .
>
> Puede obtener más informacion del subcomando build [aquí](https://angular.io/cli/build)

```bash
ng build <project> [options]
```

------

## Licencia

Copyright (C) 2021.

- Sergio Ridaura,
  - [![linkedin](https://img.shields.io/badge/LinkedIn--0a66c2?style=social&logo=linkedin)](https://www.linkedin.com/in/sergio-ridaura/) [![GitHub](https://img.shields.io/badge/GitHub--0a66c2?style=social&logo=GitHub)](https://github.com/sergrida) [![Correo](https://img.shields.io/badge/Info-info@sergioridaura.com-0a66c2?style=social&logo=Mail.Ru)](mailto:info@sergioridaura.com) [![Site](https://img.shields.io/badge/Site-https://sergioridaura.com-ff7139?style=social&logo=FirefoxBrowser)](https://sergioridaura.com) 
- Héctor Orlando,
  - [![linkedin](https://img.shields.io/badge/LinkedIn--0a66c2?style=social&logo=linkedin)](https://www.linkedin.com/in/hector-orlando-25124a18a/) [![linkedin](https://img.shields.io/badge/GitHub--0a66c2?style=social&logo=GitHub)](https://github.com/hectorcrispens) [![linkedin](https://img.shields.io/badge/Gmail--0a66c2?style=social&logo=Gmail)](mailto:hector.or.cr@gmail.com)



### GNU General Public License

Este programa es software gratuito: puedes redistribuirlo y/o  modificar bajo los términos de la Licencia Pública General GNU tal como  se publicó por la Free Software Foundation, ya sea la versión 3 de la  Licencia, o cualquier versión posterior.

Este programa se distribuye con la esperanza de que sea de utilidad,  pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de  COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO PARTICULAR. Ver el Licencia  pública general GNU para más detalles.

Debería haber recibido una copia de la Licencia Pública General GNU junto con este programa, en LICENSE.md o https://www.gnu.org/licenses/gpl-3.0.html.en.
