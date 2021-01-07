# mern-kube - NodeJS + MongoDB example API

Ready to deploy NodeJS API example. The app is ready to be used in Docker/Kubernetes.

Just replace the db connection string in ./db/index.js to match your container/server.

## What it's using

- NodeJS
- MongoDB
- Express
- Mongoose
- DotEnv
- Nodemon

## What it does

- connects to an existing MongoDB database
- has controllers and routes for a few db models
- allows CRUD operations using GET/POST/PATCH etc HTTP messages

## Deploying on Kubernetes

Use the provided Dockerfile

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[APACHE](https://www.apache.org/licenses/LICENSE-2.0)
