import React from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../Redux/redux-reducers/activePageReducer";

export default function Main() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setActivePage(0));
  }, []);

  return <>main Page</>;
}
