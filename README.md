/api
/api/graphql
npx prisma db seed

Will reset the database with the seed file information
npx prisma migrate reset

You can change the postgres port mapping to access it using a thrid party tool

### PRISMA
While using primas... npx you need to access the outside postgres on localhost... so before running any npx prisma command you need to edit your env file to reflect the port and host
Ex:
DATABASE_URL="postgresql://postgres:postgres_password@postgres:5432/postgres?schema=public"
DATABASE_URL="postgresql://postgres:postgres_password@localhost:9000/postgres?schema=public"

Theres a bash script to reset and seed the databse everytime the docker-compose is ran... This is to reflect a fresh state in the application


The query is using the default cache, which is, always cache untill page open the page again or refresh