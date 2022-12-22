import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLists, listSelectors } from "../../redux/instructorSlice";
import axios from "axios";

function NotFound() {
  // const dispatch = useDispatch();
  // //   const lists = useSelector((state) => state.list);
  // const lists = useSelector(listSelectors.selectAll);
  // useEffect(() => {
  //   dispatch(getLists());
  // }, [dispatch]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://13.213.47.36/instructor/course/get_all").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);
  return (
    <>
      <div>
        {/* {lists.data?.map((list) => {
          <h1 style={{ textAlign: "center" }}>{list.namaTempat}</h1>;
        })} */}
        {post.map((item, i) => {
          <div key={i}>
            <p>{item?.namaTempat}</p>
            <h1 style={{ textAlign: "center" }}>PPPP</h1>;
          </div>;
        })}
      </div>
    </>
  );
}

export default NotFound;
