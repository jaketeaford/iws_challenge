from flask import jsonify
from database import app, db, FeatureRequest

#mysql root pw is 07g1fM*DC834

@app.route("/index")
def index():
	return app.send_static_file("index.html")

@app.route("/requests")
def requests():
	requests = FeatureRequest.query.all()
	result = []
	for request in requests:
		request_dict = dict(
			id=request.id,
			name=request.title
		)
		result.append(request_dict)
	return jsonify(result)