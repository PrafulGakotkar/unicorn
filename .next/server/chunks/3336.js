"use strict";
exports.id = 3336;
exports.ids = [3336];
exports.modules = {

/***/ 58276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CounterUp)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/elements/Counter.js


function Counter({ end, duration }) {
    const [count, setCount] = (0,react_.useState)(0);
    const countRef = (0,react_.useRef)(null);
    const increment = end / duration;
    (0,react_.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                startCount();
                observer.disconnect();
            }
        }, {
            threshold: 0
        });
        if (countRef.current) {
            observer.observe(countRef.current);
        }
        return ()=>{
            observer.disconnect();
        };
    }, []);
    (0,react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCount((prevCount)=>{
                const newCount = prevCount + increment;
                if (newCount >= end) {
                    clearInterval(interval);
                    return end;
                } else {
                    return newCount;
                }
            });
        }, 1000 / duration);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        end,
        increment
    ]);
    const startCount = ()=>{
        setCount(0);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        ref: countRef,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            children: Math.round(count)
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/CounterUp.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function CounterUp({ end }) {
    const [inViewport, setInViewport] = (0,react_.useState)(false);
    const handleScroll = ()=>{
        const elements = document.getElementsByClassName("count-text");
        if (elements.length > 0) {
            const element = elements[0];
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isInViewport && !inViewport) {
                setInViewport(true);
            }
        }
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "count-text",
            children: inViewport && /*#__PURE__*/ jsx_runtime_.jsx(Counter, {
                end: end,
                duration: 20
            })
        })
    });
}


/***/ }),

/***/ 39237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPopup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52679);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function VideoPopup({ style, text }) {
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !style && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                onClick: ()=>setOpen(true),
                className: "overlay-link lightbox-image video-fancybox ripple",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "icon-10"
                })
            }),
            style === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "video-btn",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: ()=>setOpen(true),
                    className: "overlay-link lightbox-image video-fancybox ripple",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "icon-10"
                        }),
                        " "
                    ]
                })
            }),
            style === 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "video-btn",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: ()=>setOpen(true),
                        className: "overlay-link lightbox-image video-fancybox ripple",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "icon-10"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        children: text ? text : "Latest Program Video"
                    })
                ]
            }),
            style === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "video-btn",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: ()=>setOpen(true),
                    className: "lightbox-image",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "customicon-play-button"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "border-animation border-1"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "border-animation border-2"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "border-animation border-3"
                        })
                    ]
                })
            }),
            style === 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "video-btn",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    onClick: ()=>setOpen(true),
                    className: "lightbox-image",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/images-4/icons/video-btn-1.png",
                        alt: ""
                    })
                })
            }),
            style === 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                onClick: ()=>setOpen(true),
                className: "video-btn overlay-link lightbox-image video-fancybox ripple",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "fas fa-play"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                channel: "youtube",
                autoplay: true,
                isOpen: isOpen,
                videoId: "vfhzo499OeA",
                onClose: ()=>setOpen(false)
            })
        ]
    });
}


/***/ })

};
;