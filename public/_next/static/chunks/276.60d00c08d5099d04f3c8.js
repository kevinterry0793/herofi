"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [276],
    {
        34276: function (e, s, n) {
            n.r(s),
                n.d(s, {
                    default: function () {
                        return m;
                    },
                });
            var i = n(85893),
                a = (n(67294), n(71230)),
                t = n(15746),
                r = n(71577),
                l = n(93563),
                o = n.n(l),
                c = n(41664),
                h = n(33210),
                d = [
                    "Axe Keeper",
                    "Bellator",
                    "Boucher",
                    "Dragon Slayer",
                    "Explody",
                    "Fiera",
                    "Flame Assassin",
                    "Frost Mage",
                    "Gaio",
                    "Heaven Knight",
                    "Hellwolf",
                    "Infernum",
                    "Jupiter",
                    "King Mummy",
                    "Lava Knight",
                    "Little Devil",
                    "Mage Slayer",
                    "Mastodonte",
                    "Monkey King",
                    "Mune",
                    "Necro",
                    "Nyx Phantom",
                    "Phantom Slayer",
                    "poing",
                    "Queen Assasin",
                    "Robicheaux",
                    "Saw",
                    "Shadow Lord",
                    "Silent Arrow",
                    "Sky Conqueror",
                    "Soul Chaser",
                    "William",
                    "Wind Arrow",
                ];
            function m(e) {
                var s = e.size,
                    n = e.isScroll,
                    l = e.isAppleDevice,
                    m = 5,
                    p = 2;
                return (
                    s && s.width < 1400 && (m = 4),
                    s && s.width < 1200 && (m = 4),
                    s && s.height < 1800 && (p = 2),
                    s && s.height < 900 && (p = 1),
                    n || ((m = 4), s && s.width < 1200 && (m = 4), s && s.width < 1024 && (m = 4), s && s.width <= 1080 && (m = 3), s && s.width <= 992 && (m = 2)),
                    console.log("item: c" + m + " - r" + p),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            n &&
                                (0, i.jsxs)(a.Z, {
                                    span: 24,
                                    children: [
                                        (0, i.jsxs)(t.Z, {
                                            span: 16,
                                            children: [
                                                (0, i.jsx)("h2", { className: "section-title", children: "NFT Items" }),
                                                (0, i.jsx)("span", { className: "section-description", children: "Earn your NFT items and trade them on the marketplace to make money" }),
                                            ],
                                        }),
                                        (0, i.jsx)(t.Z, {
                                            span: 8,
                                            style: { textAlign: "right" },
                                            children: (0, i.jsx)(r.Z, { id: "BtnMarket", className: "btn-hero-small", onClick: h.Z, children: (0, i.jsx)(c.default, { href: "#", children: (0, i.jsx)("a", { children: "Marketplace" }) }) }),
                                        }),
                                    ],
                                }),
                            !n &&
                                (0, i.jsx)(a.Z, {
                                    span: 24,
                                    children: (0, i.jsx)(t.Z, {
                                        span: 24,
                                        children: (0, i.jsxs)("center", {
                                            children: [
                                                (0, i.jsx)("h2", { className: "section-title", children: "NFT Items" }),
                                                (0, i.jsx)("span", { className: "section-description", children: "Earn your NFT items and trade them on the marketplace to make money" }),
                                            ],
                                        }),
                                    }),
                                }),
                            (0, i.jsx)(a.Z, {
                                span: 24,
                                children: (0, i.jsx)(t.Z, {
                                    span: 24,
                                    className: "hero-item-wrapper",
                                    children: (0, i.jsxs)(o(), {
                                        cols: m,
                                        rows: p,
                                        gap: 0,
                                        loop: !0,
                                        showDots: !0,
                                        autoplay: 3e3,
                                        children: [
                                            !l &&
                                                d &&
                                                d.map(function (e, s) {
                                                    return (0,
                                                    i.jsx)(o().Item, { children: (0, i.jsxs)("div", { className: "hero-item", children: [(0, i.jsx)("img", { alt: "logo", src: "/assets/img/border.png" }), (0, i.jsx)("video", { playsInline: !0, autoPlay: !0, loop: !0, muted: !0, width: "100%", height: "auto", poster: "/assets/img/hero-thumb/".concat(e, "-min.jpg"), children: (0, i.jsx)("source", { src: "https://herofi.sgp1.cdn.digitaloceanspaces.com/heroes/".concat(e, ".webm"), type: "video/webm" }) })] }) }, s);
                                                }),
                                            l &&
                                                d &&
                                                d.map(function (e, s) {
                                                    return (0,
                                                    i.jsx)(o().Item, { children: (0, i.jsxs)("div", { className: "hero-item", children: [(0, i.jsx)("img", { alt: "logo", src: "/assets/img/border.png" }), (0, i.jsx)("video", { playsInline: !0, autoPlay: !0, loop: !0, muted: !0, width: "100%", height: "auto", poster: "/assets/img/hero-thumb/".concat(e, "-min.jpg"), children: (0, i.jsx)("source", { src: "https://herofi.sgp1.cdn.digitaloceanspaces.com/mobile/heroes/".concat(e, ".mp4"), type: "video/mp4" }) })] }) }, s);
                                                }),
                                        ],
                                    }),
                                }),
                            }),
                            (0, i.jsx)(a.Z, {
                                span: 24,
                                children: (0, i.jsx)(t.Z, {
                                    span: 24,
                                    children:
                                        !n &&
                                        (0, i.jsx)("center", {
                                            children: (0, i.jsx)(r.Z, {
                                                style: { marginTop: "24px" },
                                                className: "btn-hero-small",
                                                onClick: h.Z,
                                                children: (0, i.jsx)(c.default, { href: "#", children: (0, i.jsx)("a", { children: "Marketplace" }) }),
                                            }),
                                        }),
                                }),
                            }),
                        ],
                    })
                );
            }
        },
    },
]);
