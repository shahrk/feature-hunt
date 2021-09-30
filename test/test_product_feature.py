from flask import Flask
import os
import sys
import mongomock
from flask_cors import CORS

from flask_pymongo import PyMongo
sys.path.insert(1, os.getcwd())
ROOT_PATH = os.path.dirname(os.path.realpath(__file__))
os.environ.update({'ROOT_PATH': ROOT_PATH})
    

import pytest

from backend.app import app


# with app.test_client() as client:
#     yield client
@pytest.fixture
def client():
    app.run()
    with app.test_client() as client:
        yield client

def test_product_feature(client):
    rv = client.get('/products')
    # print(rv.data)
    # assert 200 in rv.data
