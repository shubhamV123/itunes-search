import React, { Component } from "react";
import axios from "axios";
import { Layout, Spin } from "antd";
import TableView from "../components/TableView";
import WrappedSeachForm from "../components/WrappedSeachForm";
import Fallback from "../components/Fallback";
const { Header, Content } = Layout;
class HomeLayout extends Component {
  state = {
    data: [],
    loading: false,
    view: "info"
  };
  fetchKeywordData = async val => {
    this.setState({ loading: true });
    try {
      let axiosData = await axios.get(
        `https://itunes.apple.com/search?term=${val}`
      );
      let data = axiosData.data.results;

      this.setState({
        loading: false,
        data,
        view: data.length === 0 ? "no_data" : false
      });
    } catch (e) {
      this.setState({
        loading: false,
        view: "err"
      });
    }
  };
  render() {
    let { data, loading, view } = this.state;
    return (
      <Layout>
        <Header className="flex-center">
          <WrappedSeachForm fetchKeywordData={this.fetchKeywordData} />
        </Header>
        <Content style={{ padding: "0 50px", background: "#fff" }}>
          <Spin
            tip="Please wait while we are fetching data..."
            spinning={loading}
          >
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
              <Content style={{ padding: "0 24px" }}>
                {data.length === 0 ? (
                  <Fallback type={view} />
                ) : (
                  <TableView {...{ data }} history={this.props.history} />
                )}
              </Content>
            </Layout>
          </Spin>
        </Content>
      </Layout>
    );
  }
}

export default HomeLayout;
