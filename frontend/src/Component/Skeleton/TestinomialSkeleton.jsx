import { Container, Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const TestinomialSkeleton = () => {
  const arr = Array(2).fill(0);
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
          <Stack key={index} spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton
              variant="rectangular"
              width={600}
              height={200}
              sx={{ bgcolor: "grey.900" }}
            />
            <Skeleton
              variant="text"
              width={600}
              sx={{ fontSize: "1.5rem", bgcolor: "grey.900" }}
            />
            <Skeleton
              variant="text"
              width={300}
              sx={{ fontSize: "1.5rem", bgcolor: "grey.900" }}
            />
          </Stack>
        ))}
      </Box>
    </Container>
  );
};

export default TestinomialSkeleton;
