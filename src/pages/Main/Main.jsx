import React from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../Redux/Reducers/activePageReducer";
import axios from "axios";
import MainPageHeader from "../../components/MainPageHeader/MainPageHeader";

export default function Main() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setActivePage(0));
  }, []);

  return (
    <>
      <MainPageHeader />
    </>
  );
}
