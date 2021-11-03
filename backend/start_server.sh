#!/bin/sh
export ENV="development"
export PORT="5000"
export DB="mongodb+srv://bot:bot123@cluster0.xph5e.mongodb.net/feature-hunt?retryWrites=true&w=majority"
# python index.py;
pytest