import React, { Component } from "react";
import { Tree, Spin } from "antd";
import api from "../../service/api";
import "antd/dist/antd.css";

const { TreeNode } = Tree;

export default class TreeView extends Component {
  state = {
    treeData: [],
    isNull: false
  };

  // Retorna os dados da requisição
  async componentDidMount() {
    const response = await api.get("/db.json");
    const data = this.formatData(response.data);
    this.setState({ treeData: data, isNull: true });
  }

  // Transforma o Objeto JSON em um Array de objetos
  formatData = data => {
    let keys = Object.keys(data);
    let newData = [];
    keys.forEach(key => {
      this.logChildContent(data[key]);
      newData.push(data[key]);
    });
    return newData;
  };

  // Transforma os Objetos filhos em Arrays de objetos
  logChildContent = child => {
    let childrenKeys = Object.keys(child.children);
    let childrenArray = [];
    if (childrenKeys.length > 0) {
      childrenKeys.forEach(childKey => {
        this.logChildContent(child.children[childKey]);
        childrenArray.push(child.children[childKey]);
      });
    }
    child.children = childrenArray;
  };

  // Renderiza a Treeview
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
    const { treeData, isNull } = this.state;
    return (
      <div>
        {!isNull ? (
          <Spin />
        ) : (
          <Tree checkable>{this.renderTreeNodes(treeData)}</Tree>
        )}
      </div>
    );
  }
}
