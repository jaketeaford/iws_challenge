from flask import Flask, request
app = Flask(__name__)

#mysql root pw is 07g1fM*DC834

@app.route("/index")
def index():
	return app.send_static_file("index.html")

@app.route("/<path:path>")
def static_file(path):
	return app.send_static_file(path)