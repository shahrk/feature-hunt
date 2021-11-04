''' wrapper around logging module '''
import os
import logging
#################################################################################
##       Function: get_root_logger
##       Description: Get the logger object
##       Inputs:
##           - logger_name: Name of the logger
##           - file name : the file which is used for logging
##       Outputs:
##           - logger: The logger instance
#################################################################################

def get_root_logger(logger_name, filename=None):
    ''' get the logger object '''
    logger = logging.getLogger(logger_name)
    debug = os.environ.get('ENV', 'development') == 'development'
    logger.setLevel(logging.DEBUG if debug else logging.INFO)

    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    ch = logging.StreamHandler()
    ch.setFormatter(formatter)
    logger.addHandler(ch)

    if filename:
        fh = logging.FileHandler(filename)
        fh.setFormatter(formatter)
        logger.addHandler(fh)

    return logger

def get_child_logger(root_logger, name):
    ''' docstr todo '''
    return logging.getLogger('.'.join([root_logger, name]))
