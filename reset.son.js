(function () {

    /* Blueprint css framework http://www.blueprintcss.org/ reset.css written in Son */

    var resetCss = {
        "$html": {
           "margin, padding, border" : 0
        },
        "$body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, code,del, dfn, em, img, q, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, dialog, figure, footer, header, hgroup, nav, section": {
            "margin, padding, border" : 0,
            font: {
                "weight, style, family" : "inherit",
                size: "100%",
            },
            "vertical-align": "baseline"
        },
        "$article, aside, dialog, figure, footer, header, hgroup, nav, section": {
            display: "block"
        },
        "$body": {
            "line-height": 1.5,
            background: "white"
        },
        "$table": {
            border: {
                collapse: "separate",
                spacing: 0
            }
        },
        "$caption, th, td": {
            "text-align": "left",
            "font-weight": "normal",
            "float": "none !important"
        },
        "$table, th, td": {
            "vertical-align": "middle"
        },
        "$blockquote:before, blockquote:after, q:before, q:after": {
            content: "''"
        },
        "$blockquote, q": {
            quotes: '"" ""'
        },
        "$a img": {
            border: "none"
        },
        "$:focus": {
            outline: 0
        }
    }


    this.resetCss = resetCss;

    //returns style object (for node.js use)
    return resetCss;

})();