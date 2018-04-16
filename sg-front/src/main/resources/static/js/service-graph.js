var nodes, edges, network;

var _nodes = new vis.DataSet();
var _edges = new vis.DataSet();

// load the JSON file containing the Gephi network.
// var gephiJSON = loadJSON("data/miserables.json"); // code in importing_from_gephi.


// you can customize the result like with these options. These are explained below.
// These are the default options.
var parserOptions = {
    edges: {
        inheritColors: false
    },
    nodes: {
        fixed: true,
        parseColor: false
    }
}

// parse the gephi file to receive an object
// containing nodes and edges in vis format.
// var parsed = vis.network.convertGephi(gephiJSON, parserOptions);


// provide data in the normal fashion
var data = {
    nodes: _nodes,
    edges: _edges
};

var options = {
    autoResize: true,
    clickToUse: false
};


$.getJSON('data/miserables.json', function(data) {
    var edges = data.edges.map(function (edge) {
        _edges.add(edge);
    });
});

$.getJSON('data/miserables.json', function(data) {
    var nodes = data.nodes.map(function (node) {
        _nodes.add(node);
    });
});


console.log(_nodes);
console.log(_edges);


// create a network
var container = document.getElementById('mynetwork');

// create a network
var network = new vis.Network(container, data, options);






