from flask_cors import CORS
import requests
from pprint import pprint

def test_products():
    response = requests.get("https://damp-citadel-25681.herokuapp.com/")
    assert b'feature-hunt' in response.content