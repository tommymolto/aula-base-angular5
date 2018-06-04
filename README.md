# Testeaula
https://sites.google.com/prof.infnet.edu.br/profpaulomarinho/p%C3%A1gina-inicial/frameworks-front-end
Apos instalar o nodejs e npm
npm -g install @angular/cli
ng new projeto --with-routing true --routing true
cd projeto
ng generate component inicio
ng generate component detalhes
ng generate service dados
Alterar em app.routing.module.ts os caminhos para abrir as paginas
Ex:
{ path: 'componente', component: InicioComponent}
Adicionar o dados.service tanto no module como nos components como provider
subir o servidor json-serve e alterar no servico o endereco da api
ng serve --host 0.0.0.0 --port 8080 --disable-host-check
json-server animais.json --port 8081






This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
