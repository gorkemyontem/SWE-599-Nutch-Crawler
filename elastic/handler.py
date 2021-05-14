import uuid
import pprint
import elastic


def search():
    res = elastic.search()
    return res
    
def searchInfo():
    res = elastic.searchInfo()
    return res

def create(data):
    data["id"] = str(uuid.uuid1())
    res = elastic.createIndex(data)
    return res

def read(id):
    return "readHandler done"
    
def update(id, data):
    res = elastic.updateIndex(id, data)
    return res

def delete(id):
    res = elastic.deleteIndex(id)
    return res
