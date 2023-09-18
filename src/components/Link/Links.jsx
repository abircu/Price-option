import React from "react";
import PropTypes from "prop-types";
function Links({ route }) {
  return (
    <div>
      <li className="mr-10 hover:bg-orange-300" key={route.id}>
        <a href={route.path}></a>
        {route.name}
      </li>
    </div>
  );
}
Links.proptypes = {
  route: PropTypes.object,
};

export default Links;
