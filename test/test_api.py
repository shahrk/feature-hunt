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

from backend.index import app,PORT


@pytest.fixture(autouse=True)
def client():
    print("here")
    app.run()
    with app.test_client() as client:
        yield client

# def test_product():

#     rv = app.test_client().get('/products')
#     print(rv.data)
#     assert 200 in rv.data

# def test_product():

#     rv = app.test_client().get('/feature-hunt')
#     print(rv.data)
#     # assert 200 in rv.data

def test_product(client):
    print("here1")

    rv = client.get('/feature-hunt/features')

    # assert 200 in rv.data