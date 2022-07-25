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
runCommand: $(DOTENV_TARGET)
	docker-compose run --rm e2e _runCommand

_runCommand:
	npm install --quiet
	npx cypress run --config-file cypress.config.js
