# cypress-docker-presentation

1. npm install cypress
2. npm install prettier

# to build docker images
docker build --no-cache -t my-cypress-images:1.0.1 .

# to run docker images
docker run -i -v "%cd%":/app -t my-cypress-images:1.0.1

