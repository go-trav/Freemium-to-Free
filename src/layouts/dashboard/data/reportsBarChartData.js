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

const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "CPI",
      progress: { content: "₹30", percentage: 100 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "Interac..",
      progress: { content: "36K", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "Cost",
      progress: { content: "₹108K", percentage: 90 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "GR",
      progress: { content: "96%", percentage: 96 },
    },
  ],
};

export default reportsBarChartData;