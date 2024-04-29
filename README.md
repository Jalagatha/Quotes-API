# Quotes-API

* Quotes-API is a an Open API that allows authors to create quotes and manage their author profiles.
## Endpoints
The following endpoints are available in the Quotes
## Routes to use
* [http://localhost:4000/api/] 
* or set up postman environment to use e.g **({{server}}/author)**

# **For a GET Request /author/** 
* Returns  all Authors

# **GET api/author/:id** |
* Returns a single author by  ID.

# **PATCH author/:id** 
* To Update  Information for a specific author 
# **POST author/signUp**
* Creates a new Author to the database. Requires authentication.
# **POST author/login**
* Logs in an a user and returns a token which is required for  authentication in the headers


# **DELETE /author/:id**
* Deletes a quote. Requires authentication.

# Project Dependencies 
**Prisma ORM**, for working with database usage :
* [setUp Prisma](npm install prisma)
* [Initialize  Prisma](npx prisma init)
* [Migrate the schema to database created and make a migration file](npx prisma prisma migrate --dev )
* [Make Changes to database created](npx prism db push)
* [add record from a client | browser](npx prisma studio)


# Testing
-**Super Test**
To install SuperTest,run npm install supertest from terminal
# Security
**jsonwebtoken**
1. I used jsonwebtoken to secure the data 
2. To install jsonwebtoken run npm install jsonwebtoken from terminal
# Data Validation
**JOI**
1. I used Joi to validate all my data
2. To install joi,run npm i joi from terminal


# Models
**Postgresql**
1. A Relational database known as postgres was used to create the database
2.  To SetUp Postgres visit https://www.postgresql
 [Downloand Postgresql](https://www.postgresql.org/download/)
# Contact
**For questions or support, please contact:**
* Email: jalagatha@gmail.com
* Twitter: @jalagatha
* github:@jalagatha
* project repository: https://github.com/Jalagatha/Quotes-API.git

# Acknowledgements

* This is an assignment given to me by Mr. Roland | Kanzu-Code Foundation 
* He inspired me to work on this project[ Quotes-API]
* Special thanks to Roland, KCF Backend-Cohort-4