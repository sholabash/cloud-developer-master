require('dotenv').config();

export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
// console.log(process.env.POSTGRES_USERNAME);
// console.log(process.env.POSTGRES_PASSWORD);
// console.log(process.env.POSTGRES_DATABASE);
// console.log(process.env.HOST);
// console.log(process.env.AWS_REGION);
// console.log(process.env.AWS_PROFILE);
// console.log(process.env.AWS_MEDIA_BUCKET);
