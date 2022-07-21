FROM cypress/included:10.3.0
WORKDIR /app
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
RUN npm install cypress && $(npm bin)/cypress verify && $(npm bin)/cypress