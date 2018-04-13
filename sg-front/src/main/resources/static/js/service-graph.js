var nodes, edges, network;

// load the JSON file containing the Gephi network.
var gephiJSON = loadJSON("data/miserables.json"); // code in importing_from_gephi.


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
var parsed = vis.network.convertGephi(gephiJSON, parserOptions);


// provide data in the normal fashion
var data = {
    nodes: parsed.nodes,
    edged: parsed.edges
};

// create a network
var container = document.getElementById('mynetwork');

// create a network
var network = new vis.Network(container, data);


/*
// convenience method to stringify a JSON object
function toJSON(obj) {
    return JSON.stringify(obj, null, 4);
}

function addNode() {
    try {
        nodes.add({
            id: document.getElementById('node-id').value,
            label: document.getElementById('node-label').value
        });
    }
    catch (err) {
        alert(err);
    }
}

function updateNode() {
    try {
        nodes.update({
            id: document.getElementById('node-id').value,
            label: document.getElementById('node-label').value
        });
    }
    catch (err) {
        alert(err);
    }
}
function removeNode() {
    try {
        nodes.remove({id: document.getElementById('node-id').value});
    }
    catch (err) {
        alert(err);
    }
}

function addEdge() {
    try {
        edges.add({
            id: document.getElementById('edge-id').value,
            from: document.getElementById('edge-from').value,
            to: document.getElementById('edge-to').value
        });
    }
    catch (err) {
        alert(err);
    }
}
function updateEdge() {
    try {
        edges.update({
            id: document.getElementById('edge-id').value,
            from: document.getElementById('edge-from').value,
            to: document.getElementById('edge-to').value
        });
    }
    catch (err) {
        alert(err);
    }
}
function removeEdge() {
    try {
        edges.remove({id: document.getElementById('edge-id').value});
    }
    catch (err) {
        alert(err);
    }
}

function draw() {
    // create an array with nodes
    nodes = new vis.DataSet();
    nodes.on('*', function () {
        document.getElementById('nodes').innerHTML = JSON.stringify(nodes.get(), null, 4);
    });
    nodes.add([
        {id: '1', label: 'Node 1'},
        {id: '2', label: 'Node 2'},
        {id: '3', label: 'Node 3'},
        {id: '4', label: 'Node 4'},
        {id: '5', label: 'Node 5'}
    ]);

    // create an array with edges
    edges = new vis.DataSet();
    edges.on('*', function () {
        document.getElementById('edges').innerHTML = JSON.stringify(edges.get(), null, 4);
    });
    edges.add([
        {id: '1', from: '1', to: '2'},
        {id: '2', from: '1', to: '3'},
        {id: '3', from: '2', to: '4'},
        {id: '4', from: '2', to: '5'}
    ]);

    // create a network
    var container = document.getElementById('network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    network = new vis.Network(container, data, options);

}*/