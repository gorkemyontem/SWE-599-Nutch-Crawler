from flask import Flask
from flask import request
from flask_cors import CORS
from flask import jsonify, make_response
import handler
import json

from markupsafe import escape

app = Flask(__name__)
CORS(app)

@app.route('/annotation', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def annotation():
    if request.method == 'POST':
        jsonData = request.get_json()
        handlerResponse = handler.create(jsonData) 
        jsonResponse = json.dumps(handlerResponse.__dict__)
        return make_response(jsonResponse, 200)

    elif request.method == 'GET':
        id = request.args.get("id")
        handlerResponse = handler.read(id)
        jsonResponse = json.dumps(handlerResponse.__dict__)
        return make_response(jsonResponse, 200)

    elif request.method == 'PATCH':
        jsonData = request.get_json()
        handlerResponse = handler.update(jsonData["id"], jsonData["data"])
        jsonResponse = json.dumps(handlerResponse.__dict__)
        return make_response(jsonResponse, 200)

    elif request.method == 'DELETE':
        jsonData = request.get_json()
        handlerResponse = handler.delete(jsonData["id"])
        jsonResponse = json.dumps(handlerResponse.__dict__)
        return make_response(jsonResponse, 200)


@app.route('/annotation/all', methods=['GET']) # TODO sadece bu sayfanin annotationlarini geri don & registered kisinin gorebilecegi annotationlari geri don. Public vs private
def annotations():
    if request.method == 'GET':
        handlerResponse = handler.search()
        jsonResponse = json.dumps(handlerResponse)
        return make_response(jsonResponse, 200)

@app.route('/annotation/all-info', methods=['GET']) # TODO sadece bu sayfanin annotationlarini geri don & registered kisinin gorebilecegi annotationlari geri don. Public vs private
def annotationsInfo():
    if request.method == 'GET':
        handlerResponse = handler.searchInfo()
        jsonResponse = json.dumps(handlerResponse.__dict__)
        return make_response(jsonResponse, 200)
