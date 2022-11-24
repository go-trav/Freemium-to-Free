// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "companies", align: "left" },
      { name: "budget", align: "left" },
      { name: "reach", align: "center" },
      { name: "completion", align: "center" },
      { name: "download", align: "center" },
    ],

    rows: [
      {
        companies: [logoXD, "Soft UI XD Version"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ₹150000
          </SoftTypography>
        ),
        reach: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
             30000
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={80} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
        download: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
             Survey Data
          </SoftTypography>
        ),
      },
      {
        companies: [logoAtlassian, "Add Progress Track"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ₹50000
          </SoftTypography>
        ),
        reach: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            200
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={10} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
        download: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
             Survey Data
          </SoftTypography>
        ),
      },
      {
        companies: [logoSlack, "Stock Platform"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ₹300000
          </SoftTypography>
        ),
        reach: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            10000
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
        download: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
             Survey Data
          </SoftTypography>
        ),
      },
      {
        companies: [logoSpotify, "Launch our Mobile App"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ₹1500000
          </SoftTypography>
        ),
        reach: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            50000
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
        download: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
             Survey Data
          </SoftTypography>
        ),
      },
      {
        companies: [logoJira, "Add the New Pricing Page"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ₹30000
          </SoftTypography>
        ),
        reach: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            1000
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
        download: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
             Survey Data
          </SoftTypography>
        ),
      },
      {
        companies: [logoInvesion, "Redesign New Online Shop"],
        budget: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            ₹25000
          </SoftTypography>
        ),
        reach: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            835
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
        download: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
             Survey Data
          </SoftTypography>
        ),
      },
    ],
  };
}
