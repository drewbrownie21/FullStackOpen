```mermaid
   graph LR
      Visit_Page -->|Get| Save_New_Note: Get https://studies.cs.helsinki.fi/exampleapp/spa.js;
      loop Save_New_Note: Post https://studies.cs.helsinki.fi/exampleapp/new_note_spa;

```