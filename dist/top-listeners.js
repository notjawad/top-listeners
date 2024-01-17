(async function() {
        while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
        var topDlisteners = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // src/app.tsx
  var import_react4 = __toESM(require_react());

  // src/services/api.ts
  var BASE_URL = "https://blank-delta.vercel.app";
  var fetchListeners = async (artist, artistId) => {
    const url = `${BASE_URL}/api/listeners/${artist}/${artistId}`;
    Spicetify.showNotification("Fetching listeners...", false, 2e3);
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      Spicetify.showNotification(
        `Error fetching listeners: ${error}`,
        true,
        2e3
      );
      console.error(error);
    }
  };
  var fetchUser = async (userId) => {
    const url = `https://api.spotify.com/v1/users/${userId}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${Spicetify.Platform.Session.accessToken}`
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  var fetchUserPlaylists = async (userId) => {
    const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${Spicetify.Platform.Session.accessToken}`
        }
      });
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error(error);
    }
  };

  // src/components/listeners-modal.tsx
  var import_react3 = __toESM(require_react());

  // node_modules/react-icons/lib/iconBase.mjs
  var import_react2 = __toESM(require_react(), 1);

  // node_modules/react-icons/lib/iconContext.mjs
  var import_react = __toESM(require_react(), 1);
  var DefaultContext = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  };
  var IconContext = import_react.default.createContext && /* @__PURE__ */ import_react.default.createContext(DefaultContext);

  // node_modules/react-icons/lib/iconBase.mjs
  var _excluded = ["attr", "size", "title"];
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function Tree2Element(tree) {
    return tree && tree.map((node, i) => /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread({
      key: i
    }, node.attr), Tree2Element(node.child)));
  }
  function GenIcon(data) {
    return (props) => /* @__PURE__ */ import_react2.default.createElement(IconBase, _extends({
      attr: _objectSpread({}, data.attr)
    }, props), Tree2Element(data.child));
  }
  function IconBase(props) {
    var elem = (conf) => {
      var {
        attr,
        size,
        title
      } = props, svgProps = _objectWithoutProperties(props, _excluded);
      var computedSize = size || conf.size || "1em";
      var className;
      if (conf.className)
        className = conf.className;
      if (props.className)
        className = (className ? className + " " : "") + props.className;
      return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, conf.attr, attr, svgProps, {
        className,
        style: _objectSpread(_objectSpread({
          color: props.color || conf.color
        }, conf.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg"
      }), title && /* @__PURE__ */ import_react2.default.createElement("title", null, title), props.children);
    };
    return IconContext !== void 0 ? /* @__PURE__ */ import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
  }

  // node_modules/react-icons/tb/index.mjs
  function TbPlaylist(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }, "child": [] }, { "tag": "path", "attr": { "d": "M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, "child": [] }, { "tag": "path", "attr": { "d": "M17 17v-13h4" }, "child": [] }, { "tag": "path", "attr": { "d": "M13 5h-10" }, "child": [] }, { "tag": "path", "attr": { "d": "M3 9l10 0" }, "child": [] }, { "tag": "path", "attr": { "d": "M9 13h-6" }, "child": [] }] })(props);
  }
  function TbUsers(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }, "child": [] }, { "tag": "path", "attr": { "d": "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, "child": [] }, { "tag": "path", "attr": { "d": "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" }, "child": [] }, { "tag": "path", "attr": { "d": "M16 3.13a4 4 0 0 1 0 7.75" }, "child": [] }, { "tag": "path", "attr": { "d": "M21 21v-2a4 4 0 0 0 -3 -3.85" }, "child": [] }] })(props);
  }

  // src/components/listeners-modal.tsx
  var ListenersModal = ({ listeners, artistId }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = (0, import_react3.useState)(1);
    const [users, setUsers] = (0, import_react3.useState)([]);
    (0, import_react3.useEffect)(() => {
      const fetchData = async () => {
        const indexOfLastItem2 = currentPage * itemsPerPage;
        const indexOfFirstItem2 = indexOfLastItem2 - itemsPerPage;
        const usersWithPlaylists = await Promise.all(
          listeners.items.slice(indexOfFirstItem2, indexOfLastItem2).map(async (listener) => {
            const user = await fetchUser(listener.user.id);
            const playlists = await fetchUserPlaylists(listener.user.id);
            return __spreadProps(__spreadValues({}, user), { playlists });
          })
        );
        setUsers(usersWithPlaylists);
      };
      fetchData();
    }, [currentPage, listeners.items]);
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    const generateDefaultImage = (displayName) => {
      return `https://ui-avatars.com/api/?name=${displayName}&background=1cca5a&color=fff&size=128`;
    };
    const handleClick = (listener, e) => {
      e.stopPropagation();
      Spicetify.Platform.History.push("/user/" + listener.user.id);
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = listeners.items.filter((listener) => listener.user.displayName !== "Private User").slice(indexOfFirstItem, indexOfLastItem);
    const hasNextPage = indexOfLastItem < listeners.items.length;
    const hasPrevPage = currentPage > 1;
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "listeners-container"
    }, currentItems.map((listener, index) => {
      var _a, _b, _c, _d;
      return /* @__PURE__ */ import_react3.default.createElement("div", {
        onClick: (e) => handleClick(listener, e),
        key: index,
        className: "listener-item"
      }, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "listener-info"
      }, /* @__PURE__ */ import_react3.default.createElement("img", {
        src: ((_b = (_a = users[index]) == null ? void 0 : _a.images[0]) == null ? void 0 : _b.url) || generateDefaultImage(listener.user.displayName),
        alt: listener.user.displayName,
        className: "listener-image",
        onError: (e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = generateDefaultImage(
            listener.user.displayName
          );
        }
      }), /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "listener-details"
      }, /* @__PURE__ */ import_react3.default.createElement("p", {
        className: "listener-name"
      }, listener.user.displayName), /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "listener-stats"
      }, /* @__PURE__ */ import_react3.default.createElement("p", null, /* @__PURE__ */ import_react3.default.createElement(TbUsers, null), (_c = users[index]) == null ? void 0 : _c.followers.total, " followers"), /* @__PURE__ */ import_react3.default.createElement("p", null, /* @__PURE__ */ import_react3.default.createElement(TbPlaylist, null), (_d = users[index]) == null ? void 0 : _d.playlists.length, " playlists")))));
    }), /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "pagination-container"
    }, hasPrevPage ? /* @__PURE__ */ import_react3.default.createElement("button", {
      onClick: () => paginate(currentPage - 1)
    }, "Back") : /* @__PURE__ */ import_react3.default.createElement("button", {
      disabled: true
    }, "Back"), /* @__PURE__ */ import_react3.default.createElement("p", null, indexOfFirstItem + 1, " - ", indexOfLastItem, " of ", listeners.items.length), hasNextPage ? /* @__PURE__ */ import_react3.default.createElement("button", {
      onClick: () => paginate(currentPage + 1)
    }, "Next") : /* @__PURE__ */ import_react3.default.createElement("button", {
      disabled: true
    }, "Next")));
  };
  var listeners_modal_default = ListenersModal;

  // src/constants/icons.ts
  var Users = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="#a6a6a6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
`;

  // src/app.tsx
  async function main() {
    while (!(Spicetify == null ? void 0 : Spicetify.Platform) || !(Spicetify == null ? void 0 : Spicetify.CosmosAsync) || !(Spicetify == null ? void 0 : Spicetify.Player) || !Spicetify.Topbar) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const handleClick = async () => {
      var _a;
      const currentTrackArtistData = (_a = Spicetify.Player.data.item.artists) == null ? void 0 : _a[0];
      const artistName = currentTrackArtistData == null ? void 0 : currentTrackArtistData.name;
      const artistId = currentTrackArtistData == null ? void 0 : currentTrackArtistData.uri.split(":")[2];
      if (!artistName || !artistId) {
        return;
      }
      const listeners = await fetchListeners(artistName, artistId);
      Spicetify.PopupModal.display({
        title: "Top Listeners",
        content: /* @__PURE__ */ import_react4.default.createElement(listeners_modal_default, {
          listeners,
          artistId
        })
      });
    };
    const renderButton = () => {
      const randomBtn = new Spicetify.Topbar.Button(
        "Show Top Listeners",
        Users,
        handleClick
      );
      randomBtn.element.id = "random-saved-album-btn";
    };
    renderButton();
  }
  var app_default = main;

  // ../../../../Local/Temp/spicetify-creator/index.jsx
  (async () => {
    await app_default();
  })();
})();
(async () => {
    if (!document.getElementById(`topDlisteners`)) {
      var el = document.createElement('style');
      el.id = `topDlisteners`;
      el.textContent = (String.raw`
  /* ../../../../Local/Temp/tmp-13616-wN6jhb3x3guv/18d15d910e20/global.css */
.listeners-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.listener-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.086);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.listener-item:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.listener-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.listener-image {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  -o-object-fit: cover;
  object-fit: cover;
}
.listener-details {
  display: flex;
  flex-direction: column;
}
.listener-stats {
  display: flex;
  align-items: center;
  gap: 4px;
}
.listener-stats p {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: bold;
  color: #c2c2c2;
}
.active-dot {
  width: 8px;
  height: 8px;
  background-color: #1da14d;
  border-radius: 50%;
}
.liste .pagination-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 1rem;
}
.pagination-container button {
  background-color: #2b2b2b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  cursor: pointer;
}
.pagination-container p {
  color: #fff;
  font-size: 0.8rem;
}
.pagination-container button:disabled {
  background-color: #555555;
  cursor: not-allowed;
}

      `).trim();
      document.head.appendChild(el);
    }
  })()
      })();