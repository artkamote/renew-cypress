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

# will execute all the data setup 
runElectron: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runElectron

_runElectron:
	npm install --quiet
	npx cypress run --config-file cypress.config.js

runChrome: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runChrome

_runChrome:
	npm install --quiet
	npx cypress run --browser chrome --config-file cypress.config.js

runFirefox: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runFirefox

_runFirefox:
	npm install --quiet
	npx cypress run --browser firefox --config-file cypress.config.js

runEdge: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runEdge

_runEdge:
	npm install --quiet
	npx cypress run --browser edge --config-file cypress.config.js