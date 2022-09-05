{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "colors": "^1.4.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-async-handler": "^1.2.0",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^4.9.0",
    "mongoose": "^6.5.2",
    "morgan": "^1.10.0",
    "validator": "^13.7.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.19"
  }
}


My .env

NODE_ENV = development
PORT = 5004
MONGO_URI = mongodb+srv://EmilyReed89:hT7sUOIeNmoqAOdf@cluster0.bgqtrfn.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET = abc123