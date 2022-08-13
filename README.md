# Article-CRUD-MEAN

It is MEAN stack application with CRUD operations. Through this application you can create , edit , delete  and get all the list of articles.

### Angualr APP working 
1) Home page shows the list of articles saved and delete all button to delete all the articles from the list.
1) when you click on one of the article from the list , it shows it's description and provide options to edit and delete the record.
1) If you click on delete specific record , then it will delete it from the list. 
1) If you click on edit specific record ,it takes you to the Editing page to edit specific record.
1) Here you have to submit the auto-filled Reactive form and submiting this reacrive form takes you to the home page with updated values.
1) On navigation bar there is a option to create a new record which takes you to page for posting new record.
1) On that page a reactive form will help you to fill the details of a new record.
1) Submiting the details take you to the Home page 
1) You can also navigate through Navigation bar to different pages.  
### Mongodb Article schema :
    1) Article's ID 
    2) Article's titile
    3) Article's Description
    4) Article's Read status 


## Dependencies and Requirements
Basic Requirements include installing Angular,node ,mongodb on your machine.  
**Technologies Used**: MEAN stack , Reactive forms  
**Backend Dependencies**: mongoose, dotenv, express, cors    
**Dev Dependencies**: nodemon

## Installation and Deployment

To get a local copy of the code, clone it using git:
```
git clone https://github.com/SIDD58/Delivery-Rest-Api.git
```
Install dependencies:
```
npm install
```
Now, you can start a local web server by running:
```
npm start
```
Now, you can start a local Client angualr application by running:
```
ng serve 
``` 
## API 

#### /deliveries
* `GET` : Get all records of Article
* `POST` : Create a new Article record 
* `DELETE` : Delete all Article record 

#### /projects/id
* `GET` : Get a record of Article with particular id
* `PATCH` : Update a Article record with particular id
* `DELETE` : Delete a Article record with particular id

## Authors

- [@SIDD58](https://github.com/SIDD58)


