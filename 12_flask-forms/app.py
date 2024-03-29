'''
Popeyes: Lauren Lee, Vivian Teo, Ian Jiang
SoftDev
K12 -- Take and Give
2022-10-17
time spent: 0.5
 '''

from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission

#the conventional way:
#from flask import Flask, render_template, request

app = Flask(__name__)    #create Flask object


'''
trioTASK:
~~~~~~~~~~~ BEFORE RUNNING THIS, ~~~~~~~~~~~~~~~~~~
...read for understanding all of the code below.
Some will work as written; other sections will not. 
TASK: Predict which...
Devise some simple tests you can run to "take apart this engine," as it were.
Execute your tests.
Process results.

PROTIP: Insert your own in-line comments
 wherever they will help
  your future self and/or current teammates
   understand what is going on.
'''

@app.route("/", methods=['GET', 'POST'])
def disp_loginpage():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app) 
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args) #prints ImmutableMultiDict([])
    #print("***DIAG: request.args['username']  ***")
    #print(request.args['username'])
    print("***DIAG: request.headers ***") 
    print(request.headers) #information on the computer making the request
    return render_template( 'login.html' )


@app.route("/auth", methods=['GET', 'POST'])
def authenticate():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    if 'username' in request.args: # error otherwise because request.args (MultiDict) could be empty
        print("***DIAG: request.args['username']  ***") # username is like a key
        print(request.args['username'])
    if 'username' in request.form: 
        print("***DIAG: request.form['username']  ***") # username is like a key
        print(request.form['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)
    if 'username' in request.args: # error otherwise because request.args (MultiDict) could be empty
        return render_template( 'response.html' , user = request.args['username'], meth = 'GET')  #response to a form submission
    else:
        return render_template( 'response.html' , user = request.form['username'], meth = 'POST')

    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
