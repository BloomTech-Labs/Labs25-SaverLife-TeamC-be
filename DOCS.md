# Documentation 👇

## /api/profiles
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/profiles/:id | get a specific profile |
| POST | api/profile | create a new profile |
| PUT | api/profile/:id | update profile by id |
| PUT | api/profile | update a profile |
| DELETE | api/profile/:id | delete a specific profile |


## /api/transactions
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/transactions/:id | get transaction by id |
| GET | api/transactions/profiles/:profileId | get all transactions for a specific user |
| POST | api/transactions/ | create a new transaction |
| PUT | api/transactions/:id | update transaction by id |
| DELETE | api/transactions/:id | delete a specific transaction |


## /api/goalprogress
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/goalprogress/profile/:profileId | get goalprogress by profile id |
| GET | api/goalprogress/profile/totalSaved/:profileId | get total saved by profile id |
| GET | api/goalprogress/:id | get goalprogress by id |
| POST | api/goalprogress/ | create a new goalprogress |
| PUT | api/goalprogress/:id | update goal progress by id |
| DELETE | api/goalprogress/:id | delete a specific goalprogress |


## /api/budget
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/budget/:id | get budget by id |
| POST | api/budget/ | create a new budget |
| PUT | api/budget/:id | update budget by id |
| DELETE | api/budget/:id | delete a specific budget |


## /api/budgetcategories (budget line items)
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/budgetcategories/:id | get a budget category by id |
| GET | api/budgetcategories/budgets/:budgetId | get all budget categories by budget id |
| POST | api/budgetcategories/ | create a new budget category line |
| PUT | api/budgetcategories/:id | update budget category by id |
| DELETE | api/budgetcategories/:id | delete a specific budget category line |


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