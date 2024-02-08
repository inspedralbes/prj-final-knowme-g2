# KnowMe
* Aplicació web per poder crear el teu portfoli de manera senzilla i perfecta.
* Damià Brea Cervino, Arnau Fernández Gil, Loris Crisafo Norte, Julie Villegas Vergara, Martí Sala Vallès. 
* [Penpot](https://design.penpot.app/#/workspace/af8aaf7c-05e6-8124-8003-ce02dae46d97/75aa5258-9a82-8002-8003-ce02dcbb5841?page-id=75aa5258-9a82-8002-8003-ce02dcbb5842)
* [Taiga](https://tree.taiga.io/project/marti-sv-knowme/backlog)
* [Producció](knowme.cat)

Estat: <span style="color:#ffa500;">En procés</span>👷‍♂️👷‍♀️

# Contenidors

Exemple de com **conteniritzar** amb **docker** la vostra aplicació.

El projecte té dues configuracions
## Compose (aixecar-los tots de cop)
Un sol fitxer de configuracióq que especifica a partir de quines imatges s'han de crear els contenidors, i com s'han de configurar.
Des de
```
docker-compose.yml
```
indiquem a com s'ha d'aixecar cadascun dels contenidors però el codi font estarà FORA dels contenidors (  [docker-compose.yml](docker-compose.yml) )

És a dir, a dins dels contenidors hi haurà el servei en marxa, però les dades estaran fora.
És molt còmode per entorns de **desenvolupament** ja que podem modificar els fitxers des de la nostra màquina, de fora estant.

* És molt important tenir present les rutes del paràmerte **"volumes"** que és el que aconsegueix aquest efecte.


## Contenidors individuals (crear les imatges una a una, i aixecar-les una a una)
D'aquesta forma tenim un fitxer de creació de la imatge **per a cada servei** què volguem. El fitxer
```
Dockerfile
```
és específic per a cada servei que necessitem.
* Node  (  [node/Dockerfile](node/Dockerfile) )
* Front ( [front/Dockerfile](front/Dockerfile) )
* ...

En aquest cas, per a cada servei, hem de **construir** la nostra imatge, que contindrà a **DINS** el codi que volguem.
Quan executem el contenidor corresponent a la nostra imatge, aquest, com tots els contenidors, serà **immutable**

És molt còmode per entorns de **producció**, ja que en ser immutables, no es corrompen, i quan els serveis cauen, simplement s'ha de reaixecar el contenidor.

Aquestes imatges es poden publicar en repositoris d'imatges (públics o privats) i per tant, són molt fàcilment distribuibles (cap als servidors del client...)

* És molt important revisar el COPY i el CMD del final ja que són els que determinen quins fitxers es copien DINS de la imatge, i quin serà el programa que s'executarà en el contenidor.

## Aixecar laravel
Per acabar de que funcioni el docker has de anar a docker desktop, al contenidor de php i executar php artisan key:generate i php artisan migrate:fresh --seed el primer cop que s'encen

## Hibrid
Sovint, a producció, es fa un emfocament hybrid, es creen les imatges específiques per a cadascun dels nostres serveis amb els seus fitxers, s'aixequen de forma conjunta amb compose i les bases de dades tenen un volum extern montat per fer la informació persistent.
