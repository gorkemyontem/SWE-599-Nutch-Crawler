from datetime import datetime
from elasticsearch import Elasticsearch
from models.response import ApiSearchResponse, ApiCreateResponse, ApiUpdateResponse, ApiDeleteResponse

# by default we connect to localhost:9200
es = Elasticsearch()
indexName = 'annotation'
idFieldName = "_id"

def search():
    query_body = {
        "query": {
            "match_all": {
            }
        }
    }
    esResponse = es.search(index=indexName, body=query_body, filter_path=['hits.total.value', 'hits.hits._source'])
    # total = esResponse["hits"]["total"]["value"]
    annotations = []
    for x in esResponse["hits"]["hits"]:
        annotations.append(x["_source"])
    return annotations

def searchInfo():
    query_body = {
        "query": {
            "match_all": {
            }
        }
    }
    esResponse = es.search(index=indexName, body=query_body, filter_path=['hits.total.value', 'hits.hits._source'])
    filteredResponse = esResponse["hits"]
    total = filteredResponse["total"]["value"]
    annotations = []
    if 'hits' in filteredResponse: 
        for x in filteredResponse["hits"]:
            annotations.append(x["_source"])

    res = ApiSearchResponse(total, annotations)
    return res

def createIndex(data):
    # create an index in elasticsearch, ignore status code 400 (index already exists)
    esResponse = es.index(index=indexName, id=data["id"], body=data, ignore=400)
    res = ApiCreateResponse(esResponse[idFieldName])
    return res

def updateIndex(id, data): 
    esResponse = es.index(index=indexName, id=id, body=data, ignore=400)
    res = ApiUpdateResponse(esResponse[idFieldName])
    return res

def deleteIndex(id): 
    esResponse = es.delete(index=indexName, id=id,ignore=400)
    res = ApiDeleteResponse(esResponse[idFieldName])
    return res

