(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9831],
  {
    52336: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 56828)),
        Promise.resolve().then(n.bind(n, 77535)),
        Promise.resolve().then(n.bind(n, 97914)),
        Promise.resolve().then(n.bind(n, 64741));
    },
    16761: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var r = n(64719);
      function a() {
        return r.walletStore.evm;
      }
    },
    98876: function (e, t, n) {
      "use strict";
      n.d(t, {
        $o: function () {
          return s;
        },
        Zb: function () {
          return h;
        },
        aY: function () {
          return g;
        },
        tZ: function () {
          return o;
        },
      });
      var r = n(27573),
        a = n(19879),
        i = n(24069);
      let s = 267,
        o = 158,
        l = (0, a.zo)("div", { name: "Card" })((e) => {
          let { theme: t } = e;
          return {
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: s,
            minWidth: s,
            height: o,
            background: t.palette.background.paper,
            border: "1px solid transparent",
            borderRadius: t.shape.borderRadius,
            position: "relative",
            overflow: "hidden",
          };
        }),
        d = (0, a.zo)(l, { name: "Card" })((e) => {
          let { theme: t } = e;
          return {
            cursor: "pointer",
            [t.breakpoints.up("md")]: {
              transition: i.fV,
              "&:hover": {
                borderColor: t.palette.text.disabled,
                background: t.palette.background.field,
              },
            },
          };
        }).withComponent("button"),
        c = (0, a.zo)("div", { name: "Card--row" })(() => ({
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        })),
        u = (0, a.zo)("div", { name: "Card--slot" })((e) => {
          let { rightAligned: t } = e;
          return {
            display: "flex",
            flexDirection: "column",
            alignItems: t ? "flex-end" : "flex-start",
          };
        }),
        p = (0, a.zo)("div", { name: "Card--banner" })((e) => {
          let { theme: t, variant: n } = e;
          return {
            ...t.typography.p3,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            minHeight: 52,
            display: "flex",
            padding: "10px 16px 16px",
            textAlign: "left",
            gap: 8,
            background: "transparent",
            ...("success" === n && {
              background: t.palette.success.main,
              color: t.palette.success.contrastText,
            }),
          };
        }),
        h = (e) => {
          let { asButton: t = !0 } = e,
            n = t ? d : l;
          return (0, r.jsx)(n, { children: (0, r.jsx)(g, { ...e }) });
        },
        g = (e) => {
          let {
            topLeft: t,
            topRight: n,
            middleLeft: a,
            middleRight: i,
            bottomLeft: s,
            bottomRight: o,
            banner: l,
            bannerVariant: d = "success",
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(c, {
                sx: { mb: 1 },
                children: [
                  (0, r.jsx)(u, { children: t }),
                  n && (0, r.jsx)(u, { rightAligned: !0, children: n }),
                ],
              }),
              (0, r.jsxs)(c, {
                sx: { mb: 1 },
                children: [
                  (0, r.jsx)(u, { children: a }),
                  i && (0, r.jsx)(u, { rightAligned: !0, children: i }),
                ],
              }),
              l
                ? (0, r.jsx)(p, { variant: d, children: l })
                : (0, r.jsxs)(c, {
                    sx: { mt: "auto" },
                    children: [
                      (0, r.jsx)(u, { children: s }),
                      o && (0, r.jsx)(u, { rightAligned: !0, children: o }),
                    ],
                  }),
            ],
          });
        },
        x = (0, a.zo)("div", { name: "Card--value" })((e) => {
          let { theme: t, small: n } = e;
          return {
            ...t.typography.h3,
            color: t.palette.text.primary,
            marginBottom: "2px",
            ...(n && { ...t.typography.p1 }),
          };
        }),
        m = (0, a.zo)("div", { name: "Card--label" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p3,
            color: t.palette.text.secondary,
            marginBottom: "1px",
          };
        });
      (h.Value = x), (h.Label = m);
    },
    35614: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return v;
        },
      });
      var r = n(27573),
        a = n(60297),
        i = n.n(a),
        s = n(19902),
        o = n(7653),
        l = n(93944),
        d = n(97428),
        c = n(98876),
        u = n(5221),
        p = n(86391),
        h = n(19879);
      let g = (0, h.zo)("div", { name: "CardsGrid" })((e) => {
          let { theme: t } = e;
          return {
            display: "flex",
            gap: 12,
            maxWidth: "100vw",
            overflow: "auto",
            marginLeft: -20,
            marginRight: -20,
            paddingRight: 20,
            paddingLeft: 20,
            "&::-webkit-scrollbar": { display: "none" },
            [t.breakpoints.up("sm")]: {
              display: "grid",
              gap: 12,
              gridTemplateColumns: "repeat(4, 1fr)",
              marginRight: 0,
              marginLeft: 0,
              paddingRight: 0,
              paddingLeft: 0,
            },
          };
        }),
        x = (0, h.zo)("div", { name: "CardsGrid-Pagination" })((e) => {
          let { theme: t } = e;
          return {
            marginTop: 18,
            marginLeft: "auto",
            display: "none",
            [t.breakpoints.up("sm")]: {
              display: "flex",
              justifyContent: "flex-end",
            },
          };
        }),
        m = (0, h.zo)("div", { name: "CardsGrid-CardPlaceholder" })((e) => {
          let { theme: t } = e;
          return {
            border: "1px dashed ".concat(t.palette.text.primary),
            minHeight: c.tZ,
            minWidth: c.$o,
            borderRadius: t.shape.borderRadius,
            background: t.palette.divider,
            opacity: 0.2,
          };
        }),
        y = (0, h.zo)("div", { name: "CardsGrid-EmptyStateCard" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p3,
            color: t.palette.text.secondary,
            width: "100%",
            minHeight: 166,
            border: "1px dashed ".concat(
              (0, d.fW)(t.palette.text.primary, 0.2)
            ),
            borderRadius: t.shape.borderRadius,
            background: "".concat((0, d.fW)(t.palette.divider, 0.2)),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          };
        }),
        v = (0, s.Pi)((e) => {
          let t = (0, h.Fg)(),
            n = (0, l.a)(t.breakpoints.down("md"), !1),
            {
              children: a,
              withPagination: s,
              withPlaceholders: d,
              noDataPlaceholder: c = "No data",
              isLoading: v,
            } = e,
            j = o.Children.toArray(a),
            {
              pageItems: b,
              currentPage: f,
              onNextPage: P,
              onPrevPage: Z,
              totalPagesCount: k,
              onGoToPage: w,
            } = (0, p.h)(j, 8);
          (0, o.useEffect)(() => {
            w(1);
          }, [a]);
          let S = d ? i()(0, Math.max(4 - (b ? b.length : 0), 0)) : [];
          return v
            ? (0, r.jsx)(y, {
                children: (0, r.jsx)(u.J, {
                  type: "spinner",
                  size: 32,
                  sx: { mb: 4, color: "text.secondary" },
                }),
              })
            : 0 === j.length
            ? (0, r.jsx)(y, { children: c })
            : !s || n
            ? (0, r.jsxs)(g, {
                children: [j, S.map((e) => (0, r.jsx)(m, {}, e))],
              })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(g, {
                    children: [b, S.map((e) => (0, r.jsx)(m, {}, e))],
                  }),
                  k > 1 &&
                    (0, r.jsx)(x, {
                      children: (0, r.jsx)(p.t, {
                        currentPage: f,
                        onNextPage: P,
                        onPrevPage: Z,
                        totalPagesCount: k,
                      }),
                    }),
                ],
              });
        });
    },
    63718: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return p;
        },
      });
      var r = n(27573),
        a = n(19879);
      let i = (0, a.F4)({
          from: { transform: "translateY(-10px)", opacity: 0 },
          to: { transform: "translateY(0px)", opacity: 1 },
        }),
        s = (0, a.zo)("div", { name: "PageTitleContainer" })(() => ({
          marginTop: 64,
          marginBottom: 48,
        })),
        o = (0, a.zo)("h1", { name: "PageTitle" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.h1,
            color: t.palette.text.primary,
            animation: "".concat(i, " 400ms ease-out"),
          };
        }),
        l = (0, a.F4)({ from: { opacity: 0 }, to: { opacity: 1 } }),
        d = (0, a.zo)("div", { name: "PageTitleSub" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p1,
            color: t.palette.text.secondary,
            marginTop: 24,
            animation: "".concat(l, " 300ms ease"),
            opacity: 0,
            animationDelay: "400ms",
            animationFillMode: "forwards",
          };
        }),
        c = (0, a.zo)("span", { name: "PageTitleAccent" })((e) => {
          let { theme: t } = e;
          return { color: t.palette.success.main };
        }),
        u = (0, a.zo)("span", { name: "PageTitleSecondary" })((e) => {
          let { theme: t } = e;
          return { color: t.palette.text.secondary };
        }),
        p = (e) => {
          let { children: t, sx: n, sub: a } = e;
          return (0, r.jsxs)(s, {
            sx: n,
            children: [
              (0, r.jsx)(o, { children: t }),
              a && (0, r.jsx)(d, { children: a }),
            ],
          });
        };
      (p.Accent = c), (p.Secondary = u);
    },
    25712: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return o;
        },
      });
      var r = n(27573),
        a = n(93944),
        i = n(54105),
        s = n(55843);
      let o = (e) =>
        (0, a.d)() ? (0, r.jsx)(i.P, { ...e }) : (0, r.jsx)(s.Q, { ...e });
    },
    28928: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return o;
        },
      });
      var r = n(27573),
        a = n(19879);
      let i = (0, a.zo)("div", { name: "FiltersBar-Root" })((e) => {
          let { theme: t } = e;
          return {
            background: t.palette.background.paper,
            borderRadius: 12,
            padding: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            minHeight: 56,
          };
        }),
        s = (0, a.zo)("div", { name: "FiltersBar-Side" })(() => ({
          display: "flex",
        })),
        o = (e) => {
          let { children: t, sx: n } = e;
          return (0, r.jsx)(i, { sx: n, children: t });
        };
      (o.Left = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(s, { children: t });
      }),
        (o.Right = (e) => {
          let { children: t } = e;
          return (0, r.jsx)(s, { children: t });
        });
    },
    57403: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return a;
        },
      });
      var r = n(46860);
      function a(e) {
        if (void 0 === e) return "-";
        let t = r.WI.getFiatAmount(e);
        return void 0 === t ? "-" : t.value.toLocaleString("en-US", i);
      }
      let i = {
        currency: "USD",
        style: "currency",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      };
    },
    77248: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return S;
        },
      });
      var r = n(8590),
        a = n(65720),
        i = n(41270),
        s = n(23974);
      let o = i.ZP.string().nonempty(),
        l = (e) => /^[+-]?\d+(\.\d+)?$/.test(e),
        d = i.ZP.string().refine((e) => l(e) || "Infinity" === e, {
          message: "Is not a numeric string",
        }),
        c = a.Z.create({
          baseURL: "".concat(s.O.NEXT_PUBLIC_STARGATE_API_URL, "/v1"),
        }),
        u = i.ZP.object({ sort: i.ZP.string() }),
        p = i.ZP.object({
          data: i.ZP.object({
            tvlUsd: i.ZP.record(o, d),
            totalVolumeUsd: i.ZP.record(o, d),
            totalTransactionCount: i.ZP.record(o, d),
          }),
        }),
        h = i.ZP.object({
          data: i.ZP.object({
            tvlUsd: d,
            tvlUsd24h: d,
            totalVolumeUsd24h: d,
            totalVolumeUsd48h: d,
            totalTransactionCount24h: d,
            totalTransactionCount48h: d,
          }),
        }),
        g = i.ZP.object({
          data: i.ZP.array(
            i.ZP.object({
              stargateVersion: i.ZP.string(),
              id: i.ZP.string(),
              chainKey: i.ZP.string(),
              address: i.ZP.string(),
              tvlUsd: d,
              inboundVolume1dUsd: d,
              inboundVolume7dUsd: d,
              apr: d.nullish(),
              apy: d.nullish(),
            })
          ),
        }),
        x = i.ZP.object({
          sort: i.ZP.string(),
          chainKey: i.ZP.string(),
          address: i.ZP.string(),
        }),
        m = i.ZP.object({
          data: i.ZP.object({
            tvlUsd: i.ZP.record(o, d),
            inboundVolumeUsd: i.ZP.record(o, d),
            inboundTransactionCount: i.ZP.record(o, d),
          }),
        }),
        y = i.ZP.object({ chainKey: i.ZP.string(), address: i.ZP.string() }),
        v = i.ZP.object({
          data: i.ZP.object({
            tvlUsd: d,
            tvlUsd24h: d,
            inboundVolumeUsd24h: d,
            inboundVolumeUsd48h: d,
            inboundTransactionCount24h: d,
            inboundTransactionCount48h: d,
          }),
        }),
        j = i.ZP.object({
          srcSymbol: i.ZP.string().optional(),
          srcPool: i.ZP.string().optional(),
          srcChainKey: i.ZP.string().optional(),
          dstSymbol: i.ZP.string().optional(),
          dstPool: i.ZP.string().optional(),
          dstChainKey: i.ZP.string().optional(),
          after: i.ZP.string().datetime().optional(),
          size: i.ZP.number().optional(),
        }),
        b = i.ZP.object({
          data: i.ZP.array(
            i.ZP.object({
              srcChainKey: i.ZP.string(),
              dstChainKey: i.ZP.string(),
              srcToken: i.ZP.string(),
              srcSymbol: i.ZP.string(),
              dstToken: i.ZP.string(),
              dstSymbol: i.ZP.string(),
              srcPool: i.ZP.string(),
              dstPool: i.ZP.string(),
              srcAmount: i.ZP.string(),
              usdValue: i.ZP.string(),
              srcAddress: i.ZP.string(),
              srcTxHash: i.ZP.string(),
              srcTxTimestamp: i.ZP.number(),
              mode: i.ZP.string(),
            })
          ),
        }),
        f = i.ZP.object({
          srcAddress: i.ZP.string(),
          start: i.ZP.string().datetime(),
          end: i.ZP.string().datetime(),
          srcChainKey: i.ZP.array(i.ZP.string()).optional(),
          dstChainKey: i.ZP.array(i.ZP.string()).optional(),
          srcPool: i.ZP.array(i.ZP.string()).optional(),
          dstPool: i.ZP.array(i.ZP.string()).optional(),
          srcToken: i.ZP.array(i.ZP.string()).optional(),
          dstToken: i.ZP.array(i.ZP.string()).optional(),
          after: i.ZP.string().datetime().optional(),
          size: i.ZP.number().optional(),
        }),
        P = i.ZP.object({ data: i.ZP.object({ usd: d, count: d }) }),
        Z = i.ZP.object({
          data: i.ZP.array(
            i.ZP.object({
              id: i.ZP.string(),
              chainKey: i.ZP.string(),
              address: i.ZP.string(),
              apr: d.nullish(),
              apy: d.nullish(),
            })
          ),
        });
      function k() {
        return {
          input: (e) => ({
            output: (e) => ({
              query: (t) => async (n) => {
                let r = await t({ input: n });
                return e.parse(r);
              },
            }),
          }),
        };
      }
      let w = i.ZP.object({
          price: i.ZP.record(i.ZP.string(), i.ZP.number().nullable()),
          address: i.ZP.string().optional(),
          decimals: i.ZP.number(),
          chainKey: i.ZP.string(),
          name: i.ZP.string().optional(),
          icon: i.ZP.string().optional(),
          symbol: i.ZP.string(),
        }),
        S = {
          tokens: k()
            .input(i.ZP.object({}))
            .output(w.array())
            .query(async () => (await a.Z.get("/api/tokens")).data),
          overview: {
            aggregated: {
              historical: k()
                .input(u)
                .output(p)
                .query(async (e) => {
                  let { input: t } = e;
                  return (
                    await c.get("/overview/aggregated/historical", {
                      params: t,
                    })
                  ).data;
                }),
              live: k()
                .input(i.ZP.object({}))
                .output(h)
                .query(
                  async () => (await c.get("/overview/aggregated/live")).data
                ),
            },
            pool: {
              all: k()
                .input(i.ZP.object({}))
                .output(g)
                .query(async (e) => {
                  let { input: t } = e;
                  return (await c.get("/overview/pools", { params: t })).data;
                }),
              historical: k()
                .input(x)
                .output(m)
                .query(async (e) => {
                  var t;
                  let {
                    input: { chainKey: n, address: r, sort: a },
                  } = e;
                  return null ===
                    (t = await c.get(
                      "/overview/pool/".concat(n, "/").concat(r, "/historical"),
                      { params: { sort: a } }
                    )) || void 0 === t
                    ? void 0
                    : t.data;
                }),
              live: k()
                .input(y)
                .output(v)
                .query(async (e) => {
                  var t;
                  let {
                    input: { chainKey: n, address: r },
                  } = e;
                  return null ===
                    (t = await c.get(
                      "/overview/pool/".concat(n, "/").concat(r, "/live")
                    )) || void 0 === t
                    ? void 0
                    : t.data;
                }),
            },
            transfers: {
              all: k()
                .input(j)
                .output(b)
                .query(async (e) => {
                  var t;
                  let { input: n } = e;
                  return null ===
                    (t = await c.get("/overview/transfers", { params: n })) ||
                    void 0 === t
                    ? void 0
                    : t.data;
                }),
              volume: k()
                .input(f)
                .output(P)
                .query(async (e) => {
                  var t;
                  let { input: n } = e;
                  return null ===
                    (t = await c.get("/overview/transfers/volume", {
                      params: n,
                    })) || void 0 === t
                    ? void 0
                    : t.data;
                }),
            },
            farm: {
              all: k()
                .input(i.ZP.object({}))
                .output(Z)
                .query(async (e) => {
                  var t;
                  let { input: n } = e;
                  return null ===
                    (t = await c.get("/overview/farms", { params: n })) ||
                    void 0 === t
                    ? void 0
                    : t.data;
                }),
            },
            stake: k()
              .input(i.ZP.object({}))
              .output(
                i.ZP.object({
                  totalStgLocked: r.k1,
                  totalVeStgSupply: r.k1,
                  totalStgLockedRatio: i.ZP.string().transform((e) => {
                    let t = (0, r.vz)(e, 18);
                    return new r.gG(t, 1e18);
                  }),
                  globalAverageLockTime: i.ZP.number().positive(),
                })
              )
              .query(async () => {
                let { data: e } = await a.Z.get("/api/stake/overview");
                return e;
              }),
          },
        };
    },
    64741: function (e, t, n) {
      "use strict";
      n.d(t, {
        StakesPage: function () {
          return eo;
        },
      });
      var r = n(27573),
        a = n(19902),
        i = n(84231),
        s = n(80762),
        o = n(63718),
        l = n(19879),
        d = n(81597),
        c = n(99080),
        u = n(5221),
        p = n(99770),
        h = n(5068),
        g = n(77248),
        x = n(5759);
      let m = (0, l.zo)("div", { name: "OverviewCard--wrapper" })((e) => {
          let { theme: t } = e;
          return {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "16px 16px 8px",
            background: t.palette.background.paper,
            border: "1px solid transparent",
            borderRadius: t.shape.borderRadius,
            justifyContent: "space-between",
          };
        }),
        y = (0, l.zo)("div", { name: "OverviewCard--content" })(() => ({
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          textAlign: "left",
        })),
        v = (e) => {
          let {
            topLeft: t,
            topRight: n,
            bottomLeft: a,
            bottomRight: i,
            sx: s,
          } = e;
          return (0, r.jsxs)(m, {
            sx: s,
            children: [
              (0, r.jsxs)(y, {
                sx: { marginBottom: "8px" },
                children: [
                  (0, r.jsx)(l.xu, { children: t }),
                  (0, r.jsx)(l.xu, { children: n }),
                ],
              }),
              (0, r.jsxs)(y, {
                children: [
                  (0, r.jsx)(l.xu, { children: a }),
                  (0, r.jsx)(l.xu, { sx: { textAlign: "right" }, children: i }),
                ],
              }),
            ],
          });
        },
        j = (0, l.zo)(l.xu, { name: "StakesOverview--grid" })((e) => {
          let { theme: t } = e;
          return {
            width: "100%",
            display: "grid",
            gap: "16px",
            marginBottom: 60,
            [t.breakpoints.up("md")]: {
              gridTemplateRows: "97px 97px",
              gridTemplateColumns: "322px 210px 1fr",
            },
          };
        }),
        b = (0, l.zo)(l.xu, { name: "StakesOverview--gridRightContent" })(
          (e) => {
            let { theme: t } = e;
            return {
              [t.breakpoints.up("md")]: {
                gridRow: "1 / 3",
                gridColumn: 3,
                marginLeft: 16,
              },
            };
          }
        ),
        f = (0, l.zo)("span", { name: "StakesOverview--value" })((e) => {
          let { theme: t, small: n } = e;
          return {
            ...t.typography.h3,
            color: t.palette.text.primary,
            marginBottom: "2px",
            ...(n && { ...t.typography.p1 }),
          };
        }),
        P = (0, l.zo)("p", { name: "StakesOverview--title" })((e) => {
          let { theme: t } = e;
          return { ...t.typography.h3, marginBottom: "2px" };
        }),
        Z = (0, l.zo)("span", { name: "StakesOverview--accent" })((e) => {
          let { theme: t } = e;
          return { color: t.palette.success.main };
        }),
        k = (0, l.zo)("p", { name: "StakesOverview--label" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p3,
            color: t.palette.text.secondary,
            marginBottom: "2px",
          };
        }),
        w = (0, l.zo)(l.xu, { name: "StakesOverview--labelWrapper" })(() => ({
          display: "flex",
          gap: "4px",
        })),
        S = (0, l.zo)(l.xu, { name: "StakesOverview--valueWithIconWrapper" })(
          (e) => {
            let { theme: t } = e;
            return {
              ...t.typography.p2,
              display: "flex",
              gap: 4,
              alignItems: "center",
            };
          }
        ),
        C = () => {
          let { data: e } = (0, h.a)({
              queryKey: ["stake", "overview"],
              queryFn: async () => g.G.overview.stake({}),
            }),
            {
              veTotalSupply: t,
              myStgLocked: n,
              myVeBalance: a,
              myAvgLockTime: i,
            } = x.stakeOverviewStore;
          return (0, r.jsxs)(j, {
            children: [
              (0, r.jsx)(v, {
                topLeft: (0, r.jsxs)(w, {
                  children: [
                    (0, r.jsx)(c.r, { currency: { symbol: "???" }, size: 16 }),
                    (0, r.jsx)(k, { children: "Total TRX Locked" }),
                  ],
                }),
                topRight: (0, r.jsx)(u.J, {
                  type: "lock",
                  size: 16,
                  sx: { color: (e) => e.palette.text.secondary },
                }),
                bottomRight: (0, r.jsx)(f, {
                  children: (0, p.uh)(null == e ? void 0 : e.totalStgLocked),
                }),
              }),
              (0, r.jsx)(v, {
                topLeft: (0, r.jsxs)(w, {
                  children: [
                    (0, r.jsx)(c.r, { currency: { symbol: "???" }, size: 16 }),
                    (0, r.jsx)(k, { children: "Percent TRX Locked" }),
                  ],
                }),
                bottomRight: (0, r.jsx)(f, {
                  children: z(null == e ? void 0 : e.totalStgLockedRatio),
                }),
              }),
              (0, r.jsx)(v, {
                topLeft: (0, r.jsxs)(w, {
                  children: [
                    (0, r.jsx)(c.r, {
                      currency: { symbol: "???" },
                      size: 16,
                    }),
                    (0, r.jsx)(k, { children: "Total veTRX" }),
                  ],
                }),
                bottomRight: (0, r.jsx)(f, { children: (0, p.uh)(t) }),
              }),
              (0, r.jsx)(v, {
                topLeft: (0, r.jsx)(k, {
                  children: "Global Average lock time",
                }),
                bottomRight: (0, r.jsx)(f, {
                  children: L(null == e ? void 0 : e.globalAverageLockTime),
                }),
              }),
              (0, r.jsx)(b, {
                children: (0, r.jsx)(v, {
                  sx: { justifyContent: "space-between" },
                  topLeft: (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)(P, {
                        children: [
                          "My Voting power",
                          " ",
                          (0, r.jsx)(Z, {
                            children: z(x.stakeOverviewStore.myVotingPower, 4),
                          }),
                        ],
                      }),
                      (0, r.jsx)(k, {
                        children: (0, r.jsx)("a", {
                          href: d.f.docsGovernance,
                          target: "_blank",
                          rel: "noreferrer",
                          children: "Learn more on TRAIX >",
                        }),
                      }),
                    ],
                  }),
                  bottomLeft: (0, r.jsxs)(l.xu, {
                    sx: { display: "flex", gap: 4, mt: 4 },
                    children: [
                      (0, r.jsxs)(l.xu, {
                        children: [
                          (0, r.jsx)(k, { children: "My TRX Locked" }),
                          (0, r.jsxs)(S, {
                            children: [
                              (0, r.jsx)(c.r, {
                                currency: { symbol: "???" },
                                size: 16,
                              }),
                              " ",
                              (0, p.uh)(n),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)(l.xu, {
                        children: [
                          (0, r.jsx)(k, { children: "My veTRX Balance" }),
                          (0, r.jsxs)(S, {
                            children: [
                              (0, r.jsx)(c.r, {
                                currency: { symbol: "veTRX" },
                                size: 16,
                              }),
                              (0, p.uh)(a),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)(l.xu, {
                        children: [
                          (0, r.jsx)(k, { children: "Average Lock" }),
                          (0, r.jsx)(S, { children: i ? L(i) : "-" }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
      function L(e) {
        return e ? "".concat(Math.floor(e / 3600 / 24), " days") : "-";
      }
      function z(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return e ? "".concat(e.toFixed(t), "%") : "";
      }
      var T = n(16761),
        R = n(50803);
      function A(e) {
        let t = x.U.adapters;
        return (0, h.a)({
          queryKey: ["stakingRewards", e],
          queryFn: e
            ? async () => {
                let n = t.map((t) => t.getPendingRewards(e));
                return await Promise.all(n).then((e) => e.flat());
              }
            : R.CN,
          enabled: !!e,
          refetchOnWindowFocus: !1,
        });
      }
      var V = n(35614),
        K = n(98876),
        F = n(11273),
        U = n(57403);
      let G = (0, a.Pi)((e) => {
          let { pendingReward: t, stakingReward: n } = e,
            a = t.token,
            i = a.chainKey,
            o = a.symbol,
            d = x.U.isSigning,
            u = x.U.isSwitchingChain,
            h = x.U.isClaiming && x.U.stakingReward === n;
          return (0, r.jsx)(K.Zb, {
            asButton: !1,
            topLeft: (0, r.jsx)(c.r, { currency: a, size: 24 }),
            topRight: (0, r.jsx)(l.xu, {
              sx: { display: "flex", gap: 0.5 },
              children: (0, r.jsx)(F.d, { chainKey: i, size: 20 }),
            }),
            middleLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(K.Zb.Label, { children: "Reward" }),
                (0, r.jsx)(K.Zb.Value, { children: o }),
              ],
            }),
            middleRight: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(K.Zb.Label, { children: (0, U.K)(t) }),
                (0, r.jsx)(K.Zb.Value, { children: (0, p.dN)(t) }),
              ],
            }),
            bannerVariant: "transparent",
            banner: (0, r.jsx)(s.z, {
              size: "sm",
              onClick: () => x.U.claim(n),
              sx: {
                width: "100%",
                ...(u
                  ? {
                      "&:disabled": {
                        background: (e) => e.palette.primary.main,
                      },
                    }
                  : {}),
              },
              variant: h ? "primary" : "success",
              icon: h ? void 0 : "sparkle",
              disabled: h,
              children: h
                ? d
                  ? "Confirm in Wallet..."
                  : u
                  ? "Switch network"
                  : "Claiming..."
                : "Claim",
            }),
          });
        }),
        O = (0, a.Pi)(() => {
          let e = (0, T.O)(),
            { data: t, isLoading: n } = A(null == e ? void 0 : e.address);
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(V.f, {
              isLoading: n,
              withPlaceholders: !0,
              withPagination: !0,
              noDataPlaceholder: "No staking fees to claim yet.",
              children:
                null == t
                  ? void 0
                  : t.map((e) =>
                      e.pendingRewards.map((t) =>
                        (0, r.jsx)(
                          G,
                          { stakingReward: e, pendingReward: t },
                          t.token.id
                        )
                      )
                    ),
            }),
          });
        });
      var I = n(7653),
        B = n(11217),
        M = n(84047),
        D = n(75082);
      let q = (e) => {
          let { stakeItem: t } = e,
            { chainKey: n, stgToken: a } = t;
          return (0, r.jsx)(K.Zb, {
            topLeft: (0, r.jsx)(c.r, { currency: a, size: 24 }),
            topRight: (0, r.jsx)(F.d, { chainKey: n, size: 20 }),
            middleLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(K.Zb.Label, { children: "Token" }),
                (0, r.jsx)(K.Zb.Value, { children: a.symbol }),
              ],
            }),
            middleRight: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(K.Zb.Label, { children: "APY" }),
                (0, r.jsx)(K.Zb.Value, { children: M.h }),
              ],
            }),
            bottomLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(K.Zb.Label, { children: "Available to Stake" }),
                (0, r.jsx)(K.Zb.Value, {
                  small: !0,
                  children: (0, p.uh)(t.stgBalance),
                }),
              ],
            }),
          });
        },
        W = (0, B.Z)("span", { name: "StakeCard--accent" })((e) => {
          let { theme: t } = e;
          return { color: t.palette.success.main };
        }),
        _ = (0, B.Z)("div", { name: "StakeCard--valueContainer" })(() => ({
          display: "flex",
          gap: 2,
          alignItems: "center",
        })),
        N = (e) => {
          var t, n, a, i, s;
          let { stakeItem: o } = e,
            { chainKey: l, stgToken: d } = o,
            u =
              null === (t = o.balance) || void 0 === t ? void 0 : t.canWithdraw;
          return (0, r.jsx)(K.Zb, {
            topLeft: (0, r.jsx)(c.r, { currency: d, size: 24 }),
            topRight: (0, r.jsx)(F.d, { chainKey: l, size: 20 }),
            middleLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(K.Zb.Label, { children: "Token" }),
                (0, r.jsx)(K.Zb.Value, { children: d.symbol }),
              ],
            }),
            middleRight: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(K.Zb.Label, { children: "Locked" }),
                (0, r.jsx)(K.Zb.Value, { children: (0, p.uh)(o.lockedAmount) }),
              ],
            }),
            bottomLeft: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(K.Zb.Label, { children: "veTRX Balance" }),
                (0, r.jsx)(K.Zb.Value, {
                  small: !0,
                  children: (0, r.jsxs)(_, {
                    children: [
                      (0, r.jsx)(c.r, {
                        currency:
                          null === (a = o.balance) || void 0 === a
                            ? void 0
                            : null === (n = a.amount) || void 0 === n
                            ? void 0
                            : n.token,
                        size: 16,
                      }),
                      (0, p.uh)(
                        null === (i = o.balance) || void 0 === i
                          ? void 0
                          : i.amount
                      ),
                    ],
                  }),
                }),
              ],
            }),
            bottomRight: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(K.Zb.Label, { children: "Lock Until" }),
                (0, r.jsx)(K.Zb.Value, {
                  small: !0,
                  children: u
                    ? (0, r.jsx)(W, { children: "Complete" })
                    : (0, D.j)(
                        null === (s = o.balance) || void 0 === s
                          ? void 0
                          : s.lockEnd
                      ),
                }),
              ],
            }),
          });
        };
      var E = n(88146),
        Y = n(25712),
        H = n(69910),
        J = n(28928);
      let $ = (0, a.Pi)((e) => {
        var t, n;
        let {
          onReset: a,
          options: i,
          filters: s,
          onChange: o,
          tabs: l,
          dirty: d,
        } = e;
        return (0, r.jsxs)(J.S, {
          sx: { mb: 1.5 },
          children: [
            (0, r.jsx)(J.S.Left, {
              children: (0, r.jsx)(Y.N, {
                onValueChange: (e) => l.onChange(e),
                options: l.options,
                selection:
                  null !==
                    (t = l.options.find((e) => e.value === l.selected)) &&
                  void 0 !== t
                    ? t
                    : l.options[0],
                size: "md",
              }),
            }),
            (0, r.jsx)(J.S.Right, {
              children: (0, r.jsxs)(H.t, {
                onReset: a,
                dirty: d,
                children: [
                  d &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(H.t.ResetBtn, {
                          onClick: a,
                          sx: { display: { xs: "none", md: "block" } },
                        }),
                        (0, r.jsx)(H.t.Divider, {
                          sx: { display: { xs: "none", md: "block" } },
                        }),
                      ],
                    }),
                  (0, r.jsx)(H.t.Select, {
                    size: "md",
                    label: "Network",
                    onValueChange: (e) => o({ chainKey: e }),
                    options: i.chainKey,
                    selection:
                      null !==
                        (n = i.chainKey.find((e) => e.value === s.chainKey)) &&
                      void 0 !== n
                        ? n
                        : i.chainKey[0],
                    disabled: 1 === i.chainKey.length,
                  }),
                ],
              }),
            }),
          ],
        });
      });
      var Q = n(8590);
      let X = (e, t) =>
          null == e
            ? void 0
            : e.filter(
                (e) => "All" === t.chainKey || e.chainKey === t.chainKey
              ),
        ee = { label: "All", value: "All" },
        et = {
          MY: "My Stakes",
          AVAILABLE: "Available",
          CLAIM: "Claim Staking Fees",
        },
        en = (0, a.Pi)(() => {
          let { myStakes: e, availableStakes: t } = x.stakeStore,
            n = (0, T.O)(),
            { data: a } = A(null == n ? void 0 : n.address),
            i = { [et.MY]: e, [et.CLAIM]: [], [et.AVAILABLE]: t, default: t },
            s = (null == a ? void 0 : a.length) || 0,
            o = Object.values(et).map((e) => {
              var t;
              let n =
                e === et.CLAIM
                  ? s
                  : null === (t = i[e]) || void 0 === t
                  ? void 0
                  : t.length;
              return {
                disabled: 0 === n,
                value: e,
                label: (0, r.jsxs)(l.xu, {
                  sx: { display: "flex", alignItems: "center" },
                  children: [
                    e === et.CLAIM &&
                      (0, r.jsx)(u.J, {
                        type: "sparkle",
                        size: 16,
                        sx: {
                          mr: 1,
                          display: { xs: "none", md: "inline" },
                          color: (e) => e.palette.success.main,
                        },
                      }),
                    e,
                    (0, r.jsxs)(l.xu, {
                      sx: { display: { xs: "none", md: "inline" } },
                      children: [
                        "\xa0",
                        "∙ ",
                        (0, r.jsx)(l.xu, {
                          component: "span",
                          color: "success.main",
                          children: n,
                        }),
                      ],
                    }),
                  ],
                }),
              };
            }),
            [d, c] = I.useState(et.MY),
            {
              filteredData: p,
              onReset: h,
              filters: g,
              onChange: m,
              options: y,
              dirty: v,
            } = (function (e) {
              let { inputData: t } = e,
                n = [
                  ee,
                  ...Array.from(new Set(t.map((e) => e.chainKey))).map((e) => {
                    var t, n;
                    return {
                      value: e,
                      label:
                        null !==
                          (n =
                            null === (t = (0, Q.lJ)(e)) || void 0 === t
                              ? void 0
                              : t.name) && void 0 !== n
                          ? n
                          : e,
                      icon: (0, r.jsx)(F.d, { chainKey: e, size: 16 }),
                    };
                  }),
                ],
                [a, i] = (0, I.useState)(ee.value);
              return {
                filteredData: X(t, { chainKey: a }),
                onReset: () => {
                  i(ee.value);
                },
                onChange: (e) => {
                  let { chainKey: t } = e;
                  t && i(t);
                },
                dirty: a !== ee.value,
                filters: { chainKey: a },
                options: { chainKey: n },
              };
            })({ inputData: i[d] || i.default });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)($, {
                onReset: h,
                options: y,
                filters: g,
                onChange: m,
                dirty: v,
                tabs: { options: o, selected: d, onChange: c },
              }),
              d === et.CLAIM
                ? (0, r.jsx)(O, {})
                : (0, r.jsx)(V.f, {
                    withPlaceholders: !0,
                    withPagination: !0,
                    noDataPlaceholder: "No stakes available yet.",
                    children: p.map((e) =>
                      (0, r.jsx)(
                        E.default,
                        {
                          href: "/stake/".concat(e.id),
                          children:
                            d === et.MY
                              ? (0, r.jsx)(N, { stakeItem: e })
                              : (0, r.jsx)(q, { stakeItem: e }),
                        },
                        e.id
                      )
                    ),
                  }),
            ],
          });
        }),
        er = (0, l.zo)("div", { name: "StakesPage-OverviewTitle" })((e) => {
          let { theme: t } = e;
          return { ...t.typography.h5, color: t.palette.text.primary };
        }),
        ea = (0, l.zo)("div", { name: "StakesPage--overviewButtons" })((e) => {
          let { theme: t } = e;
          return {
            margin: "0 auto",
            display: "flex",
            gap: 24,
            flexDirection: "column",
            minWidth: "100%",
            [t.breakpoints.up("md")]: {
              minWidth: "504px",
              flexDirection: "row",
            },
          };
        }),
        ei = (0, l.zo)("a", { name: "StakesPage--btnLink" })(() => ({
          display: "block",
          flex: 1,
        })),
        es = (0, l.zo)("div", { name: "StakesPage--learnMore" })((e) => {
          let { theme: t } = e;
          return {
            ...t.typography.p2,
            marginTop: 24,
            textAlign: "center",
            width: "100%",
            color: t.palette.text.secondary,
            "&:hover": {
              color: t.palette.text.primary,
              textDecoration: "underline",
            },
          };
        }),
        eo = (0, a.Pi)(() =>
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(o.V, {
                sub: (0, r.jsxs)(r.Fragment, {
                  children: [
                    "Lock your TRX tokens to receive veTRX, the unit of TRAIX governance voting power.",
                    (0, r.jsx)(l.xu, {
                      component: "br",
                      sx: { display: { xs: "none", md: "block" } },
                    }),
                    "TRAIX is governed entirely by TRX token holders via voting escrow.",
                  ],
                }),
                children: [
                  (0, r.jsx)(o.V.Secondary, { children: "TRAIX" }),
                  " Stake",
                ],
              }),
              (0, r.jsx)(en, {}),
              (0, r.jsx)(i.$, {
                sx: { mt: 8 },
                children: (0, r.jsx)(er, { children: "Staking Overview" }),
              }),
              (0, r.jsx)(C, {}),
              (0, r.jsxs)(ea, {
                children: [
                ],
              }),
            ],
          })
        );
    },
  },
  function (e) {
    e.O(
      0,
      [
        2643, 1734, 6674, 4882, 6412, 110, 780, 7723, 2993, 2550, 7898, 3818,
        1357, 5836, 4522, 3762, 3684, 9910, 4554, 9740, 1293, 1528, 1744,
      ],
      function () {
        return e((e.s = 52336));
      }
    ),
      (_N_E = e.O());
  },
]);