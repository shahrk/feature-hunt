from flask_cors import CORS
import requests
from pprint import pprint

def test_products():
    response = requests.get("http://localhost:5000/feature-hunt/features")
    assert response.status_code==200