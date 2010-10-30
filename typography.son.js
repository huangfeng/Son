(function () {

    /* Blueprint css framework http://www.blueprintcss.org/ typography.css written in Son */


    var typoCss = {
/* --------------------------------------------------------------

   typography.css
   * Sets up some sensible default typography.

-------------------------------------------------------------- */

/* Default font settings.
   The font-size percentage is of 16px. (0.75 * 16px = 12px) */
        "$html": {
            "font-size": "100.01%"
        },
        "$body": {
            font: {
                size: "75%",
                family: '"Helvetica Neue", Arial, Helvetica, sans-serif'
            },
            color: "#222",
            background: "#fff"
        },

/* Headings
-------------------------------------------------------------- */

        "$h1,h2,h3,h4,h5,h6": {
            "font-weight": "normal",
            color: "#111",
		"$img": {
			margin: 0
		}
        },
        "$h1": {
            "font-size": "3em",
            "line-height": 1,
            "margin-bottom": "0.5em"
        },
        "$h2": {
            "font-size": "2em",
            "margin-bottom": "0.75em"
        },
        "$h3": {
            "font-size": "1.5em",
            "line-height": 1,
            "margin-bottom": "1em"
        },
        "$h4": {
            "font-size": "1.2em",
            "line-height": 1.25,
            "margin-bottom": "1.25em"
        },
        "$h5": {
            "font-size": "1em",
            "font-weight": "bold",
            "margin-bottom": "1.5em"
        },
        "$h6": {
            "font-size": "1em",
            "font-weight": "bold"
        },


/* Text elements
-------------------------------------------------------------- */
        "$.left": {
            float: "left !important"
        },
        "$.right": {
            float: "right !important"
        },
        "$p": {
            margin: "0 0 1.5em",
            "$.left": {
                margin: "1.5em 1.5em 1.5em 0",
                padding: 0
            },
            "$.right": {
                margin: "1.5em 0 1.5em 1.5em",
                padding: 0
            }
        },
/* 
	These can be used to pull an image at the start of a paragraph, so 
	that the text flows around it (usage: <p><img class="left">Text</p>) 
 */

        "$a": {
            color: "#06c",
            "text-decoration": "underline",
            "$:focus": {
                color: "#09f"
            },
            "$:hover": {
                color: "#09f"
            }
        },
        "$blockquote": {
            margin: "1.5em",
            color: "#666",
            "font-style": "italic"
        },
        "$strong,dfn": {
            "font-weight": "bold"
        },
        "$em,dfn": {
            "font-style": "italic"
        },
        "$sup, sub": {
            "line-height": 0
        },

        "$abbr,acronym": {
            "border-bottom": "1px dotted #666"
        },
        "$address": {
            margin: "0 0 1.5em",
            "font-style": "italic"
        },
        "$del": {
            color: "#666"
        },

        "$pre": {
            margin: "1.5em 0",
            "white-space": "pre"
        },
        "$pre,code,tt": {
            font: "1em 'andale mono', 'lucida console', monospace",
            "line-height": 1.5
        },


/* Lists
-------------------------------------------------------------- */

        "$li ul, li ol": {
            margin: 0
        },
        "$ul, ol": {
            margin: "0 1.5em 1.5em 0",
            "padding-left": "1.5em"
        },
        "$ul": {
            "list-style-type": "disc"
        },
        "$ol": {
            "list-style-type": "decimal"
        },

        "$dl": {
            margin: "0 0 1.5em 0"
        },
        "$dl dt": {
            "font-weight": "bold"
        },
        "$dd": {
            "margin-left": "1.5em"
        },


/* Tables
-------------------------------------------------------------- */

/* 
	Because of the need for padding on TH and TD, the vertical rhythm 
	on table cells has to be 27px, instead of the standard 18px or 36px 
	of other elements. 
 */
        "$table": {
            "margin-bottom": "1.4em",
            width: "100%"
        },
        "$th": {
            "font-weight": "bold"
        },
        "$thead th": {
            background: "#c3d9ff"
        },
        "$th,td,caption": {
            padding: "4px 10px 4px 5px"
        },
/*
	You can zebra-stripe your tables in outdated browsers by adding 
	the class "even" to every other table row. 
 */
        "$tbody tr:nth-child(even) td, tbody tr.even td": {
            background: "#e5ecf9"
        },
        "$tfoot": {
            "font-style": "italic"
        },
        "$caption": {
            background: "#eee"
        },


/* Misc classes
-------------------------------------------------------------- */

        "$.small": {
            "font-size": ".8em",
            "margin-bottom": "1.875em",
            "line-height": "1.875em"
        },
        "$.large": {
            "font-size": "1.2em",
            "line-height": "2.5em",
            "margin-bottom": "1.25em"
        },
        "$.hide": {
            display: "none"
        },

        "$.quiet": {
            color: "#666"
        },
        "$.loud": {
            color: "#000"
        },
        "$.highlight": {
            background: "#ff0"
        },
        "$.added": {
            background: "#060",
            color: "#fff"
        },
        "$.removed": {
            background: "#900",
            color: "#fff"
        },

        "$.first": {
            "margin-left": 0,
            "padding-left": 0
        },
        "$.last": {
            "margin-right": 0,
            "padding-right": 0
        },
        "$.top": {
            "margin-top": 0,
            "padding-top": 0
        },
        "$.bottom": {
            "margin-bottom": 0,
            "padding-bottom": 0
        }

    };


    this.typoCss = typoCss;

    //returns style object (for node.js use)
    return typoCss;

})();