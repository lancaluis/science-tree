import React, { Component } from "react";
import { Spin } from "antd";
import api from "./service/api";
import TreeViewService from "./service/treeService";
import TreeView from "./components/TreeView";
import brand from "./assets/brand.svg";
import "./styles/styles.scss";

export default class App extends Component {
  state = {
    treeData: [],
    isNull: false
  };

  // Retorna os dados da requisição
  async componentDidMount() {
    const response = await api.get("/db.json");
    const data = TreeViewService(response.data);
    this.setState({ treeData: data, isNull: true });
  }

  render() {
    const { treeData, isNull } = this.state;
    return (
      <div className="container">
        {/* <img src={brand} alt="Hi Platform" /> */}
        {!isNull ? <Spin /> : <TreeView data={treeData} />}
      </div>
    );
  }
}
