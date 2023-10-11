"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_RegistrationForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'CheckboxComponent',
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      // Используем boolean для v-model
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      emit = _ref.emit;
    __expose();
    var props = __props;
    var updateModelValue = function updateModelValue(newValue) {
      emit('update:modelValue', newValue); // Отправляем обновленное значение в родительский компонент
    };

    //Перестали работать картинки(для флага) до этого работали

    var __returned__ = {
      props: props,
      emit: emit,
      updateModelValue: updateModelValue,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'InputComponent',
  props: {
    label: {
      type: String,
      required: true
    },
    req: {
      type: Boolean,
      "default": false
    },
    password: {
      type: Boolean,
      "default": false
    },
    number: {
      type: Boolean,
      "default": false
    },
    isValid: {
      type: Boolean,
      "default": true
    },
    modelValue: {
      type: String
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      emit = _ref.emit;
    __expose();
    var props = __props;
    var value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
      get: function get() {
        return props.modelValue;
      },
      set: function set(value) {
        emit('update:modelValue', value);
      }
    });
    var __returned__ = {
      props: props,
      emit: emit,
      value: value,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SmsCodeInput_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmsCodeInput.vue */ "./resources/js/components/SmsCodeInput.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'SmsCodeForm',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      emit = _ref.emit;
    __expose();
    var smsCode = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(['', '', '', '', '', '']);
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(smsCode, function (newValue) {
      var isAllFilled = newValue.every(function (item) {
        return item != "";
      });
      if (isAllFilled) {
        var split_code = newValue.join('');
        emit('update:modelValue', split_code);
      }
    }, {
      deep: true
    });
    var __returned__ = {
      emit: emit,
      smsCode: smsCode,
      SmsCodeInput: _SmsCodeInput_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_1__.watch
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'SmsCodeInput',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      emit = _ref.emit;
    __expose();
    var inputValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var validateInput = function validateInput() {
      inputValue.value = inputValue.value.replace(/[^0-9]/g, '');
    };
    var __returned__ = {
      inputValue: inputValue,
      validateInput: validateInput,
      emit: emit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_ActionButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ActionButton.vue */ "./resources/js/components/ActionButton.vue");
/* harmony import */ var _components_InputComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InputComponent.vue */ "./resources/js/components/InputComponent.vue");
/* harmony import */ var _components_SmsCodeForm_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SmsCodeForm.vue */ "./resources/js/components/SmsCodeForm.vue");
/* harmony import */ var _components_CheckboxComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CheckboxComponent.vue */ "./resources/js/components/CheckboxComponent.vue");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'RegistrationForm',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    var smsCode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var userData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      surname: "",
      name: "",
      patronymic: "",
      number: "",
      email: "",
      inn: "",
      post: "",
      password: "",
      confirmPassword: ""
    });
    var userDataValid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      surname: true,
      name: true,
      number: true,
      inn: true,
      post: true,
      password: true,
      confirmPassword: true
    });
    var password_verification = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([false, false]);
    var acceptance_agreement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var flag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var buttonFlag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var resendTimer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(120);
    var validateInputForm1 = function validateInputForm1() {
      var digitPattern = /^\d{11}$/;
      userDataValid.value.surname = userData.value.surname === "" || userData.value.surname.length < 3 || /\d/.test(userData.value.surname) ? false : true;
      userDataValid.value.name = userData.value.name === "" || userData.value.name.length < 3 || /\d/.test(userData.value.name) ? false : true;
      userDataValid.value.number = userData.value.number === "" || !digitPattern.test(userData.value.number) ? false : true;
      if (userDataValid.value.surname && userDataValid.value.name && userDataValid.value.number) {
        flag.value = 1;
      }
    };
    var validateInputForm2 = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var INNPattern, resp;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              INNPattern = /^\d{12}$/;
              userDataValid.value.inn = userData.value.inn == "" || !INNPattern.test(userData.value.inn) ? false : true;
              //Пост нужно доделать будет
              userDataValid.value.post = userData.value.post == "" ? false : true;
              passwordValid();
              passwordConfirmValid();
              if (!(userDataValid.value.inn && userDataValid.value.post && userDataValid.value.password && userDataValid.value.confirmPassword)) {
                _context.next = 10;
                break;
              }
              _context.next = 8;
              return registration();
            case 8:
              resp = _context.sent;
              if (resp == 201) {
                console.log("Регистрация прошла успешно111");
                flag.value = 2;
              }
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function validateInputForm2() {
        return _ref2.apply(this, arguments);
      };
    }();
    var passwordValid = function passwordValid() {
      var hasDigit = /[0-9]/;
      password_verification.value[0] = userData.value.password.length > 7 ? true : false;
      password_verification.value[1] = hasDigit.test(userData.value.password) ? true : false;
      userDataValid.value.password = password_verification.value[0] && password_verification.value[1] ? true : false;
    };
    var passwordConfirmValid = function passwordConfirmValid() {
      userDataValid.value.confirmPassword = userData.value.confirmPassword === userData.value.password && userData.value.confirmPassword != "" ? true : false;
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return userData.value.password;
    }, function () {
      passwordValid();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return userData.value.confirmPassword;
    }, function () {
      passwordConfirmValid();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(smsCode, function () {
      if (smsCode.value.length == 6) {
        buttonFlag.value = true;
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(flag, function () {
      if (flag.value == 2) {
        var interval = setInterval(function () {
          if (resendTimer.value > 0) {
            resendTimer.value--; // Уменьшаем таймер на 1 секунду
          } else {
            clearInterval(interval); // Если время истекло, останавливаем интервал
          }
        }, 1000); // Каждую секунду
      }
    });

    var formatTime = function formatTime(timeInSeconds) {
      var minutes = Math.floor(timeInSeconds / 60);
      var seconds = timeInSeconds % 60;
      return "".concat(minutes, ":").concat(seconds.toString().padStart(2, '0'));
    };
    var registration = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.get('/sanctum/csrf-cookie');
            case 3:
              _context2.next = 5;
              return axios.post('/register', {
                name: userData.value.name,
                email: userData.value.email,
                password: userData.value.password,
                password_confirmation: userData.value.confirmPassword,
                number: userData.value.number,
                inn: userData.value.inn,
                post: userData.value.post,
                surname: userData.value.surname,
                patronymic: userData.value.patronymic
              });
            case 5:
              response = _context2.sent;
              console.log(response);
              localStorage.setItem("x-xsrf-token", response.config.headers["X-XSRF-TOKEN"]);
              return _context2.abrupt("return", response.status);
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.response.status);
              return _context2.abrupt("return", _context2.t0.response.status);
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 11]]);
      }));
      return function registration() {
        return _ref3.apply(this, arguments);
      };
    }();
    var __returned__ = {
      router: router,
      get smsCode() {
        return smsCode;
      },
      set smsCode(v) {
        smsCode = v;
      },
      get userData() {
        return userData;
      },
      set userData(v) {
        userData = v;
      },
      get userDataValid() {
        return userDataValid;
      },
      set userDataValid(v) {
        userDataValid = v;
      },
      get password_verification() {
        return password_verification;
      },
      set password_verification(v) {
        password_verification = v;
      },
      get acceptance_agreement() {
        return acceptance_agreement;
      },
      set acceptance_agreement(v) {
        acceptance_agreement = v;
      },
      get flag() {
        return flag;
      },
      set flag(v) {
        flag = v;
      },
      get buttonFlag() {
        return buttonFlag;
      },
      set buttonFlag(v) {
        buttonFlag = v;
      },
      get resendTimer() {
        return resendTimer;
      },
      set resendTimer(v) {
        resendTimer = v;
      },
      validateInputForm1: validateInputForm1,
      validateInputForm2: validateInputForm2,
      passwordValid: passwordValid,
      passwordConfirmValid: passwordConfirmValid,
      formatTime: formatTime,
      registration: registration,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      ActionButton: _components_ActionButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      InputComponent: _components_InputComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      SmsCodeForm: _components_SmsCodeForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      CheckboxComponent: _components_CheckboxComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_5__.useRouter;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=template&id=fd58a6c2&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=template&id=fd58a6c2&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-fd58a6c2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "checkbox-other"
};
var _hoisted_2 = ["checked"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "class": "custom-checkbox",
    checked: $props.modelValue,
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return $setup.updateModelValue(!$props.modelValue);
    })
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1 /* TEXT */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=template&id=1e6111fe&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=template&id=1e6111fe&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1e6111fe"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "main"
};
var _hoisted_2 = ["type", "placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.value = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["main-input-field", {
      'main-input-field-error': !$props.isValid
    }]),
    type: $props.password ? 'password' : 'text',
    placeholder: !$props.req ? $props.label : $props.label + '*'
  }, null, 10 /* CLASS, PROPS */, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.value]])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=template&id=36e4aeaf":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=template&id=36e4aeaf ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "sms-code-block"
};
var _hoisted_2 = {
  "class": "sms-code"
};
var _hoisted_3 = {
  "class": "sms-code"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SmsCodeInput"], {
    modelValue: $setup.smsCode[0],
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.smsCode[0] = $event;
    })
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SmsCodeInput"], {
    modelValue: $setup.smsCode[1],
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.smsCode[1] = $event;
    })
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SmsCodeInput"], {
    modelValue: $setup.smsCode[2],
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.smsCode[2] = $event;
    })
  }, null, 8 /* PROPS */, ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SmsCodeInput"], {
    modelValue: $setup.smsCode[3],
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.smsCode[3] = $event;
    })
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SmsCodeInput"], {
    modelValue: $setup.smsCode[4],
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.smsCode[4] = $event;
    })
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SmsCodeInput"], {
    modelValue: $setup.smsCode[5],
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.smsCode[5] = $event;
    })
  }, null, 8 /* PROPS */, ["modelValue"])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=template&id=bb9d6322":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=template&id=bb9d6322 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.inputValue = $event;
    }),
    onInput: $setup.validateInput,
    "class": "block text",
    type: "text",
    maxlength: "1",
    pattern: "[0-9]",
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $setup.emit('update:modelValue', $setup.inputValue);
    })
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.inputValue]]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=template&id=a017c888&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=template&id=a017c888&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_bracket_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/bracket.svg */ "./resources/js/assets/bracket.svg");
/* harmony import */ var _assets_filled_checkbox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/filled_checkbox.svg */ "./resources/js/assets/filled_checkbox.svg");
/* harmony import */ var _assets_empty_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/empty_checkbox.svg */ "./resources/js/assets/empty_checkbox.svg");




var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a017c888"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "navigate"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "navigate-el"
  }, "Главная"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_bracket_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: ">"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "navigate-el"
  }, "Регистрация")], -1 /* HOISTED */);
});
var _hoisted_2 = {
  "class": "reg-form"
};
var _hoisted_3 = {
  key: 0,
  "class": "reg-header"
};
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "reg-title"
  }, "Регистрация", -1 /* HOISTED */);
});
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "reg-desc"
  }, "Заполните все поля, чтобы подать заявку на регистрацию", -1 /* HOISTED */);
});
var _hoisted_6 = [_hoisted_4, _hoisted_5];
var _hoisted_7 = {
  "class": "reg-main"
};
var _hoisted_8 = {
  "class": "reg-main"
};
var _hoisted_9 = {
  "class": "password-fields"
};
var _hoisted_10 = {
  "class": "password-labels"
};
var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "password-label"
  }, "Придумайте пароль", -1 /* HOISTED */);
});
var _hoisted_12 = {
  "class": "lenghth-check"
};
var _hoisted_13 = {
  key: 0,
  src: _assets_filled_checkbox_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: ""
};
var _hoisted_14 = {
  key: 1,
  src: _assets_empty_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: ""
};
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "check-lable"
  }, "Содержит не менее 8 символов", -1 /* HOISTED */);
});
var _hoisted_16 = {
  "class": "lenghth-check"
};
var _hoisted_17 = {
  key: 0,
  src: _assets_filled_checkbox_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: ""
};
var _hoisted_18 = {
  key: 1,
  src: _assets_empty_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: ""
};
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "check-lable"
  }, "Должен содержать минимум одну цифру", -1 /* HOISTED */);
});
var _hoisted_20 = {
  "class": "agreement-check"
};
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "reg-header-sms-code"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "reg-title"
  }, "Введите код"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "reg-desc-sms"
  }, "Мы отправили вам СМС с кодом на телефон")], -1 /* HOISTED */);
});
var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "label-sms-code"
  }, "Не приходит код?", -1 /* HOISTED */);
});
var _hoisted_23 = {
  "class": "reg-sms-resend",
  href: "#"
};
var _hoisted_24 = {
  key: 4,
  "class": "reg-header"
};
var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "reg-title"
  }, "Спасибо за регистрацию", -1 /* HOISTED */);
});
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "reg-desc-label"
  }, "В течении 48 часов с вами свяжется менеджер по работе с новыми клиентами, чтобы заключить договор и создать профиль компании", -1 /* HOISTED */);
});
var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "reg-desc-label-2"
  }, "Чтобы ускорить процедуру заключения договора, загрузите данные о вашей организации", -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$setup.flag == 0 || $setup.flag == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.flag == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputComponent"], {
    modelValue: $setup.userData.surname,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.userData.surname = $event;
    }),
    isValid: $setup.userDataValid.surname,
    label: "Фамилия",
    req: true
  }, null, 8 /* PROPS */, ["modelValue", "isValid"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputComponent"], {
    modelValue: $setup.userData.name,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.userData.name = $event;
    }),
    isValid: $setup.userDataValid.name,
    label: "Имя",
    req: true
  }, null, 8 /* PROPS */, ["modelValue", "isValid"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputComponent"], {
    modelValue: $setup.userData.patronymic,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.userData.patronymic = $event;
    }),
    label: "Отчество"
  }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputComponent"], {
    modelValue: $setup.userData.number,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.userData.number = $event;
    }),
    isValid: $setup.userDataValid.number,
    label: "Номер телефона",
    req: true
  }, null, 8 /* PROPS */, ["modelValue", "isValid"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputComponent"], {
    modelValue: $setup.userData.email,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.userData.email = $event;
    }),
    label: "E-mail"
  }, null, 8 /* PROPS */, ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ActionButton"], {
    "class": "reg-btn-start",
    onClick: $setup.validateInputForm1,
    label: "Продолжить заполнение"
  })], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.flag == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputComponent"], {
    modelValue: $setup.userData.inn,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.userData.inn = $event;
    }),
    isValid: $setup.userDataValid.inn,
    label: "ИНН Организации",
    req: true
  }, null, 8 /* PROPS */, ["modelValue", "isValid"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputComponent"], {
    modelValue: $setup.userData.post,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.userData.post = $event;
    }),
    isValid: $setup.userDataValid.post,
    label: "Должность",
    req: true
  }, null, 8 /* PROPS */, ["modelValue", "isValid"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [$setup.password_verification[0] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_13)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_14)), _hoisted_15]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [$setup.password_verification[1] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_17)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_18)), _hoisted_19])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputComponent"], {
    modelValue: $setup.userData.password,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.userData.password = $event;
    }),
    password: true,
    isValid: $setup.userDataValid.password,
    label: "Придумайте пароль",
    req: true
  }, null, 8 /* PROPS */, ["modelValue", "isValid"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputComponent"], {
    modelValue: $setup.userData.confirmPassword,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.userData.confirmPassword = $event;
    }),
    password: true,
    isValid: $setup.userDataValid.confirmPassword,
    label: "Повторите пароль",
    req: true
  }, null, 8 /* PROPS */, ["modelValue", "isValid"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"checkbox\" v-model=\"acceptance_agreement\" class=\"custom-checkbox\" id=\"myCheckbox\">\n                    <label for=\"myCheckbox\" class=\"agreement-lable\">Я принимаю условия обработки персональных данных и\n                        политики\n                        конфиденциальности</label> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CheckboxComponent"], {
    "class": "agreement-lable",
    label: "Я принимаю условия обработки персональных данных и политики конфиденциальности",
    modelValue: $setup.acceptance_agreement,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.acceptance_agreement = $event;
    })
  }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ActionButton"], {
    "class": "reg-btn-end",
    disabled: !$setup.acceptance_agreement,
    onClick: $setup.validateInputForm2,
    size: "large",
    label: "Завершить регистрацию"
  }, null, 8 /* PROPS */, ["disabled"])], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.flag == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 3
  }, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SmsCodeForm"], {
    modelValue: $setup.smsCode,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.smsCode = $event;
    })
  }, null, 8 /* PROPS */, ["modelValue"]), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_23, "Отправить СМС-код еще раз через " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.formatTime($setup.resendTimer)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ActionButton"], {
    disabled: !$setup.buttonFlag,
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $setup.flag = $setup.flag + 1;
    }),
    label: "Войти"
  }, null, 8 /* PROPS */, ["disabled"])], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.flag == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [_hoisted_25, _hoisted_26, _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ActionButton"], {
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $setup.router.push('/personalAccount');
    }),
    label: "Продолжить"
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_empty_checkbox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/empty_checkbox.svg */ "./resources/js/assets/empty_checkbox.svg");
/* harmony import */ var _assets_filled_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/filled_checkbox.svg */ "./resources/js/assets/filled_checkbox.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_empty_checkbox_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_filled_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-checkbox[data-v-fd58a6c2] {\n    margin-right: 6px;\n}\n.checkbox-other[data-v-fd58a6c2] {\n    display: flex;\n    align-items: center;\n    /* Выравниваем элементы вертикально */\n    margin: 0 0 10px 0;\n    line-height: 22px;\n}\n.checkbox-other input[type=checkbox][data-v-fd58a6c2] {\n    flex-shrink: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    margin: 0 5px 0 0;\n    padding: 0;\n    vertical-align: top;\n    outline: none;\n    transition: background 0.3s ease;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 0 0 no-repeat;\n    cursor: pointer;\n}\n\n/* Checked */\n.checkbox-other input[type=checkbox][data-v-fd58a6c2]:checked {\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.error[data-v-1e6111fe] {\n\n    border-color: red;\n}\n.main[data-v-1e6111fe] {\n    display: flex;\n    flex-direction: column;\n}\n.main-input-field[data-v-1e6111fe] {\n    display: flex;\n    width: 344px;\n    padding: 16px;\n    align-items: flex-start;\n    border-radius: 9px;\n    background-color: var(--input-field-background);\n    border: none;\n    outline: none;\n    font-size: 15px;\n    color: var(--text-primary-color);\n}\n.main-input-field-error[data-v-1e6111fe] {\n    border: 1px solid var(--accent-color);\n}\n.main-input-field[data-v-1e6111fe]::-moz-placeholder {\n    font-size: 15px;\n    opacity: 1 !important;\n    color: var(--input-field-color);\n}\n.main-input-field[data-v-1e6111fe]::placeholder {\n    font-size: 15px;\n    opacity: 1 !important;\n    color: var(--input-field-color);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sms-code-block {\n    display: flex;\n    gap: 12px;\n}\n.sms-code {\n    display: flex;\n    gap: 8px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.block {\n    width: 50px;\n    height: 60px;\n    flex-shrink: 0;\n    border-radius: 9px;\n    border: 1px solid var(--input-border-color);\n    background: var(--input-background-color);\n}\n.text {\n    color: var(--text-primary-color);\n    text-align: center;\n    font-size: 28px;\n    font-weight: 500;\n    line-height: 120%;\n    /* 33.6px */\n    letter-spacing: -0.56px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.reg-header-sms-code[data-v-a017c888] {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.reg-desc-label-2[data-v-a017c888] {\n    width: 289px;\n    color: var(--text-primary-color);\n    font-size: 15px;\n    line-height: 135%;\n    margin-bottom: 5px;\n}\n.reg-desc-label[data-v-a017c888] {\n    margin-bottom: 35px;\n    width: 364px;\n    font-size: 15px;\n    line-height: 135%;\n    color: var(--text-primary-color);\n}\n.reg-sms-resend[data-v-a017c888] {\n    text-decoration: none;\n    color: #5D8896;\n    margin-bottom: 20px;\n}\n.label-sms-code[data-v-a017c888] {\n    margin-top: 4px;\n    margin-bottom: 4px;\n    font-size: 12px;\n    color: var(--input-field-color);\n}\n.reg-desc-sms[data-v-a017c888] {\n    font-size: 15px;\n    color: var(--input-field-color);\n    width: 246px;\n    margin-bottom: 40px;\n}\n.reg-btn-end[data-v-a017c888] {\n    margin-top: 20px;\n}\n.reg-btn-start[data-v-a017c888] {\n    margin-top: 30px;\n}\n.agreement-check[data-v-a017c888] {\n    display: inline-flex;\n    align-items: flex-start;\n}\n.agreement-lable[data-v-a017c888] {\n    width: 323px;\n    flex-shrink: 0;\n    font-size: 12px;\n    color: var(--input-field-color);\n}\n.lenghth-check[data-v-a017c888] {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n.check-lable[data-v-a017c888] {\n    font-size: 15px;\n    color: var(--input-primary-color);\n    margin-left: 5px;\n}\n.password-label[data-v-a017c888] {\n    font-size: 15px;\n    color: var(--input-field-color);\n}\n.password-labels[data-v-a017c888] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n}\n.password-fields[data-v-a017c888] {\n    margin-top: 39px;\n    display: inline-flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n}\n.reg-main[data-v-a017c888] {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n.reg-header[data-v-a017c888] {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-bottom: 30px;\n}\n.reg-desc[data-v-a017c888] {\n    font-size: 15px;\n    color: var(--input-field-color);\n    width: 309px;\n}\n.reg-title[data-v-a017c888] {\n    font-size: 28px;\n    font-weight: 600;\n    color: var(--text-primary-color);\n}\n.reg-form[data-v-a017c888] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/bracket.svg":
/*!*****************************************!*\
  !*** ./resources/js/assets/bracket.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/bracket.svg?058a4a2e6dcd1f4405fc79c312eea3d7");

/***/ }),

/***/ "./resources/js/assets/empty_checkbox.svg":
/*!************************************************!*\
  !*** ./resources/js/assets/empty_checkbox.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/empty_checkbox.svg?9520ae3f396701aae3e7b7cd2b13d65c");

/***/ }),

/***/ "./resources/js/assets/filled_checkbox.svg":
/*!*************************************************!*\
  !*** ./resources/js/assets/filled_checkbox.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/filled_checkbox.svg?93ea2b4a6978005765b5f7e181513202");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxComponent_vue_vue_type_style_index_0_id_fd58a6c2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxComponent_vue_vue_type_style_index_0_id_fd58a6c2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxComponent_vue_vue_type_style_index_0_id_fd58a6c2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputComponent_vue_vue_type_style_index_0_id_1e6111fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputComponent_vue_vue_type_style_index_0_id_1e6111fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputComponent_vue_vue_type_style_index_0_id_1e6111fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeForm_vue_vue_type_style_index_0_id_36e4aeaf_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeForm_vue_vue_type_style_index_0_id_36e4aeaf_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeForm_vue_vue_type_style_index_0_id_36e4aeaf_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeInput_vue_vue_type_style_index_0_id_bb9d6322_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeInput_vue_vue_type_style_index_0_id_bb9d6322_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeInput_vue_vue_type_style_index_0_id_bb9d6322_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_style_index_0_id_a017c888_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_style_index_0_id_a017c888_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_style_index_0_id_a017c888_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/CheckboxComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CheckboxComponent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckboxComponent_vue_vue_type_template_id_fd58a6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxComponent.vue?vue&type=template&id=fd58a6c2&scoped=true */ "./resources/js/components/CheckboxComponent.vue?vue&type=template&id=fd58a6c2&scoped=true");
/* harmony import */ var _CheckboxComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxComponent.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/CheckboxComponent.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _CheckboxComponent_vue_vue_type_style_index_0_id_fd58a6c2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css */ "./resources/js/components/CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css");
/* harmony import */ var C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CheckboxComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CheckboxComponent_vue_vue_type_template_id_fd58a6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-fd58a6c2"],['__file',"resources/js/components/CheckboxComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/InputComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/InputComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputComponent_vue_vue_type_template_id_1e6111fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputComponent.vue?vue&type=template&id=1e6111fe&scoped=true */ "./resources/js/components/InputComponent.vue?vue&type=template&id=1e6111fe&scoped=true");
/* harmony import */ var _InputComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputComponent.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/InputComponent.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _InputComponent_vue_vue_type_style_index_0_id_1e6111fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css */ "./resources/js/components/InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css");
/* harmony import */ var C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_InputComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InputComponent_vue_vue_type_template_id_1e6111fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1e6111fe"],['__file',"resources/js/components/InputComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/SmsCodeForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/SmsCodeForm.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SmsCodeForm_vue_vue_type_template_id_36e4aeaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmsCodeForm.vue?vue&type=template&id=36e4aeaf */ "./resources/js/components/SmsCodeForm.vue?vue&type=template&id=36e4aeaf");
/* harmony import */ var _SmsCodeForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmsCodeForm.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/SmsCodeForm.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _SmsCodeForm_vue_vue_type_style_index_0_id_36e4aeaf_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css */ "./resources/js/components/SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css");
/* harmony import */ var C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SmsCodeForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SmsCodeForm_vue_vue_type_template_id_36e4aeaf__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/SmsCodeForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/SmsCodeInput.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/SmsCodeInput.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SmsCodeInput_vue_vue_type_template_id_bb9d6322__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmsCodeInput.vue?vue&type=template&id=bb9d6322 */ "./resources/js/components/SmsCodeInput.vue?vue&type=template&id=bb9d6322");
/* harmony import */ var _SmsCodeInput_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmsCodeInput.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/SmsCodeInput.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _SmsCodeInput_vue_vue_type_style_index_0_id_bb9d6322_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css */ "./resources/js/components/SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css");
/* harmony import */ var C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SmsCodeInput_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SmsCodeInput_vue_vue_type_template_id_bb9d6322__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/SmsCodeInput.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/RegistrationForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/RegistrationForm.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegistrationForm_vue_vue_type_template_id_a017c888_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=template&id=a017c888&scoped=true */ "./resources/js/views/RegistrationForm.vue?vue&type=template&id=a017c888&scoped=true");
/* harmony import */ var _RegistrationForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=script&setup=true&lang=js */ "./resources/js/views/RegistrationForm.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _RegistrationForm_vue_vue_type_style_index_0_id_a017c888_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css */ "./resources/js/views/RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css");
/* harmony import */ var C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_admin_Desktop_testProject_testProject_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_RegistrationForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegistrationForm_vue_vue_type_template_id_a017c888_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a017c888"],['__file',"resources/js/views/RegistrationForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/CheckboxComponent.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/CheckboxComponent.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckboxComponent.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/InputComponent.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/InputComponent.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputComponent.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/SmsCodeForm.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SmsCodeForm.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmsCodeForm.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/SmsCodeInput.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/SmsCodeInput.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeInput_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeInput_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmsCodeInput.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/views/RegistrationForm.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/views/RegistrationForm.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegistrationForm.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/CheckboxComponent.vue?vue&type=template&id=fd58a6c2&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/CheckboxComponent.vue?vue&type=template&id=fd58a6c2&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxComponent_vue_vue_type_template_id_fd58a6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxComponent_vue_vue_type_template_id_fd58a6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckboxComponent.vue?vue&type=template&id=fd58a6c2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=template&id=fd58a6c2&scoped=true");


/***/ }),

/***/ "./resources/js/components/InputComponent.vue?vue&type=template&id=1e6111fe&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/InputComponent.vue?vue&type=template&id=1e6111fe&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputComponent_vue_vue_type_template_id_1e6111fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputComponent_vue_vue_type_template_id_1e6111fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputComponent.vue?vue&type=template&id=1e6111fe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=template&id=1e6111fe&scoped=true");


/***/ }),

/***/ "./resources/js/components/SmsCodeForm.vue?vue&type=template&id=36e4aeaf":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/SmsCodeForm.vue?vue&type=template&id=36e4aeaf ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeForm_vue_vue_type_template_id_36e4aeaf__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeForm_vue_vue_type_template_id_36e4aeaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmsCodeForm.vue?vue&type=template&id=36e4aeaf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=template&id=36e4aeaf");


/***/ }),

/***/ "./resources/js/components/SmsCodeInput.vue?vue&type=template&id=bb9d6322":
/*!********************************************************************************!*\
  !*** ./resources/js/components/SmsCodeInput.vue?vue&type=template&id=bb9d6322 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeInput_vue_vue_type_template_id_bb9d6322__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeInput_vue_vue_type_template_id_bb9d6322__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmsCodeInput.vue?vue&type=template&id=bb9d6322 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=template&id=bb9d6322");


/***/ }),

/***/ "./resources/js/views/RegistrationForm.vue?vue&type=template&id=a017c888&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/RegistrationForm.vue?vue&type=template&id=a017c888&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_template_id_a017c888_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_template_id_a017c888_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegistrationForm.vue?vue&type=template&id=a017c888&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=template&id=a017c888&scoped=true");


/***/ }),

/***/ "./resources/js/components/CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckboxComponent_vue_vue_type_style_index_0_id_fd58a6c2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CheckboxComponent.vue?vue&type=style&index=0&id=fd58a6c2&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputComponent_vue_vue_type_style_index_0_id_1e6111fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InputComponent.vue?vue&type=style&index=0&id=1e6111fe&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeForm_vue_vue_type_style_index_0_id_36e4aeaf_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeForm.vue?vue&type=style&index=0&id=36e4aeaf&lang=css");


/***/ }),

/***/ "./resources/js/components/SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SmsCodeInput_vue_vue_type_style_index_0_id_bb9d6322_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SmsCodeInput.vue?vue&type=style&index=0&id=bb9d6322&lang=css");


/***/ }),

/***/ "./resources/js/views/RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_style_index_0_id_a017c888_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/RegistrationForm.vue?vue&type=style&index=0&id=a017c888&scoped=true&lang=css");


/***/ })

}]);