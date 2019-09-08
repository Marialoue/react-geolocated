(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./demo/App.mdx":function(e,o,t){"use strict";t.r(o);var n=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),i=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/react/index.js"),a=t.n(r),s=t("./node_modules/@mdx-js/react/dist/index.es.js"),c=t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),u=t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),d=t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),b=t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),p=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),f=t("./node_modules/prop-types/index.js"),j=t.n(f),h=function(e){return"Geolocated(".concat(e.displayName||e.name||"Component",")")},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.positionOptions,t=void 0===o?{enableHighAccuracy:!0,maximumAge:0,timeout:1/0}:o,i=e.isOptimisticGeolocationEnabled,s=void 0===i||i,f=e.userDecisionTimeout,j=void 0===f?null:f,v=e.suppressLocationOnMount,O=void 0!==v&&v,E=e.watchPosition,g=void 0!==E&&E,y=e.geolocationProvider,P=void 0===y?"undefined"!==typeof navigator&&navigator.geolocation:y;return function(e){var o=function(o){function i(e){var o;return Object(c.a)(this,i),o=Object(u.a)(this,Object(d.a)(i).call(this,e)),Object(p.a)(Object(m.a)(o),"isCurrentlyMounted",!1),Object(p.a)(Object(m.a)(o),"cancelUserDecisionTimeout",function(){o.userDecisionTimeoutId&&clearTimeout(o.userDecisionTimeoutId)}),Object(p.a)(Object(m.a)(o),"onPositionError",function(e){o.cancelUserDecisionTimeout(),o.isCurrentlyMounted&&o.setState({coords:null,isGeolocationEnabled:!1,positionError:e}),o.props.onError&&o.props.onError(e)}),Object(p.a)(Object(m.a)(o),"onPositionSuccess",function(e){o.cancelUserDecisionTimeout(),o.isCurrentlyMounted&&o.setState({coords:e.coords,isGeolocationEnabled:!0,positionError:null}),o.props.onSuccess&&o.props.onSuccess(e)}),Object(p.a)(Object(m.a)(o),"getLocation",function(){if(!P||!P.getCurrentPosition||!P.watchPosition)throw new Error("The provided geolocation provider is invalid");var e=(g?P.watchPosition:P.getCurrentPosition).bind(P);j&&(o.userDecisionTimeoutId=setTimeout(function(){o.onPositionError()},j)),o.watchId=e(o.onPositionSuccess,o.onPositionError,t)}),o.state={coords:null,isGeolocationAvailable:Boolean(P),isGeolocationEnabled:s,positionError:null},o}return Object(b.a)(i,o),Object(l.a)(i,[{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,O||this.getLocation()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.cancelUserDecisionTimeout(),g&&P.clearWatch(this.watchId)}},{key:"render",value:function(){return a.a.createElement(e,Object(n.a)({},this.state,this.props))}}]),i}(r.Component);return o.displayName=h(e),o}};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"geolocated",filename:"src/index.js"}});var O={coords:j.a.shape({latitude:j.a.number,longitude:j.a.number,altitude:j.a.number,accuracy:j.a.number,altitudeAccuracy:j.a.number,heading:j.a.number,speed:j.a.number}),isGeolocationAvailable:j.a.bool,isGeolocationEnabled:j.a.bool,positionError:j.a.shape({code:j.a.oneOf([1,2,3]),message:j.a.string}),watchPosition:j.a.bool};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"geoPropTypes",filename:"src/index.js"}});var E=function(e,o){return"".concat(0|e,"\xb0 ").concat(0|(e<0?e=-e:e)%1*60,"' ").concat(0|60*e%1*60,'" ').concat(function(e,o){return e>0?o?"E":"N":o?"W":"S"}(e,o))},g=v({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(function(e){return a.a.createElement("div",{style:{fontSize:"large",fontWeight:"bold",margin:"2rem"}},e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?a.a.createElement("div",null,"You are at"," ",a.a.createElement("span",{className:"coordinate"},E(e.coords.latitude,!1)),","," ",a.a.createElement("span",{className:"coordinate"},E(e.coords.longitude,!0)),e.coords.altitude?a.a.createElement("span",null,", approximately ",e.coords.altitude," meters above sea level"):null,"."):a.a.createElement("div",null,"Getting the location data\u2026"):a.a.createElement("div",null,"Geolocation is not enabled."):a.a.createElement("div",null,"Your browser does not support Geolocation."),!!e.positionError&&a.a.createElement("div",null,a.a.createElement("br",null),"Last position error:",a.a.createElement("pre",null,JSON.stringify(e.positionError))))}),y=function(){var e=Object(r.useRef)();return a.a.createElement("article",{style:{textAlign:"center"}},a.a.createElement(g,{onError:function(e){return console.log(e)},ref:e}),a.a.createElement("button",{className:"pure-button pure-button-primary",onClick:function(){e.current&&e.current.getLocation()},type:"button"},"Get location"))},P=y;y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"App",filename:"demo/App.jsx"}}),t.d(o,"default",function(){return w});var _={},x="wrapper";function w(e){var o=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)(x,Object(n.a)({},_,t,{components:o,mdxType:"MDXLayout"}),Object(s.b)(P,{mdxType:"App"}))}w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"demo/App.mdx"}}),w.isMDXComponent=!0}}]);
//# sourceMappingURL=demo-app.387c52a169ea9897d293.js.map