import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function BlogSection() {
  const blogs = [
    {
      title: "Journey Are Best Measured In Friends",
      description:
        "Morbi consequuntur augue sapiente at diam nullam, aliquam earum integer dis ipsam nisi etiam laboris [...]",
      image: "src/assets/post-03.jpg", 
    },
    {
      title: "Best Life Is Go For A Beautiful Journey",
      description:
        "Morbi consequuntur augue sapiente at diam nullam, aliquam earum integer dis ipsam nisi etiam laboris [...]",
      image: "src/assets/post-02.jpg", 
    },
    {
      title: "Let's Escape From The Day To Day Activities",
      description:
        "Morbi consequuntur augue sapiente at diam nullam, aliquam earum integer dis ipsam nisi etiam laboris [...]",
      image: "src/assets/post-01.jpg", 
    },
  ];

  return (
    <Container sx={{ marginTop: "60px", textAlign: "center", marginBottom:"60px" }}>
      <Typography
        variant="overline"
        color="#FFC750"
        sx={{ fontWeight: "bold" }}
      >
        RECENT BLOGS
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Latest Blogs And Articles
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ marginBottom: "40px" }}
      >
        Quis ullam, ducimus nostrud sequi iste placeat dictumst, nec! Ante
        tincidunt nostra minima aliquip deleniti dui, tempora nunc.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {blogs.map((blog, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginBottom: "20px" }}
                >
                  {blog.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    color: "#FFC750",
                    fontWeight: "bold",
                  }}
                >
                  LEARN MORE..
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BlogSection;
