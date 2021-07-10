import React from "react";

function NotFound() {
  return (
    <div className="container py-5 my-5 text-center">
      <div className="display-4 pt-5 mt-4">
        <h1>
          <span className="text-danger"> Oops!</span>
          Page not found.
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
