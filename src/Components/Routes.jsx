import { 
  Outlet, 
  Link,
  useLoaderData
 } from "react-router-dom";
import PageFooter from "./PageFooter";
import '../stylings/marginBottom.css';
import { useState, useEffect } from "react";
import { rootLoader } from "../Functions/Data";
import NewBlogPage from "./NewBlogPage";
import Image from "./Image";

export default function Routes() {

  const allblogs = useLoaderData();
  const [blogs, setBlogs] = useState(allblogs);

  const fetchList = async () => {
    const aNewBlog = await rootLoader();     
    setBlogs( aNewBlog );
  };

  useEffect(() => {
    console.log(blogs)
  },[]);

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Driftly</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Topics
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {blogs.map(blog => (
                      <li key={blog.blogName}><Link className="dropdown-item" to={`blog/${blog.id}`}>{blog.blogName}</Link></li>
                  ) )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bottom-margin" id="detail">
        <Outlet />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <NewBlogPage 
              fetchList={fetchList} 
            />
          </div>
          <div className="col">
              <Image />
            </div>
        </div>
      </div>
      <div>
        <PageFooter />
      </div>
    </>
  );
  }

