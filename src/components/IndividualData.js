import React from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  width: 900px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    width: 80px;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: yellowgreen; */
  }
`;

function IndividualData({ IndividualExcelData }) {
  return (
    <TableContainer>
      <div>{IndividualExcelData.Date}</div>
      <div>{IndividualExcelData.Day}</div>
      <div>{IndividualExcelData.FIT_ADR}</div>
      <div>{IndividualExcelData.FIT_Ratio}</div>
      <div>{IndividualExcelData.FIT_Ratio2}</div>
      <div>{IndividualExcelData.FIT_Revenue}</div>
      <div>{IndividualExcelData.FIT_Rms}</div>
      <div>{IndividualExcelData.Group_ADR}</div>
      <div>{IndividualExcelData.Group_Ratio}</div>
      <div>{IndividualExcelData.Group_Ratio2}</div>
      <div>{IndividualExcelData.Group_Revenue}</div>
      <div>{IndividualExcelData.Group_Rms}</div>
      <div>{IndividualExcelData.Total_ADR}</div>
      <div>{IndividualExcelData.Total_OCCP}</div>
      <div>{IndividualExcelData.Total_RMS}</div>
      <div>{IndividualExcelData.Total_RevPAR}</div>
      <div>{IndividualExcelData.Total_Revenue}</div>
    </TableContainer>
  );
}

export default IndividualData;
