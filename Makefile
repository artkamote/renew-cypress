ifdef DOTENV
	DOTENV_TARGET=dotenv
else
	DOTENV_TARGET=.env
endif

include ${DOTENV_TARGET} 
######################
# Artifact and files #
######################

# Create .env based on .env.template if .env does not exist
dotenv:
	@echo "Create .env file"
	touch .env


######################
# apps data creation #
######################

_npmInstall:
	npm install -D --quiet

# will execute and generate base image 
runBaseImage: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "cypress run --env type=base --config screenshotsFolder=./cypress/snapshots/base,specPattern=\"cypress/e2e/**/*.cy.{js,ts,tsx}\""

# will execute all the data setup 
runElectron: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "cypress run --record --key 9b6ef89d-e75b-4760-bf09-a2c580df76e0 --env allure=true --config-file cypress.config.js"

# note: this will not run in Mac M1/M2 chip
runChrome: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "cypress run --env allure=true --browser chrome --config-file cypress.config.js"

# note: this will not run in Mac M1/M2 chip
runFirefox: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "cypress run --env allure=true --browser firefox --config-file cypress.config.js"

# note: this will not run in Mac M1/M2 chip
runEdge: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "cypress run --env allure=true --browser edge --config-file cypress.config.js"

runWebdriverUniFolder: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "cypress run --spec \"cypress/e2e/examples/WebDriverUni/*\" --env allure=true --config-file cypress.config.js"

runLocalstorageTest: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "cypress run --spec \"cypress/e2e/examples/localStorageTesting/*\" --env allure=true  --config-file cypress.config.js"	

runAutomationStore: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "cypress run --spec \"cypress/e2e/examples/automationStore/*\" --env allure=true --config-file cypress.config.js"
	