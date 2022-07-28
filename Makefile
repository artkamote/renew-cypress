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
	npm i cypress-plugin-snapshots@1.4.4 --legacy-peer-deps
#	npm install --quiet

# will execute all the data setup 
runElectron: $(DOTENV_TARGET)
	docker-compose run --rm e2e "make _runElectron"

_runElectron: _npmInstall
	npm run regression:electron --config-file cypress.config.js

runChrome: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runChrome

_runChrome: _npmInstall
	npm run regression:chrome --config-file cypress.config.js

runFirefox: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runFirefox

_runFirefox: _npmInstall
	npm run regression:firefox --config-file cypress.config.js

runEdge: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runEdge

_runEdge: _npmInstall
	npm run regression:edge --config-file cypress.config.js


runWebdriverUniFolder: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runWebdriverUniFolder

_runWebdriverUniFolder: _npmInstall
	npm run cy:triggerAllTest-webdriver --config-file cypress.config.js

runLocalstorageTest: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runLocalstorageTest

_runLocalstorageTest: _npmInstall
	npm run cy:triggerAllTest-localStorageTesting --config-file cypress.config.js

runAutomationStore: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runAutomationStore

_runAutomationStore: _npmInstall
	npm run cy:triggerAllTest-automationStore --config-file cypress.config.js