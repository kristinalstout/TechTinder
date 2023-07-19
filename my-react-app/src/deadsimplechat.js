(() => {
  var Q = Object.create;
  var P = Object.defineProperty;
  var X = Object.getOwnPropertyDescriptor;
  var Z = Object.getOwnPropertyNames;
  var $ = Object.getPrototypeOf,
    ee = Object.prototype.hasOwnProperty;
  var p = (r, a) => () => (a || r((a = { exports: {} }).exports, a), a.exports);
  var se = (r, a, e, s) => {
    if ((a && typeof a == "object") || typeof a == "function")
      for (let n of Z(a))
        !ee.call(r, n) &&
          n !== e &&
          P(r, n, {
            get: () => a[n],
            enumerable: !(s = X(a, n)) || s.enumerable,
          });
    return r;
  };
  var S = (r, a, e) => (
    (e = r != null ? Q($(r)) : {}),
    se(
      a || !r || !r.__esModule
        ? P(e, "default", { value: r, enumerable: !0 })
        : e,
      r
    )
  );
  var O = (r, a, e) =>
    new Promise((s, n) => {
      var t = (i) => {
          try {
            l(e.next(i));
          } catch (d) {
            n(d);
          }
        },
        o = (i) => {
          try {
            l(e.throw(i));
          } catch (d) {
            n(d);
          }
        },
        l = (i) => (i.done ? s(i.value) : Promise.resolve(i.value).then(t, o));
      l((e = e.apply(r, a)).next());
    });
  var R = p((ue, y) => {
    "use strict";
    var ne = Object.prototype.hasOwnProperty,
      m = "~";
    function _() {}
    Object.create &&
      ((_.prototype = Object.create(null)), new _().__proto__ || (m = !1));
    function re(r, a, e) {
      (this.fn = r), (this.context = a), (this.once = e || !1);
    }
    function L(r, a, e, s, n) {
      if (typeof e != "function")
        throw new TypeError("The listener must be a function");
      var t = new re(e, s || r, n),
        o = m ? m + a : a;
      return (
        r._events[o]
          ? r._events[o].fn
            ? (r._events[o] = [r._events[o], t])
            : r._events[o].push(t)
          : ((r._events[o] = t), r._eventsCount++),
        r
      );
    }
    function C(r, a) {
      --r._eventsCount === 0 ? (r._events = new _()) : delete r._events[a];
    }
    function c() {
      (this._events = new _()), (this._eventsCount = 0);
    }
    c.prototype.eventNames = function () {
      var a = [],
        e,
        s;
      if (this._eventsCount === 0) return a;
      for (s in (e = this._events)) ne.call(e, s) && a.push(m ? s.slice(1) : s);
      return Object.getOwnPropertySymbols
        ? a.concat(Object.getOwnPropertySymbols(e))
        : a;
    };
    c.prototype.listeners = function (a) {
      var e = m ? m + a : a,
        s = this._events[e];
      if (!s) return [];
      if (s.fn) return [s.fn];
      for (var n = 0, t = s.length, o = new Array(t); n < t; n++)
        o[n] = s[n].fn;
      return o;
    };
    c.prototype.listenerCount = function (a) {
      var e = m ? m + a : a,
        s = this._events[e];
      return s ? (s.fn ? 1 : s.length) : 0;
    };
    c.prototype.emit = function (a, e, s, n, t, o) {
      var l = m ? m + a : a;
      if (!this._events[l]) return !1;
      var i = this._events[l],
        d = arguments.length,
        u,
        g;
      if (i.fn) {
        switch ((i.once && this.removeListener(a, i.fn, void 0, !0), d)) {
          case 1:
            return i.fn.call(i.context), !0;
          case 2:
            return i.fn.call(i.context, e), !0;
          case 3:
            return i.fn.call(i.context, e, s), !0;
          case 4:
            return i.fn.call(i.context, e, s, n), !0;
          case 5:
            return i.fn.call(i.context, e, s, n, t), !0;
          case 6:
            return i.fn.call(i.context, e, s, n, t, o), !0;
        }
        for (g = 1, u = new Array(d - 1); g < d; g++) u[g - 1] = arguments[g];
        i.fn.apply(i.context, u);
      } else {
        var v = i.length,
          h;
        for (g = 0; g < v; g++)
          switch (
            (i[g].once && this.removeListener(a, i[g].fn, void 0, !0), d)
          ) {
            case 1:
              i[g].fn.call(i[g].context);
              break;
            case 2:
              i[g].fn.call(i[g].context, e);
              break;
            case 3:
              i[g].fn.call(i[g].context, e, s);
              break;
            case 4:
              i[g].fn.call(i[g].context, e, s, n);
              break;
            default:
              if (!u)
                for (h = 1, u = new Array(d - 1); h < d; h++)
                  u[h - 1] = arguments[h];
              i[g].fn.apply(i[g].context, u);
          }
      }
      return !0;
    };
    c.prototype.on = function (a, e, s) {
      return L(this, a, e, s, !1);
    };
    c.prototype.once = function (a, e, s) {
      return L(this, a, e, s, !0);
    };
    c.prototype.removeListener = function (a, e, s, n) {
      var t = m ? m + a : a;
      if (!this._events[t]) return this;
      if (!e) return C(this, t), this;
      var o = this._events[t];
      if (o.fn)
        o.fn === e && (!n || o.once) && (!s || o.context === s) && C(this, t);
      else {
        for (var l = 0, i = [], d = o.length; l < d; l++)
          (o[l].fn !== e || (n && !o[l].once) || (s && o[l].context !== s)) &&
            i.push(o[l]);
        i.length ? (this._events[t] = i.length === 1 ? i[0] : i) : C(this, t);
      }
      return this;
    };
    c.prototype.removeAllListeners = function (a) {
      var e;
      return (
        a
          ? ((e = m ? m + a : a), this._events[e] && C(this, e))
          : ((this._events = new _()), (this._eventsCount = 0)),
        this
      );
    };
    c.prototype.off = c.prototype.removeListener;
    c.prototype.addListener = c.prototype.on;
    c.prefixed = m;
    c.EventEmitter = c;
    typeof y < "u" && (y.exports = c);
  });
  var T = p((he, I) => {
    var z =
      (typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto < "u" &&
        typeof window.msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto));
    z
      ? ((w = new Uint8Array(16)),
        (I.exports = function () {
          return z(w), w;
        }))
      : ((x = new Array(16)),
        (I.exports = function () {
          for (var a = 0, e; a < 16; a++)
            (a & 3) === 0 && (e = Math.random() * 4294967296),
              (x[a] = (e >>> ((a & 3) << 3)) & 255);
          return x;
        }));
    var w, x;
  });
  var k = p((fe, q) => {
    var H = [];
    for (M = 0; M < 256; ++M) H[M] = (M + 256).toString(16).substr(1);
    var M;
    function te(r, a) {
      var e = a || 0,
        s = H;
      return [
        s[r[e++]],
        s[r[e++]],
        s[r[e++]],
        s[r[e++]],
        "-",
        s[r[e++]],
        s[r[e++]],
        "-",
        s[r[e++]],
        s[r[e++]],
        "-",
        s[r[e++]],
        s[r[e++]],
        "-",
        s[r[e++]],
        s[r[e++]],
        s[r[e++]],
        s[r[e++]],
        s[r[e++]],
        s[r[e++]],
      ].join("");
    }
    q.exports = te;
  });
  var N = p((ve, J) => {
    var ae = T(),
      ie = k(),
      j,
      F,
      B = 0,
      U = 0;
    function oe(r, a, e) {
      var s = (a && e) || 0,
        n = a || [];
      r = r || {};
      var t = r.node || j,
        o = r.clockseq !== void 0 ? r.clockseq : F;
      if (t == null || o == null) {
        var l = ae();
        t == null && (t = j = [l[0] | 1, l[1], l[2], l[3], l[4], l[5]]),
          o == null && (o = F = ((l[6] << 8) | l[7]) & 16383);
      }
      var i = r.msecs !== void 0 ? r.msecs : new Date().getTime(),
        d = r.nsecs !== void 0 ? r.nsecs : U + 1,
        u = i - B + (d - U) / 1e4;
      if (
        (u < 0 && r.clockseq === void 0 && (o = (o + 1) & 16383),
        (u < 0 || i > B) && r.nsecs === void 0 && (d = 0),
        d >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (B = i), (U = d), (F = o), (i += 122192928e5);
      var g = ((i & 268435455) * 1e4 + d) % 4294967296;
      (n[s++] = (g >>> 24) & 255),
        (n[s++] = (g >>> 16) & 255),
        (n[s++] = (g >>> 8) & 255),
        (n[s++] = g & 255);
      var v = ((i / 4294967296) * 1e4) & 268435455;
      (n[s++] = (v >>> 8) & 255),
        (n[s++] = v & 255),
        (n[s++] = ((v >>> 24) & 15) | 16),
        (n[s++] = (v >>> 16) & 255),
        (n[s++] = (o >>> 8) | 128),
        (n[s++] = o & 255);
      for (var h = 0; h < 6; ++h) n[s + h] = t[h];
      return a || ie(n);
    }
    J.exports = oe;
  });
  var K = p((pe, V) => {
    var ge = T(),
      le = k();
    function de(r, a, e) {
      var s = (a && e) || 0;
      typeof r == "string" &&
        ((a = r === "binary" ? new Array(16) : null), (r = null)),
        (r = r || {});
      var n = r.random || (r.rng || ge)();
      if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), a))
        for (var t = 0; t < 16; ++t) a[s + t] = n[t];
      return a || le(n);
    }
    V.exports = de;
  });
  var D = p((_e, W) => {
    var ce = N(),
      G = K(),
      A = G;
    A.v1 = ce;
    A.v4 = G;
    W.exports = A;
  });
  var Y = S(R()),
    f = S(D());
  var E = class extends Y.EventEmitter {
      constructor(e, s, n) {
        super();
        this.connected = !1;
        this.connecting = !1;
        this.roomId = "";
        this.roomJoined = !1;
        this.isModerator = !1;
        this.isAdmin = !1;
        this.accessToken = "";
        this.username = "";
        this.chatUserId = null;
        this.connectErrorMessage = "";
        this.publicKey = "";
        this.messageHistory = [];
        this.lastMessage = {};
        this.__promiseBus = [];
        (this.roomId = e), (this.publicKey = n);
        let t = s.indexOf("#") === 0 ? s.slice(1) : s;
        if (document.getElementById(t)) {
          if (
            ((this.iframe = document.getElementById(t)),
            !this.iframe.contentWindow)
          )
            throw new Error("the element is not chat iFrame");
          this.initializeEventListener();
        } else
          throw new Error(
            "iFrame not found, please specify the correct iframeId"
          );
        if (!n) throw new Error("Please specify publicKey");
      }
      connect() {
        return O(this, null, function* () {
          return new Promise((e, s) => {
            this.connecting = !0;
            let n = setInterval(() => {
              this.connecting
                ? this.sendMessageToFrame("connect", {
                    roomId: this.roomId,
                    publicKey: this.publicKey,
                  })
                : (clearInterval(n),
                  this.connected
                    ? e({
                        roomJoined: this.roomJoined,
                        username: this.username,
                        chatUserId: this.chatUserId,
                      })
                    : s({ errorMessage: this.connectErrorMessage }));
            }, 100);
          });
        });
      }
      sendMessageToFrame(e, s) {
        this.iframe.contentWindow.postMessage(
          { type: e, message: s, roomId: this.roomId },
          E.targetOrigin
        );
      }
      initializeEventListener() {
        window.addEventListener("message", (e) => {
          let s = e.data;
          if (s.roomId === this.roomId) {
            switch (s.type) {
              case "connectSuccess": {
                let n = s.message;
                (this.connected = !0),
                  (this.connecting = !1),
                  (this.roomJoined = n.roomJoined),
                  (this.username = n.username),
                  (this.chatUserId = n.chatUserId);
                for (let t = 0; t < this.__promiseBus.length; t++)
                  this.__promiseBus[t].eventId === n.eventId &&
                    this.__promiseBus[t].resolve(n);
                break;
              }
              case "connectError": {
                let n = s.message;
                (this.connected = !1),
                  (this.connecting = !1),
                  (this.connectErrorMessage = n.errorMessage);
                break;
              }
              case "roomJoined": {
                let n = s.message;
                (this.roomJoined = !0),
                  (this.username = n.username),
                  (this.chatUserId = n.chatUserId);
                break;
              }
              case "messageHistory": {
                this.messageHistory = s.message;
                break;
              }
              case "message": {
                this.lastMessage = s.message;
                break;
              }
              case "messageApproved":
                break;
              case "messageDeleted":
                break;
              case "updateUsers":
                break;
              case "invalid_room_password":
                break;
              case "room_limit_reached":
                break;
              case "not_authorized":
                break;
              case "youarebanned":
                break;
              case "message_liked":
                break;
              case "conversationCreated":
                break;
              case "conversationMessage":
                break;
              case "chanelCreated":
                break;
              case "channelMessage":
                break;
              case "channelMessageApproved":
                break;
              case "channelMessageDeleted":
                break;
              case "channelMessageLiked":
                break;
              case "channelSelected":
                break;
              case "getMessagesResponse": {
                let n = e.data.message;
                for (let t = 0; t < this.__promiseBus.length; t++)
                  this.__promiseBus[t].eventId === n.eventId &&
                    this.__promiseBus[t].resolve(n);
                break;
              }
              case "getChannelMessagesResponse": {
                let n = e.data.message;
                for (let t = 0; t < this.__promiseBus.length; t++)
                  this.__promiseBus[t].eventId === n.eventId &&
                    this.__promiseBus[t].resolve(n);
                break;
              }
              case "getActiveChannelsResponse": {
                let n = e.data.message;
                for (let t = 0; t < this.__promiseBus.length; t++)
                  this.__promiseBus[t].eventId === n.eventId &&
                    this.__promiseBus[t].resolve(n);
                break;
              }
              case "getActiveConversationsResponse": {
                let n = e.data.message;
                for (let t = 0; t < this.__promiseBus.length; t++)
                  this.__promiseBus[t].eventId === n.eventId &&
                    this.__promiseBus[t].resolve(n);
                break;
              }
              case "getOnlineUsersResponse": {
                let n = e.data.message;
                for (let t = 0; t < this.__promiseBus.length; t++)
                  this.__promiseBus[t].eventId === n.eventId &&
                    this.__promiseBus[t].resolve(n);
                break;
              }
              case "getBannedUsersResponse": {
                let n = e.data.message;
                for (let t = 0; t < this.__promiseBus.length; t++)
                  this.__promiseBus[t].eventId === n.eventId &&
                    this.__promiseBus[t].resolve(n);
                break;
              }
            }
            e.data.type && this.emit(e.data.type, e.data.message);
          }
        });
      }
      joinRoom(e) {
        e.username &&
          !e.accessToken &&
          !e.email &&
          !e.password &&
          this.sendMessageToFrame("joinRoom", {
            username: e.username,
            roomPassword: e.roomPassword ? e.roomPassword : void 0,
          }),
          e.accessToken &&
            this.sendMessageToFrame("joinRoom", { accessToken: e.accessToken }),
          e.email &&
            e.password &&
            this.sendMessageToFrame("joinRoom", {
              email: e.email,
              password: e.password,
            });
      }
      loadCustomization(e) {
        this.sendMessageToFrame("loadCustomization", e);
      }
      loadTranslation(e) {
        this.sendMessageToFrame("loadTranslation", e);
      }
      logout() {
        this.sendMessageToFrame("logout", {});
      }
      sendMessage(e) {
        this.sendMessageToFrame("sendMessage", e);
      }
      getMessages(e = 0) {
        return new Promise((s, n) => {
          let t = (0, f.v4)();
          this.sendMessageToFrame("getMessages", { eventId: t, skip: e }),
            this.__promiseBus.push({ eventId: t, resolve: s, reject: n });
        });
      }
      getChannelMessages(e, s = 0) {
        return new Promise((n, t) => {
          let o = (0, f.v4)();
          this.sendMessageToFrame("getChannelMessages", {
            eventId: o,
            channelId: e,
            skip: s,
          }),
            this.__promiseBus.push({ eventId: o, resolve: n, reject: t });
        });
      }
      getOnlineUsers() {
        return new Promise((e, s) => {
          let n = (0, f.v4)();
          this.sendMessageToFrame("getOnlineUsers", { eventId: n }),
            this.__promiseBus.push({ eventId: n, resolve: e, reject: s });
        });
      }
      getActiveChannels() {
        return new Promise((e, s) => {
          let n = (0, f.v4)();
          this.sendMessageToFrame("getActiveChannels", { eventId: n }),
            this.__promiseBus.push({ eventId: n, resolve: e, reject: s });
        });
      }
      getActiveConversations() {
        return new Promise((e, s) => {
          let n = (0, f.v4)();
          this.sendMessageToFrame("getActiveConversations", { eventId: n }),
            this.__promiseBus.push({ eventId: n, resolve: e, reject: s });
        });
      }
      createConversation(e) {
        return new Promise((s, n) => {
          let t = (0, f.v4)();
          this.sendMessageToFrame("createConversation", {
            eventId: t,
            userId: e,
          }),
            this.__promiseBus.push({ eventId: t, resolve: s, reject: n });
        });
      }
      likeMessage(e, s, n) {
        this.sendMessageToFrame("likeMessage", {
          messageId: e,
          reaction: s,
          action: n,
        });
      }
      replyMessage(e, s) {
        this.sendMessageToFrame("replyMessage", { messageId: e, message: s });
      }
      sendPrivateMessage(e, s) {
        this.sendMessageToFrame("sendPrivateMessage", {
          conversationId: s,
          message: e,
        });
      }
      sendChannelMessage(e, s) {
        this.sendMessageToFrame("sendChannelMessage", {
          channelId: s,
          message: e,
        });
      }
      selectChannel(e) {
        this.sendMessageToFrame("selectChannel", { channelId: e });
      }
      openConversation(e) {
        this.sendMessageToFrame("openConversation", { conversationId: e });
      }
      approveMessage(e) {
        this.sendMessageToFrame("approveMessage", { messageId: e });
      }
      deleteMessage(e) {
        this.sendMessageToFrame("deleteMessage", { messageId: e });
      }
      approveChannelMessage(e, s) {
        this.sendMessageToFrame("approveChannelMessage", {
          messageId: e,
          channelId: s,
        });
      }
      deleteChannelMessage(e, s) {
        this.sendMessageToFrame("deleteChannelMessage", {
          messageId: e,
          channelId: s,
        });
      }
      likeChannelMessage(e, s, n, t) {
        this.sendMessageToFrame("likeChannelMessage", {
          messageId: e,
          channelId: s,
          reaction: n,
          action: t,
        });
      }
      replyChannelMessage(e, s, n) {
        this.sendMessageToFrame("replyChannelMessage", {
          channelId: s,
          messageId: e,
          message: n,
        });
      }
      banUser(e) {
        this.sendMessageToFrame("banUser", { userId: e });
      }
      banIp(e) {
        this.sendMessageToFrame("banIp", { ip: e });
      }
      unBanUser(e) {
        this.sendMessageToFrame("unBanUser", { userId: e });
      }
      unBanIp(e) {
        this.sendMessageToFrame("unBanIp", { ip: e });
      }
      getBannedUsers() {
        return new Promise((e, s) => {
          let n = (0, f.v4)();
          this.sendMessageToFrame("getBannedUsers", { eventId: n }),
            this.__promiseBus.push({ eventId: n, resolve: e, reject: s });
        });
      }
    },
    b = E;
  b.targetOrigin = "*";
  var Me = b;
  window.DSChatSDK = b;
})();
