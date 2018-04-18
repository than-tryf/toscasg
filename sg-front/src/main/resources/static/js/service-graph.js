var nodes, edges, network;

var _nodes = new vis.DataSet();
var _edges = new vis.DataSet();

var parserOptions = {
    edges: {
        inheritColors: false
    },
    nodes: {
        fixed: true,
        parseColor: false
    }
}

var data = {
    nodes: _nodes,
    edges: _edges
};

var options = {
    autoResize: true,
    clickToUse: false
};

/*
$.getJSON('data/miserables.json', function(data) {
    var edges = data.edges.map(function (edge) {
        _edges.add(edge);
    });
});

$.getJSON('data/miserables.json', function(data) {
    var nodes = data.nodes.map(function (node) {
        _nodes.add(node);
    });
});*/


$.getJSON('http://127.0.0.1:9101', function(data){
    // console.log(data._source);
    var nodes = data._source.nodes.map(function(node){
       _nodes.add(node) ;
    });

    var edges = data._source.edges.map(function(edge){
       _edges.add(edge);
    });
});

var container = document.getElementById('mynetwork');
var network = new vis.Network(container, data, options);






