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
import Button from '@mui/material/Button';

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
import Separator from "layouts/authentication/components/Separator";

function AdSubmission() {
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
                    Ad Submission
                </SoftTypography>
            </SoftBox>
            <SoftBox display="flex" justifyContent="space-between" mb={2}>
                <Button variant="contained" component="label">
                    <SoftTypography variant="subtitle2" fontWeight="regular">
                        Upload
                    </SoftTypography>
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
            </SoftBox>
            <Separator />
            <SoftBox mb={1}>
                <SoftTypography variant="body2" fontWeight="medium">
                    Survey Form Submission
                </SoftTypography>
            </SoftBox>
            <SoftBox display="flex" justifyContent="space-between" mb={2}>
                <Button variant="outlined">
                    <SoftTypography variant="subtitle2" fontWeight="regular">
                        Add Questions
                    </SoftTypography>
                </Button>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark">
                Submit
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
}

export default AdSubmission;
