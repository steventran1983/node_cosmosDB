import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
const SkeletonTeam = () => {
  return (
    <Box sx={{ bgcolor: "#000", p: 8 }}>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem", bgcolor: "grey.900" }}
        />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton
          variant="circular"
          sx={{ bgcolor: "grey.900" }}
          width={40}
          height={40}
        />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>

      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="circular"
        width={40}
        height={40}
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
  );
};

export default SkeletonTeam;
