import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function alphaBetaPruning(node, depth, alpha, beta, maximizingPlayer) {
  if (depth === 0 || node.children.length === 0) {
    return { value: node.value, alpha, beta };
  }

  if (maximizingPlayer) {
    let maxEval = -Infinity;
    for (let child of node.children) {
      let result = alphaBetaPruning(child, depth - 1, alpha, beta, false);
      maxEval = Math.max(maxEval, result.value);
      alpha = Math.max(alpha, result.value);
      if (beta <= alpha) break;
    }
    return { value: maxEval, alpha, beta };
  } else {
    let minEval = Infinity;
    for (let child of node.children) {
      let result = alphaBetaPruning(child, depth - 1, alpha, beta, true);
      minEval = Math.min(minEval, result.value);
      beta = Math.min(beta, result.value);
      if (beta <= alpha) break;
    }
    return { value: minEval, alpha, beta };
  }
}

const AlphaBetaPruningVisualization = () => {
  const [treeInput, setTreeInput] = useState('0,3,5,6,2,1,4');
  const [depth, setDepth] = useState(3);
  const svgRef = useRef();

  const buildTree = (values) => {
    const nodes = values.map(v => new Node(parseInt(v)));
    const root = nodes[0];
    let currentParent = root;
    for (let i = 1; i < nodes.length; i++) {
      if (currentParent.children.length < 2) {
        currentParent.children.push(nodes[i]);
      } else {
        currentParent = currentParent.children[0];
        currentParent.children.push(nodes[i]);
      }
    }
    return root;
  };

  const visualizeTree = (root) => {
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 90, bottom: 30, left: 90 };

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const treeLayout = d3.tree().size([height - margin.top - margin.bottom, width - margin.left - margin.right]);

    const hierarchy = d3.hierarchy(root);
    const treeData = treeLayout(hierarchy);

    const link = g.selectAll('.link')
      .data(treeData.links())
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x))
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 2);

    const node = g.selectAll('.node')
      .data(treeData.descendants())
      .enter().append('g')
      .attr('class', d => 'node' + (d.children ? ' node--internal' : ' node--leaf'))
      .attr('transform', d => `translate(${d.y},${d.x})`);

    node.append('circle')
      .attr('r', 10)
      .attr('fill', d => d.depth % 2 === 0 ? '#fd8d3c' : '#74c476');

    node.append('text')
      .attr('dy', '.35em')
      .attr('x', d => d.children ? -13 : 13)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .text(d => d.data.value);

    const result = alphaBetaPruning(root, depth, -Infinity, Infinity, true);

    node.append('text')
      .attr('dy', '1.75em')
      .attr('x', d => d.children ? -13 : 13)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .text(d => `α=${result.alpha}, β=${result.beta}`)
      .style('font-size', '10px');

    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height - 10)
      .attr('text-anchor', 'middle')
      .text(`Optimal Value: ${result.value}`);
  };

  useEffect(() => {
    const values = treeInput.split(',').map(v => v.trim());
    const root = buildTree(values);
    visualizeTree(root);
  }, [treeInput, depth]);

  return (
    <div>
      <h2>Interactive Alpha-Beta Pruning Visualization</h2>
      <div>
        <label>
          Enter tree values (comma-separated):
          <input
            type="text"
            value={treeInput}
            onChange={(e) => setTreeInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Depth:
          <input
            type="number"
            value={depth}
            onChange={(e) => setDepth(parseInt(e.target.value))}
          />
        </label>
      </div>
      <svg ref={svgRef}></svg>
      <div>
        <p>Orange nodes: Maximizing player</p>
        <p>Green nodes: Minimizing player</p>
        <p>Each node shows its α and β values</p>
      </div>
    </div>
  );
};

export default AlphaBetaPruningVisualization;
