# Mini-Project-Back-End

## Architecture Diagram

## Entity Relational Diagram
![alt text](https://github.com/AWNRavid/Mini-Project-Back-End/blob/main/diagram.png "ERD")

## API Contracts
### **GET merch/get-all-merchant**
----
  Returns all users in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
  {
    id,
    password,
    name,
    address,
    join_date,
    phone_number
  }
]
```
### **POST merch/register**
----
  Creates a new User and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    password: string,
    name: string,
    address: string,
    phone_number: number
  }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <user_object> }` 
