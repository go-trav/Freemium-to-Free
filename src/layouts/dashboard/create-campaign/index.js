/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import * as React from 'react';

// @mui material components
import { Link } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import Card from "@mui/material/Card";

function CreateCampaign() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const [val, setVal] = React.useState('');

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        {/* <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox> */}
        <SoftBox pt={3} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={1}>
                <SoftTypography variant="body2" fontWeight="medium">
                    Campaign Details
                </SoftTypography>
            </SoftBox>
            <SoftBox display="flex" justifyContent="space-between" mb={2}>
              <SoftInput placeholder="Campaign Name" />
              <Select
                value={val}
                onChange={handleChange}
                style={{marginLeft: 20}}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                    Campaign Type
                </MenuItem>
                <MenuItem value={10}>Survey</MenuItem>
                <MenuItem value={20}>Video</MenuItem>
                <MenuItem value={30}>Survey + Video</MenuItem>
              </Select>
            </SoftBox>
            <SoftBox mb={1}>
                <SoftTypography variant="body2" fontWeight="medium">
                    Target Audience Details
                </SoftTypography>
            </SoftBox>
            <SoftBox display="flex" justifyContent="space-between" mb={2}>
              <SoftInput placeholder="Target Location" />
              <SoftInput style={{marginLeft: 20}} type="text" placeholder="Target Language" />
            </SoftBox>
            <SoftBox display="flex" justifyContent="space-between" mb={2}>
              <SoftInput placeholder="Target Gender" />
              <SoftInput style={{marginLeft: 20}} type="text" placeholder="Target Age" />
            </SoftBox>
            <SoftBox mb={1}>
                <SoftTypography variant="body2" fontWeight="medium">
                    Budget Allocation
                </SoftTypography>
            </SoftBox>
            <SoftBox display="flex" justifyContent="space-between" mb={2}>
              <SoftInput placeholder="Budget Type" />
              <SoftInput style={{marginLeft: 20}} type="text" placeholder="No of Days" />
            </SoftBox>
            <SoftBox display="flex" justifyContent="space-between" mb={2}>
              <SoftInput placeholder="Total Budget" />
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark">
                Next
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default CreateCampaign;
