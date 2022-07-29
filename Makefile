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

# will execute all the data setup 
runElectron: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "make _runElectron"

_runElectron: 
	cypress run --env allure=true --config-file cypress.config.js
#	npm run regression:electron --config-file cypress.config.js

runChrome: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "make _runChrome"

_runChrome: 
	npm run regression:chrome --config-file cypress.config.js

runFirefox: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "make _runFirefox"

_runFirefox: 
	npm run regression:firefox --config-file cypress.config.js

runEdge: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "make _runEdge"

_runEdge: 
	npm run regression:edge --config-file cypress.config.js


runWebdriverUniFolder: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "make _runWebdriverUniFolder"

_runWebdriverUniFolder: 
	npm run cy:triggerAllTest-webdriver --config-file cypress.config.js

runLocalstorageTest: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "make _runLocalstorageTest"

_runLocalstorageTest: 
	npm run cy:triggerAllTest-localStorageTesting --config-file cypress.config.js

runAutomationStore: $(DOTENV_TARGET) _npmInstall
	docker-compose run --rm e2e "make _runAutomationStore"

_runAutomationStore: 
	npm run cy:triggerAllTest-automationStore --config-file cypress.config.js