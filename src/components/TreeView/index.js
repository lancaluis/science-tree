import React, { Component } from "react";
import { Tree } from "antd";
import "antd/dist/antd.css";

const { TreeNode } = Tree;

export default class TreeView extends Component {
  componentDidMount() {
    const values = localStorage.getItem("checkedPeople");
    if (values) {
      console.log("=> tem dado no storage");
      console.log(`Os dados são: ${values}`);
    }
  }

  onCheck = checked => {
    console.log(`=> Inseri a key ${checked} no storage`);
    localStorage.setItem("checkedPeople", checked);
  };

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
        <Tree checkable onCheck={this.onCheck}>
          {this.renderTreeNodes(data)}
        </Tree>
      </div>
    );
  }
}
