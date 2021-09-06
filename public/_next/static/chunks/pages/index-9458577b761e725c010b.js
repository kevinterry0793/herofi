(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        33210: function (e, n, i) {
            "use strict";
            i.d(n, {
                Z: function () {
                    return a;
                },
            });
            var s = i(85893),
                t = i(11026),
                c = i(71577),
                l = i(73218),
                o = i(41664);
            function a() {
                t.Z.destroyAll(),
                    t.Z.info({
                        content: (0, s.jsxs)("div", {
                            children: [
                                (0, s.jsx)("p", { children: "This feature is coming soon" }),
                                (0, s.jsx)("p", { children: "Please join Herofi telegram group for the latest updates." }),
                                (0, s.jsx)("center", {
                                    children: (0, s.jsx)(c.Z, {
                                        className: "btn-hero-small",
                                        children: (0, s.jsx)(o.default, { href: "https://t.me/herofiann", children: (0, s.jsx)("a", { rel: "noreferrer", target: "_blank", children: "Telegram" }) }),
                                    }),
                                }),
                            ],
                        }),
                        onOk: function () {},
                        width: 600,
                        closeable: !0,
                        okText: (0, s.jsx)(l.Z, {}),
                        maskClosable: !0,
                        className: "modal-comming-soon",
                    });
            }
        },
        14982: function (e, n, i) {
            "use strict";
            i.d(n, {
                m: function () {
                    return c;
                },
                U: function () {
                    return t;
                },
            });
            var s = i(85893),
                t = [
                    { icon: (0, s.jsx)("img", { alt: "logo", width: 32, height: 32, src: "/assets/social/facebook.png" }), title: "Facebook", value: "https://www.facebook.com/herofiio" },
                    { icon: (0, s.jsx)("img", { alt: "logo", width: 32, height: 32, src: "/assets/social/twiter.png" }), title: "Twitter", value: "https://twitter.com/HeroFiio" },
                    { icon: (0, s.jsx)("img", { alt: "logo", width: 32, height: 32, src: "/assets/social/telegram.png" }), title: "Telegram", value: "https://t.me/herofiofficial" },
                    { icon: (0, s.jsx)("img", { alt: "logo", width: 32, height: 32, src: "/assets/social/telegram.png" }), title: "Telegram Channel", value: "https://t.me/herofiann" },
                    { icon: (0, s.jsx)("img", { alt: "logo", width: 32, height: 32, src: "/assets/social/youtube.png" }), title: "Youtube", value: "https://www.youtube.com/channel/UC7vCPoYKKQjEsRGtCJUja4Q" },
                ],
                c = [
                    { icon: (0, s.jsx)("img", { alt: "logo", width: 32, height: 32, src: "/assets/social/facebook.png" }), title: "Facebook", value: "https://www.facebook.com/herofiio" },
                    { icon: (0, s.jsx)("img", { alt: "logo", width: 32, height: 32, src: "/assets/social/twiter.png" }), title: "Twitter", value: "https://twitter.com/HeroFiio" },
                    { icon: (0, s.jsx)("img", { alt: "logo", width: 32, height: 32, src: "/assets/social/telegram.png" }), title: "Telegram", value: "https://t.me/herofiofficial" },
                    { icon: (0, s.jsx)("img", { alt: "logo", width: 32, height: 32, src: "/assets/social/youtube.png" }), title: "Youtube", value: "https://www.youtube.com/channel/UC7vCPoYKKQjEsRGtCJUja4Q" },
                ];
        },
        32194: function (e, n, i) {
            "use strict";
            i.r(n),
                i.d(n, {
                    default: function () {
                        return W;
                    },
                });
            var s = i(85893),
                t = i(92809),
                c = i(67294),
                l = i(97183),
                o = i(71230),
                a = i(15746),
                r = i(62113),
                d = i(71577),
                h = i(19181),
                u = i(41664),
                x = i(5152),
                p = i(42762),
                j = i(54549),
                m = i(73190),
                f = i(59359),
                Z = i(14982),
                g = i(18049),
                b = i(33210);
            function v(e) {
                var n = e.isAppleDevice;
                return (0, s.jsxs)("div", {
                    className: "loading-screen",
                    style: { display: "block", height: "100%", width: "100%", position: "absolute", textAlign: "center", zIndex: "99999", background: "#121212" },
                    children: [
                        !n &&
                            (0, s.jsxs)("video", {
                                playsInline: !0,
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                width: "100%",
                                height: "auto",
                                style: { width: "360px", height: "100%" },
                                children: [(0, s.jsx)("source", { src: "/coin.webm" }), " "],
                            }),
                        n && (0, s.jsx)("img", { alt: "loading", style: { width: "240px", display: "block", margin: "auto", marginTop: "36%" }, src: "/coin.gif" }),
                        (0, s.jsx)("img", { src: "/assets/img/popup.jpg", style: { display: "none" } }),
                    ],
                });
            }
            var w = i(11026),
                S = i(73218),
                k = i(3283),
                y = i.n(k),
                N = (i(9669), i(7277)),
                A = [
                    { name: "Diamond Hand Round", startBlock: 10679268, endBlock: 10679868, startTime: "13:00 UTC - 06/09/2021", endTime: "13:00 UTC - 06/09/2021" },
                    { name: "LZ Membership Round", startBlock: 10679868, endBlock: 10680468, startTime: "13:00 UTC - 06/09/2021", endTime: "14:00 UTC - 06/09/2021" },
                    { name: "IDO Whitelist Round", startBlock: 10681068, endBlock: 10681668, startTime: "14:30 UTC - 06/09/2021", endTime: "15:00 UTC - 06/09/2021" },
                ];
            var T = (function (e) {
                var n = e.toString().split(".");
                return (n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), n.join(".");
            })(A[0].startBlock);
            function C(e) {
                e.isAppleDevice;
                var n = (0, c.useState)(0),
                    i = n[0],
                    t = n[1],
                    l = new (y())();
                return (
                    l.setProvider(new l.providers.HttpProvider("https://bsc-dataseed.binance.org")),
                    (0, c.useEffect)(
                        function () {
                            var e = setInterval(function () {
                                l.eth.getBlockNumber().then(function (e) {
                                    t(e);
                                });
                            }, 3e3);
                            return function () {
                                setInterval(e);
                            };
                        },
                        [t, i]
                    ),
                    (0, s.jsxs)("div", {
                        className: "countdown",
                        children: [
                            (0, s.jsx)(o.Z, { span: 24, children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(N.Z, { title: "Current Blocks", value: i, suffix: " / ".concat(T) }) }) }),
                            (0, s.jsx)(o.Z, {
                                span: 24,
                                children:
                                    A &&
                                    A.map(function (e, n) {
                                        return (0,
                                        s.jsxs)(a.Z, { span: 8, xxl: 8, xl: 8, lg: 8, md: 8, sm: 24, xs: 24, ey: n, children: [(0, s.jsx)(N.Z, { title: e.name, value: e.startBlock }), (0, s.jsxs)("div", { className: "time", children: [(0, s.jsxs)("span", { children: ["Start time: ", e.startTime] }), (0, s.jsx)("br", {}), (0, s.jsxs)("span", { children: ["End time: ", e.endTime] })] })] });
                                    }),
                            }),
                        ],
                    })
                );
            }
            var D = (0, x.default)(
                    function () {
                        return Promise.all([i.e(833), i.e(749)]).then(i.bind(i, 96749));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [96749];
                            },
                            modules: ["index.jsx -> ../components/Footer"],
                        },
                    }
                ),
                z = (0, x.default)(
                    function () {
                        return i.e(560).then(i.bind(i, 18560));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [18560];
                            },
                            modules: ["index.jsx -> ../components/SectionMain"],
                        },
                    }
                ),
                I = (0, x.default)(
                    function () {
                        return i.e(994).then(i.bind(i, 90994));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [90994];
                            },
                            modules: ["index.jsx -> ../components/SectionIntro"],
                        },
                    }
                ),
                B = (0, x.default)(
                    function () {
                        return i.e(895).then(i.bind(i, 47895));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [47895];
                            },
                            modules: ["index.jsx -> ../components/SectionGameplay"],
                        },
                    }
                ),
                G = (0, x.default)(
                    function () {
                        return Promise.all([i.e(351), i.e(276)]).then(i.bind(i, 34276));
                    },
                    {
                        ssr: !1,
                        loadableGenerated: {
                            webpack: function () {
                                return [34276];
                            },
                            modules: ["index.jsx -> ../components/SectionItems"],
                        },
                    }
                ),
                P = (0, x.default)(
                    function () {
                        return i.e(753).then(i.bind(i, 5753));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [5753];
                            },
                            modules: ["index.jsx -> ../components/SectionDefiToken"],
                        },
                    }
                ),
                E = (0, x.default)(
                    function () {
                        return i.e(349).then(i.bind(i, 9349));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [9349];
                            },
                            modules: ["index.jsx -> ../components/SectionBackedBy"],
                        },
                    }
                ),
                _ = (0, x.default)(
                    function () {
                        return i.e(110).then(i.bind(i, 28110));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [28110];
                            },
                            modules: ["index.jsx -> ../components/SectionInvestor"],
                        },
                    }
                ),
                H = (0, x.default)(
                    function () {
                        return Promise.all([i.e(351), i.e(652)]).then(i.bind(i, 59652));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [59652];
                            },
                            modules: ["index.jsx -> ../components/SectionAdvisor"],
                        },
                    }
                ),
                O = (0, x.default)(
                    function () {
                        return i.e(347).then(i.bind(i, 36347));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [36347];
                            },
                            modules: ["index.jsx -> ../components/SectionAsSeenOn"],
                        },
                    }
                ),
                M = (0, x.default)(
                    function () {
                        return Promise.all([i.e(351), i.e(66), i.e(634)]).then(i.bind(i, 67634));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [67634];
                            },
                            modules: ["index.jsx -> ../components/SectionTeam"],
                        },
                    }
                ),
                U = (0, x.default)(
                    function () {
                        return i.e(925).then(i.bind(i, 77925));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [77925];
                            },
                            modules: ["index.jsx -> ../components/SectionRoadmap"],
                        },
                    }
                ),
                F = (0, x.default)(
                    function () {
                        return i.e(269).then(i.bind(i, 39269));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [39269];
                            },
                            modules: ["index.jsx -> ../components/TopAlert"],
                        },
                    }
                );
            window.location;
            function W(e) {
                var n,
                    i,
                    x = (0, c.useState)(null),
                    k = x[0],
                    y = x[1],
                    N = (0, c.useState)(null),
                    A = N[0],
                    T = N[1],
                    W = (0, c.useState)(!0),
                    R = W[0],
                    K = W[1],
                    Q = (0, c.useState)(!1),
                    Y = Q[0],
                    J = Q[1],
                    L = (0, c.useState)(!1),
                    X = L[0],
                    q = L[1],
                    V = (0, c.useState)((0, s.jsx)(p.Z, {})),
                    $ = V[0],
                    ee = V[1],
                    ne = (function () {
                        var e = (0, c.useState)({ width: void 0, height: void 0 }),
                            n = e[0],
                            i = e[1];
                        return (
                            (0, c.useEffect)(function () {
                                function e() {
                                    i({ width: window.innerWidth, height: window.innerHeight });
                                }
                                return (
                                    window.addEventListener("resize", e),
                                    e(),
                                    function () {
                                        return window.removeEventListener("resize", e);
                                    }
                                );
                            }, []),
                            n
                        );
                    })();
                (0, c.useEffect)(function () {
                    setTimeout(function () {
                        return K(!1);
                    }, 3e3);
                }, []),
                    (0, c.useEffect)(
                        function () {
                            Y ? ((document.body.style.overflow = "hidden"), ee((0, s.jsx)(j.Z, {}))) : ((document.body.style.overflow = "unset"), ee((0, s.jsx)(p.Z, {})));
                        },
                        [Y]
                    );
                var ie = ne.width >= 1100 && ne.height >= 700,
                    se = f.gn,
                    te = "";
                return (
                    ie || (te = "mini-screen"),
                    (0, s.jsxs)(l.Z, {
                        children: [
                            !R &&
                                (X ||
                                    ((function (e) {
                                        console.log(JSON.stringify(e));
                                        var n = e.width < 1024 ? 0.9 * e.width : 1024,
                                            i = (553 * n) / 1024;
                                        w.Z.destroyAll(),
                                            w.Z.info({
                                                content: (0, s.jsx)("div", { children: (0, s.jsx)(C, {}) }),
                                                onOk: function () {},
                                                centered: !0,
                                                width: n,
                                                height: i,
                                                closeable: !0,
                                                okText: (0, s.jsx)(S.Z, {}),
                                                maskClosable: !0,
                                                className: "modal-popup",
                                            });
                                    })(ne),
                                    q(!0)),
                                null),
                            R && (0, s.jsx)(v, { isAppleDevice: se }),
                            (0, s.jsxs)(l.Z.Content, {
                                className: "main-body ".concat(te),
                                children: [
                                    ie &&
                                        (0, s.jsxs)(g.Z, {
                                            pageOnChange: function (e) {
                                                y(e);
                                            },
                                            onBeforePageScroll: function (e) {
                                                console.log(e);
                                            },
                                            customPageNumber: k,
                                            children: [
                                                (0, s.jsxs)(o.Z, {
                                                    id: "SectionMain",
                                                    children: [
                                                        (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(F, {}) }),
                                                        (0, s.jsx)(l.Z.Header, {
                                                            className: "top-header",
                                                            children: (0, s.jsxs)(o.Z, {
                                                                span: 24,
                                                                children: [
                                                                    (0, s.jsxs)(a.Z, {
                                                                        span: 20,
                                                                        children: [
                                                                            (0, s.jsx)("div", { className: "logo", children: (0, s.jsx)("img", { alt: "logo", src: "/assets/img/menu-logo.png" }) }),
                                                                            (0, s.jsxs)(r.Z, {
                                                                                className: "nav-menu",
                                                                                onClick: function (e) {
                                                                                    T(e.key), "about" === e.key && y(5), "item" === e.key && y(3), "marketplace" === e.key && (0, b.Z)();
                                                                                },
                                                                                selectedKeys: [A],
                                                                                mode: "horizontal",
                                                                                children: [
                                                                                    (0, s.jsx)(r.Z.Item, { children: (0, s.jsx)(u.default, { href: "/", children: (0, s.jsx)("a", { children: "Home" }) }) }, "home"),
                                                                                    (0, s.jsx)(r.Z.Item, { children: (0, s.jsx)(u.default, { href: "#", children: (0, s.jsx)("a", { children: "About" }) }) }, "about"),
                                                                                    (0, s.jsx)(r.Z.Item, { children: (0, s.jsx)(u.default, { href: "#", children: (0, s.jsx)("a", { children: "Marketplace" }) }) }, "marketplace"),
                                                                                    (0, s.jsx)(r.Z.Item, { children: (0, s.jsx)(u.default, { href: "#", children: (0, s.jsx)("a", { children: "NFT Items" }) }) }, "item"),
                                                                                    (0, s.jsx)(
                                                                                        r.Z.Item,
                                                                                        { children: (0, s.jsx)(u.default, { href: "https://whitepaper.herofi.io", children: (0, s.jsx)("a", { children: "White Paper" }) }) },
                                                                                        "whitepaper"
                                                                                    ),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    (0, s.jsx)(a.Z, { span: 4, children: (0, s.jsx)(d.Z, { className: "btn-play", onClick: b.Z, children: "Marketplace" }) }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(z, { size: ne, isScroll: ie, isAppleDevice: se }) }),
                                                    ],
                                                }),
                                                (0, s.jsx)(o.Z, { id: "SectionIntro", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(I, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionGameplay", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(B, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, {
                                                    id: "SectionItems",
                                                    className: "section",
                                                    children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(G, ((n = { size: ne }), (0, t.Z)(n, "size", ne), (0, t.Z)(n, "isScroll", ie), (0, t.Z)(n, "isAppleDevice", se), n)) }),
                                                }),
                                                (0, s.jsx)(o.Z, { id: "SectionDefiToken", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(P, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionBackedBy", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(E, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionTeam", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(M, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionAdvisor", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(H, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionRoadmap", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(U, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionInvestor", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(_, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionAsSeenOn", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(O, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionFooter", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(D, {}) }) }),
                                            ],
                                        }),
                                    !ie &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsxs)(o.Z, {
                                                    id: "SectionMain",
                                                    children: [
                                                        (0, s.jsx)(l.Z.Header, {
                                                            className: "top-header mini-header",
                                                            children: (0, s.jsxs)(o.Z, {
                                                                span: 24,
                                                                children: [
                                                                    (0, s.jsx)(a.Z, { span: 16, children: (0, s.jsx)("div", { className: "logo", children: (0, s.jsx)("img", { src: "/assets/img/menu-logo.png" }) }) }),
                                                                    (0, s.jsxs)(a.Z, {
                                                                        span: 8,
                                                                        children: [
                                                                            !Y && (0, s.jsx)(d.Z, { id: "BtnConnectWallet", className: "btn-connect-wallet", onClick: b.Z, children: "Connect Wallet" }),
                                                                            (0, s.jsx)(d.Z, {
                                                                                id: "BurgerMenuSwitcher",
                                                                                type: "primary",
                                                                                icon: $,
                                                                                size: 16,
                                                                                onClick: function () {
                                                                                    J(!Y);
                                                                                },
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, s.jsx)("div", {
                                                            id: "BurgerMenu",
                                                            children: (0, s.jsxs)(m.slide, {
                                                                right: !0,
                                                                isOpen: Y,
                                                                disableOverlayClick: !0,
                                                                children: [
                                                                    (0, s.jsx)("div", { id: "BurgerMenuHeader" }),
                                                                    (0, s.jsxs)(r.Z, {
                                                                        style: { width: 256 },
                                                                        defaultSelectedKeys: ["1"],
                                                                        defaultOpenKeys: ["sub1"],
                                                                        onClick: function (e) {
                                                                            T(e.key), "marketplace" === e.key && (0, b.Z)(), J(!1);
                                                                        },
                                                                        children: [
                                                                            (0, s.jsx)(r.Z.Item, { children: (0, s.jsx)(u.default, { href: "/", children: (0, s.jsx)("a", { children: "Home" }) }) }, "home"),
                                                                            (0, s.jsx)(r.Z.Item, { children: (0, s.jsx)(u.default, { href: "#SectionBackedBy", children: (0, s.jsx)("a", { children: "About" }) }) }, "about"),
                                                                            (0, s.jsx)(r.Z.Item, { children: (0, s.jsx)(u.default, { href: "#", children: (0, s.jsx)("a", { children: "Marketplace" }) }) }, "marketplace"),
                                                                            (0, s.jsx)(r.Z.Item, { children: (0, s.jsx)(u.default, { href: "#SectionItems", children: (0, s.jsx)("a", { children: "NFT Items" }) }) }, "item"),
                                                                            (0, s.jsx)(
                                                                                r.Z.Item,
                                                                                { children: (0, s.jsx)(u.default, { href: "https://whitepaper.herofi.io", children: (0, s.jsx)("a", { children: "White Paper" }) }) },
                                                                                "whitepaper"
                                                                            ),
                                                                            (0, s.jsx)(
                                                                                r.Z.Item,
                                                                                {
                                                                                    style: { minHeight: "100px" },
                                                                                    children: (0, s.jsx)(d.Z, { id: "BtnConnectWalletMini", className: "btn-connect-wallet", onClick: b.Z, children: "Connect Wallet" }),
                                                                                },
                                                                                "btnWallet"
                                                                            ),
                                                                            (0, s.jsx)(r.Z.Item, { style: { minHeight: "100px" }, children: (0, s.jsx)(d.Z, { className: "btn-play", onClick: b.Z, children: "Marketplace" }) }, "btnPlay"),
                                                                        ],
                                                                    }),
                                                                    (0, s.jsx)("center", {
                                                                        children: (0, s.jsx)("div", {
                                                                            children:
                                                                                Z.m &&
                                                                                Z.m.map(function (e, n) {
                                                                                    return (0,
                                                                                    s.jsx)(h.Z, { placement: "bottom", content: e.title, children: (0, s.jsx)(d.Z, { type: "link", href: e.value, target: "_blank", children: e.icon }, n) }, n);
                                                                                }),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(z, { size: ne, isScroll: !0, isAppleDevice: se }) }),
                                                    ],
                                                }),
                                                (0, s.jsx)(o.Z, { id: "SectionIntro", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(I, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionGameplay", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(B, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, {
                                                    id: "SectionItems",
                                                    className: "section",
                                                    children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(G, ((i = { size: ne }), (0, t.Z)(i, "size", ne), (0, t.Z)(i, "isScroll", ie), (0, t.Z)(i, "isAppleDevice", se), i)) }),
                                                }),
                                                (0, s.jsx)(o.Z, { id: "SectionDefiToken", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(P, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionBackedBy", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(E, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionTeam", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(M, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionAdvisor", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(H, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionRoadmap", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(U, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionInvestor", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(_, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionAsSeenOn", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(O, { size: ne, isScroll: ie, isAppleDevice: se }) }) }),
                                                (0, s.jsx)(o.Z, { id: "SectionFooter", className: "section", children: (0, s.jsx)(a.Z, { span: 24, children: (0, s.jsx)(D, {}) }) }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    })
                );
            }
        },
        33685: function (e, n, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return i(32194);
                },
            ]);
        },
        46601: function () {},
        89214: function () {},
        71922: function () {},
        2363: function () {},
        27790: function () {},
        52361: function () {},
        94616: function () {},
    },
    function (e) {
        e.O(0, [774, 663, 389, 888, 179], function () {
            return (n = 33685), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    },
]);
