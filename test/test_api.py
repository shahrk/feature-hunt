from flask_cors import CORS
import requests

def test_products():
    response = requests.get("http://localhost:5000/products")
    print(response)        