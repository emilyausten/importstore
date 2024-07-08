import React from "react";
import "../_next/static/css/3c0428b06eede8e2.css";
import "../_next/static/css/4b8fa46c8d7c90bb.css";
import "../_next/static/css/c59baa5a4e7fea3c.css";
import "../_next/static/css/403f1c5412564cd9.css";
import "../_next/static/css/index.css";
import "../styles/ingresse.css";
import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";

import logoIngresseBlack from "../_next/static/media/logo-ingresse-black.567528d5.svg";
import logoIngresseColor from "../_next/static/media/logo-ingresse-colorful.c63e2f05.svg";
import america from "../_next/static/media/america.241919fd.svg";
import spanish from "../_next/static/media/spanish.95c98f6b.svg";
import ticketIcon from "../_next/static/media/ticket-icon.9951c264.svg";
import brazil from "../_next/static/media/brazil.535365a5.svg";
import { LuMapPin } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

export default function PageIndex() {
  return (
    <>
      <link
        rel="stylesheet"
        href="../_next/static/css/403f1c5412564cd9.css"
        data-precedence="next"
      />
      <link rel="stylesheet" href="../_next/static/css/3c0428b06eede8e2.css" />
      <link rel="stylesheet" href="../_next/static/css/4b8fa46c8d7c90bb.css" />
      <link rel="stylesheet" href="../_next/static/css/c59baa5a4e7fea3c.css" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        .swal2-popup.swal2-toast {\n            box-sizing: border-box;\n            grid-column: 1/4 !important;\n            grid-row: 1/4 !important;\n            grid-template-columns: min-content auto min-content;\n            padding: 1em;\n            overflow-y: hidden;\n            background: #fff;\n            box-shadow: 0 0 1px rgba(0, 0, 0, .075), 0 1px 2px rgba(0, 0, 0, .075), 1px 2px 4px rgba(0, 0, 0, .075), 1px 3px 8px rgba(0, 0, 0, .075), 2px 4px 16px rgba(0, 0, 0, .075);\n            pointer-events: all\n        }\n\n        .swal2-popup.swal2-toast>* {\n            grid-column: 2\n        }\n\n        .swal2-popup.swal2-toast .swal2-title {\n            margin: .5em 1em;\n            padding: 0;\n            font-size: 1em;\n            text-align: initial\n        }\n\n        .swal2-popup.swal2-toast .swal2-loading {\n            justify-content: center\n        }\n\n        .swal2-popup.swal2-toast .swal2-input {\n            height: 2em;\n            margin: .5em;\n            font-size: 1em\n        }\n\n        .swal2-popup.swal2-toast .swal2-validation-message {\n            font-size: 1em\n        }\n\n        .swal2-popup.swal2-toast .swal2-footer {\n            margin: .5em 0 0;\n            padding: .5em 0 0;\n            font-size: .8em\n        }\n\n        .swal2-popup.swal2-toast .swal2-close {\n            grid-column: 3/3;\n            grid-row: 1/99;\n            align-self: center;\n            width: .8em;\n            height: .8em;\n            margin: 0;\n            font-size: 2em\n        }\n\n        .swal2-popup.swal2-toast .swal2-html-container {\n            margin: .5em 1em;\n            padding: 0;\n            overflow: initial;\n            font-size: 1em;\n            text-align: initial\n        }\n\n        .swal2-popup.swal2-toast .swal2-html-container:empty {\n            padding: 0\n        }\n\n        .swal2-popup.swal2-toast .swal2-loader {\n            grid-column: 1;\n            grid-row: 1/99;\n            align-self: center;\n            width: 2em;\n            height: 2em;\n            margin: .25em\n        }\n\n        .swal2-popup.swal2-toast .swal2-icon {\n            grid-column: 1;\n            grid-row: 1/99;\n            align-self: center;\n            width: 2em;\n            min-width: 2em;\n            height: 2em;\n            margin: 0 .5em 0 0\n        }\n\n        .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n            display: flex;\n            align-items: center;\n            font-size: 1.8em;\n            font-weight: bold\n        }\n\n        .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n            width: 2em;\n            height: 2em\n        }\n\n        .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n            top: .875em;\n            width: 1.375em\n        }\n\n        .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n            left: .3125em\n        }\n\n        .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n            right: .3125em\n        }\n\n        .swal2-popup.swal2-toast .swal2-actions {\n            justify-content: flex-start;\n            height: auto;\n            margin: 0;\n            margin-top: .5em;\n            padding: 0 .5em\n        }\n\n        .swal2-popup.swal2-toast .swal2-styled {\n            margin: .25em .5em;\n            padding: .4em .6em;\n            font-size: 1em\n        }\n\n        .swal2-popup.swal2-toast .swal2-success {\n            border-color: #a5dc86\n        }\n\n        .swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line] {\n            position: absolute;\n            width: 1.6em;\n            height: 3em;\n            border-radius: 50%\n        }\n\n        .swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left] {\n            top: -0.8em;\n            left: -0.5em;\n            transform: rotate(-45deg);\n            transform-origin: 2em 2em;\n            border-radius: 4em 0 0 4em\n        }\n\n        .swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right] {\n            top: -0.25em;\n            left: .9375em;\n            transform-origin: 0 1.5em;\n            border-radius: 0 4em 4em 0\n        }\n\n        .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n            width: 2em;\n            height: 2em\n        }\n\n        .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n            top: 0;\n            left: .4375em;\n            width: .4375em;\n            height: 2.6875em\n        }\n\n        .swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line] {\n            height: .3125em\n        }\n\n        .swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip] {\n            top: 1.125em;\n            left: .1875em;\n            width: .75em\n        }\n\n        .swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long] {\n            top: .9375em;\n            right: .1875em;\n            width: 1.375em\n        }\n\n        .swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {\n            animation: swal2-toast-animate-success-line-tip .75s\n        }\n\n        .swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {\n            animation: swal2-toast-animate-success-line-long .75s\n        }\n\n        .swal2-popup.swal2-toast.swal2-show {\n            animation: swal2-toast-show .5s\n        }\n\n        .swal2-popup.swal2-toast.swal2-hide {\n            animation: swal2-toast-hide .1s forwards\n        }\n\n        div:where(.swal2-container) {\n            display: grid;\n            position: fixed;\n            z-index: 1060;\n            inset: 0;\n            box-sizing: border-box;\n            grid-template-areas: "top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";\n            grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);\n            height: 100%;\n            padding: .625em;\n            overflow-x: hidden;\n            transition: background-color .1s;\n            -webkit-overflow-scrolling: touch\n        }\n\n        div:where(.swal2-container).swal2-backdrop-show,\n        div:where(.swal2-container).swal2-noanimation {\n            background: rgba(0, 0, 0, .4)\n        }\n\n        div:where(.swal2-container).swal2-backdrop-hide {\n            background: rgba(0, 0, 0, 0) !important\n        }\n\n        div:where(.swal2-container).swal2-top-start,\n        div:where(.swal2-container).swal2-center-start,\n        div:where(.swal2-container).swal2-bottom-start {\n            grid-template-columns: minmax(0, 1fr) auto auto\n        }\n\n        div:where(.swal2-container).swal2-top,\n        div:where(.swal2-container).swal2-center,\n        div:where(.swal2-container).swal2-bottom {\n            grid-template-columns: auto minmax(0, 1fr) auto\n        }\n\n        div:where(.swal2-container).swal2-top-end,\n        div:where(.swal2-container).swal2-center-end,\n        div:where(.swal2-container).swal2-bottom-end {\n            grid-template-columns: auto auto minmax(0, 1fr)\n        }\n\n        div:where(.swal2-container).swal2-top-start>.swal2-popup {\n            align-self: start\n        }\n\n        div:where(.swal2-container).swal2-top>.swal2-popup {\n            grid-column: 2;\n            place-self: start center\n        }\n\n        div:where(.swal2-container).swal2-top-end>.swal2-popup,\n        div:where(.swal2-container).swal2-top-right>.swal2-popup {\n            grid-column: 3;\n            place-self: start end\n        }\n\n        div:where(.swal2-container).swal2-center-start>.swal2-popup,\n        div:where(.swal2-container).swal2-center-left>.swal2-popup {\n            grid-row: 2;\n            align-self: center\n        }\n\n        div:where(.swal2-container).swal2-center>.swal2-popup {\n            grid-column: 2;\n            grid-row: 2;\n            place-self: center center\n        }\n\n        div:where(.swal2-container).swal2-center-end>.swal2-popup,\n        div:where(.swal2-container).swal2-center-right>.swal2-popup {\n            grid-column: 3;\n            grid-row: 2;\n            place-self: center end\n        }\n\n        div:where(.swal2-container).swal2-bottom-start>.swal2-popup,\n        div:where(.swal2-container).swal2-bottom-left>.swal2-popup {\n            grid-column: 1;\n            grid-row: 3;\n            align-self: end\n        }\n\n        div:where(.swal2-container).swal2-bottom>.swal2-popup {\n            grid-column: 2;\n            grid-row: 3;\n            place-self: end center\n        }\n\n        div:where(.swal2-container).swal2-bottom-end>.swal2-popup,\n        div:where(.swal2-container).swal2-bottom-right>.swal2-popup {\n            grid-column: 3;\n            grid-row: 3;\n            place-self: end end\n        }\n\n        div:where(.swal2-container).swal2-grow-row>.swal2-popup,\n        div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup {\n            grid-column: 1/4;\n            width: 100%\n        }\n\n        div:where(.swal2-container).swal2-grow-column>.swal2-popup,\n        div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup {\n            grid-row: 1/4;\n            align-self: stretch\n        }\n\n        div:where(.swal2-container).swal2-no-transition {\n            transition: none !important\n        }\n\n        div:where(.swal2-container) div:where(.swal2-popup) {\n            display: none;\n            position: relative;\n            box-sizing: border-box;\n            grid-template-columns: minmax(0, 100%);\n            width: 32em;\n            max-width: 100%;\n            padding: 0 0 1.25em;\n            border: none;\n            border-radius: 5px;\n            background: #fff;\n            color: #545454;\n            font-family: inherit;\n            font-size: 1rem\n        }\n\n        div:where(.swal2-container) div:where(.swal2-popup):focus {\n            outline: none\n        }\n\n        div:where(.swal2-container) div:where(.swal2-popup).swal2-loading {\n            overflow-y: hidden\n        }\n\n        div:where(.swal2-container) h2:where(.swal2-title) {\n            position: relative;\n            max-width: 100%;\n            margin: 0;\n            padding: .8em 1em 0;\n            color: inherit;\n            font-size: 1.875em;\n            font-weight: 600;\n            text-align: center;\n            text-transform: none;\n            word-wrap: break-word\n        }\n\n        div:where(.swal2-container) div:where(.swal2-actions) {\n            display: flex;\n            z-index: 1;\n            box-sizing: border-box;\n            flex-wrap: wrap;\n            align-items: center;\n            justify-content: center;\n            width: auto;\n            margin: 1.25em auto 0;\n            padding: 0\n        }\n\n        div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled] {\n            opacity: .4\n        }\n\n        div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover {\n            background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))\n        }\n\n        div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active {\n            background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))\n        }\n\n        div:where(.swal2-container) div:where(.swal2-loader) {\n            display: none;\n            align-items: center;\n            justify-content: center;\n            width: 2.2em;\n            height: 2.2em;\n            margin: 0 1.875em;\n            animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n            border-width: .25em;\n            border-style: solid;\n            border-radius: 100%;\n            border-color: #2778c4 rgba(0, 0, 0, 0) #2778c4 rgba(0, 0, 0, 0)\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled) {\n            margin: .3125em;\n            padding: .625em 1.1em;\n            transition: box-shadow .1s;\n            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0);\n            font-weight: 500\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled):not([disabled]) {\n            cursor: pointer\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm) {\n            border: 0;\n            border-radius: .25em;\n            background: initial;\n            background-color: #7066e0;\n            color: #fff;\n            font-size: 1em\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible {\n            box-shadow: 0 0 0 3px rgba(112, 102, 224, .5)\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny) {\n            border: 0;\n            border-radius: .25em;\n            background: initial;\n            background-color: #dc3741;\n            color: #fff;\n            font-size: 1em\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible {\n            box-shadow: 0 0 0 3px rgba(220, 55, 65, .5)\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel) {\n            border: 0;\n            border-radius: .25em;\n            background: initial;\n            background-color: #6e7881;\n            color: #fff;\n            font-size: 1em\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible {\n            box-shadow: 0 0 0 3px rgba(110, 120, 129, .5)\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible {\n            box-shadow: 0 0 0 3px rgba(100, 150, 200, .5)\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled):focus-visible {\n            outline: none\n        }\n\n        div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner {\n            border: 0\n        }\n\n        div:where(.swal2-container) div:where(.swal2-footer) {\n            margin: 1em 0 0;\n            padding: 1em 1em 0;\n            border-top: 1px solid #eee;\n            color: inherit;\n            font-size: 1em;\n            text-align: center\n        }\n\n        div:where(.swal2-container) .swal2-timer-progress-bar-container {\n            position: absolute;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            grid-column: auto !important;\n            overflow: hidden;\n            border-bottom-right-radius: 5px;\n            border-bottom-left-radius: 5px\n        }\n\n        div:where(.swal2-container) div:where(.swal2-timer-progress-bar) {\n            width: 100%;\n            height: .25em;\n            background: rgba(0, 0, 0, .2)\n        }\n\n        div:where(.swal2-container) img:where(.swal2-image) {\n            max-width: 100%;\n            margin: 2em auto 1em\n        }\n\n        div:where(.swal2-container) button:where(.swal2-close) {\n            z-index: 2;\n            align-items: center;\n            justify-content: center;\n            width: 1.2em;\n            height: 1.2em;\n            margin-top: 0;\n            margin-right: 0;\n            margin-bottom: -1.2em;\n            padding: 0;\n            overflow: hidden;\n            transition: color .1s, box-shadow .1s;\n            border: none;\n            border-radius: 5px;\n            background: rgba(0, 0, 0, 0);\n            color: #ccc;\n            font-family: monospace;\n            font-size: 2.5em;\n            cursor: pointer;\n            justify-self: end\n        }\n\n        div:where(.swal2-container) button:where(.swal2-close):hover {\n            transform: none;\n            background: rgba(0, 0, 0, 0);\n            color: #f27474\n        }\n\n        div:where(.swal2-container) button:where(.swal2-close):focus-visible {\n            outline: none;\n            box-shadow: inset 0 0 0 3px rgba(100, 150, 200, .5)\n        }\n\n        div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner {\n            border: 0\n        }\n\n        div:where(.swal2-container) .swal2-html-container {\n            z-index: 1;\n            justify-content: center;\n            margin: 0;\n            padding: 1em 1.6em .3em;\n            overflow: auto;\n            color: inherit;\n            font-size: 1.125em;\n            font-weight: normal;\n            line-height: normal;\n            text-align: center;\n            word-wrap: break-word;\n            word-break: break-word\n        }\n\n        div:where(.swal2-container) input:where(.swal2-input),\n        div:where(.swal2-container) input:where(.swal2-file),\n        div:where(.swal2-container) textarea:where(.swal2-textarea),\n        div:where(.swal2-container) select:where(.swal2-select),\n        div:where(.swal2-container) div:where(.swal2-radio),\n        div:where(.swal2-container) label:where(.swal2-checkbox) {\n            margin: 1em 2em 3px\n        }\n\n        div:where(.swal2-container) input:where(.swal2-input),\n        div:where(.swal2-container) input:where(.swal2-file),\n        div:where(.swal2-container) textarea:where(.swal2-textarea) {\n            box-sizing: border-box;\n            width: auto;\n            transition: border-color .1s, box-shadow .1s;\n            border: 1px solid #d9d9d9;\n            border-radius: .1875em;\n            background: rgba(0, 0, 0, 0);\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .06), 0 0 0 3px rgba(0, 0, 0, 0);\n            color: inherit;\n            font-size: 1.125em\n        }\n\n        div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,\n        div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,\n        div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror {\n            border-color: #f27474 !important;\n            box-shadow: 0 0 2px #f27474 !important\n        }\n\n        div:where(.swal2-container) input:where(.swal2-input):focus,\n        div:where(.swal2-container) input:where(.swal2-file):focus,\n        div:where(.swal2-container) textarea:where(.swal2-textarea):focus {\n            border: 1px solid #b4dbed;\n            outline: none;\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .06), 0 0 0 3px rgba(100, 150, 200, .5)\n        }\n\n        div:where(.swal2-container) input:where(.swal2-input)::placeholder,\n        div:where(.swal2-container) input:where(.swal2-file)::placeholder,\n        div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder {\n            color: #ccc\n        }\n\n        div:where(.swal2-container) .swal2-range {\n            margin: 1em 2em 3px;\n            background: #fff\n        }\n\n        div:where(.swal2-container) .swal2-range input {\n            width: 80%\n        }\n\n        div:where(.swal2-container) .swal2-range output {\n            width: 20%;\n            color: inherit;\n            font-weight: 600;\n            text-align: center\n        }\n\n        div:where(.swal2-container) .swal2-range input,\n        div:where(.swal2-container) .swal2-range output {\n            height: 2.625em;\n            padding: 0;\n            font-size: 1.125em;\n            line-height: 2.625em\n        }\n\n        div:where(.swal2-container) .swal2-input {\n            height: 2.625em;\n            padding: 0 .75em\n        }\n\n        div:where(.swal2-container) .swal2-file {\n            width: 75%;\n            margin-right: auto;\n            margin-left: auto;\n            background: rgba(0, 0, 0, 0);\n            font-size: 1.125em\n        }\n\n        div:where(.swal2-container) .swal2-textarea {\n            height: 6.75em;\n            padding: .75em\n        }\n\n        div:where(.swal2-container) .swal2-select {\n            min-width: 50%;\n            max-width: 100%;\n            padding: .375em .625em;\n            background: rgba(0, 0, 0, 0);\n            color: inherit;\n            font-size: 1.125em\n        }\n\n        div:where(.swal2-container) .swal2-radio,\n        div:where(.swal2-container) .swal2-checkbox {\n            align-items: center;\n            justify-content: center;\n            background: #fff;\n            color: inherit\n        }\n\n        div:where(.swal2-container) .swal2-radio label,\n        div:where(.swal2-container) .swal2-checkbox label {\n            margin: 0 .6em;\n            font-size: 1.125em\n        }\n\n        div:where(.swal2-container) .swal2-radio input,\n        div:where(.swal2-container) .swal2-checkbox input {\n            flex-shrink: 0;\n            margin: 0 .4em\n        }\n\n        div:where(.swal2-container) label:where(.swal2-input-label) {\n            display: flex;\n            justify-content: center;\n            margin: 1em auto 0\n        }\n\n        div:where(.swal2-container) div:where(.swal2-validation-message) {\n            align-items: center;\n            justify-content: center;\n            margin: 1em 0 0;\n            padding: .625em;\n            overflow: hidden;\n            background: #f0f0f0;\n            color: #666;\n            font-size: 1em;\n            font-weight: 300\n        }\n\n        div:where(.swal2-container) div:where(.swal2-validation-message)::before {\n            content: "!";\n            display: inline-block;\n            width: 1.5em;\n            min-width: 1.5em;\n            height: 1.5em;\n            margin: 0 .625em;\n            border-radius: 50%;\n            background-color: #f27474;\n            color: #fff;\n            font-weight: 600;\n            line-height: 1.5em;\n            text-align: center\n        }\n\n        div:where(.swal2-container) .swal2-progress-steps {\n            flex-wrap: wrap;\n            align-items: center;\n            max-width: 100%;\n            margin: 1.25em auto;\n            padding: 0;\n            background: rgba(0, 0, 0, 0);\n            font-weight: 600\n        }\n\n        div:where(.swal2-container) .swal2-progress-steps li {\n            display: inline-block;\n            position: relative\n        }\n\n        div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step {\n            z-index: 20;\n            flex-shrink: 0;\n            width: 2em;\n            height: 2em;\n            border-radius: 2em;\n            background: #2778c4;\n            color: #fff;\n            line-height: 2em;\n            text-align: center\n        }\n\n        div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {\n            background: #2778c4\n        }\n\n        div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step {\n            background: #add8e6;\n            color: #fff\n        }\n\n        div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line {\n            background: #add8e6\n        }\n\n        div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line {\n            z-index: 10;\n            flex-shrink: 0;\n            width: 2.5em;\n            height: .4em;\n            margin: 0 -1px;\n            background: #2778c4\n        }\n\n        div:where(.swal2-icon) {\n            position: relative;\n            box-sizing: content-box;\n            justify-content: center;\n            width: 5em;\n            height: 5em;\n            margin: 2.5em auto .6em;\n            border: 0.25em solid rgba(0, 0, 0, 0);\n            border-radius: 50%;\n            border-color: #000;\n            font-family: inherit;\n            line-height: 5em;\n            cursor: default;\n            user-select: none\n        }\n\n        div:where(.swal2-icon) .swal2-icon-content {\n            display: flex;\n            align-items: center;\n            font-size: 3.75em\n        }\n\n        div:where(.swal2-icon).swal2-error {\n            border-color: #f27474;\n            color: #f27474\n        }\n\n        div:where(.swal2-icon).swal2-error .swal2-x-mark {\n            position: relative;\n            flex-grow: 1\n        }\n\n        div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line] {\n            display: block;\n            position: absolute;\n            top: 2.3125em;\n            width: 2.9375em;\n            height: .3125em;\n            border-radius: .125em;\n            background-color: #f27474\n        }\n\n        div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left] {\n            left: 1.0625em;\n            transform: rotate(45deg)\n        }\n\n        div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right] {\n            right: 1em;\n            transform: rotate(-45deg)\n        }\n\n        div:where(.swal2-icon).swal2-error.swal2-icon-show {\n            animation: swal2-animate-error-icon .5s\n        }\n\n        div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark {\n            animation: swal2-animate-error-x-mark .5s\n        }\n\n        div:where(.swal2-icon).swal2-warning {\n            border-color: #facea8;\n            color: #f8bb86\n        }\n\n        div:where(.swal2-icon).swal2-warning.swal2-icon-show {\n            animation: swal2-animate-error-icon .5s\n        }\n\n        div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content {\n            animation: swal2-animate-i-mark .5s\n        }\n\n        div:where(.swal2-icon).swal2-info {\n            border-color: #9de0f6;\n            color: #3fc3ee\n        }\n\n        div:where(.swal2-icon).swal2-info.swal2-icon-show {\n            animation: swal2-animate-error-icon .5s\n        }\n\n        div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content {\n            animation: swal2-animate-i-mark .8s\n        }\n\n        div:where(.swal2-icon).swal2-question {\n            border-color: #c9dae1;\n            color: #87adbd\n        }\n\n        div:where(.swal2-icon).swal2-question.swal2-icon-show {\n            animation: swal2-animate-error-icon .5s\n        }\n\n        div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content {\n            animation: swal2-animate-question-mark .8s\n        }\n\n        div:where(.swal2-icon).swal2-success {\n            border-color: #a5dc86;\n            color: #a5dc86\n        }\n\n        div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line] {\n            position: absolute;\n            width: 3.75em;\n            height: 7.5em;\n            border-radius: 50%\n        }\n\n        div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left] {\n            top: -0.4375em;\n            left: -2.0635em;\n            transform: rotate(-45deg);\n            transform-origin: 3.75em 3.75em;\n            border-radius: 7.5em 0 0 7.5em\n        }\n\n        div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right] {\n            top: -0.6875em;\n            left: 1.875em;\n            transform: rotate(-45deg);\n            transform-origin: 0 3.75em;\n            border-radius: 0 7.5em 7.5em 0\n        }\n\n        div:where(.swal2-icon).swal2-success .swal2-success-ring {\n            position: absolute;\n            z-index: 2;\n            top: -0.25em;\n            left: -0.25em;\n            box-sizing: content-box;\n            width: 100%;\n            height: 100%;\n            border: .25em solid rgba(165, 220, 134, .3);\n            border-radius: 50%\n        }\n\n        div:where(.swal2-icon).swal2-success .swal2-success-fix {\n            position: absolute;\n            z-index: 1;\n            top: .5em;\n            left: 1.625em;\n            width: .4375em;\n            height: 5.625em;\n            transform: rotate(-45deg)\n        }\n\n        div:where(.swal2-icon).swal2-success [class^=swal2-success-line] {\n            display: block;\n            position: absolute;\n            z-index: 2;\n            height: .3125em;\n            border-radius: .125em;\n            background-color: #a5dc86\n        }\n\n        div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip] {\n            top: 2.875em;\n            left: .8125em;\n            width: 1.5625em;\n            transform: rotate(45deg)\n        }\n\n        div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long] {\n            top: 2.375em;\n            right: .5em;\n            width: 2.9375em;\n            transform: rotate(-45deg)\n        }\n\n        div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip {\n            animation: swal2-animate-success-line-tip .75s\n        }\n\n        div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long {\n            animation: swal2-animate-success-line-long .75s\n        }\n\n        div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right {\n            animation: swal2-rotate-success-circular-line 4.25s ease-in\n        }\n\n        [class^=swal2] {\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0)\n        }\n\n        .swal2-show {\n            animation: swal2-show .3s\n        }\n\n        .swal2-hide {\n            animation: swal2-hide .15s forwards\n        }\n\n        .swal2-noanimation {\n            transition: none\n        }\n\n        .swal2-scrollbar-measure {\n            position: absolute;\n            top: -9999px;\n            width: 50px;\n            height: 50px;\n            overflow: scroll\n        }\n\n        .swal2-rtl .swal2-close {\n            margin-right: initial;\n            margin-left: 0\n        }\n\n        .swal2-rtl .swal2-timer-progress-bar {\n            right: 0;\n            left: auto\n        }\n\n        @keyframes swal2-toast-show {\n            0% {\n                transform: translateY(-0.625em) rotateZ(2deg)\n            }\n\n            33% {\n                transform: translateY(0) rotateZ(-2deg)\n            }\n\n            66% {\n                transform: translateY(0.3125em) rotateZ(2deg)\n            }\n\n            100% {\n                transform: translateY(0) rotateZ(0deg)\n            }\n        }\n\n        @keyframes swal2-toast-hide {\n            100% {\n                transform: rotateZ(1deg);\n                opacity: 0\n            }\n        }\n\n        @keyframes swal2-toast-animate-success-line-tip {\n            0% {\n                top: .5625em;\n                left: .0625em;\n                width: 0\n            }\n\n            54% {\n                top: .125em;\n                left: .125em;\n                width: 0\n            }\n\n            70% {\n                top: .625em;\n                left: -0.25em;\n                width: 1.625em\n            }\n\n            84% {\n                top: 1.0625em;\n                left: .75em;\n                width: .5em\n            }\n\n            100% {\n                top: 1.125em;\n                left: .1875em;\n                width: .75em\n            }\n        }\n\n        @keyframes swal2-toast-animate-success-line-long {\n            0% {\n                top: 1.625em;\n                right: 1.375em;\n                width: 0\n            }\n\n            65% {\n                top: 1.25em;\n                right: .9375em;\n                width: 0\n            }\n\n            84% {\n                top: .9375em;\n                right: 0;\n                width: 1.125em\n            }\n\n            100% {\n                top: .9375em;\n                right: .1875em;\n                width: 1.375em\n            }\n        }\n\n        @keyframes swal2-show {\n            0% {\n                transform: scale(0.7)\n            }\n\n            45% {\n                transform: scale(1.05)\n            }\n\n            80% {\n                transform: scale(0.95)\n            }\n\n            100% {\n                transform: scale(1)\n            }\n        }\n\n        @keyframes swal2-hide {\n            0% {\n                transform: scale(1);\n                opacity: 1\n            }\n\n            100% {\n                transform: scale(0.5);\n                opacity: 0\n            }\n        }\n\n        @keyframes swal2-animate-success-line-tip {\n            0% {\n                top: 1.1875em;\n                left: .0625em;\n                width: 0\n            }\n\n            54% {\n                top: 1.0625em;\n                left: .125em;\n                width: 0\n            }\n\n            70% {\n                top: 2.1875em;\n                left: -0.375em;\n                width: 3.125em\n            }\n\n            84% {\n                top: 3em;\n                left: 1.3125em;\n                width: 1.0625em\n            }\n\n            100% {\n                top: 2.8125em;\n                left: .8125em;\n                width: 1.5625em\n            }\n        }\n\n        @keyframes swal2-animate-success-line-long {\n            0% {\n                top: 3.375em;\n                right: 2.875em;\n                width: 0\n            }\n\n            65% {\n                top: 3.375em;\n                right: 2.875em;\n                width: 0\n            }\n\n            84% {\n                top: 2.1875em;\n                right: 0;\n                width: 3.4375em\n            }\n\n            100% {\n                top: 2.375em;\n                right: .5em;\n                width: 2.9375em\n            }\n        }\n\n        @keyframes swal2-rotate-success-circular-line {\n            0% {\n                transform: rotate(-45deg)\n            }\n\n            5% {\n                transform: rotate(-45deg)\n            }\n\n            12% {\n                transform: rotate(-405deg)\n            }\n\n            100% {\n                transform: rotate(-405deg)\n            }\n        }\n\n        @keyframes swal2-animate-error-x-mark {\n            0% {\n                margin-top: 1.625em;\n                transform: scale(0.4);\n                opacity: 0\n            }\n\n            50% {\n                margin-top: 1.625em;\n                transform: scale(0.4);\n                opacity: 0\n            }\n\n            80% {\n                margin-top: -0.375em;\n                transform: scale(1.15)\n            }\n\n            100% {\n                margin-top: 0;\n                transform: scale(1);\n                opacity: 1\n            }\n        }\n\n        @keyframes swal2-animate-error-icon {\n            0% {\n                transform: rotateX(100deg);\n                opacity: 0\n            }\n\n            100% {\n                transform: rotateX(0deg);\n                opacity: 1\n            }\n        }\n\n        @keyframes swal2-rotate-loading {\n            0% {\n                transform: rotate(0deg)\n            }\n\n            100% {\n                transform: rotate(360deg)\n            }\n        }\n\n        @keyframes swal2-animate-question-mark {\n            0% {\n                transform: rotateY(-360deg)\n            }\n\n            100% {\n                transform: rotateY(0)\n            }\n        }\n\n        @keyframes swal2-animate-i-mark {\n            0% {\n                transform: rotateZ(45deg);\n                opacity: 0\n            }\n\n            25% {\n                transform: rotateZ(-25deg);\n                opacity: .4\n            }\n\n            50% {\n                transform: rotateZ(15deg);\n                opacity: .8\n            }\n\n            75% {\n                transform: rotateZ(-5deg);\n                opacity: 1\n            }\n\n            100% {\n                transform: rotateX(0);\n                opacity: 1\n            }\n        }\n\n        body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n            overflow: hidden\n        }\n\n        body.swal2-height-auto {\n            height: auto !important\n        }\n\n        body.swal2-no-backdrop .swal2-container {\n            background-color: rgba(0, 0, 0, 0) !important;\n            pointer-events: none\n        }\n\n        body.swal2-no-backdrop .swal2-container .swal2-popup {\n            pointer-events: all\n        }\n\n        body.swal2-no-backdrop .swal2-container .swal2-modal {\n            box-shadow: 0 0 10px rgba(0, 0, 0, .4)\n        }\n\n        @media print {\n            body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n                overflow-y: scroll !important\n            }\n\n            body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true] {\n                display: none\n            }\n\n            body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {\n                position: static !important\n            }\n        }\n\n        body.swal2-toast-shown .swal2-container {\n            box-sizing: border-box;\n            width: 360px;\n            max-width: 100%;\n            background-color: rgba(0, 0, 0, 0);\n            pointer-events: none\n        }\n\n        body.swal2-toast-shown .swal2-container.swal2-top {\n            inset: 0 auto auto 50%;\n            transform: translateX(-50%)\n        }\n\n        body.swal2-toast-shown .swal2-container.swal2-top-end,\n        body.swal2-toast-shown .swal2-container.swal2-top-right {\n            inset: 0 0 auto auto\n        }\n\n        body.swal2-toast-shown .swal2-container.swal2-top-start,\n        body.swal2-toast-shown .swal2-container.swal2-top-left {\n            inset: 0 auto auto 0\n        }\n\n        body.swal2-toast-shown .swal2-container.swal2-center-start,\n        body.swal2-toast-shown .swal2-container.swal2-center-left {\n            inset: 50% auto auto 0;\n            transform: translateY(-50%)\n        }\n\n        body.swal2-toast-shown .swal2-container.swal2-center {\n            inset: 50% auto auto 50%;\n            transform: translate(-50%, -50%)\n        }\n\n        body.swal2-toast-shown .swal2-container.swal2-center-end,\n        body.swal2-toast-shown .swal2-container.swal2-center-right {\n            inset: 50% 0 auto auto;\n            transform: translateY(-50%)\n        }\n\n        body.swal2-toast-shown .swal2-container.swal2-bottom-start,\n        body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n            inset: auto auto 0 0\n        }\n\n        body.swal2-toast-shown .swal2-container.swal2-bottom {\n            inset: auto auto 0 50%;\n            transform: translateX(-50%)\n        }\n\n        body.swal2-toast-shown .swal2-container.swal2-bottom-end,\n        body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n            inset: auto 0 0 auto\n        }\n    ',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .vue-notification-group {\n            display: block;\n            position: fixed;\n            z-index: 5000\n        }\n\n        .vue-notification-wrapper {\n            display: block;\n            overflow: hidden;\n            width: 100%;\n            margin: 0;\n            padding: 0\n        }\n\n        .notification-title {\n            font-weight: 600\n        }\n\n        .vue-notification-template {\n            display: block;\n            box-sizing: border-box;\n            background: white;\n            text-align: left\n        }\n\n        .vue-notification {\n            display: block;\n            box-sizing: border-box;\n            text-align: left;\n            font-size: 12px;\n            padding: 10px;\n            margin: 0 5px 5px;\n            color: #fff;\n            background: #44A4FC;\n            border-left: 5px solid #187FE7\n        }\n\n        .vue-notification.warn {\n            background: #ffb648;\n            border-left-color: #f48a06\n        }\n\n        .vue-notification.error {\n            background: #E54D42;\n            border-left-color: #b82e24\n        }\n\n        .vue-notification.success {\n            background: #68CD86;\n            border-left-color: #42a85f\n        }\n\n        .vn-fade-enter-active,\n        .vn-fade-leave-active,\n        .vn-fade-move {\n            transition: all .5s\n        }\n\n        .vn-fade-enter-from,\n        .vn-fade-leave-to {\n            opacity: 0\n        }\n    ",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .vue-notification-group {\n            display: block;\n            position: fixed;\n            z-index: 5000\n        }\n\n        .vue-notification-wrapper {\n            display: block;\n            overflow: hidden;\n            width: 100%;\n            margin: 0;\n            padding: 0\n        }\n\n        .notification-title {\n            font-weight: 600\n        }\n\n        .vue-notification-template {\n            display: block;\n            box-sizing: border-box;\n            background: white;\n            text-align: left\n        }\n\n        .vue-notification {\n            display: block;\n            box-sizing: border-box;\n            text-align: left;\n            font-size: 12px;\n            padding: 10px;\n            margin: 0 5px 5px;\n            color: #fff;\n            background: #44A4FC;\n            border-left: 5px solid #187FE7\n        }\n\n        .vue-notification.warn {\n            background: #ffb648;\n            border-left-color: #f48a06\n        }\n\n        .vue-notification.error {\n            background: #E54D42;\n            border-left-color: #b82e24\n        }\n\n        .vue-notification.success {\n            background: #68CD86;\n            border-left-color: #42a85f\n        }\n\n        .vn-fade-enter-active,\n        .vn-fade-leave-active,\n        .vn-fade-move {\n            transition: all .5s\n        }\n\n        .vn-fade-enter-from,\n        .vn-fade-leave-to {\n            opacity: 0\n        }\n    ",
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n        @font-face {\n            font-weight: 400;\n            font-style: normal;\n            font-family: circular;\n\n            src: url('chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/fonts/CircularXXWeb-Book.woff2') format('woff2');\n        }\n\n        @font-face {\n            font-weight: 700;\n            font-style: normal;\n            font-family: circular;\n\n            src: url('chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/fonts/CircularXXWeb-Bold.woff2') format('woff2');\n        }\n    ",
        }}
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="/favicon.ico"
        type="image/x-icon"
        sizes="256x256"
      />
      <meta name="next-size-adjust" />
      <meta name="google" content="notranslate" />
      <meta property="og:title" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ingresse.com" />
      <meta property="og:image" />
      <meta property="og:image:secure_url" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta
        property="og:url"
        content="https://www.ingresse.com/so-track-boa-belo-horizonte-2024/"
      />
      <link
        rel="preload"
        as="style"
        href="../_next/static/css/ec58dc1ec78ecb61.css"
      />
      <link
        rel="preload"
        as="style"
        href="../_next/static/css/355b6f29d31d3593.css"
      />
      <noscript />
      <main>
        <div className="Toastify" />
        <div>
          <div className="fixed top-0 -sm:flex items-center justify-between bg-black w-full h-[80px] z-[99999999999] flex sm:hidden">
            <div className="container flex px-4 mx-auto">
              <div className="flex items-center flex-grow w-full ">
                <a rel="noreferrer" className="mr-8" href="/?language=pt_br">
                  <div className="flex items-center">
                    <Image
                      alt="Company brand"
                      loading="lazy"
                      width={120}
                      height={28}
                      decoding="async"
                      data-nimg={1}
                      src={logoIngresseColor}
                    />
                  </div>
                </a>
              </div>
              <div className="flex items-center justify-end w-full">
                <form className="relative mr-4 ">
                  <input
                    className="peer cursor-pointer text-white relative z-10 h-10 w-10 rounded-full bg-transparent pl-10 outline-none focus:w-[300px] focus:outline-none focus:border-2 focus:border-orange-500 focus:pl-4 focus:pr-12 transition-all duration-500 ease-in-out"
                    placeholder="Buscar evento..."
                    type="search"
                    defaultValue=""
                  />
                  <button
                    className="absolute right-0 ml-8 transform -translate-y-1/2 top-1/2"
                    type="button"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute transform -translate-y-1/2 right-3 top-1/2 peer-focus:right-3"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group">
                          <circle
                            id="Oval"
                            cx="11.058"
                            cy="11.059"
                            r="7.06194"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></circle>
                          <path
                            id="Path"
                            d="M20.0063 20.0034L16.0547 16.0518"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </svg>
                  </button>
                </form>
                <button aria-label="Open menu" className="focus:outline-none">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1={3} y1={12} x2={21} y2={12} />
                    <line x1={3} y1={6} x2={21} y2={6} />
                    <line x1={3} y1={18} x2={21} y2={18} />
                  </svg>
                </button>
              </div>
              <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-auto transition-opacity duration-300 ease-out opacity-0 invisible transform scale-95">
                <div className="flex items-center justify-between p-4 mb-4">
                  <a rel="noreferrer" className="mr-8" href="/">
                    <div className="flex items-center">
                      <Image
                        alt="Company brand"
                        loading="lazy"
                        width={120}
                        height={28}
                        decoding="async"
                        data-nimg={1}
                        src={logoIngresseBlack}
                      />
                    </div>
                  </a>
                  <button aria-label="Close menu" className="pr-6">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col items-center h-full">
                  <div className="-sm:w-full">
                    <a className="flex justify-center w-full" href="/login/">
                      <button className="styles__login_button_mobile__SH3UF">
                        Login
                      </button>
                    </a>
                    <a className="flex justify-center w-full" href="/register/">
                      <button className="styles__signup_button_mobile__8clDA">
                        Cadastrar-se
                      </button>
                    </a>
                    <a
                      className="flex justify-center w-full"
                      href="https://sobre.ingresse.com/criar-evento"
                    >
                      <button className="styles__event_button_mobile__19rVt">
                        Criar evento
                      </button>
                    </a>
                  </div>
                  <div className="flex items-center  bottom-[150px] mt-5">
                    <span translate="no" className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 11V11C6.343 11 5 9.657 5 8V8C5 6.343 6.343 5 8 5V5C9.657 5 11 6.343 11 8V8C11 9.657 9.657 11 8 11Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 19C8 19 1 13.25 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 13.25 8 19 8 19Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="relative">
                      <select
                        className="peer cursor-pointer relative z-10 h-10 text-center appearance-none pr-7"
                        style={{
                          color: "black",
                          borderRadius: 8,
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <optgroup label="Países">
                          <option value="BRA">Brasil</option>
                          <option value="ESP">Espanha</option>
                          <option value="URY">Uruguai</option>
                        </optgroup>
                        <optgroup label="Estados">
                          <option value="BRA-AC">Acre</option>
                          <option value="BRA-AL">Alagoas</option>
                          <option value="BRA-AM">Amazonas</option>
                          <option value="BRA-AP">Amapá</option>
                          <option value="BRA-BA">Bahia</option>
                          <option value="BRA-CE">Ceará</option>
                          <option value="BRA-DF">Distrito Federal</option>
                          <option value="BRA-ES">Espírito Santo</option>
                          <option value="BRA-GO">Goiás</option>
                          <option value="BRA-MA">Maranhão</option>
                          <option value="BRA-MG">Minas Gerais</option>
                          <option value="BRA-MS">Mato Grosso do Sul</option>
                          <option value="BRA-MT">Mato Grosso</option>
                          <option value="BRA-PA">Pará</option>
                          <option value="BRA-PB">Paraíba</option>
                          <option value="BRA-PE">Pernambuco</option>
                          <option value="BRA-PI">Piauí</option>
                          <option value="BRA-PR">Paraná</option>
                          <option value="BRA-RJ">Rio de Janeiro</option>
                          <option value="BRA-RN">Rio Grande do Norte</option>
                          <option value="BRA-RO">Rondônia</option>
                          <option value="BRA-RR">Roraima</option>
                          <option value="BRA-RS">Rio Grande do Sul</option>
                          <option value="BRA-SC">Santa Catarina</option>
                          <option value="BRA-SE">Sergipe</option>
                          <option value="BRA-SP">São Paulo</option>
                          <option value="BRA-TO">Tocantins</option>
                        </optgroup>
                      </select>
                      <span
                        translate="no"
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 z-10"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8 10L12 14L16 10"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 pb-12">
                    <div className="styles__column_language__UyNaa">
                      <div className="styles__wrapper_language__yyTcO">
                        <Image
                          alt="Brazil flag"
                          data-testid="pt-language-btn"
                          loading="lazy"
                          width={25}
                          height={25}
                          decoding="async"
                          data-nimg={1}
                          className="styles__active_language__IJkjD"
                          src={brazil}
                        />
                        <span
                          translate="no"
                          className="styles__active_language_text__wxDHg"
                        >
                          PT
                        </span>
                        <Image
                          alt="Spanish flag"
                          data-testid="es-language-btn"
                          loading="lazy"
                          width={25}
                          height={25}
                          decoding="async"
                          data-nimg={1}
                          className="styles__flags_opacity__qM9mE"
                          src={spanish}
                        />
                        <span
                          translate="no"
                          className="styles_text__flags_opacity__2L8ku"
                        >
                          ES
                        </span>
                        <Image
                          alt="USA flag"
                          data-testid="en-language-btn"
                          loading="lazy"
                          width={25}
                          height={25}
                          decoding="async"
                          data-nimg={1}
                          className="styles__flags_opacity__qM9mE"
                          src={america}
                        />
                        <span
                          translate="no"
                          className="styles_text__flags_opacity__2L8ku"
                        >
                          EN
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="styles__wrapper__6sGie">
            <div className="container w-full mx-auto -sm:hidden md:px-14">
              <nav className="styles__nav__cLNNA">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl">
                  <a rel="noreferrer" className="mr-8" href="/">
                    <div className="flex items-center">
                      <Image
                        alt="Company brand"
                        loading="lazy"
                        width={150}
                        height={35}
                        decoding="async"
                        data-nimg={1}
                        src={logoIngresseColor}
                      />
                    </div>
                  </a>
                </div>
                <div className="flex items-center justify-end w-full">
                  <form className="relative">
                    <input
                      className="styles_searchInput__8iQxW peer cursor-pointer text-white relative z-10 h-10 w-10 rounded-full bg-transparent pl-10 outline-none focus:w-[340px] focus:outline-none focus:border-2 focus:border-orange-500 focus:pl-4 focus:pr-12 transition-all duration-500 ease-in-out"
                      type="search"
                      defaultValue=""
                    />
                    <button
                      className="absolute right-0 z-20 ml-8 transform -translate-y-1/2 top-1/2"
                      type="button"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute transform -translate-y-1/2 right-3 top-1/2 peer-focus:right-3"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Group">
                            <circle
                              id="Oval"
                              cx="11.058"
                              cy="11.059"
                              r="7.06194"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></circle>
                            <path
                              id="Path"
                              d="M20.0063 20.0034L16.0547 16.0518"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </svg>
                    </button>
                  </form>
                  <div className="flex items-center">
                    <span translate="no" className="mr-4 pl-[50px] z-50">
                      <LuMapPin color="#fff" size={24} />
                    </span>
                    <div className="relative flex items-center cursor-pointer">
                      <select
                        className="cursor-pointer appearance-none h-10 mr-3"
                        style={{
                          width: 71,
                          color: "white",
                          borderRadius: 8,
                          backgroundColor: "rgb(0, 0, 0)",
                          border: "none",
                          outline: "none",
                          paddingRight: 30,
                          appearance: "none",
                        }}
                      >
                        <optgroup label="Países">
                          <option value="BRA">Brasil</option>
                          <option value="ESP">Espanha</option>
                          <option value="URY">Uruguai</option>
                        </optgroup>
                        <optgroup label="Estados">
                          <option value="BRA-AC">Acre</option>
                          <option value="BRA-AL">Alagoas</option>
                          <option value="BRA-AM">Amazonas</option>
                          <option value="BRA-AP">Amapá</option>
                          <option value="BRA-BA">Bahia</option>
                          <option value="BRA-CE">Ceará</option>
                          <option value="BRA-DF">Distrito Federal</option>
                          <option value="BRA-ES">Espírito Santo</option>
                          <option value="BRA-GO">Goiás</option>
                          <option value="BRA-MA">Maranhão</option>
                          <option value="BRA-MG">Minas Gerais</option>
                          <option value="BRA-MS">Mato Grosso do Sul</option>
                          <option value="BRA-MT">Mato Grosso</option>
                          <option value="BRA-PA">Pará</option>
                          <option value="BRA-PB">Paraíba</option>
                          <option value="BRA-PE">Pernambuco</option>
                          <option value="BRA-PI">Piauí</option>
                          <option value="BRA-PR">Paraná</option>
                          <option value="BRA-RJ">Rio de Janeiro</option>
                          <option value="BRA-RN">Rio Grande do Norte</option>
                          <option value="BRA-RO">Rondônia</option>
                          <option value="BRA-RR">Roraima</option>
                          <option value="BRA-RS">Rio Grande do Sul</option>
                          <option value="BRA-SC">Santa Catarina</option>
                          <option value="BRA-SE">Sergipe</option>
                          <option value="BRA-SP">São Paulo</option>
                          <option value="BRA-TO">Tocantins</option>
                        </optgroup>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <span
                          className="flex items-center justify-center ml-2 z-10"
                          style={{ width: 24, height: 24 }}
                        >
                          <IoIosArrowDown color="#fff" size={16} />
                        </span>
                      </div>
                      <span
                        className="absolute visibility-hidden whitespace-nowrap"
                        style={{
                          position: "absolute",
                          top: "-10px",
                          left: 0,
                          height: 0,
                        }}
                      >
                        Brasil
                      </span>
                    </div>
                  </div>
                  <div className="relative inline-block">
                    <button className="styles__login_button__g8227">
                      Acessar
                    </button>
                  </div>
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="inline-flex justify-center items-center w-full rounded-[24px] text-white"
                        id="menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span translate="no" className="flex items-center">
                          <Image
                            alt="PT flag"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            data-nimg={1}
                            className="mr-2"
                            src={brazil}
                          />
                        </span>
                        <span>PT</span>
                        <svg
                          className="w-4 h-4 ml-2 -mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="white"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="styles__wrapper__A_lQ3">
            <div className="styles__main__D5JIc">
              <div className="styles_parallaxWrapper__xP6eK">
                <div
                  className="styles__parallax__i7A6T"
                  style={{
                    backgroundImage:
                      'url("https://event-kraken.s3.amazonaws.com/event/posters/72154/xLarge.jpg")',
                  }}
                ></div>
                <div className="styles_parallaxMask__gX89g" />
                <div className="styles_parallaxContent__q3il0">
                  <div className="container mx-auto px-14 -sm:px-6 h-[481px] -sm:h-[104%]">
                    <div
                      className="styles__motion__D_mdN"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="flex justify-between items-center h-full -sm:flex-col-reverse -sm:h-[100%]">
                        <div>
                          <h1
                            translate="no"
                            className="styles__event_title__3enQp"
                          >
                            Só Track Boa Belo Horizonte 2024
                          </h1>
                          <div className="flex my-2 -sm:px-7">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 24 24"
                              className="text-2xl font-medium text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="Calendar">
                                <path
                                  d="M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5
      c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372
      c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11
      c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5
      c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592
      h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5
      c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954
      H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z"
                                />
                              </g>
                            </svg>
                            <p translate="no" className="ml-2 text-white">
                              14 de setembro de 2024
                            </p>
                          </div>
                          <div className="flex my-2 -sm:px-7">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              className="text-2xl font-medium text-white"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"></path>
                            </svg>
                            <p translate="no" className="ml-2 text-white">
                              Mega Space - Santa Luzia
                            </p>
                          </div>
                          <div className="container relative z-50 mx-auto">
                            <Link href="/ingresse?redirect=true&eventid=72154&scsession=179376193196091103299660&client=new-site&event-name=so-track-boa-belo-horizonte-2024">
                              <button className="styles__buy_button__wVmSX">
                                <span>Comprar ingresso</span>
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="undefined h-[474px] -sm:h-full overflow-hidden">
                          <div className="flex items-center justify-end h-full">
                            <Image
                              alt="Poster Image"
                              loading="lazy"
                              width={280}
                              height={374}
                              decoding="async"
                              data-nimg={1}
                              src="https://event-kraken.s3.amazonaws.com/event/posters/72154/large.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="styles__motion__D_mdN"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="container mx-auto px-14 -sm:px-8">
                  <h3 translate="no" className="styles__event_about__sVLob">
                    Datas disponíveis
                  </h3>
                  <br />
                  <div className="max-w-[500px]">
                    <section className="available_dates_carousel">
                      <div className="slick-slider w-full slick-initialized">
                        <div className="slick-list">
                          <div
                            className="slick-track"
                            style={{
                              width: 117,
                              opacity: 1,
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          >
                            <div
                              data-index={0}
                              className="slick-slide slick-active slick-current"
                              tabIndex={-1}
                              aria-hidden="false"
                              style={{ outline: "none", width: 117 }}
                            >
                              <div>
                                <div
                                  className="carousel-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <div className="styles__event_pill__pPnK1">
                                    <span className="styles__event_pill_title__vK719">
                                      <div className="font-bold tracking-wider capitalize">
                                        <div className="font-bold">sáb</div>
                                      </div>
                                      <span
                                        translate="no"
                                        className="styles__pill_number__VJo3k"
                                      >
                                        14
                                      </span>
                                      <div className="font-bold tracking-wider capitalize">
                                        <div className="font-bold">set</div>
                                      </div>
                                      <div className="font-bold tracking-wider">
                                        <div className="font-bold">19h</div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="container mx-auto px-14 -sm:px-8">
                  <br />
                  <div>
                    <p
                      translate="no"
                      className="underline cursor-pointer decoration-solid"
                    >
                      Ver datas anteriores
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="styles__motion__D_mdN"
                style={{
                  opacity: 1,
                  transform: "translateY(50px) translateZ(0px)",
                }}
              >
                <div className="container mx-auto px-14 -sm:px-8">
                  <h3 translate="no" className="styles__event_about__sVLob">
                    Sobre
                  </h3>
                  <br />
                  <div>
                    <p>
                      <em>
                        Nosso coração, nossas lembranças e nossa história tem
                        uma marca inconfundível de um lugar muito especial:
                        Beagá, é claro que estamos voltando!
                      </em>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>
                        Ingressos para a Só Track Boa Belo Horizonte 2024
                      </strong>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>
                        Tipos de Ingressos disponíveis na pré-venda:
                      </strong>
                    </p>
                    <p>
                      <strong>Pista: </strong>Acesso geral ao evento.
                    </p>
                    <p>
                      <strong>Área Vip: </strong>Dá acesso geral ao evento e à
                      área vip dos palcos.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>
                        Como funciona a área vip Só Track Boa Belo Horizonte?
                      </strong>
                    </p>
                    <p>
                      A área conta banheiros e bares exclusivos, vista
                      privilegiada no palco principal, área de descanso e outras
                      facilidades para você curtir com mais conforto. O ingresso
                      de área vip dá acesso a pista também.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>Infraestrutura do evento:</strong>
                    </p>
                    <p>2 palcos</p>
                    <p>Área de descanso</p>
                    <p>Bares</p>
                    <p>Banheiros</p>
                    <p>e + a ser anunciado</p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>Line-up já anunciado (ordem alfabética):</strong>
                    </p>
                    <p>
                      <em>Adam Beyer</em>
                    </p>
                    <p>
                      <em>Adam Beyer B2B Vintage Culture</em>
                    </p>
                    <p>
                      <em>ANTDOT</em>
                    </p>
                    <p>
                      <em>ARTBAT</em>
                    </p>
                    <p>
                      <em>Barja</em>
                    </p>
                    <p>
                      <em>Brisotti</em>
                    </p>
                    <p>
                      <em>Cassian</em>
                    </p>
                    <p>
                      <em>Fatsync</em>
                    </p>
                    <p>
                      <em>Follow the sun: Bhaskar invites Meca</em>
                    </p>
                    <p>
                      <em>Gabe B2B Viot</em>
                    </p>
                    <p>
                      <em>Giu B2B Pricila Diaz</em>
                    </p>
                    <p>
                      <em>Illusionize</em>
                    </p>
                    <p>
                      <em>Jessica Brankka</em>
                    </p>
                    <p>
                      <em>Liu</em>
                    </p>
                    <p>
                      <em>Mochakk</em>
                    </p>
                    <p>
                      <em>Vinter</em>
                    </p>
                    <p>
                      <em>Victor Lou</em>
                    </p>
                    <p>
                      <em>Vintage Culture</em>
                    </p>
                    <p>+++ TBA</p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>Informações extras:</strong>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      - Classificação etária: 16 anos na pista / 18 anos na área
                      vip
                    </p>
                    <p>- O local é acessível para PCDs</p>
                    <p>
                      - Os ingressos adquiridos na pré-venda são de caráter
                      promocional, sendo assim, não possuem diferença entre
                      meia-entrada e inteira
                    </p>
                    <p>
                      - Ao adquirir seu ingresso, você autoriza o uso da sua
                      imagem em todo e qualquer material entre imagens de vídeo
                      e fotos da marca.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="styles__motion__D_mdN"
                style={{
                  opacity: 1,
                  transform: "translateY(50px) translateZ(0px)",
                }}
              >
                <div className="container mx-auto px-14 -sm:px-8">
                  <h3 translate="no" className="styles__event_about__sVLob">
                    Reserve sua estadia
                  </h3>
                  <p>
                    Encontre as melhores ofertas de hospedagem próximas ao
                    evento
                  </p>
                  <br />
                  <iframe
                    src="https://www.stay22.com/embed/gm?aid=ingresse&lat=-19.79295&lng=-43.87951&maincolor=FFFFFF&fontcolor=000000&markerimage=https://images.squarespace-cdn.com/content/v1/59d68fe3017db263203e4b79/1507233943500-PL0SQBRD1YH3ZW3J4GDH/Logo%403x.png?format=1500w"
                    id="stay22-widget"
                    width="100%"
                    height={550}
                    frameBorder={0}
                  />
                </div>
              </div>
              <div
                className="styles__motion__D_mdN"
                style={{
                  opacity: 1,
                  transform: "translateY(50px) translateZ(0px)",
                }}
              >
                <div className="container mx-auto px-14 -sm:px-8">
                  <div className="flex items-center justify-between py-8">
                    <div>
                      <h3
                        translate="no"
                        className="styles__event_about_rules__rjyJO"
                      >
                        Regras de venda online
                      </h3>
                      <p>Saiba mais sobre políticas de Ingresse</p>
                    </div>
                    <div>
                      <div>
                        <div className="bg-white rounded-full">
                          <button className="w-full text-left p-[10px] font-medium text-gray-800 bg-white rounded-full flex justify-between ">
                            <span
                              translate="no"
                              className="text-nowrap whitespace-nowrap"
                            >
                              Ver mais
                            </span>
                            <span className="transform transition-transform ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M16 14L12 10L8 14"
                                  stroke="black"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 mb-10 border-t">
                    <div>
                      <p>
                        1) A Ingresse é uma plataforma intermediária
                        especializada na venda de ingressos online para eventos.
                        Os organizadores dos eventos utilizam a nossa plataforma
                        para ofertar seus eventos ao público. Dessa forma, o
                        organizador é o único responsável pela produção,
                        organização, política de vendas, precificação,
                        meia-entrada, atrações, alterações de datas e local de
                        realização do evento e demais questões definidas, única
                        e exclusivamente, pelo organizador do evento.
                      </p>
                      <p>
                        2) A obrigação da Ingresse limita-se estritamente ao uso
                        e manutenção da tecnologia em si, ou seja, dos seus
                        serviços de licenciamento do uso da plataforma da
                        Ingresse.
                      </p>
                      <p>
                        3) O organizador do evento é exclusivamente responsável
                        por suas atividades estarem em conformidade com todo o
                        arcabouço legislativo aplicável a seu evento, incluindo,
                        mas não se limitando a, obtenção de (i) alvará de
                        autorização para realização do evento, (ii) licença de
                        funcionamento, (iii) divulgação e cumprimento de
                        protocolos locais e nacionais relacionados a políticas
                        sanitárias.
                      </p>
                      <p>
                        4) O site (www.ingresse.com) e o App (Ingresse - Eventos
                        e Ingressos) são os únicos canais oficiais de vendas da
                        Ingresse. A Ingresse não se responsabiliza, em qualquer
                        hipótese e aspecto, por ingressos adquiridos com
                        terceiros.
                      </p>
                      <p>
                        5) Compras suspeitas ou com evidências de fraude de
                        qualquer natureza no processo de compra serão canceladas
                        e reembolsadas;
                      </p>
                      <p>
                        6) Para acessar o evento é obrigatória a apresentação do
                        ingresso em formato digital, através do App (Ingresse -
                        Eventos e Ingresse), juntamente com o respectivo
                        documento de identificação oficial com foto;
                      </p>
                      <p>
                        7) O não comparecimento ao evento invalidará o ingresso
                        e não permitirá reembolso;
                      </p>
                      <p>
                        8) Solicitações de estorno/cancelamento em razão do
                        exercício do direito de arrependimento deverão ser
                        efetuadas em até 7 (sete) dias contados da data de
                        compra do ingresso, desde que seja realizada com
                        antecedência mínima de 48 (quarenta e oito) horas antes
                        da realização do evento;
                      </p>
                      <p>
                        9) Em caso de solicitação de estorno da compra em razão
                        do exercício do direito de arrependimento, a taxa de
                        serviço da Ingresse e a taxa de processamento serão
                        descontados do valor total do reembolso;
                      </p>
                      <p>
                        10) O organizador do evento é o único e exclusivo
                        responsável por determinar a habilitação da
                        possibilidade de transferência de ingressos em
                        determinado evento. A Ingresse não determina a
                        habilitação ou não e as regras relacionadas a
                        transferência de ingressos, as quais serão estabelecidas
                        unicamente pelo organizador.
                      </p>
                      <p>
                        11) Caso não conste da descrição do evento acima
                        quaisquer informações adicionais sobre o evento, como
                        estacionamento, cardápio, line-up, ordem de entrada de
                        artistas e demais, relacionadas exclusivamente à
                        organização do evento, deverão ser solicitadas
                        diretamente para o organizador do evento, através do
                        e-mail de contato do mesmo;
                      </p>
                      <p>
                        12) A Ingresse não permite e repudia a venda de
                        ingressos para eventos irregulares, que não estejam
                        seguindo todas as orientações e protocolos de segurança
                        determinados pelas autoridades governamentais
                        competentes. Consideramos, antes de tudo, a saúde e
                        segurança de todos.
                      </p>
                      <p>
                        13) Horário de atendimento do SAC da Ingresse é: Das 11h
                        às 19h, todos os dias, pelos canais: e-mail, FAQ e
                        telefone; e das 10h às 23h, todos os dias, pelo canal
                        WhatsApp.
                      </p>
                      <p>
                        14) Precisa de ajuda? Acesse nosso site e clique em
                        "Fale com a Ingresse", localizada na parte inferior de
                        nosso site. Ao acessar este item, você terá acesso a
                        conteúdos sobre compras, cadastro, entre outros temas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="styles_wrapper__SjHPP">
            <div>
              <section className="styles_news__message__7m4V0">
                <p>
                  <Image
                    alt="Logo Ingresse.com"
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    src={ticketIcon}
                  />
                </p>
                <p>A maior e mais inovadora plataforma de venda de ingressos</p>
              </section>
              <section className="styles_news__message__7m4V0">
                <p>
                  <Image
                    alt="Logo Ingresse.com"
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    src={ticketIcon}
                  />
                </p>
                <p>A maior e mais inovadora plataforma de venda de ingressos</p>
              </section>
              <section className="styles_news__message__7m4V0">
                <p>
                  <Image
                    alt="Logo Ingresse.com"
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    src={ticketIcon}
                  />
                </p>
                <p>A maior e mais inovadora plataforma de venda de ingressos</p>
              </section>
            </div>
          </section>
          <footer className="styles__base__WsHWK">
            <div className="styles__container__QNWl1">
              <div
                style={{
                  opacity: 1,
                  transform: "translateY(50px) translateZ(0px)",
                }}
              >
                <div className="styles__grid__G9j5d">
                  <div className="styles__column__m9J2h">
                    <h4 translate="no" className="styles__title__2T5fa">
                      As melhores histórias começam aqui
                    </h4>
                    <p translate="no" className="styles__help_text__1PScD">
                      Precisa de ajuda?
                    </p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      data-testid="help-link"
                      href="https://ingresse.freshdesk.com/support/home"
                    >
                      <button className="styles__button__jxhus">
                        <span>Fale com a Ingresse</span>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={0}
                          viewBox="0 0 15 15"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                  <div>
                    <h5 translate="no" className="styles__subtitle__8HHH7">
                      Institucional
                    </h5>
                    <ul>
                      <li className="styles__links_list__1fyzz">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          data-testid="list-Institucional-link"
                          href="https://sobre.ingresse.com/"
                        >
                          <span>Sobre nós</span>
                        </a>
                      </li>
                      <li className="styles__links_list__1fyzz">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          data-testid="list-Institucional-link"
                          href="https://sobre.ingresse.com/branding"
                        >
                          <span>Marca</span>
                        </a>
                      </li>
                      <li className="styles__links_list__1fyzz">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          data-testid="list-Institucional-link"
                          href="https://sobre.ingresse.com/blog"
                        >
                          <span>Ingresse News</span>
                        </a>
                      </li>
                      <li className="styles__links_list__1fyzz">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          data-testid="list-Institucional-link"
                          href="https://ingresse.freshdesk.com/support/home"
                        >
                          <span>Fale com a Ingresse</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 translate="no" className="styles__subtitle__8HHH7">
                      Termos
                    </h5>
                    <ul>
                      <li className="styles__links_list__1fyzz">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          data-testid="list-terms-link"
                          href="https://sobre.ingresse.com/meia-entrada"
                        >
                          <span>Lei da Meia-Entrada</span>
                        </a>
                      </li>
                      <li className="styles__links_list__1fyzz">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          data-testid="list-terms-link"
                          href="https://sobre.ingresse.com/termos-de-servico"
                        >
                          <span>Termos de Serviço</span>
                        </a>
                      </li>
                      <li className="styles__links_list__1fyzz">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          data-testid="list-terms-link"
                          href="https://sobre.ingresse.com/termos-de-privacidade"
                        >
                          <span>Termos de Privacidade</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="styles__column_mobile__6Fay6">
                    <div>
                      <h5
                        translate="no"
                        className="styles__column_mobile_title__hrQK9"
                      >
                        Baixe o app Ingresse
                      </h5>
                      <p
                        translate="no"
                        className="styles__column_mobile_subtitle__H9q35"
                      >
                        Acesse a loja do seu celular
                      </p>
                      <div className="styles__column_wrapper_mobile__tSa8n">
                        <h5
                          translate="no"
                          className="styles__column_mobile_title_r___gGeY"
                        >
                          Baixe o app Ingresse
                        </h5>
                        <p
                          translate="no"
                          className="styles__column_mobile_subtitle_r__W7DS3"
                        >
                          Baixe o app Ingresse
                        </p>
                      </div>
                      <div className="styles__column_mobile_links__fvn_3">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          data-testid="applestore-btn"
                          href="https://apps.apple.com/br/app/ingresse-eventos-e-ingressos/id815359760"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="styles__store_icon__Ln_cc"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"></path>
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"></path>
                          </svg>
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          data-testid="playstore-btn"
                          href="https://play.google.com/store/apps/details?id=com.ingresse.ticketbooth&hl=pt_BR&gl=US"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            className="styles__store_icon__Ln_cc"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="styles__line__Rg80H">
                  <hr />
                </div>
                <div className="styles__column_social__ymEFP">
                  <div className="styles__column_social_grid__GlnNQ">
                    <div className="styles__column_social_flex__rezOr">
                      <a
                        rel="noreferrer"
                        className="styles__logo_ingresse__HjAST"
                        data-testid="ingresse-btn"
                        href="/"
                      >
                        <Image
                          alt="Company brand"
                          loading="lazy"
                          width={150}
                          height={35}
                          decoding="async"
                          data-nimg={1}
                          src={logoIngresseColor}
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="styles__social_logo_space__KU849"
                        data-testid="instagram-btn"
                        href="https://www.instagram.com/ingresse/"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="styles__social_icon__yKR3x"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="styles__social_logo_space__KU849"
                        data-testid="tiktok-btn"
                        href="https://www.tiktok.com/@ingresse"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 448 512"
                          className="styles__social_icon__yKR3x"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="styles__social_logo_space__KU849"
                        data-testid="linkedin-btn"
                        href="https://www.linkedin.com/company/ingresse/mycompany/"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="styles__social_icon__yKR3x"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="styles__column_language__aq8T4">
                      <div className="styles__wrapper_language__a5QvG">
                        <div className="cursor-pointer flex">
                          <Image
                            alt="Brazil flag"
                            data-testid="pt-language-btn"
                            loading="lazy"
                            width={25}
                            height={25}
                            decoding="async"
                            data-nimg={1}
                            className="styles__active_language__X191H"
                            src={brazil}
                          />
                          <span
                            translate="no"
                            className="styles__active_language_text__3QRab"
                          >
                            PT
                          </span>
                        </div>
                        <div className="cursor-pointer flex">
                          <Image
                            alt="Spanish flag"
                            data-testid="es-language-btn"
                            loading="lazy"
                            width={25}
                            height={25}
                            decoding="async"
                            data-nimg={1}
                            className="styles__flags_opacity__JvsRb"
                            src={spanish}
                          />
                          <span
                            translate="no"
                            className="styles_text__flags_opacity__5Tc_5"
                          >
                            ES
                          </span>
                        </div>
                        <div className="cursor-pointer flex">
                          <Image
                            alt="USA flag"
                            data-testid="en-language-btn"
                            loading="lazy"
                            width={25}
                            height={25}
                            decoding="async"
                            data-nimg={1}
                            className="styles__flags_opacity__JvsRb"
                            src={america}
                          />
                          <span
                            translate="no"
                            className="styles_text__flags_opacity__5Tc_5"
                          >
                            EN
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="styles__column_copy__fetQ2">
                      © 2024 Todos os direitos reservados
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
