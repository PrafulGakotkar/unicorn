exports.id = 8911;
exports.ids = [8911];
exports.modules = {

/***/ 22280:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 99471, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 97662:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43155))

/***/ }),

/***/ 60480:
/***/ (() => {



/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 43155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js

function BackToTop({ scroll }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: scroll && /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "scroll-to-top scroll-to-target d-block",
            href: "#top",
            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fas fa-angle-up"
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/DataBg.js


function DataBg() {
    (0,react_.useEffect)(()=>{
        const elements = document.querySelectorAll("[data-bg]");
        elements.forEach((element)=>{
            element.style.backgroundImage = `url(${element.getAttribute("data-bg")})`;
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js


function Breadcrumb({ breadcrumbTitle }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "page-title centred",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-layer",
                    style: {
                        backgroundImage: "url(assets/images/background/page-title1.jpg)"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "auto-container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: breadcrumbTitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "bread-crumb clearfix",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: breadcrumbTitle
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/SearchPopup.js


function SearchPopup({ isPopup, handlePopup }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "search-popup",
            className: `search-popup ${isPopup ? "popup-visible" : ""}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "popup-inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "upper-box clearfix",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "close-search pull-right",
                            onClick: handlePopup,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "far fa-times"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "overlay-layer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "search-form",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                method: "post",
                                action: "index.html",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "search",
                                                className: "form-control",
                                                name: "search-input",
                                                placeholder: "Search Here",
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-search"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Sidebar.js


function Sidebar({ isSidebar, handleSidebar }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer1.js


function Footer1() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "main-footer",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "widget-section",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pattern-layer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pattern-1",
                                    style: {
                                        backgroundImage: "url(assets/images/shape/shape-20.png)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pattern-2",
                                    style: {
                                        backgroundImage: "url(assets/images/shape/shape-21.png)"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row clearfix",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "logo-widget footer-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                    className: "footerlogo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/logo5.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "links-widget footer-widget ml_50",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Quick Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "links-list clearfix",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/",
                                                                    children: "Home"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/contact",
                                                                    children: "Contact Us"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "links-widget footer-widget ml_30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Useful Links"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "links-list clearfix",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/bbc_news",
                                                                    children: "Science"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/social1",
                                                                    children: "Social"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/math1",
                                                                    children: "Mathematics"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/ai_tools",
                                                                    children: "AI Tools"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "contact-widget footer-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Contact"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "info-list clearfix",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-23"
                                                                    }),
                                                                    "STPI 2nd Floor Divyasree Solitaire Building Hitech City, Madhapur, Hyderabad, Telangana 500081"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-3"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "mailto:info@serpointservices.com",
                                                                        children: "info@serpointservices.com"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-2"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "tel:912136660027",
                                                                        children: "+91 8247266609"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-bottom centred",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "copyright",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Copyright ",
                                    new Date().getFullYear(),
                                    " by ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: "Unicorn Startup"
                                    }),
                                    " theme All Right Reserved."
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer2.js


function Footer2() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "main-footer alternat-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "widget-section",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pattern-layer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pattern-1",
                                    style: {
                                        backgroundImage: "url(assets/images/shape/shape-27.png)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pattern-2",
                                    style: {
                                        backgroundImage: "url(assets/images/shape/shape-28.png)"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row clearfix",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "logo-widget footer-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                    className: "footer-logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/logo.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Lorem ipsum dolor sit amet consectetur adipiscing elitsollicit udin netus quis ornare. Massa pharetra in nec sed nunc."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "nisl viverra massa imperdiet. Dui mattis quis congue fames."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "links-widget footer-widget ml_50",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Quick Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "links-list clearfix",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/about-us",
                                                                    children: "About Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/services1",
                                                                    children: "Services"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/career",
                                                                    children: "Career"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/pricing-table",
                                                                    children: "Pricing"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/contact",
                                                                    children: "Contact Us"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "links-widget footer-widget ml_30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Useful Links"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "links-list clearfix",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-2",
                                                                    children: "Privacy Policy"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-2",
                                                                    children: "Terms & Condition"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-2",
                                                                    children: "Support"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-2",
                                                                    children: "Disclaimer"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/faq",
                                                                    children: "Faq"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "contact-widget footer-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Contact"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "widget-content",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Tincidunt neque pretium lectus donec risus."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "info-list clearfix",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "icon-23"
                                                                        }),
                                                                        "New Hyde Park, NY 11040"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "icon-3"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "mailto:info@serpointservices.com",
                                                                            children: "info@serpointservices.com"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "icon-2"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "tel:912136660027",
                                                                            children: "333 666 0000"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-bottom centred",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "copyright",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Copyright 2023 by ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#",
                                        children: "biztech"
                                    }),
                                    " theme All Right Reserved."
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Menu.js


// import { useRouter } from "next/router"
function Menu() {
    // const router = useRouter()
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "navigation clearfix",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "dropdown",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: "Subjects"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: "Science"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/bbc_news",
                                                        children: "BBC News"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/science_academy",
                                                        children: "Science Academy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/science_buddies",
                                                        children: "Science Buddies"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/crazy_scientist",
                                                        children: "Crazy Scientist "
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/national_geographic_science",
                                                        children: "National Geographic Science"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: "Social"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/social1",
                                                        children: "Socratic by Google AI"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/social2",
                                                        children: "Khan Academy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/social3",
                                                        children: "iCivics"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/social4",
                                                        children: "Newsela"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/social5",
                                                        children: "Library of Congress"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: "Mathematics"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/math1",
                                                        children: "Khan Academy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/math2",
                                                        children: "Purplemath"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/math3",
                                                        children: "Mathway"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/math4",
                                                        children: "Socratic by Google AI"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/math5",
                                                        children: "Symbolab"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: "AI Tool's"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/ai_tools",
                                                        children: "30 AI Tools(free)"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/reacherstools",
                                                        children: "Research Tools"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/website_designing",
                                                        children: "Website Designing sites"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/data_analyst",
                                                        children: "AI Tool For Data Analyst"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/english_ai_tools",
                                                        children: "English Website / AI Tools"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/telugu_ai_tools",
                                                        children: "Telugu Website / AI Tools"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/most_useful_ai_tools",
                                                        children: "Most Useful AI Tools"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: "Contact"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/MobileMenu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [activeMenu, setActiveMenu] = (0,react_.useState)({
        mainMenu: null,
        subMenu: null,
        subSubMenu: null
    });
    const handleToggle = (menuLevel, key)=>{
        setActiveMenu((prevState)=>({
                ...prevState,
                [menuLevel]: prevState[menuLevel] === key ? null : key
            }));
    };
    const handleLinkClick = ()=>{
        handleMobileMenu();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mobile-menu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "menu-backdrop",
                        onClick: handleMobileMenu
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "close-btn",
                        onClick: handleMobileMenu,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-times"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "menu-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/images/logo.png",
                                        alt: "",
                                        onClick: handleLinkClick
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menu-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "collapse navbar-collapse show clearfix",
                                    id: "navbarSupportedContent",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "navigation clearfix",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    onClick: handleLinkClick,
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: activeMenu.mainMenu === 2 ? "dropdown current" : "dropdown",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/#",
                                                        children: "Subject"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        style: {
                                                            display: `${activeMenu.mainMenu === 2 ? "block" : "none"}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: activeMenu.subMenu === 3 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: "Science"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        style: {
                                                                            display: `${activeMenu.subMenu === 3 ? "block" : "none"}`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/bbc_news",
                                                                                    children: "BBC News"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/science_academy",
                                                                                    children: "Science Academy"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/science_buddies",
                                                                                    children: "Science Buddies"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/crazy_scientist",
                                                                                    children: "Crazy Scientist "
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/national_geographic_science",
                                                                                    children: "National Geographic Science"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: activeMenu.subMenu === 3 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleToggle("subMenu", 3),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: activeMenu.subMenu === 4 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: "Social"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        style: {
                                                                            display: `${activeMenu.subMenu === 4 ? "block" : "none"}`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/social1",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Socratic by Google AI"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/social2",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Khan Academy"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/social3",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "iCivics"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/social4",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Newsela"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/social5",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Library of Congress"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: activeMenu.subMenu === 4 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleToggle("subMenu", 4),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: activeMenu.subMenu === 5 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: "Mathematics"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        style: {
                                                                            display: `${activeMenu.subMenu === 5 ? "block" : "none"}`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/math1",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Khan Academy"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/math2",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Purplemath"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/math3",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Mathway"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/math4",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Socratic by Google AI"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/math5",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Symbolab"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: activeMenu.subMenu === 5 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleToggle("subMenu", 5),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: activeMenu.subMenu === 6 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/#",
                                                                        children: "AI Tools"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        style: {
                                                                            display: `${activeMenu.subMenu === 6 ? "block" : "none"}`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/ai_tools",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "30 AI Tools(free)"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/reacherstools",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Research Tools"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/website_designing",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Website Designing sites"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/data_analyst",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "AI Tool For Data Analyst"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/english_ai_tools",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "English Website / AI Tools"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/telugu_ai_tools",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Telugu Website / AI Tools"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/most_useful_ai_tools",
                                                                                    onClick: handleLinkClick,
                                                                                    children: "Most Useful AI Tools"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: activeMenu.subMenu === 6 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleToggle("subMenu", 6),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: activeMenu.mainMenu === 2 ? "dropdown-btn open" : "dropdown-btn",
                                                        onClick: ()=>handleToggle("mainMenu", 2),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    onClick: handleLinkClick,
                                                    children: "Contact"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "social-links",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "clearfix",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-facebook-square"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-pinterest-p"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nav-overlay",
                style: {
                    display: `${isSidebar ? "block" : "none"}`
                },
                onClick: handleSidebar
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header1.js




function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: `main-header header-style-one ${scroll ? "fixed-header" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "top-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "top-left",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "info clearfix",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-1"
                                                    }),
                                                    "Mon-Fri 8:00 am-6:00 pm"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "tel:912136660027",
                                                        children: "+91 8247266609"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-3"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "mailto:info@example.com",
                                                        children: "info@serpointservices.com"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "login",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: "Login"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "social-links clearfix",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-linkedin-in"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-lower",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "outer-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/images/logo.png",
                                                alt: ""
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "menu-area clearfix",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mobile-nav-toggler",
                                            onClick: handleMobileMenu,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-bar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-bar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-bar"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            className: "main-menu navbar-expand-md navbar-light",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "collapse navbar-collapse show clearfix",
                                                id: "navbarSupportedContent",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "menu-right-content"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `sticky-header ${scroll ? "animated slideInDown" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "outer-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/logo.png",
                                                alt: "/"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu-area clearfix",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        className: "main-menu clearfix",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "collapse navbar-collapse show clearfix",
                                            id: "navbarSupportedContent",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "menu-right-content"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {
                    handleMobileMenu: handleMobileMenu
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header2.js




function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `main-header header-style-two ${scroll ? "fixed-header" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "top-inner padding_0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "top-left",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "info clearfix",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-1"
                                                        }),
                                                        "Mon-Fri 8:00 am-6:00 pm"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-2"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "tel:912136660027",
                                                            children: "+91-213-666-0027"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-3"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "mailto:info@example.com",
                                                            children: "info@example.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "top-right",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "login",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: "Login"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "social-links clearfix",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook-f"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-linkedin-in"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-lower",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "outer-box",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo-box",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                            className: "logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "menu-area clearfix",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mobile-nav-toggler",
                                                onClick: handleMobileMenu,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-bar"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                className: "main-menu navbar-expand-md navbar-light",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "collapse navbar-collapse show clearfix",
                                                    id: "navbarSupportedContent",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "menu-right-content",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "btn-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                className: "theme-btn-one",
                                                children: "Free Consulting"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `sticky-header ${scroll ? "animated slideInDown" : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "outer-box",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo-box",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                            className: "logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-area clearfix",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            className: "main-menu navbar-expand-md navbar-light",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "collapse navbar-collapse show clearfix",
                                                id: "navbarSupportedContent",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "menu-right-content",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "btn-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: "Free Consulting"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {
                handleMobileMenu: handleMobileMenu,
                handleSidebar: handleSidebar,
                isSidebar: isSidebar
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header3.js




function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `main-header header-style-three ${scroll ? "fixed-header" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-lower",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "outer-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "outer-box",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo-box",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                            className: "logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo-2.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "menu-area clearfix",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mobile-nav-toggler",
                                                onClick: handleMobileMenu,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-bar"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                className: "main-menu navbar-expand-md navbar-light",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "collapse navbar-collapse show clearfix",
                                                    id: "navbarSupportedContent",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "menu-right-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "search-box-outer search-toggler",
                                                onClick: handlePopup,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-4"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "cart-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/shop",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon-26"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "btn-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    className: "theme-btn-one",
                                                    children: " Free Consulting "
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `sticky-header ${scroll ? "animated slideInDown" : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "outer-box",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo-box",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                            className: "logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-area clearfix",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            className: "main-menu navbar-expand-md navbar-light",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "collapse navbar-collapse show clearfix",
                                                id: "navbarSupportedContent",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "menu-right-content",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "btn-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: "Free Consulting"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {
                handleMobileMenu: handleMobileMenu,
                isSidebar: isSidebar,
                handleSidebar: handleSidebar
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/Layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 











function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = (0,react_.useState)(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = (0,react_.useState)(false);
    const handleMobileMenu = ()=>{
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    // Popup
    const [isPopup, setPopup] = (0,react_.useState)(false);
    const handlePopup = ()=>setPopup(!isPopup);
    // Sidebar
    const [isSidebar, setSidebar] = (0,react_.useState)(false);
    const handleSidebar = ()=>setSidebar(!isSidebar);
    (0,react_.useEffect)(()=>{
        const WOW = __webpack_require__(72996);
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DataBg, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `page-wrapper ${wrapperCls ? wrapperCls : ""}`,
                id: "#top",
                children: [
                    !headerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    headerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Header2, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 3 ? /*#__PURE__*/ jsx_runtime_.jsx(Header3, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchPopup, {
                        isPopup: isPopup,
                        handlePopup: handlePopup
                    }),
                    breadcrumbTitle && /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {
                        breadcrumbTitle: breadcrumbTitle
                    }),
                    children,
                    !footerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}),
                    footerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}) : null,
                    !footerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Footer2, {}),
                    footerStyle == 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer2, {}) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BackToTop, {
                scroll: scroll
            })
        ]
    });
}


/***/ }),

/***/ 95764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62109);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92162);
/* harmony import */ var public_assets_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_css_color_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34142);
/* harmony import */ var public_assets_css_color_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_color_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61676);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56279);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43986);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88368);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79447);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36271);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_9__);






// import "swiper/css/navigation"



const metadata = {
    title: "Unicorn Startup",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        className: `${(_lib_font__WEBPACK_IMPORTED_MODULE_8___default().variable)} ${(_lib_font__WEBPACK_IMPORTED_MODULE_9___default().variable)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 40537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./components/elements/Preloader.js

function Preloader() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "loader-wrap",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "preloader",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "preloader-close",
                        children: "Preloader Close"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layer layer-one",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "overlay"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layer layer-two",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "overlay"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layer layer-three",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "overlay"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/loading.js


function loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Preloader, {})
    });
}


/***/ }),

/***/ 52987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31841);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Error404() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            headerStyle: 2,
            footerStyle: 1,
            breadcrumbTitle: "404 Error",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "error-section p_relative centred",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "auto-container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "inner-box",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: "error-image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "assets/images/icons/error-1.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    "Oops! That Page Can Not ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "be Found."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                className: "theme-btn-one",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-5"
                                    }),
                                    "Back to Homepage"
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 31841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`F:\Project\Working Project\unicorn\unicorn\components\layout\Layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92162:
/***/ (() => {



/***/ }),

/***/ 34142:
/***/ (() => {



/***/ }),

/***/ 61676:
/***/ (() => {



/***/ })

};
;