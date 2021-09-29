from flask import Flask
import os
import sys
import mongomock
from flask_cors import CORS

from flask_pymongo import PyMongo
sys.path.insert(1, os.getcwd())
<<<<<<< HEAD
import pytest

from backend.app import create_app,init_db

@pytest.fixture
def client():
    collection = mongomock.MongoClient().db.collection
    data = [{
            "products": [
                {
                "id": 1,
                "namea": "feature-hunt",
                "description": "Feature Hunt is a platform where users can share, vote, and discuss feature requests and product owners can organize (categorize/prioritize) these requests. Instead of each product having it's own feature request page/portal we create a central hub where any product can interact with its users.",
                "votes": 2,
                "features": [
                    {
                    "id": 1,
                    "text": "Create dashboard for product owners",
                    "votes": 1,
                    "timestamp": 1530815581293,
                    "tags": [
                        "enhancement"
                    ]
                    }
                ],
                "tags": [
                    "productivity",
                    "web app"
                ]
                },
            ],
            }]
    collection.insert(data)
    app=create_app()
    CORS(app)
    # print(collection)
    app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
    # mongo=collection
    # mongo.insert(data)
    init_db(app,2,3)
    with app.test_client() as client:
        yield client

def test_product(client):

    rv = client.get('/products')
    print(rv.data)
    # assert 200 in rv.data

def test_product(client):

    rv = client.get('/feature-hunt')
    print(rv.data)
    # assert 200 in rv.data

def test_product(client):

    rv = client.get('/feature-hunt/features')
    print(rv.data)
=======
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

    rv = app.get('/feature-hunt/features')

>>>>>>> ed41873b2fa0508ac8ed2d63e55323d58a39a48b
    # assert 200 in rv.data