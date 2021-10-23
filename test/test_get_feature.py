''' docstr todo '''

from pprint import pprint
from flask_cors import CORS
import requests

def test_get_feature_1():
    ''' docstr todo '''
    response = requests.get("http://localhost:5000/feature-hunt")
    assert b'bug fix' in response.content

def test_get_feature_2():
    ''' docstr todo '''
    response = requests.get("http://localhost:5000/disentry")
    assert b'enhancement' in response.content
