# POPEYES: Lauren Lee, Vivian Teo, Ian Jiang
# SoftDev
# K19 -- Sessions Greetings
# 2022-11-03
# time spent: 1.5



#the conventional way:
import re
from flask import Flask, render_template, request

app = Flask(__name__)    #create Flask object

username = "POPEYES"
password = "chicken"
success = True
exception = "username and pw wrong"

@app.route("/") #, methods=['GET', 'POST'])
def disp_loginpage():
    return render_template('login.html', exception = "")  


@app.route("/auth") #, methods=['GET', 'POST'])
def authenticate():
    try:
        user = request.args['username']
        pw = request.args['pass']
        print(user)
        print(pw)
        if user != username:
            print("first if")
            
            print("after first if")
            success = False
        if pw != password:
            print("second if")
            
            success = False
        print(exception)
        if not success:
            print("not success")
            return render_template('login.html', message = exception)
        else:
            return render_template('response.html')
    except:
        print("*********" + request.args['username'])
        return render_template('login.html', message = "Please try again")


  



    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
