```mermaid
sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: User clicks `Save` button triggering the form action
    activate browser

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note with payload note=Hello
    deactivate browser
    activate server  
    server-->>browser: 302 HTML document
    deactivate server  


    Note right of browser: The browser refetches everything 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server  

    Note right of browser: The browser executes the callback function that renders the notes 
```