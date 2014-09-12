'use strict';

describe("instance", function () {


	var graph;

	beforeEach(function () {
		graph = new JsGraph();
	});


	it("initially has no vertices", function () {
		expect(graph.vertexCount()).toBe(0);
		graph.eachVertex(function () {
			expect().not.toBeReachable();
		});
		expect().toBeReachable();
	});


	it("initially has no edges", function () {
		expect(graph.edgeCount()).toBe(0);
		graph.eachEdge(function () {
			expect().not.toBeReachable();
		});
		expect().toBeReachable();
	});


});
