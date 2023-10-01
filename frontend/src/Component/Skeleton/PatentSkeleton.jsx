import { Container, Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const PatentSkeleton = () => {
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
          marginLeft: "4rem",
        }}
      >
        {arr.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              columnGap: "2rem",
              alignItems: "center",
              paddingTop: "2rem",
            }}
          >
            <Skeleton
              variant="text"
              width={800}
              sx={{ fontSize: "1.5rem", bgcolor: "grey.900" }}
            />
            <Box
              sx={{
                display: "flex",
                columnGap: "1rem",
              }}
            >
              <Skeleton
                variant="circular"
                width={50}
                height={50}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="circular"
                width={50}
                height={50}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="circular"
                width={50}
                height={50}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="circular"
                width={50}
                height={50}
                sx={{ bgcolor: "grey.900" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default PatentSkeleton;
