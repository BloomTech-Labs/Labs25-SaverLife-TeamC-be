# Documentation 👇

## /api/profiles
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/profiles/:id | get a specific users profile |
| PUT | api/profile/:id | update a specific users profile |


## /api/transactions
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | api/transactions/ | create a new transaction |
| GET | api/transactions/:id | get a specific transaction |
| GET | api/transactions/profiles/:profileId | get a specific users single transaction |
| PUT | api/transactions/:id | edit a specific transaction |
| DELETE | api/transactions/:id | delete a specific transaction |


## /api/goalprogress
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | api/goalprogress/ | create a new goalprogress |
| GET | api/goalprogress/:id | get a specific goalprogress |
| PUT | api/goalprogress/:id | edit a specific goalprogress |
| DELETE | api/goalprogress/:id | delete a specific goalprogress |


## /api/budget
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | api/budget/ | create a new budget |
| GET | api/budget/:id | get a specific budget |
| PUT | api/budget/:id | edit a specific budget |
| DELETE | api/budget/:id | delete a specific budget |


## /api/budgetcategories (budget line items)
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | api/budgetcategories/ | create a new budgetcategories item |
| GET | api/budgetcategories/:id | get a specific budgetcategories item |
| PUT | api/budgetcategories/:id | edit a specific budgetcategories item |
| DELETE | api/budgetcategories/:id | delete a specific budgetcategories item |


# Table Requirements 👇

## Profiles
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | string | yes | yes | users id (primary key) |
| email | string | no | no | users email |
| name | string | no | no | users name |
| avatarUrl | string | no | no | users avatarUrl |
| timestamps | boolean | no | no | users timestamps |
| goalAmount | integer | no | no | users amount they want to save |
| goalStartDate | date | no | no | users date they set their goalAmount |


## Categories
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | categories id (auto increments/primary key) |
| name | string | no | no | categories name |


## Transactions
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | transactions id (auto increments/primary key) |
| profileId | string | no | yes | reference the id in profiles table (foreign key) |
| categoryId | integer | no | yes | references the id in the categories table (foreign key) |
| merchant | string | no | no | merchant name of transaction |
| amount | decimal | no | no | money amount of transaction |
| date | date | no | no | date of transaction |


## Budget
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | budget id (auto increments/primary key) |
| profileId | string | no | no | referenced the id in the profiles table (foreign key) |


## BudgetCategories
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| budgetId | integer | no | yes | references the id in the Budget table (foreign key) |
| categoryId | integer | no | yes | references the id in the category table (foreign key) |
| amount | decimal | no | no | money amount |


## GoalProgress
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | goalprogress id (auto increments/primary key) |
| profileId | string | no | yes | references the id in the profiles table (foreign key) |
| totalSaved | decimal | no | no | money amount a user has saved so far |
| totalSavedDate | date | no | no | date the user saved |