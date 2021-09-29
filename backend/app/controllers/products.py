''' controller and routes for users '''
import os
from sys import stderr
from flask import request, jsonify
from app import app, mongo
import logger
from mongoengine import Document, StringField, FloatField
from bson.json_util import dumps


ROOT_PATH = os.environ.get('ROOT_PATH')
# print('ROOT_PATH', ROOT_PATH)
LOG = logger.get_root_logger(__name__, filename=os.path.join(ROOT_PATH, 'output.log'))

@app.route('/products', methods=['GET', 'POST', 'DELETE', 'PATCH'])
def products():
    if request.method == 'GET':
        query = request.args
        #db = mongo.feature-hunt
        data = mongo.db.products.find()
        #print("Hello",data, file=stderr)
        return dumps(data)

    data = request.get_json()

    if request.method == 'POST':
        if data is None or data == {}:
            return Response(response=json.dumps({"Error": "Please provide all necessary input"}),
                        status=400,
                        mimetype='application/json')
        result = mongo.db.products.insert_one(data).inserted_id
        return jsonify({'ok': True, 'message': 'Product added successfully'}), 200
    
    if request.method == 'DELETE':
        if data is None or data == {}:
            return Response(response=json.dumps({"Error": "Please provide all necessary input"}),
                        status=400,
                        mimetype='application/json')       

        db_response = mongo.db.products.delete_one({'id' : data[id]})
        if db_response.deleted_count == 1:
            response = {'ok': True, 'message': 'record deleted'}
        else:
            response = {'ok': True, 'message': 'no record found'}
        return jsonify(response), 200

    if request.method == 'PATCH':
        if data.get('query', {}) != {}:
            mongo.db.products.update_one(
                data['query'], {'$set': data.get('payload', {})})
            return jsonify({'ok': True, 'message': 'record updated'}), 200
        else:
            return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

       