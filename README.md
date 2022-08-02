# renew-cypress-framework

## Running locally

1. make sure ```Make``` is installed.
2. uncomment all the process.env.XXXX (where XXXX is the variable name) in ```cypress.config.js``` - not this should  be deleted when mergeing in production.
3. npm install.
4. setup base image for visual regression testing ```$ npm run cy:generatebase```.
5. Run cypress ```$ npm run cy:open```.
6. Run cypress headless ```$ npm run cy:run```.

## Docker execution

### Setup - run in linux/WSL2 or macOS

1. Create a .env file.

2. Setup .env file - it contains all the configuration variables.

### Run

1. Setup base image first ```$ make runBaseImage```. 
2. Execute make ```$ make runElectron```. 
3. Execute make ```$ make runChrome```. 
4. Execute make ```$ make runFirefox```. 
5. Execute make ```$ make runEdge```. 
6. Execute make ```$ make runWebdriverUniFolder```. 
7. Execute make ```$ make runLocalstorageTest```. 
8. Execute make ```$ make runAutomationStore```. 

> **_NOTE:_**  arm64/M1/M2 no support for Chrome, Firefox and Edge docker image. 

## Others

- run ```$ docker system prune -f``` to clean-up unused docker im memory and in disk.
