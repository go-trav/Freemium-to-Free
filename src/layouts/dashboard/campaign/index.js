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

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import Card from "@mui/material/Card";

function Campaign() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <Card style={{ padding: 20, flexDirection: "row", justifyContent: "space-between" }}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Create campaign
                </SoftTypography>
                <SoftTypography variant="body2" color="text" fontWeight="bold">
                  +
                </SoftTypography>
              </Card>
            </Grid>
          </Grid>
        </SoftBox>
        {/* <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
          </Grid>
        </SoftBox> */}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="Campaign Name 1"
                description={
                  <>
                    Campaign ID(<strong>23112414</strong>)
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="Campaign Name 2"
                description={
                  <>
                    Campaign ID(<strong>23112414</strong>)
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
          </Grid>
          <Grid mt={3} container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="Campaign Name 3"
                description={
                  <>
                    Campaign ID(<strong>23112414</strong>)
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="Campaign Name 4"
                description={
                  <>
                    Campaign ID(<strong>23112414</strong>)
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Campaign;
