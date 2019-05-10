# Holiday.io

Holiday Booking App

#

Javascript
Node
Docker

#

Simple holiday booking app that statically serves up html using express server, with some hamburger/css menu toggling.

#

node

#

```python
const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(4400, () => console.log("Listening on 4400"));
```

#

Dockerfile

#

```python
FROM node:8

WORKDIR /public

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
```
