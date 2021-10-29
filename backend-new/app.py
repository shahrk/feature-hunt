# pylint: disable=pointless-string-statement,undefined-variable,line-too-long

from flask import Flask, render_template, request, url_for, redirect, session
import pymongo
import bcrypt
import json

app = Flask(__name__)
from auth_controller import *

app.secret_key = "testing"
client = pymongo.MongoClient("mongodb+srv://bot:bot123@cluster0.xph5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.get_database('total_records')
records = db.register


if __name__ == "__main__":
    app.run(debug=True)
