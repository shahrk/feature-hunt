"""Flask configuration."""
import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, 'envars.env'))

MONGO_URI = os.environ.get('DB')
