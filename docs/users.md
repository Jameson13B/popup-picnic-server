# User Routes

User routes are defined below along with details for headers, body, etc. User routes use the uid property from the Google Firebase Auth.

## Indices

- [User Routes](#user-routes)

  - [Register User](#1-register-user)
  - [Login User](#2-login-user)
  - [Edit User](#3-edit-user)
  - [Delete](#4-delete)

---

### 1. Register User

This is the endpoint for registering a new user in the application. The uid is from Google Authentication.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/register
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json |             |

**_Body:_**

```js
{
	"uid": "{{google.uid}}",
    "email": "testemail@email.com",
    "name": "John Smith"
}
```

**_Responses:_**

Status: Register | Code: 200

```js
{
    "picnics": [],
    "_id": "5c95050c24ed3b0004b70e7f",
    "uid": "XZVV8NvKkSgvnEAoY0lfmMmVjjD4",
    "email": "testemail@email.com",
    "name": "John Smith",
    "createdAt": "2019-03-22T15:53:48.130Z",
    "updatedAt": "2019-03-22T15:53:48.130Z",
    "__v": 0
}
```

### 2. Login User

This is the endpoint for logging in to the application.The uid is from Google Authentication.

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/login
```

**_Headers:_**

| Key           | Value          | Description |
| ------------- | -------------- | ----------- |
| Authorization | {{google.uid}} |             |

**_Responses:_**

Status: Login | Code: 200

```js
{
    "picnics": [],
    "_id": "5c95050c24ed3b0004b70e7f",
    "uid": "XZVV8NvKkSgvnEAoY0lfmMmVjjD4",
    "email": "testemail@email.com",
    "name": "John Smith",
    "createdAt": "2019-03-22T15:53:48.130Z",
    "updatedAt": "2019-03-22T15:53:48.130Z",
    "__v": 0
}
```

### 3. Edit User

This is the endpoint for updating user info from the application.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/{{user._id}}
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json |             |

**_Body:_**

```js
{
	"name": "Johnny Smith",
	"email": "johnny_smith@email.com"
}
```

**_Responses:_**

Status: Edit User | Code: 200

```js
{
    "picnics": [
        "5c956d3fddda470004b0e7f2"
    ],
    "_id": "5c95050c24ed3b0004b70e7f",
    "uid": "XZVV8NvKkSgvnEAoY0lfmMmVjjD4",
    "email": "johnny_smith@email.com",
    "name": "Johnny Smith",
    "createdAt": "2019-03-22T15:53:48.130Z",
    "updatedAt": "2019-03-24T20:15:45.439Z",
    "__v": 0
}
```

### 4. Delete

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/{{user._id}}
```

**_Responses:_**

Status: Delete | Code: 200

```js
{
    "message": "User deleted successfully!"
}
```

---

[Back to top](#popup-picnics)
