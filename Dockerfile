# build this image with command
#   docker build -t artcuaresma/cypress-10.3.0-node16 .
FROM cypress/included:10.3.0
ENV NODE_PATH=/usr/local/lib/node_modules

RUN  apt-get update -y \
  && apt-get install --no-install-recommends -y build-essential -y \
  && npm install -g "@shelex/cypress-allure-plugin@2.28.0" \
  && npm install -g "prettier@2.7.1"   \
  && npm cache clean --force \
  && rm -rf /var/lib/apt/lists/*
