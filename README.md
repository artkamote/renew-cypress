# renew-cypress-framework

## Running locally

1. make sure ```Make``` is installed.
2. uncomment all the process.env.XXXX (where XXXX is the variable name) in ```cypress.config.js``` - not this should  be deleted when mergeing in production.
3. npm install.
4. Run cypress ```$ npm run cy:open```.
5. Run cypress headless ```$ npm run cy:run```.

## Docker execution

### Setup - run in linux/WSL2 or macOS

1. Create a .env file.

2. Setup .env file - it contains all the configuration variables.

### Run

1. Execute make ```$ make runCommand```.

## Others

- run ```$ docker system prune -f``` to clean-up unused docker im memory and in disk.
