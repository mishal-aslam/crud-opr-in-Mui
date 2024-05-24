import { Button , Container, Typography} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogs = localStorage.getItem("blogs");
    setBlogs(JSON.parse(blogs));
  }, [blogs]);

  const handleDelete = (blogOutIndex) => {
    const _blogs = blogs.filter((blog, blogInIndex) => {
      if (blogInIndex !== blogOutIndex) {
        return blog;
      }
    });
    console.log(_blogs);
    setBlogs(_blogs);
    localStorage.setItem("blogs", JSON.stringify(_blogs));
  };

  const handleEdit = (blogIndex) => {
    localStorage.setItem("editIndex", blogIndex);
    navigate("/edit");
  };

  return (
    <>
      <Container
      maxWidth="lg"
      sx={{
        bgcolor: "#f5f5f5",
        padding: "20px",
        marginTop: "40px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      }}
    >

      <br />
      <Button
      sx={{fontWeight: "bold"}}
        onClick={() => {
          navigate("/add");
        }}
        variant="contained"
      >
        ADD User
      </Button>
      <br />
      <br />
      <br />
      <div style={{ borderBottom: "1px solid #eee", margin: "10px 0px" }}>
        <span
          style={{
            display: "inline-block",
            minWidth: "200px",
          }}
        >
          <b>Name</b>
        </span>
        <span
          style={{
            display: "inline-block",
            minWidth: "280px",
          }}
        >
          <b>Age</b>
        </span>
        <span
          style={{
            display: "inline-block",
            minWidth: "280px",
          }}
        >
          <b>Number</b>
        </span>
        <span
          style={{
            display: "inline-block",
            minWidth: "280px",
          }}
        >
          <b>City</b>
        </span>
      </div>
      {blogs && blogs.length > 0
        ? blogs.map((blog, blogIndex) => {
            return (
              <div
                style={{ borderBottom: "1px solid #eee", margin: "10px 0px" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    minWidth: "200px",
                  }}
                >
                  {blog?.name}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    minWidth: "280px",
                  }}
                >
                  {blog?.age}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    minWidth: "280px",
                  }}
                >
                  {blog?.number}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    minWidth: "280px",
                  }}
                >
                  {blog?.city}
                </span>
                <EditIcon
                  style={{ color: "blue", minWidth: "50px" }}
                  onClick={() => handleEdit(blogIndex)}
                ></EditIcon>
                <DeleteIcon
                  style={{ color: "red" }}
                  onClick={() => handleDelete(blogIndex)}
                ></DeleteIcon>
              </div>
            );
          })
        :  <Typography sx={{fontWeight: "bold", display: "flex", justifyContent: "center" , marginTop: "40px"}}>No Data found</Typography>}
    </Container>

    </>
  );
}

export default Home;
