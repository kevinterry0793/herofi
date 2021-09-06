"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [560],
    {
        18560: function (e, s, a) {
            a.r(s),
                a.d(s, {
                    default: function () {
                        return u;
                    },
                });
            var n = a(85893),
                i = a(67294),
                c = a(71230),
                l = a(15746),
                t = a(71577),
                r = a(19181),
                o = a(33210),
                d = a(14982),
                m = {
                    icon: {
                        tag: "svg",
                        attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
                        children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }],
                    },
                    name: "caret-down",
                    theme: "outlined",
                },
                p = a(30076),
                h = function (e, s) {
                    return i.createElement(p.Z, Object.assign({}, e, { ref: s, icon: m }));
                };
            h.displayName = "CaretDownOutlined";
            var g = i.forwardRef(h);
            function u(e) {
                var s = e.size,
                    a = e.isScroll,
                    i = (e.isAppleDevice, "100%"),
                    m = "auto";
                s && a && (1080 * s.width) / (1920 * s.height) <= 1 && ((m = "100%"), (i = "auto"));
                return (0, n.jsxs)("div", {
                    className: "main-wrapper",
                    children: [
                        (0, n.jsxs)("video", {
                            id: "MainBackground",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            poster: "/assets/img/thumbnail-trailer.jpg",
                            width: i,
                            height: m,
                            children: [
                                (0, n.jsx)("source", { src: "https://herofi.sgp1.cdn.digitaloceanspaces.com/main_bg.webm", type: "video/webm" }),
                                (0, n.jsx)("source", { src: "https://herofi.sgp1.cdn.digitaloceanspaces.com/mobile/main-bg.mp4", type: "video/mp4" }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: "main-content",
                            children: [
                                (0, n.jsx)(c.Z, { span: 24, children: (0, n.jsx)(l.Z, { span: 24, children: (0, n.jsx)("img", { alt: "logo", className: "main-logo", src: "/assets/img/main-logo.png" }) }) }),
                                (0, n.jsx)(c.Z, {
                                    span: 24,
                                    className: "main-slogan",
                                    children: (0, n.jsxs)(l.Z, {
                                        span: 24,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: "slogan-wrapper",
                                                children: [(0, n.jsx)("span", { className: "slogan-1", children: "Free to Play" }), (0, n.jsx)("span", { className: "slogan-2", children: "Play to earn" })],
                                            }),
                                            (0, n.jsx)(g, {}),
                                        ],
                                    }),
                                }),
                                (0, n.jsx)(c.Z, {
                                    span: 24,
                                    children: (0, n.jsx)(l.Z, {
                                        span: 24,
                                        children: (0, n.jsxs)("center", {
                                            children: [
                                                (0, n.jsx)(t.Z, { className: "btn-hero", onClick: o.Z, children: "PLAY" }),
                                                (0, n.jsx)("br", {}),
                                                (0, n.jsx)("div", {
                                                    className: "social",
                                                    children:
                                                        d.m &&
                                                        d.m.map(function (e, s) {
                                                            return (0, n.jsx)(r.Z, { placement: "bottom", content: e.title, children: (0, n.jsx)(t.Z, { type: "link", href: e.value, target: "_blank", children: e.icon }, s) }, s);
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            }
        },
    },
]);
