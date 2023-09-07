import React from "react";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const BreadCrumbs = ({ breadcrumbs }) => {
  return (
    <div className="flex space-x-2 items-center">
      {breadcrumbs.map((breadcrumb, index) => {
        const { displayName, url, image } = breadcrumb;
        const isCurrentPage = index === breadcrumbs.length - 1;
        const opacityStyle = isCurrentPage ? 1 : 1;

        return (
          <React.Fragment key={url}>
            {index > 0 && (
              <span
                className="font-barlow font-semibold"
                style={{ opacity: opacityStyle }}
              >
                {">"}
              </span>
            )}

            {isCurrentPage ? (
              <span style={{ opacity: opacityStyle }}>{displayName}</span>
            ) : (
              <Link to={url} style={{ opacity: opacityStyle }} className="flex">
                {index === 0 ? (
                  // Use an <img> tag for the image link
                  <img
                    src={image}
                    alt={displayName}
                    style={{
                      horizontalAlign: "middle",
                      marginRight: "0px",
                    }}
                  />
                ) : (
                  " " + displayName
                )}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
