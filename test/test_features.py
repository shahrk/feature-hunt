from flask_cors import CORS
import requests
from pprint import pprint

def test_feature_1():
    response = requests.get("https://damp-citadel-25681.herokuapp.com/features")
    assert b'Create product page' in response.content

def test_feature_2():
    response = requests.get("https://damp-citadel-25681.herokuapp.com//features")
    assert b'Enable scheduling/reminders' in response.content