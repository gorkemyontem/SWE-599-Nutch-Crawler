# SWE-599-Nutch-Crawler
# NOTES

https://twg.io/blog/things-i-wish-i-knew-about-docker-before-i-started-using-it/

docker-compose build 
docker-compose build — no-cache
docker-compose up


docker exec -it frontend /bin/bash
docker exec -it <container_id> sh
docker-compose exec <container_id> sh

<!-- https://medium.com/geeks-prep/your-first-steps-to-building-a-web-crawler-integrating-nutch-with-solr-b5d916af3d32 -->
<!-- https://stackoverflow.com/questions/14788345/how-to-install-the-jdk-on-ubuntu-linux/14788889 -->
sudo apt update
<!-- sudo apt install default-jre -->
sudo apt install openjdk-8-jdk
sudo apt-get install ant
/mnt/c/Projects/SWE-599-Nutch-Crawler/nutch/nutch-release-1.18 >>> ant
SOLR_HOME="/mnt/c/Projects/SWE-599-Nutch-Crawler/solr/solr-8.5.1"
NUTCH_HOME="/mnt/c/Projects/SWE-599-Nutch-Crawler/nutch/nutch-release-1.18/src"
cd $SOLR_HOME/server/solr/configsets >>> mkdir -p nutch
cp -r ./_default/* nutch/cd
$SOLR_HOME/bin/solr create -c nutch -d $SOLR_HOME/server/solr/configsets/nutch/conf/
DOGRU SCHEMA.XML https://github.com/apache/nutch/blob/master/src/plugin/indexer-solr/schema.xml

bin/solr stop
bin/solr start

<!-- JAVA_HOME="/usr" -->
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64


$NUTCH_HOME/bin/nutch inject crawl/crawldb urls


# Nutch data is composed of:

- The crawl database, or crawldb. This contains information about every URL known to Nutch, including whether it was fetched, and, if so, when.
- The link database, or linkdb. This contains the list of known links to each URL, including both the source URL and anchor text of the link.
- A set of segments. Each segment is a set of URLs that are fetched as a unit. Segments are directories with the following subdirectories:
    - a crawl_generate names a set of URLs to be fetched
    - a crawl_fetch contains the status of fetching each URL
    - a content contains the raw content retrieved from each URL
    - a parse_text contains the parsed text of each URL
    - a parse_data contains outlinks and metadata parsed from each URL
    - a crawl_parse contains the outlink URLs, used to update the crawldb


//////////////
COMMANDS 
https://cwiki.apache.org/confluence/display/nutch/CommandLineOptions

https://www.slideshare.net/abial/nutch-as-a-web-data-mining-platform

TODO:
https://stackoverflow.com/a/54251381
