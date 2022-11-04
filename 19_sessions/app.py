# POPEYES: Lauren Lee, Vivian Teo, Ian Jiang
# SoftDev
# K19 -- Sessions Greetings
# 2022-11-03
# time spent: 1.5



#the conventional way:
import re
from flask import Flask, render_template, request, session

app = Flask(__name__)    #create Flask object

username = "POPEYES"
password = "chicken"
exception = "username and pw wrong"

@app.route("/") #, methods=['GET', 'POST'])
def disp_loginpage():
    return render_template('login.html', message = "Type in a username and password")  


@app.route("/auth") #, methods=['GET', 'POST'])
def authenticate():
    user = request.args['username']
    pw = request.args['pass']
    #pw and user correct
    if username in  user and password in pw:
        return render_template('response.html')
    #empty pw or user
    if "" == user and "" == pw:
        return render_template('login.html', message = "Please type in a username and password")
    elif "" == user:
        return render_template('login.html', message = "Please type in a username")
    elif "" == pw:
        return render_template('login.html', message = "Please type in a password")
    #wrong pw or user
    if user != username and pw != password:
        return render_template('login.html', message = "Please input a correct username and password")
    elif user != username:
        return render_template('login.html', message = "Please input a correct username")
    elif pw != password:
        return render_template('login.html', message = "Please input a correct password")
    #unidentified error
    else:
        return render_template('login.html', message = "unidentified")

  



    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
