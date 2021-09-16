import React, {useEffect, useState} from "react";
import { getStats } from "./http/http";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import styled from "styled-components";

export default function App() {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    getStats(setStats);
  }, []);

 function imageFormatter(cell){
      return (<img style={{width:30}} src={cell}/>)
    }
  const columns = [
  {
      dataField: "flag",
      text: "Country Flag",
     formatter: imageFormatter
  }, {
      dataField: "country",
      text: "Country"
  }, {
      dataField: "new_cases",
      text: "New Cases"
  }, {
      dataField: "active_cases",
      text: "Active Cases"
  }, {
      dataField: "new_deaths",
      text: "New Deaths"
  }, {
      dataField: "total_cases",
      text: "Total Cases"
    }, {
      dataField: "total_deaths",
      text: "Total Deaths"
    }, {
      dataField: "total_recovered",
      text: "Total Recovered"
  }
  ];

  const Wrapper = styled.div`
  width: 99%;
  `;
  return (
    <Wrapper>
      <BootstrapTable
      hover={true}
        data={stats}
        columns={columns}
        keyField="id"
        pagination={paginationFactory()}
      />
  </Wrapper>);
}
