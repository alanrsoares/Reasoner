// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Theme$Reasoner from "./Theme.bs.js";
import * as Utils$Reasoner from "./Utils.bs.js";

var container = Css.style(/* :: */[
      Css.flex(/* `num */[
            5496390,
            1.0
          ]),
      /* :: */[
        Css.border(Theme$Reasoner.borderWidth, /* solid */12956715, Theme$Reasoner.Colors.error),
        /* [] */0
      ]
    ]);

var title = Css.style(/* :: */[
      Css.fontSize(Css.rem(2)),
      /* :: */[
        Css.verticalAlign(/* middle */-866200747),
        /* [] */0
      ]
    ]);

var button = Css.style(/* :: */[
      Css.border(Theme$Reasoner.borderWidth, /* solid */12956715, Theme$Reasoner.Colors.accent),
      /* :: */[
        Css.borderRadius(/* `percent */[
              -119887163,
              50.0
            ]),
        /* :: */[
          Css.width(Css.rem(4)),
          /* :: */[
            Css.height(Css.rem(4)),
            /* :: */[
              Css.display(/* flex */-1010954439),
              /* :: */[
                Css.justifyContent(/* center */98248149),
                /* :: */[
                  Css.alignItems(/* center */98248149),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var screen = Css.style(/* :: */[
      Css.border(Theme$Reasoner.borderWidth, /* solid */12956715, Theme$Reasoner.Colors.accent),
      /* :: */[
        Css.padding(Css.rem(1)),
        /* [] */0
      ]
    ]);

var controls = Css.style(/* :: */[
      Css.border(Theme$Reasoner.borderWidth, /* solid */12956715, Theme$Reasoner.Colors.accent),
      /* :: */[
        Css.padding(Css.rem(1)),
        /* :: */[
          Css.display(/* flex */-1010954439),
          /* :: */[
            Css.flexWrap(/* wrap */-822134326),
            /* :: */[
              Css.flexDirection(/* column */-963948842),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var row = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(/* spaceEvenly */-1016061555),
        /* :: */[
          Css.padding(Css.rem(0.5)),
          /* [] */0
        ]
      ]
    ]);

var Styles = {
  container: container,
  title: title,
  button: button,
  screen: screen,
  controls: controls,
  row: row
};

function Reasoner$Display(Props) {
  return React.createElement("div", {
              className: screen
            }, Utils$Reasoner.str("display"));
}

var Display = {
  make: Reasoner$Display
};

function Reasoner$Button(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: button
            }, Utils$Reasoner.str(children));
}

var Button = {
  make: Reasoner$Button
};

function Reasoner$Row(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: row
            }, children);
}

var Row = {
  make: Reasoner$Row
};

function Reasoner$Controls(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: controls
            }, children);
}

var Controls = {
  make: Reasoner$Controls
};

var rows = /* array */[
  /* array */[
    7,
    8,
    9
  ],
  /* array */[
    4,
    5,
    6
  ],
  /* array */[
    1,
    2,
    3
  ],
  /* array */[0]
];

function Reasoner(Props) {
  return React.createElement("div", {
              className: container
            }, React.createElement("h1", {
                  className: title
                }, Utils$Reasoner.str("Reasoner")), React.createElement(Reasoner$Display, { }), React.createElement(Reasoner$Controls, {
                  children: Utils$Reasoner.arr(Belt_Array.mapWithIndex(rows, (function (i, row) {
                              return React.createElement(Reasoner$Row, {
                                          children: Utils$Reasoner.arr(Belt_Array.map(row, (function (n) {
                                                      return React.createElement(Reasoner$Button, {
                                                                  children: String(n),
                                                                  key: String(n)
                                                                });
                                                    }))),
                                          key: String(i)
                                        });
                            })))
                }));
}

var make = Reasoner;

export {
  Styles ,
  Display ,
  Button ,
  Row ,
  Controls ,
  rows ,
  make ,
  
}
/* container Not a pure module */
