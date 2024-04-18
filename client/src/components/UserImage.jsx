import { Box } from "@mui/material";


//This section is for the profile pic.
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://weconnect-vamd.onrender.com/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;