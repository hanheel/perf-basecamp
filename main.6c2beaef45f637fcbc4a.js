/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 418:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(651);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(106);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/classnames/bind.js
var bind = __webpack_require__(726);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind);
;// CONCATENATED MODULE: ./src/assets/images/hero.png
/* harmony default export */ const hero = (__webpack_require__.p + "static/hero.png");
;// CONCATENATED MODULE: ./src/assets/images/trending.gif
/* harmony default export */ const trending = (__webpack_require__.p + "static/trending.gif");
;// CONCATENATED MODULE: ./src/assets/images/find.gif
/* harmony default export */ const find = (__webpack_require__.p + "static/find.gif");
;// CONCATENATED MODULE: ./src/assets/images/free.gif
/* harmony default export */ const free = (__webpack_require__.p + "static/free.gif");
;// CONCATENATED MODULE: ./src/utils/changeImageExtension.ts
const SIZES = ['400', '800', '1600'];
const getAssetSrc = (imageSrc, extension) => {
    return imageSrc.replace(/(png|jpg|jpeg|gif)$/i, extension);
};
const getOptimizedAssetSrcSet = (imageSrc, extension) => SIZES.map((size) => imageSrc.replace(/\.(png|jpg|jpeg|gif)$/i, `-${size}.${extension} ${size}w`)).join(', ');

;// CONCATENATED MODULE: ./src/pages/Home/components/FeatureItem/FeatureItem.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FeatureItem_module = ({"featureItem":"yR2bl83i7n3Lc4ET9GNx","featureTitle":"e2JFaEZbum1dTQuAa4pW","featureTitleBg":"tVy6wXEAU4w_lw0XEFMd","featureImageContainer":"zm3HhVNz0E1cRYM2yl9p","featureImage":"Fn1og_9eWzqLu13FzZt_"});
;// CONCATENATED MODULE: ./src/pages/Home/components/FeatureItem/FeatureItem.tsx



const FeatureItem = ({ title, imageSrc }) => {
    const webmSrc = getAssetSrc(imageSrc, 'webm');
    const mp4Src = getAssetSrc(imageSrc, 'mp4');
    return ((0,jsx_runtime.jsxs)("div", Object.assign({ className: FeatureItem_module.featureItem }, { children: [(0,jsx_runtime.jsxs)("video", Object.assign({ className: FeatureItem_module.featureImageContainer, autoPlay: true, loop: true, muted: true, playsInline: true }, { children: [(0,jsx_runtime.jsx)("source", { src: webmSrc, type: "video/webm" }), (0,jsx_runtime.jsx)("source", { src: mp4Src, type: "video/mp4" })] })), (0,jsx_runtime.jsx)("img", { className: FeatureItem_module.featureImage, src: imageSrc, alt: title }), (0,jsx_runtime.jsx)("div", { className: FeatureItem_module.featureTitleBg }), (0,jsx_runtime.jsx)("h4", Object.assign({ className: FeatureItem_module.featureTitle }, { children: title }))] })));
};
/* harmony default export */ const FeatureItem_FeatureItem = (FeatureItem);

;// CONCATENATED MODULE: ./src/pages/Home/hooks/useMousePosition.tsx

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = (0,react.useState)({
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        offsetX: 0,
        offsetY: 0
    });
    const updateMousePosition = (e) => {
        const { clientX, clientY, pageX, pageY, offsetX, offsetY } = e;
        setMousePosition({
            clientX,
            clientY,
            pageX,
            pageY,
            offsetX,
            offsetY
        });
    };
    (0,react.useEffect)(() => {
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
};
/* harmony default export */ const hooks_useMousePosition = (useMousePosition);

;// CONCATENATED MODULE: ./src/pages/Home/components/CustomCursor/CustomCursor.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CustomCursor_module = ({"cursor":"ALoz_ITxk3wSa8dCLI2U","wave-text":"_BZsYEOs3_SKAXwVeR71"});
;// CONCATENATED MODULE: ./src/pages/Home/components/CustomCursor/CustomCursor.tsx




const CustomCursor = ({ text = '' }) => {
    const [...cursorTextChars] = text;
    const mousePosition = hooks_useMousePosition();
    const cursorRef = (0,react.useRef)(null);
    (0,react.useEffect)(() => {
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${mousePosition.pageX}px, ${mousePosition.pageY}px, 0)`;
        }
    }, [mousePosition]);
    return ((0,jsx_runtime.jsx)("div", Object.assign({ ref: cursorRef, className: CustomCursor_module.cursor }, { children: cursorTextChars.map((char, index) => ((0,jsx_runtime.jsx)("span", Object.assign({ className: CustomCursor_module.character }, { children: char }), index))) })));
};
/* harmony default export */ const CustomCursor_CustomCursor = (CustomCursor);

;// CONCATENATED MODULE: ./src/utils/number.ts
const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

;// CONCATENATED MODULE: ./src/pages/Home/hooks/useScrollEvent.tsx

const useScrollEvent = (onScroll) => {
    (0,react.useEffect)(() => {
        const handleScroll = (event) => {
            onScroll();
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onScroll]);
};
/* harmony default export */ const hooks_useScrollEvent = (useScrollEvent);

;// CONCATENATED MODULE: ./src/pages/Home/components/AnimatedPath/AnimatedPath.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const AnimatedPath_module = ({"animatedPath":"QhzAmcqwgs9GyUMfFsbh"});
;// CONCATENATED MODULE: ./src/pages/Home/components/AnimatedPath/AnimatedPath.tsx





const TOP_PERCENTAGE_OF_DRAW_POINT = 0.8;
const AnimatedPath = ({ wrapperRef }) => {
    const pathRef = (0,react.useRef)(null);
    const [strokeOffset, setStrokeOffset] = (0,react.useState)(0);
    const drawPath = () => {
        const wrapper = wrapperRef.current;
        const path = pathRef.current;
        if (!wrapper || !path) {
            return;
        }
        const drawPointY = window.scrollY + window.innerHeight * TOP_PERCENTAGE_OF_DRAW_POINT;
        const scrollRatio = (drawPointY - wrapper.offsetTop) / wrapper.offsetHeight;
        const pathLength = pathRef.current.getTotalLength();
        const currentScrollOffset = pathLength - pathLength * scrollRatio;
        setStrokeOffset(clamp(currentScrollOffset, 0, pathLength));
    };
    hooks_useScrollEvent(drawPath);
    return ((0,jsx_runtime.jsx)("svg", Object.assign({ className: AnimatedPath_module.animatedPath, width: "924", height: "1691", viewBox: "0 0 924 1691", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0,jsx_runtime.jsx)("path", { ref: pathRef, strokeDasharray: pathRef.current ? pathRef.current.getTotalLength() : 0, strokeDashoffset: strokeOffset, d: "M694.643 0C694.643 89.6504 694.643 274.548 694.643 296.935C694.643 324.918 720.609 351.347 767.133 331.655C813.656 311.963 823.393 306.781 827.721 291.234C832.049 275.688 830.967 268.433 829.344 263.251C827.721 258.069 825.016 254.441 816.361 256.514C807.705 258.587 802.836 259.105 801.214 263.251C799.591 267.397 801.214 271.024 803.918 273.097C805.181 274.306 809.004 275.999 814.197 273.097C820.688 269.47 821.229 268.433 823.934 264.806C826.639 261.178 827.721 239.932 827.721 227.494C827.721 215.057 826.098 202.102 825.016 197.438C823.934 192.774 822.311 189.665 825.016 188.629C827.721 187.592 831.508 188.11 837.999 192.256C844.491 196.402 862.343 205.73 867.212 210.394C872.08 215.057 874.785 217.648 872.08 218.685C869.376 219.721 845.573 205.211 841.786 202.62C837.999 200.029 833.131 197.438 832.049 197.438C830.967 197.438 833.672 202.102 839.622 206.248C845.573 210.394 869.917 225.94 872.08 227.494C874.244 229.049 874.785 254.441 872.08 266.36C869.376 278.279 865.048 286.57 859.638 290.198C854.228 293.825 847.196 294.344 845.573 291.234C843.95 288.125 843.95 288.125 842.868 283.979C841.786 279.834 845.032 277.243 849.36 277.243C853.688 277.243 861.802 275.17 876.408 283.979C891.014 292.789 901.834 303.671 905.621 315.072C909.407 326.473 912.653 372.075 889.932 396.949C867.212 421.823 782.28 472.608 657.316 461.207C532.352 449.807 499.353 502.146 458.24 521.32C417.126 540.494 385.209 574.177 332.194 576.25C279.179 578.323 230.492 567.959 213.181 563.295C195.87 558.631 189.378 560.704 186.673 560.704C183.968 560.704 175.854 564.331 173.69 568.477C171.526 572.623 170.444 580.914 173.149 581.951C175.854 582.987 176.936 584.023 181.264 582.987C185.591 581.951 190.46 575.732 191.542 569.514C192.624 563.295 193.165 555.522 192.083 548.267C191.001 541.012 187.755 523.911 186.132 516.138C184.509 508.365 181.805 496.446 180.182 495.409C178.559 494.373 171.526 502.146 159.625 502.664C147.724 503.183 129.872 501.628 133.117 499.555C136.363 497.482 152.592 499.555 160.707 498.519C168.821 497.482 178.559 493.337 178.018 491.782C177.477 490.227 167.199 495.409 156.92 495.928C146.642 496.446 132.036 493.855 129.331 495.928C126.626 498 133.658 508.365 135.281 515.62C136.904 522.875 147.724 557.595 147.724 565.886C147.724 574.177 139.068 568.995 130.954 575.732C122.839 582.469 120.134 590.76 124.462 592.833C128.79 594.906 142.855 590.242 146.101 584.023C149.346 577.805 148.806 576.768 148.806 573.141C148.806 569.514 141.773 567.441 132.036 570.032C122.298 572.623 100.118 580.396 92.0038 586.096C83.8893 591.797 77.9387 596.979 77.3977 602.161C76.8567 607.343 79.0206 613.043 80.6435 614.08C82.2664 615.116 88.758 612.525 89.8399 610.452C90.9218 608.379 95.7905 604.234 95.2496 596.979C94.7086 589.724 94.1678 584.542 92.0038 577.287C89.8399 570.032 61.1686 529.611 57.9228 527.538C54.6769 525.466 55.7589 532.721 52.5131 534.793C49.2673 536.866 48.1853 539.975 36.284 544.121C24.3827 548.267 16.2682 546.194 13.5633 548.267C10.8585 550.34 16.8091 558.113 20.5959 563.295C24.3827 568.477 58.4637 613.561 59.0047 616.671C59.5457 619.78 53.054 613.043 41.1527 616.671C29.2514 620.298 29.2514 623.407 28.7105 628.59C28.1695 633.772 37.9069 635.326 41.1527 635.326C44.3985 635.326 54.677 631.181 56.2999 628.59C57.9228 625.998 55.2179 621.335 48.1853 620.816C41.1527 620.298 25.4646 624.962 18.4321 631.699C11.3995 638.436 -14.0261 676.783 13.5633 708.912C41.1527 741.041 123.38 797.526 317.588 795.453C511.795 793.381 602.678 830.692 648.66 848.311C694.643 865.93 713.577 857.12 726.019 863.857C738.461 870.594 746.576 877.849 743.33 883.549C740.084 889.249 728.183 883.549 723.314 878.367C718.445 873.185 721.15 868.521 721.15 866.966C721.15 865.412 727.642 859.711 733.593 861.784C739.543 863.857 746.035 869.557 747.658 875.776C749.281 881.995 747.658 886.658 749.822 885.104C751.985 883.549 781.198 814.109 783.362 812.036C785.525 809.963 786.607 807.89 787.689 809.445C788.771 811 799.591 824.991 808.787 829.655C817.984 834.319 827.721 831.728 829.344 833.283C830.967 834.837 807.164 886.658 799.05 894.432C790.935 902.205 782.821 907.905 774.165 904.796C765.51 901.687 766.592 901.168 765.51 897.023C764.428 892.877 773.624 888.213 780.657 889.249C787.689 890.286 790.394 889.249 804.459 897.023C818.525 904.796 833.131 917.233 835.295 921.379C837.458 925.524 838.54 929.152 838.54 931.743C838.54 934.334 827.721 936.925 820.147 934.334C812.574 931.743 807.164 926.561 808.246 923.97C809.328 921.379 812.574 917.751 817.984 918.787C823.393 919.824 825.962 919.306 832.049 923.97C838.136 928.633 840.163 933.297 842.327 931.743C844.491 930.188 887.769 880.44 891.014 879.922C894.26 879.403 894.801 890.286 899.129 894.432C903.457 898.577 907.784 906.35 920.768 912.051C933.751 917.751 886.146 950.917 879.654 955.58C873.162 960.244 864.507 967.499 856.933 965.945C849.36 964.39 840.163 961.799 842.327 957.653C844.491 953.508 850.983 945.216 860.72 950.398C870.458 955.58 876.949 965.945 882.9 976.827C888.85 987.709 898.047 1023.98 866.671 1059.22C835.295 1094.46 607.006 1067 481.501 1132.29C355.996 1197.58 351.128 1225.05 335.981 1247.33C320.834 1269.62 320.293 1284.64 286.752 1293.97C253.212 1303.3 231.574 1286.72 208.853 1247.33C186.132 1207.95 175.854 1203.8 154.215 1204.32C132.576 1204.84 133.658 1206.39 128.79 1211.06C123.921 1215.72 129.872 1223.5 138.527 1221.94C147.183 1220.39 150.428 1215.72 150.969 1208.47C151.51 1201.21 152.592 1188.78 147.724 1171.67C142.855 1154.57 143.937 1153.02 141.232 1151.46C138.527 1149.91 93.6267 1141.62 94.1677 1136.95C94.7087 1132.29 132.576 1146.28 136.904 1144.73C141.232 1143.17 140.691 1141.1 128.79 1136.95C116.888 1132.81 86.5941 1120.89 84.9712 1127.11C83.3483 1133.33 102.823 1170.12 103.364 1183.59C103.905 1197.07 110.938 1204.32 94.1677 1214.69C77.3977 1225.05 78.4796 1202.25 84.9712 1200.18C91.4629 1198.1 99.5774 1192.4 110.397 1197.58C121.216 1202.77 116.347 1228.16 103.364 1247.33C90.3809 1266.51 78.4796 1263.92 69.8241 1282.05C60.2819 1302.05 82.8074 1300.19 76.3157 1316.77C74.5717 1323.51 42.0183 1350.77 49.8083 1372.74C59.5457 1400.21 76.8567 1528.72 302.441 1544.27C528.024 1559.81 648.119 1589.87 669.217 1618.89C690.315 1647.91 685.987 1642.73 684.905 1652.57C683.823 1662.42 680.578 1663.97 682.741 1668.64C684.905 1673.3 691.397 1684.7 704.38 1686.78C717.363 1688.85 719.527 1691.96 722.773 1688.33C726.019 1684.7 720.609 1680.04 727.101 1675.38C733.593 1670.71 746.576 1661.9 754.149 1657.24C761.723 1652.57 766.592 1648.43 766.051 1642.73C765.51 1637.03 760.1 1631.85 761.723 1630.81C763.346 1629.77 770.378 1633.92 773.083 1630.81C775.788 1627.7 773.083 1615.26 775.788 1612.15C778.493 1609.04 784.444 1604.38 783.362 1600.75C782.28 1597.13 778.493 1592.98 775.788 1587.8C773.083 1582.62 770.378 1567.07 773.083 1561.37C775.788 1555.67 767.133 1546.34 756.854 1547.9C746.576 1549.45 727.642 1552.04 722.773 1559.3C717.904 1566.55 717.363 1568.62 720.068 1571.73C722.773 1574.84 748.74 1568.62 755.231 1570.18C761.723 1571.73 765.51 1575.36 761.723 1576.4C757.936 1577.43 740.084 1576.4 730.347 1576.4C720.609 1576.4 711.954 1578.99 710.872 1581.58C709.79 1584.17 702.757 1589.35 704.921 1592.98C707.085 1596.61 716.822 1590.91 723.855 1591.94C730.888 1592.98 749.281 1601.79 747.117 1605.42C744.953 1609.04 732.511 1595.05 724.937 1595.05C717.363 1595.05 709.249 1594.02 704.921 1599.72C700.593 1605.42 696.807 1610.6 703.298 1612.15C709.79 1613.71 729.265 1620.44 732.511 1625.11C735.756 1629.77 740.084 1627.18 739.543 1625.63C739.002 1624.07 728.724 1616.3 720.609 1614.74C712.495 1613.19 702.757 1612.67 700.052 1616.82C697.348 1620.96 694.643 1627.7 698.971 1628.74C703.298 1629.77 722.773 1628.74 723.855 1634.44C724.937 1640.14 692.479 1638.58 688.692 1629.77C684.905 1620.96 687.61 1600.75 692.479 1590.91C697.348 1581.06 719.527 1552.04 728.724 1544.27C737.92 1536.49 739.543 1547.38 742.789 1544.27C746.035 1541.16 748.74 1525.09 746.576 1522.5C744.412 1519.91 742.789 1520.95 728.724 1511.1C714.659 1501.26 707.626 1490.37 704.921 1476.38C702.216 1462.39 701.675 1454.1 706.544 1439.59C711.413 1425.08 723.314 1411.61 731.97 1405.91C740.625 1400.21 753.067 1393.99 765.51 1394.5C777.952 1395.02 789.312 1394.5 809.869 1405.91C830.426 1417.31 837.999 1435.96 840.163 1446.84C842.327 1457.73 842.327 1466.54 838.54 1476.38C834.754 1486.23 830.426 1498.15 821.229 1506.96C812.033 1515.77 801.214 1521.98 788.771 1524.06C776.329 1526.13 766.051 1524.06 763.346 1525.09C760.641 1526.13 761.182 1533.39 760.641 1535.98C760.1 1538.57 762.264 1540.64 762.805 1540.12C763.346 1539.6 764.969 1540.64 764.969 1530.79C764.969 1520.95 764.428 1517.84 766.051 1517.84C767.674 1517.84 783.362 1516.28 790.394 1513.69C797.427 1511.1 808.246 1506.44 812.574 1501.77C816.902 1497.11 823.934 1488.82 826.639 1480.53C829.344 1472.24 831.508 1462.91 830.426 1455.65C829.344 1448.4 825.557 1437.52 818.525 1427.67C811.492 1417.82 797.427 1409.53 784.444 1405.91C771.46 1402.28 762.264 1402.8 750.904 1407.98C739.543 1413.16 735.756 1414.72 726.56 1425.08C717.363 1435.44 713.577 1449.44 713.036 1457.21C712.495 1464.98 715.741 1478.97 717.904 1483.12C720.068 1487.26 725.478 1494.52 733.593 1500.74C740.084 1505.71 746.756 1509.72 749.281 1511.1", stroke: "white" }) })));
};
/* harmony default export */ const AnimatedPath_AnimatedPath = (AnimatedPath);

;// CONCATENATED MODULE: ./src/pages/Home/Home.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Home_module = ({"heroSection":"V_9cb4DKn_vuzUdGMCb_","heroImage":"_TjVV9R4Lv1tkGpSZVgo","projectTitle":"pnOij9ZllEc6kjpdJmBD","title":"_e3JGOtscJkvFrGfPhgm","subtitle":"vALdPZG_ulmh7VOzy0cS","cta":"KbTF2pZH_P_ViLBNt_HQ","linkButton":"IJcYFV76fre04_BtrOaH","featureSection":"SnFGR4ajB9PhffnKkCPQ","featureSectionWrapper":"P7XJRnsoT_r7aJ0Lf_2w","featureTitle":"_YkuSolkQHe2GKE_GNo3","featureItemContainer":"HvLJrOL0pkHtziJtL8yf"});
;// CONCATENATED MODULE: ./src/pages/Home/Home.tsx













const cx = bind_default().bind(Home_module);
const Home = () => {
    const wrapperRef = (0,react.useRef)(null);
    const heroImageSrc = getAssetSrc(hero, 'png');
    const heroImageWebpSrcSet = getOptimizedAssetSrcSet(hero, 'webp');
    const heroImageAvifSrcSet = getOptimizedAssetSrcSet(hero, 'avif');
    const isProduction = "production" === 'production';
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)("section", Object.assign({ className: Home_module.heroSection }, { children: [(0,jsx_runtime.jsxs)("picture", Object.assign({ className: Home_module.heroImageContainer }, { children: [isProduction && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("source", { srcSet: heroImageAvifSrcSet, type: "image/avif" }), (0,jsx_runtime.jsx)("source", { srcSet: heroImageWebpSrcSet, type: "image/webp" })] })), (0,jsx_runtime.jsx)("img", { src: heroImageSrc, alt: "Hero", sizes: "(max-width: 600px) 400px,\n             (max-width: 1200px) 1200px,\n             1600px", className: Home_module.heroImage })] })), (0,jsx_runtime.jsxs)("div", Object.assign({ className: Home_module.projectTitle }, { children: [(0,jsx_runtime.jsx)("h1", Object.assign({ className: Home_module.title }, { children: "Memegle" })), (0,jsx_runtime.jsx)("h3", Object.assign({ className: Home_module.subtitle }, { children: "gif search engine for you" }))] })), (0,jsx_runtime.jsx)(react_router_dom/* Link */.N_, Object.assign({ to: "/search" }, { children: (0,jsx_runtime.jsx)("button", Object.assign({ type: "button", className: cx('cta', 'linkButton') }, { children: "start search" })) }))] })), (0,jsx_runtime.jsxs)("section", Object.assign({ ref: wrapperRef, className: Home_module.featureSection }, { children: [(0,jsx_runtime.jsx)(AnimatedPath_AnimatedPath, { wrapperRef: wrapperRef }), (0,jsx_runtime.jsxs)("div", Object.assign({ className: Home_module.featureSectionWrapper }, { children: [(0,jsx_runtime.jsx)("h2", Object.assign({ className: Home_module.featureTitle }, { children: "Features" })), (0,jsx_runtime.jsxs)("div", Object.assign({ className: Home_module.featureItemContainer }, { children: [(0,jsx_runtime.jsx)(FeatureItem_FeatureItem, { title: "See trending gif", imageSrc: trending }), (0,jsx_runtime.jsx)(FeatureItem_FeatureItem, { title: "Find gif for free", imageSrc: find }), (0,jsx_runtime.jsx)(FeatureItem_FeatureItem, { title: "Free for everyone", imageSrc: free })] })), (0,jsx_runtime.jsx)(react_router_dom/* Link */.N_, Object.assign({ to: "/search" }, { children: (0,jsx_runtime.jsx)("button", Object.assign({ type: "button", className: Home_module.linkButton }, { children: "start search" })) }))] }))] })), (0,jsx_runtime.jsx)(CustomCursor_CustomCursor, { text: "memegle" })] }));
};
/* harmony default export */ const Home_Home = (Home);

;// CONCATENATED MODULE: ./src/components/NavBar/NavBar.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const NavBar_module = ({"header":"ePPJ5tseP4exTH_DVMvd","nav":"t3kpGqNTam4fRuMTYq_H","logo":"h_p0IE3Yx3F0KNEn3uKt","searchPageButton":"k5z5r_qj_BAMO2XHeUeK"});
;// CONCATENATED MODULE: ./src/components/NavBar/NavBar.tsx



const NavBar = () => {
    return ((0,jsx_runtime.jsx)("header", Object.assign({ className: NavBar_module.header }, { children: (0,jsx_runtime.jsxs)("nav", Object.assign({ className: NavBar_module.nav }, { children: [(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_, Object.assign({ to: "/" }, { children: (0,jsx_runtime.jsx)("span", Object.assign({ className: NavBar_module.logo }, { children: "memegle" })) })), (0,jsx_runtime.jsx)(react_router_dom/* Link */.N_, Object.assign({ to: "/search" }, { children: (0,jsx_runtime.jsx)("button", Object.assign({ className: NavBar_module.searchPageButton }, { children: "start search" })) }))] })) })));
};
/* harmony default export */ const NavBar_NavBar = (NavBar);

;// CONCATENATED MODULE: ./src/components/Footer/Footer.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Footer_module = ({});
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx


const Footer = () => {
    return ((0,jsx_runtime.jsx)("footer", { children: (0,jsx_runtime.jsxs)("p", { children: ["(c) memegle. All rights reserved. Powered by\u00A0", (0,jsx_runtime.jsx)("a", Object.assign({ href: "https://giphy.com/" }, { children: "Giphy" })), "."] }) }));
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/App.tsx







const App = () => {
    const basename = "/perf-basecamp";
    const Search = (0,react.lazy)(() => __webpack_require__.e(/* import() */ 526).then(__webpack_require__.bind(__webpack_require__, 526)));
    return ((0,jsx_runtime.jsxs)(react_router_dom/* BrowserRouter */.Kd, Object.assign({ basename: basename }, { children: [(0,jsx_runtime.jsx)(NavBar_NavBar, {}), (0,jsx_runtime.jsxs)(react_router/* Routes */.BV, { children: [(0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/", element: (0,jsx_runtime.jsx)(Home_Home, {}) }), (0,jsx_runtime.jsx)(react_router/* Route */.qh, { path: "/search", element: (0,jsx_runtime.jsx)(react.Suspense, Object.assign({ fallback: (0,jsx_runtime.jsx)("div", { children: "Loading..." }) }, { children: (0,jsx_runtime.jsx)(Search, {}) })) })] }), (0,jsx_runtime.jsx)(Footer_Footer, {})] })));
};
/* harmony default export */ const src_App = (App);

;// CONCATENATED MODULE: ./src/index.tsx



const root = (0,client/* createRoot */.H)(document.getElementById('app'));
root.render((0,jsx_runtime.jsx)(src_App, {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "914438bf90df6a94194c" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "frontend-performance-basecamp:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"526":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend_performance_basecamp"] = self["webpackChunkfrontend_performance_basecamp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [890,551,524], () => (__webpack_require__(418)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.6c2beaef45f637fcbc4a.js.map