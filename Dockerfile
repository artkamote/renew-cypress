# build this image with command
#   docker build -t artcuaresma/cypress-10.3.0-node16 .
FROM cypress/included:10.3.0

RUN  apt-get update -y \
  && apt-get install --no-install-recommends -y build-essential -y \
  && rm -rf /var/lib/apt/lists/*
