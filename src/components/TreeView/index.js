import React, { Component } from "react";
import { Tree } from "antd";
import "antd/dist/antd.css";

const { TreeNode } = Tree;

export default class TreeView extends Component {
  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.name} key={item.id} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.id} {...item} />;
    });

  render() {
    const { data } = this.props;
    return (
      <div>
        <Tree checkable>{this.renderTreeNodes(data)}</Tree>
      </div>
    );
  }
}
