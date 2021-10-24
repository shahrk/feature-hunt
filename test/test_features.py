''' docstr todo '''
from pprint import pprint
from flask_cors import CORS
import requests

def test_feature_1():
    ''' docstr todo '''
    response = requests.get("http://localhost:5000/feature-hunt/features")
    assert b'Create product page' in response.content

def test_feature_2():
    ''' docstr todo '''
    response = requests.get("http://localhost:5000/disentry/features")
    assert b'Enable scheduling/reminders' in response.content
