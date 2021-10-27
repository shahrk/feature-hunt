''' docstr '''
from pprint import pprint
from flask_cors import CORS
import requests

def test_products():
    '''docstr'''
    response = requests.get("http://localhost:5000/products")
    assert b'feature-hunt' in response.content
