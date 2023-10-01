import { Container, Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const MeetTeamSkeleton = () => {
  const arr = Array(8).fill(0);
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: "2rem",
          columnGap: "2rem",
        }}
      >
        {arr.map((item, index) => (
          <Stack key={index} spacing={2}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton
              variant="text"
              width={300}
              sx={{ fontSize: "2rem", bgcolor: "grey.900" }}
            />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              sx={{ bgcolor: "grey.900" }}
            />
            <Skeleton
              variant="rectangular"
              width={300}
              height={60}
              sx={{ bgcolor: "grey.900" }}
            />
            <Skeleton
              variant="rounded"
              width={300}
              height={60}
              sx={{ bgcolor: "grey.900" }}
            />
          </Stack>
        ))}
      </Box>
    </Container>
  );
};

export default MeetTeamSkeleton;
