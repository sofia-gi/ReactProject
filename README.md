# test Project with react..

* environment Settings
   1. Node LTS install (current 14.5.x _ 2020.12.25)
   2. yarn install
   3. editer install


* create-react-app install and using
    ```
      yarn global add create-react-app
    ```
    ```
      create-react-app projectName
    ```
    ```
      yarn start
    ```

* reset project 
   * delete src (App.css, App.test.js, logo.svg)
   * src/App.js
   ```
   import React, { Component } from 'react'
   class App extends Component{
    render(){
      return(
       <div>
         Hello World
       </div>
      );
     }
   }
   export default App;
   ```
   
  
