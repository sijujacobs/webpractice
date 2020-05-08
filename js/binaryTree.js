function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

Node.prototype.traverse = function (nod, level = 1) {
  //   console.log("traverse :: nod : ", nod);
  updateNodeMap(nod, level);
  let leftNode = nod.left || null;
  let rightNode = nod.right || null;
  if (leftNode || rightNode) {
    ++level;
    if (leftNode) {
      this.traverse(leftNode, level);
    }
    if (rightNode) {
      this.traverse(rightNode, level);
    }
  }
};

Node.prototype.insert = function (val) {
  if (val < this.value) {
    if (this.left) {
      this.left.insert(val);
    } else {
      this.left = new Node(val);
    }
  }
  if (val > this.value) {
    if (this.right) {
      this.right.insert(val);
    } else {
      this.right = new Node(val);
    }
  }
};

var nodeMap = {};
function updateNodeMap(node, level) {
  let nodeDet = {
    level: level,
    values: [node.value],
  };
  if (nodeMap[level]) {
    nodeMap[level].values.push(nodeDet.values[0]);
  } else {
    nodeMap[level] = nodeDet;
  }
}
function showAverage() {
  let averages = [];
  if (nodeMap) {
    for (n in nodeMap) {
      let thisLevel = nodeMap[n];
      let total = thisLevel.values.reduce((acc, val) => acc + val);
      let ave = (total / thisLevel.values.length).toFixed(2);
      //   console.log("ave : ", ave);
      averages.push(ave);
    }
  }
  return averages;
}

console.clear();
var n = new Node(13);
n.insert(3);
n.insert(36);
n.insert(23);
n.insert(33);
n.insert(22);
n.insert(12);
n.insert(56);

n.traverse(n);

console.log(n);
console.log("nodeMap : ", nodeMap);
console.log("showAverage : ", showAverage());
