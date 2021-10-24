"""
Copyright (C) 2021 Feature Hunt - All Rights Reserved
You may use, distribute and modify this code under the terms of the MIT license.
You should have received a copy of the XYZ license with
this file. If not, please write to: featurehuntteam@gmail.com
"""
import os
from sys import stderr
from flask import request, jsonify
from app import app, mongo
import logger

from bson.json_util import dumps
from bson.objectid import ObjectId


ROOT_PATH = os.environ.get('ROOT_PATH')
# print('ROOT_PATH', ROOT_PATH)
LOG = logger.get_root_logger(__name__, filename=os.path.join(ROOT_PATH, 'output.log'))

@app.route('/products', methods=['GET', 'POST', 'DELETE', 'PATCH'])

#################################################################################
##       Function: products                                                  
##       Description: Get/ Add/ Update/ Delete the products from the database 
##       Inputs:
##           - NA
##       Outputs:
##           - NA
#################################################################################

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


#################################################################################
##       Function: get_feature                                                  
##       Description: Get the list of all features for given product name
##       Inputs:
##           - productName: Name of the product
##       Outputs:
##           - results: List of features that are available in that product
#################################################################################
@app.route('/<productname>', methods=['GET', 'POST'])    
def get_feature(productname):
    if request.method == 'GET':
        data = mongo.db.products.find({"name":productname},{"features":1})
    return dumps(data)



#################################################################################
##       Function: features                                                  
##       Description: You can add/get features of a product
##       Inputs:
##           - productName: Name of the product
##       Outputs:
##           - results: Add features to that product or return feature list
#################################################################################
@app.route('/<productname>/features', methods=['GET', 'POST'])    
def features(productname):  
    if request.method == 'POST':
        data = request.json
        data['_id'] = ObjectId()
        print(data)
        if data is None or data == {}:
            return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
        result = mongo.db.products.find_one_and_update({"name": productname}, {"$push": {"features": data}})
    
    elif request.method == 'GET':
        result = mongo.db.products.find({"name":productname},{"features":1})
    return dumps(result)
