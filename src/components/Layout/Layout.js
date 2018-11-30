import React from "react";
import Xus from "../../hoc/Xus";
import classes from "./Layout.css";

const layout = props => (
  <Xus>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Xus>
);

export default layout;
