import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import { IBreadCrumpProps } from "./breadCrump.type";

function handleClick(event) {
  //event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const BreadCrump: React.FC<IBreadCrumpProps> = ({ linkList, current }) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {linkList?.map((element) => (
          <Link underline="hover" color="inherit" href={element.link}>
            {element.name}
     </Link>
        ))}

        <Typography color="text.primary">{current}</Typography>
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrump;