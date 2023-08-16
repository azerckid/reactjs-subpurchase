import React from "react";
import styled from "styled-components";
import IndividualData from "./IndividualData";

// eslint-disable-next-line
const ProductContainer = styled.div``;

const ExcelData = ({ excelData }) => {
  return excelData.map((IndividualExcelData) => (
    <tr key={IndividualExcelData.Id}>
      <IndividualData IndividualExcelData={IndividualExcelData} />
    </tr>
  ));
};

export default ExcelData;
