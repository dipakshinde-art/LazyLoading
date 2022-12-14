import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

//skeleton for Ui to display
export const LoadingCard = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
};

// number of post to be load
export const LoadingPosts = () => {
  const loadPages = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {loadPages.map((num) => {
        return <LoadingCard />;
      })}
    </div>
  );
};
