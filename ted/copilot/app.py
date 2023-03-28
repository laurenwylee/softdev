from flask import Flask
from flask import render_template 

app = Flask(__name__) 

@app.route("/")       
def page():
    return render_template("index.html")

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()