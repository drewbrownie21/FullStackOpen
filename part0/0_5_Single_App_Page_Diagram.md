```mermaid
   sequenceDiagram
      Server -->>App: Get https://studies.cs.helsinki.fi/exampleapp/spa.js
      loop Saving Note
         App ->>App: Post https://studies.cs.helsinki.fi/exampleapp/new_note_spa
```