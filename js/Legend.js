var legend = L.Control.extend({
    options: {
        position: 'bottomleft'
    },

    onAdd: function (map) {
        // create the control container with a particular class name
        var container = L.DomUtil.create('div', 'Legend');
		
        // ... initialize other DOM elements, add listeners, etc.

        return container;
    }
	});