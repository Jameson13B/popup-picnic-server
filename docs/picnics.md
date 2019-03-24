# Picnic Routes

Picnic routes are defined below along with details for headers, body, etc.

## Indices

- [Picnic Routes](#picnic-routes)

  - [Create Picnic](#1-create-picnic)
  - [Retrieve Picnic](#2-retrieve-picnic)
  - [Retrieve All Picnics](#3-retrieve-all-picnics)
  - [Update Picnic](#4-update-picnic)
  - [Delete Picnic](#5-delete-picnic)
  - [Join Picnic](#6-join-picnic)

---

### 1. Create Picnic

This is the endpoint for creating a new picnic in the application.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/picnics
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json |             |

**_Body:_**

```js
{
    "title": "Software Picnic",
    "description": "This is a picnic for all software engineers and their families.",
    "location": "office",
    "date": 1551901899552
  }
```

**_Responses:_**

Status: Create Picnic | Code: 200

```js
{
    "attendees": [],
    "_id": "5c950a4124ed3b0004b70e80",
    "title": "Software Picnic",
    "description": "This is a picnic for all software engineers and their families.",
    "location": "office",
    "date": 1551901899552,
    "createdAt": "2019-03-22T16:16:01.223Z",
    "updatedAt": "2019-03-22T16:16:01.223Z",
    "__v": 0
}
```

### 2. Retrieve Picnic

This is the endpoint for retrieving info for a single picnic in the application.

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/picnics/{{picnicId}}
```

**_Responses:_**

Status: Retrieve Picnic | Code: 200

```js
{
    "attendees": [],
    "_id": "5c950a4124ed3b0004b70e80",
    "title": "Software Picnic",
    "description": "This is a picnic for all software engineers and their families.",
    "location": "office",
    "date": 1551901899552,
    "createdAt": "2019-03-22T16:16:01.223Z",
    "updatedAt": "2019-03-22T16:16:01.223Z",
    "__v": 0
}
```

### 3. Retrieve All Picnics

This is the endpoint for retrieving info for all picnics in the application.

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/picnics
```

**_Responses:_**

Status: Retrieve All Picnics | Code: 200

```js
[
  {
    attendees: ["5c8c251f70441c00048d8553"],
    _id: "5c8955928635388ebe3f345a",
    title: "Picnic #3",
    description:
      "This is the third picnic entry. Created using internal server",
    location: "lake",
    date: 1551901899552,
    createdAt: "2019-03-13T19:10:10.155Z",
    updatedAt: "2019-03-21T22:43:09.376Z",
    __v: 0
  },
  {
    attendees: ["5c8c251f70441c00048d8553"],
    _id: "5c8a7987105318000468bbd8",
    title: "Picnic #1",
    description:
      "This is the first picnic entry. Created using internal server",
    location: "city park",
    date: 1551903899542,
    createdAt: "2019-03-14T15:55:51.861Z",
    updatedAt: "2019-03-22T03:18:33.666Z",
    __v: 0
  },
  {
    attendees: ["5c8c251f70441c00048d8553"],
    _id: "5c8a79a8105318000468bbd9",
    title: "Picnic #2",
    description:
      "This is the second picnic entry. Created using internal server",
    location: "campground",
    date: 1551902899542,
    createdAt: "2019-03-14T15:56:24.319Z",
    updatedAt: "2019-03-21T23:05:11.871Z",
    __v: 0
  },
  {
    attendees: ["5c8f1e917264260004fd626c", "5c8c251f70441c00048d8553"],
    _id: "5c8a8544105318000468bbda",
    title: "Picnic #4",
    description:
      "This is the forth picnic entry. Created using internal server",
    location: "ferry go round",
    date: 1551904899542,
    createdAt: "2019-03-14T16:45:56.101Z",
    updatedAt: "2019-03-22T00:55:16.027Z",
    __v: 0
  },
  {
    attendees: ["5c8c251f70441c00048d8553"],
    _id: "5c950a4124ed3b0004b70e80",
    title: "Software Picnic",
    description:
      "This is a picnic for all software engineers and their families.",
    location: "office",
    date: 1551901899552,
    createdAt: "2019-03-22T16:16:01.223Z",
    updatedAt: "2019-03-22T21:16:43.627Z",
    __v: 0
  }
];
```

### 4. Update Picnic

This is the endpoint for updating an existing picnic in the application.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/picnics/{{picnicId}}
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json |             |

**_Body:_**

```js
{
  "title": "Software Family Picnic",
  "description": "This is a picnic for all software engineers and their families.",
  "location": "main office",
  "date": 1551901899552
}
```

**_Responses:_**

Status: Update Picnic | Code: 200

```js
{
    "attendees": [
        "5c8c251f70441c00048d8553"
    ],
    "_id": "5c950a4124ed3b0004b70e80",
    "title": "Software Family Picnic",
    "description": "This is a picnic for all software engineers and their families.",
    "location": "main office",
    "date": 1551901899552,
    "createdAt": "2019-03-22T16:16:01.223Z",
    "updatedAt": "2019-03-22T23:13:07.379Z",
    "__v": 0
}
```

### 5. Delete Picnic

This is the endpoint for deleting a picnic in the application.

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/picnics/{{picnicId}}
```

**_Responses:_**

Status: Delete Picnic | Code: 200

```js
{
    "message": "Picnic deleted successfully!"
}
```

### 6. Join Picnic

This is the endpoint for creating a new picnic in the application.

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: https://popup-picnic-server.herokuapp.com/picnics/join/{{picnicId}}
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json |             |

**_Body:_**

```js
{
	"_id": "{{user._id}}"
}
```

**_Responses:_**

Status: Join Picnic | Code: 200

```js
{
    "picnic": {
        "attendees": [
            {
                "picnics": [
                    "5c956d3fddda470004b0e7f2"
                ],
                "_id": "5c95050c24ed3b0004b70e7f",
                "uid": "XZVV8NvKkSgvnEAoY0lfmMmVjjD4",
                "email": "testemail@email.com",
                "name": "John Smith",
                "createdAt": "2019-03-22T15:53:48.130Z",
                "updatedAt": "2019-03-22T23:37:24.821Z",
                "__v": 0
            }
        ],
        "_id": "5c956d3fddda470004b0e7f2",
        "title": "Software Family Picnic",
        "description": "This is a picnic for all software engineers and their families.",
        "location": "office",
        "date": 1551901899552,
        "createdAt": "2019-03-22T23:18:23.807Z",
        "updatedAt": "2019-03-22T23:37:24.918Z",
        "__v": 0
    }
}
```
