import styled from "styled-components";

export const DashboardContainer = styled.div<{ togglesidebar: boolean }>`
  height: 100vh;
  display: grid;
  grid-template-columns: ${({ togglesidebar }) =>
    togglesidebar ? "68px 1fr" : "240px 1fr"};
  /* grid-template-columns: 240px 1fr; */
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
`;
