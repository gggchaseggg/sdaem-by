import React from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../Redux/Reducers/activePageReducer";
import axios from "axios";

export default function Main() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setActivePage(0));
  }, []);

  //"https://62c166972af60be89ec64660.mockapi.io/news/7"

  return (
    <>
      main Page
      <button
        onClick={() => {
          axios
            .get("https://62c166972af60be89ec64660.mockapi.io/news?title=11")
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        }}
      >
        get
      </button>
      <button
        onClick={() => {
          axios
            .post("https://62c166972af60be89ec64660.mockapi.io/news", {
              title: "test title",
            })
            .then((response) => console.log(response));
        }}
      >
        post
      </button>
    </>
  );
}
