Quotes API
-Creates Quotes API
-Allow a user to perform crud functions on Quotes and Authors
-Access information on single and multiple entities

{
"info": {
"\_postman_id": "b4daf33e-6d05-4cbe-b27e-13a7d8d4285f",
"name": "Quotes-API",
"description": "THE QUOTES API",
"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
"\_exporter_id": "26995776"
},
"item": [
{
"name": "Quotes",
"item": [
{
"name": "Get Quotes",
"request": {
"method": "GET",
"header": [],
"url": {
"raw": "http://localhost:4000/api/quote",
"protocol": "http",
"host": [
"localhost"
],
"port": "4000",
"path": [
"api",
"quote"
]
}
},
"response": [
{
"name": "New Request",
"originalRequest": {
"method": "GET",
"header": [],
"url": {
"raw": "http://localhost:4000/api/quote",
"protocol": "http",
"host": [
"localhost"
],
"port": "4000",
"path": [
"api",
"quote"
]
}
},
"status": "Created",
"code": 201,
"\_postman_previewlanguage": "json",
"header": [
{
"key": "X-Powered-By",
"value": "Express"
},
{
"key": "Access-Control-Allow-Origin",
"value": "*"
},
{
"key": "Access-Control-Allow-Credentials",
"value": "true"
},
{
"key": "Content-Type",
"value": "application/json; charset=utf-8"
},
{
"key": "Content-Length",
"value": "361"
},
{
"key": "ETag",
"value": "W/\"169-3XKJpEBs8YWX7iz0hX+3BzlRcLc\""
},
{
"key": "Date",
"value": "Sat, 27 Apr 2024 06:25:37 GMT"
},
{
"key": "Connection",
"value": "keep-alive"
},
{
"key": "Keep-Alive",
"value": "timeout=5"
}
],
"cookie": [],
"body": "{\n \"message\": \"Success \",\n \"quotes\": [\n {\n \"id\": 1,\n \"text\": \"Third Quote\",\n \"authorId\": 1,\n \"author\": {\n \"id\": 1,\n \"name\": \"Mugisha Ivan\",\n \"email\": \"mugishaivan@gmail.com\",\n \"age\": 28,\n \"password\": \"password1234\",\n \"role\": \"ADMIN\"\n }\n },\n {\n \"id\": 2,\n \"text\": \"New Beginning\",\n \"authorId\": 2,\n \"author\": {\n \"id\": 2,\n \"name\": \"Roland Sankara\",\n \"email\": \"roland@gmail.com\",\n \"age\": 25,\n \"password\": \"password1234\",\n \"role\": \"USER\"\n }\n }\n ]\n}"
}
]
},
{
"name": "Create Quote",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n \r\n\"id\":1,\r\n \"text\":\"Free from Slavery\",\r\n \"authorId\" :2\r\n \r\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:4000/api/quote",
"protocol": "http",
"host": [
"localhost"
],
"port": "4000",
"path": [
"api",
"quote"
]
}
},
"response": [
{
"name": "New Request",
"originalRequest": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n \r\n\"id\":1,\r\n \"text\":\"Free from Slavery\",\r\n \"authorId\" :2\r\n \r\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:4000/api/quote",
"protocol": "http",
"host": [
"localhost"
],
"port": "4000",
"path": [
"api",
"quote"
]
}
},
"status": "OK",
"code": 200,
"\_postman_previewlanguage": "json",
"header": [
{
"key": "X-Powered-By",
"value": "Express"
},
{
"key": "Access-Control-Allow-Origin",
"value": "*"
},
{
"key": "Access-Control-Allow-Credentials",
"value": "true"
},
{
"key": "Content-Type",
"value": "application/json; charset=utf-8"
},
{
"key": "Content-Length",
"value": "207"
},
{
"key": "ETag",
"value": "W/\"cf-4g2xGP+3hmDMMMBWg/8eQiiClig\""
},
{
"key": "Date",
"value": "Sat, 27 Apr 2024 06:36:19 GMT"
},
{
"key": "Connection",
"value": "keep-alive"
},
{
"key": "Keep-Alive",
"value": "timeout=5"
}
],
"cookie": [],
"body": "{\n \"\_original\": {\n \"id\": 1,\n \"text\": \"Free from Slavery\",\n \"authorId\": 2\n },\n \"details\": [\n {\n \"message\": \"\\\"id\\\" is not allowed\",\n \"path\": [\n \"id\"\n ],\n \"type\": \"object.unknown\",\n \"context\": {\n \"child\": \"id\",\n \"label\": \"id\",\n \"value\": 1,\n \"key\": \"id\"\n }\n }\n ]\n}"
}
]
},
{
"name": "Update Quote",
"request": {
"method": "GET",
"header": []
},
"response": []
},
{
"name": "Get A Single Quote",
"request": {
"method": "GET",
"header": [],
"url": {
"raw": "http://localhost:4000/api/quote/1",
"protocol": "http",
"host": [
"localhost"
],
"port": "4000",
"path": [
"api",
"quote",
"1"
]
},
"description": "Find Quote by ID from the Database"
},
"response": [
{
"name": "New Request",
"originalRequest": {
"method": "GET",
"header": [],
"url": {
"raw": "http://localhost:4000/api/quote/1",
"protocol": "http",
"host": [
"localhost"
],
"port": "4000",
"path": [
"api",
"quote",
"1"
]
}
},
"status": "Created",
"code": 201,
"\_postman_previewlanguage": "json",
"header": [
{
"key": "X-Powered-By",
"value": "Express"
},
{
"key": "Access-Control-Allow-Origin",
"value": "*"
},
{
"key": "Access-Control-Allow-Credentials",
"value": "true"
},
{
"key": "Content-Type",
"value": "application/json; charset=utf-8"
},
{
"key": "Content-Length",
"value": "209"
},
{
"key": "ETag",
"value": "W/\"d1-7B0rn2/QF0yvfRL9RSNC2ObUSAQ\""
},
{
"key": "Date",
"value": "Sat, 27 Apr 2024 06:39:43 GMT"
},
{
"key": "Connection",
"value": "keep-alive"
},
{
"key": "Keep-Alive",
"value": "timeout=5"
}
],
"cookie": [],
"body": "{\n \"message\": \"Quote got successfully\",\n \"quote\": {\n \"id\": 1,\n \"text\": \"Third Quote\",\n \"authorId\": 1,\n \"author\": {\n \"id\": 1,\n \"name\": \"Mugisha Ivan\",\n \"email\": \"mugishaivan@gmail.com\",\n \"age\": 28,\n \"password\": \"password1234\",\n \"role\": \"ADMIN\"\n }\n }\n}"
}
]
}
],
"description": "QUOTES CRUD OPERATIONS"
},
{
"name": "Authors",
"item": [
{
"name": "Create Author",
"request": {
"auth": {
"type": "bearer",
"bearer": [
{
"key": "token",
"value": "",
"type": "string"
}
]
},
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n\"email\":\"paul@gmail.com\",\r\n\"password\":\"peter5\",\r\n\"age\":24,\r\n\"name\":\"Paul Peterson\"\r\n}\r\n",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:4000/author/SignUp",
"protocol": "http",
"host": [
"localhost"
],
"port": "4000",
"path": [
"author",
"SignUp"
]
},
"description": "Create a new Author"
},
"response": [
{
"name": "Create Author",
"originalRequest": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n\"email\":\"paul@gmail.com\",\r\n\"password\":\"peter5\",\r\n\"age\":24,\r\n\"name\":\"Paul Peterson\"\r\n}\r\n",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:4000/author/SignUp",
"protocol": "http",
"host": [
"localhost"
],
"port": "4000",
"path": [
"author",
"SignUp"
]
}
},
"status": "Created",
"code": 201,
"\_postman_previewlanguage": "json",
"header": [
{
"key": "X-Powered-By",
"value": "Express"
},
{
"key": "Access-Control-Allow-Origin",
"value": "*"
},
{
"key": "Access-Control-Allow-Credentials",
"value": "true"
},
{
"key": "Content-Type",
"value": "application/json; charset=utf-8"
},
{
"key": "Content-Length",
"value": "213"
},
{
"key": "ETag",
"value": "W/\"d5-gZfDTnM1JEYaImjTFzyJV+U+UuA\""
},
{
"key": "Date",
"value": "Fri, 26 Apr 2024 14:59:07 GMT"
},
{
"key": "Connection",
"value": "keep-alive"
},
{
"key": "Keep-Alive",
"value": "timeout=5"
}
],
"cookie": [],
"body": "{\n \"message\": \"User registered Successfully\",\n \"registerAuthor\": {\n \"id\": 5,\n \"name\": \"Paul Peterson\",\n \"email\": \"paul@gmail.com\",\n \"age\": 24,\n \"password\": \"$2b$10$Wa00XltkDoEjDU9D8Kfng.//SOzwMX.gFK/3I/1k6CS9YURCaACMO\",\n \"role\": \"USER\"\n }\n}"
}
]
},
{
"name": "Create Author",
"request": {
"auth": {
"type": "noauth"
},
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\r\n\"email\":\"ivanj@gmail.com\",\r\n\"password\":\"ivanj2\",\r\n\"age\":23,\r\n\"name\":\"mugisha ivah\"\r\n}\r\n",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:4000/author/signUp",
"protocol": "http",
"host": [
"localhost"
],
"port": "4000",
"path": [
"author",
"signUp"
]
}
},
"response": []
}
],
"description": "PERFORM CRUD OPERATIONS ON AUTHORS"
}
]
}
