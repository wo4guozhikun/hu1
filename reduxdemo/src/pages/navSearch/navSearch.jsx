import React, { Component } from "react";
import AutoComplete from "../../components/autoComplete/autoComplete";

import { connect } from "react-redux";
import { addProductIndex } from "../../reducers/actions";

const data = [
  {
    name: "手机",
    index: 1
  },
  {
    name: "电视",
    index: 2
  },
  {
    name: "笔记本",
    index: 3
  },
  {
    name: "盒子",
    index: 4
  },
  {
    name: "智能硬件",
    index: 6
  },
  {
    name: "服务",
    index: 7
  },
  {
    name: "社区",
    index: 8
  }
];

function Searchnav(props) {
  return (
    <ul>
      {data.map(item => {
        return (
          <li
            key={item.index}
            onMouseOver={() => props.hoverIt(item.index)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

class NavSearch extends Component {
  hoverIt = index => {
    this.props.addProductIndex({
      index: index,
      show: true
    });
  };

  leaveIt = () => {
    this.props.addProductIndex({
      index: 0,
      show: false
    });
  };

  render() {
    return (
      <div className="navSearch">
        <div className="navSearch-logo">
          <div>
            <img src="http://placeHold.it/60x60" />
          </div>
          <div>{this.props.proIndex.index}</div>
        </div>
        <div className="navSearch-nav" onMouseLeave={() => this.leaveIt()}>
          <Searchnav
            hoverIt={index => this.hoverIt(index)}
            
          />
        </div>
        <div className="navSearch-search">
          <AutoComplete />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    proIndex: state.proIndex
  };
};

export default connect(
  state => ({
    proIndex: state.proIndex
  }),
  {
    addProductIndex
  }
)(NavSearch);
