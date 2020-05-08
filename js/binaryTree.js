function Tree(val) {
  this.root = null;
  this.treeMap = {};
}

Tree.prototype.updateTreeMap = function (node, level) {
  let mapObj = {
    level: level,
    values: [node.value],
  };
  if (this.treeMap[level]) {
    this.treeMap[level].values.push(mapObj.values[0]);
  } else {
    this.treeMap[level] = mapObj;
  }
};

Tree.prototype.showAverage = function () {
  let averages = [];
  if (this.treeMap) {
    for (tm in this.treeMap) {
      let thisLevel = this.treeMap[tm];
      let total = thisLevel.values.reduce((acc, val) => acc + val);
      let ave = Math.floor(total / thisLevel.values.length);
      averages.push(ave);
    }
  }
  return averages;
};
Tree.prototype.insertValue = function (n) {
  var node = new Node(n);
  if (this.root) {
    this.root.insertNode(node);
  } else {
    this.root = node;
  }
};
Tree.prototype.traverse = function (node = this.root, level = 1) {
  this.updateTreeMap(node, level);
  let leftNode = node.left || null;
  let rightNode = node.right || null;
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

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

Node.prototype.insertNode = function (n) {
  if (n.value < this.value) {
    if (this.left !== null) {
      this.left.insertNode(n);
    } else {
      this.left = n;
    }
  }
  if (n.value > this.value) {
    if (this.right !== null) {
      this.right.insertNode(n);
    } else {
      this.right = n;
    }
  }
};

(function () {
  var tree = new Tree();
  for (let i = 1; i < 20; i++) {
    tree.insertValue(Math.floor(Math.random() * 100 + 1));
  }
  console.log("tree : ", tree);
  tree.traverse();
  console.log("treeMap : ", tree.treeMap);
  console.log("showAverage : ", tree.showAverage());
})();
