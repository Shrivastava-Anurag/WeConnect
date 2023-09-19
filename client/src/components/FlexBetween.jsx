import { Box } from "@mui/material";
import { styled } from "@mui/system";


//Making this so that we can reused these properties all the time
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

export default FlexBetween;