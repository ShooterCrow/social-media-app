import { Box, Grid, Skeleton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProfilePost from "./ProfilePost"

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000);
    }
  }, [])
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)"
      }}
      gap={1}
      columnGap={1}>
        {isLoading ? 
        [0,1,2,3,4,5,6,7,8,9].map((x, id) => (
          <Box key={id}>
            <Skeleton>
              <Box h={"300px"}>Content</Box>
            </Skeleton>
          </Box>
        ))
         : ["/1.jpg","/2.jpg","/3.jpg","/4.jpg","/5.jpg","/6.jpg","/7.jpg"].map((post, id) => (
          <Box key={id}>
            <ProfilePost image={post}/>
          </Box>
         ))}
    </Grid>
  )
}

export default ProfilePosts
