import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLists, listSelectors } from "../redux/instructorSlice";
import SideBar from "./Sidebar/Sidebar";

function Tes() {
  // const dispatch = useDispatch();
  // const lists = useSelector((state) => state.list);

  // useEffect(() => {
  //   dispatch(getLists());
  // }, [dispatch]);

  return (
    <>
      {/* {lists.data?.map((list) => {
        <div key={list.id}>
          <h1 style={{ textAlign: "center" }}>{list.namaTempat}</h1>;
        </div>;
      })} */}
      <h1 style={{ textAlign: "center" }}>PPPP</h1>;
    </>
  );
}

export default Tes;
