# SaverLife Node.js API

## Description 👇

> **Disclaimer:** This application is currently in Alpha (as of Aug 03, 2020) and is not ready for production. Please use at your own risk as things will change almost daily.

- An application that takes a user's past financial data and creates a predicted budget.

- SaverLife is a nonprofit on a mission — to inspire, inform, and reward the millions of Americans who need help saving money.

- This app will give working people the methods and motivation to take control of their financial future.

## API doc

All routes can be viewed in the [/api-docs route](https:// /api-docs/)
of your deploy (or locally).

- https://localhost:8005/api-docs

Swagger docs are created using open api v3 notations. The docs are found inline
on the router files in `api/**/*Router.js` and use the yaml notation format.
The root of the docs is in `config/jsdoc.js` using the json format.

The following libraries have been used to build and serve the swagger docs live.

- [express-ui](https://github.com/scottie1984/swagger-ui-express)
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)

## Resources 👇

## Deployed API

https://saver-life-team-c.herokuapp.com

### Enviornment Variables

- `PORT` - API port (optional, but helpful with FE running as well)
- `DS_API_URL` - URL to a data science api. (eg. https://ds-bw-test.herokuapp.com/)
- `DS_API_TOKEN` - authorization header token for data science api (eg. SUPERSECRET)
- `DATABASE_URL` - connection string for postgres database
- `OKTA_URL_ISSUER` - The complete issuer URL for verifying okta access tokens. `https://example.okta.com/oauth2/default`
- `OKTA_CLIENT_ID` - the okta client ID.

See .env.sample for example values
