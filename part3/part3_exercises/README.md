Here is the url for the backend of the phonebook: https://fullstackopen-1.onrender.com/

- A get requests to /api/persons will return the entire phonebook
- A post reeuqest requires a json body in the following format 

{
    "name": "Test Name", 
    "number": "000-0000"
}

Note: If a name is already in the phonebook, a 400 repsonse will be returned. 
