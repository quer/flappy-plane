(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("coin",
{ "height":1,
 "layers":[
        {
         "data":[1],
         "height":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":1,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "name":"Object Layer 1",
         "objects":[
                {
                 "height":0,
                 "id":3,
                 "name":"",
                 "polygon":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":40,
                         "y":-40
                        }, 
                        {
                         "x":74,
                         "y":-40
                        }, 
                        {
                         "x":114,
                         "y":0
                        }, 
                        {
                         "x":114,
                         "y":40
                        }, 
                        {
                         "x":74,
                         "y":74
                        }, 
                        {
                         "x":40,
                         "y":74
                        }, 
                        {
                         "x":0,
                         "y":40
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":40
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextobjectid":4,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tileheight":119,
 "tilesets":[
        {
         "firstgid":1,
         "source":"untitled.tsx"
        }],
 "tilewidth":114,
 "type":"map",
 "version":"2017.05.26",
 "width":1
});