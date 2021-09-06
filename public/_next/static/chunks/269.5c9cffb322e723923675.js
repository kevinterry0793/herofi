"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [269],
    {
        39269: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return o;
                    },
                });
            var r = n(85893),
                a = n(92809),
                s = n(71577),
                c = n(67294),
                i = n(54549),
                l = n(41664);
            function o(e) {
                e.isAppleDevice;
                var t = (0, c.useState)(!0),
                    n = t[0],
                    o = t[1],
                    d = "herofiann",
                    f = "herofiofficial",
                    h = "HeroFiio";
                return (0, r.jsx)(r.Fragment, {
                    children:
                        n &&
                        (0, r.jsxs)("div", {
                            className: "top-alert",
                            style: { zIndex: 1e3, position: "relative", background: "#984b00", fontFamilyL: "Gudea", color: "#fff8e8", fontSize: "16px", textAlign: "center", padding: "6px" },
                            children: [
                                (0, r.jsxs)("span", {
                                    children: [
                                        "Official HERO contract address ",
                                        (0, r.jsx)(l.default, {
                                            href: "https://bscscan.com/token/0xcfBb1BfA710cb2ebA070CC3beC0C35226FeA4BAF",
                                            children: (0, r.jsx)("a", { target: "_blank", children: "0xcfBb1BfA710cb2ebA070CC3beC0C35226FeA4BAF" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsxs)("span", {
                                    children: [
                                        "Official telegram:",
                                        (0, r.jsx)(l.default, { href: "https://t.me/".concat(d), children: (0, r.jsxs)("a", { target: "_blank", children: ["@", d] }) }),
                                        " &",
                                        (0, r.jsx)(l.default, { href: "https://t.me/".concat(f), children: (0, r.jsxs)("a", { target: "_blank", children: ["@", f] }) }),
                                        ", twitter:",
                                        (0, r.jsx)(l.default, { href: "https://twitter.com//".concat(h), children: (0, r.jsxs)("a", { target: "_blank", children: ["@", h] }) }),
                                        ". Other contract addresses are not associated and scams.",
                                    ],
                                }),
                                (0, r.jsx)(s.Z, {
                                    style: (0, a.Z)({ position: "absolute", right: "0px", top: "0px", background: "#984b00", border: "none", boxShadow: "none", height: "100%" }, "right", "50px"),
                                    type: "primary",
                                    icon: (0, r.jsx)(i.Z, {}),
                                    size: "large",
                                    onClick: function () {
                                        return o(!1);
                                    },
                                }),
                            ],
                        }),
                });
            }
        },
    },
]);
