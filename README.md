# Single-SPA samples

start all apps, utilities and parcels running: `pnpm run start`

**delivery** is a parcel developed using Angular.

**shared-auth** is a utility that contains a javascript function.

**dashboard** is a React app that uses delivery and shared-auth

**footbar** is a Vue app

**lateralbar** React app

**sidebar** Angular app

**topbar** Angular app that uses styleguide and shared-auth

**vueapp** Vue app

**styleguide** global css, html page snippet

**root** root-config


#### Aspectos chave 

Evitar duplicidade de bibliotecas compartilhadas entre os MFE (coding split, webpack externals, module federation, systemjs).  
Lazy loading de bibliotecas que faça sentido carregá-las por demanda.  
CSS global e CSS por contexto.  
SSR e SSG.  
Testes e ambiente local com todos os apps, parcels utilities e bibliotecas com as versões alinhadas.  
Passar parâmetros para o tipo de MFE utility.  


#### Frameworks

Há diversos frameworks feitos sob o single-spa e outros com uma ideia similar.  
https://nx.dev/  
Nx é um framework um feito que facilita projetos usando diversos frontends, podendo usar por exemplo, projetos Angular em um monorepo.  

