### Popeyes: Lauren Lee, Vivian Teo, Ian Jiang
### SoftDev
### K12 -- Take and Give
### 2022-10-17
### time spent: 0.5

### DISCO
* GET request -- input in request.args
* POST request -- input in request.form
* Request method defaults to GET
* Having ['GET','POST'] allows frontend to make any request they want
* Making a POST request is done in the html file -- method = 'post'

### QCC
* When do we use GET vs POST?
* Are there other request methods? What are the differences between them?

### clearest breakdown of the differences between a GET and POST request 
The request method defaults to GET unless the form specifies to use a POST method. GET and POST are mutually exclusive. GET corresponds with request.args so when a GET request is made, the form input is stored in request.args. POST corresponds with request.form so when a POST request is made the form input is stored in request.form. Regardless, we are able to see if a GET request is made if we see the form input in the url after submitting the form. We can also check the terminal which tells us if a GET or POST request is made.In the following app.py code, we check if request.args or request.forms contain an input to distinguish between GET and POST requests.
