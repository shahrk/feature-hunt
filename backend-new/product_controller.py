from app import *
from flask import jsonify

@app.route("/addProduct", methods=['Post'])
def addProduct():
    try:
        product_name = request.form.get("productName")
        product_description = request.form.get("productDescription")
        image_url = request.form.get("imageUrl")
        email = request.form.get("email")

        product_input = {'product_name' : product_name, 'product_desc': project_description,
                         'image_url' : image_url, 'email' : email}

        product_records.insert_one(product_input)

        return jsonify(success=True)
    except:
        return jsonify(success=False)

@app.route("/<productName>/getFeature", method=['Get'])
def getFeature(productName):
    result = product_record.find({"productName"})
    return dumps(result)


@app.route("/<productName>/addFeature", method=['Post'])
def addFeature(productName):
    if request.method == 'POST':
        data = request.json
        data['_id'] = ObjectId()
        print(data)
        if data is None or data == {}:
            return Response(response=json.dumps({"Error": "Please provide connection information"}),
                            status=400,
                            mimetype='application/json')
        result = product_records.find_one_and_update({"project_name": productName}, {"$push": {"features": data}})

        return jsonify(success=True)

    elif request.method == 'GET':
        result = mongo.db.products.find({"name": productname}, {"features": 1})
    return dumps(result)

