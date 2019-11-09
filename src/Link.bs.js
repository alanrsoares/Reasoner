// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";

function Link(Props) {
  var path = Props.path;
  var className = Props.className;
  var children = Props.children;
  var onClick = React.useCallback((function (param) {
          return ReasonReactRouter.push(path);
        }), /* array */[path]);
  return React.createElement("a", {
              className: className,
              onClick: onClick
            }, children);
}

var make = Link;

export {
  make ,
  
}
/* react Not a pure module */
