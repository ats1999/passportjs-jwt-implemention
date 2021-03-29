# assignment-0

## Admin SignUp - Request

```js
POST https://assignment-0101.herokuapp.com/api/admin/signup 

// body
{
	"email":"a@gmail.com",
	"password":"1234"
}
```
## Admin SignUp - Response

```js
{
    "_id": "6062016d2667520015b58d51",
    "email": "a@gmail.com",
    "password": "$2b$10$HneRMO/XTe0xtOjdxwhFju1URm0DeCZKq9JubjstpBPH9q5Pc4B.u",
    "__v": 0
}
```

## Admin Signin - Request

```js
POST https://assignment-0101.herokuapp.com/api/admin/signin

// body
{
	"email":"a@gmail.com",
	"password":"1234"
}
```

## Admin Signin - Response
```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjIwMTZkMjY2NzUyMDAxNWI1OGQ1MSIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE2MTcwMzU4OTZ9.MJ8woQ1zQO4rgqIq592P7zLnBjqdkHFkXXnGZtmiwrU
```

## Worker SignUp and Signin URL
> Request body will be same as admin

```js
https://assignment-0101.herokuapp.com/api/worker/signup
https://assignment-0101.herokuapp.com/api/worker/signin
```

## Admin - Create job Request
```js
POST /api/admin/job/create HTTP/1.1
Host: assignment-0101.herokuapp.com
Content-Type: application/json
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjIwMTZkMjY2NzUyMDAxNWI1OGQ1MSIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE2MTcwMzU4OTZ9.MJ8woQ1zQO4rgqIq592P7zLnBjqdkHFkXXnGZtmiwrU
Cache-Control: no-cache
Postman-Token: 27613f37-78a0-abed-b905-67ad0f7753c9

{
	"description":"This is live test on server",
	"assignedTo":"60614073fc4a4e2c10c9327b"
}
```
## Admin - Create job Response
```js
{
    "status": "in-progress",
    "_id": "606203b32667520015b58d54",
    "description": "This is live test on server",
    "assignedTo": "60614073fc4a4e2c10c9327b",
    "createdBy": "6062016d2667520015b58d51",
    "__v": 0
}
```
## Admin - View workers - Request
```js
GET /api/admin/view/workers HTTP/1.1
Host: assignment-0101.herokuapp.com
Content-Type: application/json
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjIwMTZkMjY2NzUyMDAxNWI1OGQ1MSIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE2MTcwMzU4OTZ9.MJ8woQ1zQO4rgqIq592P7zLnBjqdkHFkXXnGZtmiwrU
Cache-Control: no-cache
Postman-Token: 39cf9fb5-f9ef-057b-be18-0362dc9519c1
```

## Admin - View workers - Response
```js
[
    {
        "_id": "60614073fc4a4e2c10c9327b",
        "email": "bdevg@gmail.com",
        "password": "$2b$10$.0LGw1.nK41k86QR.ErzROPXYyHO0LqKBwUq5yJddEvRzcsj4Sy6e",
        "__v": 0
    },
    {
        "_id": "606202f72667520015b58d52",
        "email": "a@gmail.com",
        "password": "$2b$10$qA54T.X928nUNSzUA8zo1.trGszRxgAJbLazLtgInVB3ea6xkPG..",
        "__v": 0
    }
]
```

## Worker - View assigned jobs Request
```
GET /api/worker/job/view HTTP/1.1
Host: assignment-0101.herokuapp.com
Content-Type: application/json
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjE0MDczZmM0YTRlMmMxMGM5MzI3YiIsImVtYWlsIjoiYmRldmdAZ21haWwuY29tIiwiaWF0IjoxNjE3MDMzODUwfQ.01OjTEUD4uKbfZbwSKAvDNRplif58CzfW2bv85XgUAQ
Cache-Control: no-cache
Postman-Token: ce15af8e-9ff0-d1f6-b2fc-d6e63c783ca8
```

## Worker - View assigned jobs Response
```js
[
    {
        "status": "in-progress",
        "_id": "6061f83d125cc31a8055ed52",
        "description": "task 4",
        "assignedTo": "60614073fc4a4e2c10c9327b",
        "createdBy": "60614022fc4a4e2c10c93278",
        "__v": 0
    },
    {
        "status": "in-progress",
        "_id": "6061f999d98b5b2f444109a6",
        "description": "Testing using mocha..",
        "assignedTo": "60614073fc4a4e2c10c9327b",
        "createdBy": "60613f7bfc4a4e2c10c93276",
        "__v": 0
    }
]
```


## Install
```
clone the repo and go to the directory 
//...
npm i
npm start
```
## Test
```js
npm test
```
