(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{191:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"util"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util","aria-hidden":"true"}},[t._v("#")]),t._v(" Util")]),t._v(" "),a("p",[t._v("The following RPC calls interact with the "),a("code",[t._v("komodod")]),t._v(" software, and are made available through the "),a("code",[t._v("komodo-cli")]),t._v(" software.")]),t._v(" "),a("h2",{attrs:{id:"createmultisig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createmultisig","aria-hidden":"true"}},[t._v("#")]),t._v(" createmultisig")]),t._v(" "),a("p",[a("strong",[t._v('createmultisig nrequired [ "key", ... ]')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("createmultisig")]),t._v(" method creates a multi-signature address with "),a("code",[t._v("n")]),t._v(" signature(s) of "),a("code",[t._v("m")]),t._v(" key(s) required. The method returns a json object with the address and redeemScript.")]),t._v(" "),a("h3",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("number_required")]),t._v(" "),a("td",[t._v("(numeric, required)")]),t._v(" "),a("td",[t._v("the number of required signatures out of the "),a("code",[t._v("n")]),t._v(" key(s) or address(es)")])]),t._v(" "),a("tr",[a("td",[t._v('"keys"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("a json array of keys which are addresses or hex-encoded public keys")])]),t._v(" "),a("tr",[a("td",[t._v('"key"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("an address or hex-encoded public key")])])])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"address"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the value of the new multisig address")])]),t._v(" "),a("tr",[a("td",[t._v('"redeemScript"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the string value of the hex-encoded redemption script")])])])]),t._v(" "),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples:")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli createmultisig 2 "),a("span",{attrs:{class:"token string"}},[t._v('"[\\"RJnVEQgucK1iwiRjfTZmreXkF49KgTErDn\\",\\"RCVyjn9MQ8Tw6YRJnDcsx67kfsmfUgLdfw\\"]"')]),t._v("\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"address"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"bZjsy6bt2ZdyHV5hfCNL2HsuA4eV63s5u6"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"redeemScript"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"52210384c0db4f1eaa142a2745742b942f989375dbec32c55310a793225bb5c43cdc9821021f527b7269ab18da85a50b7f45f572e8b017fce476de06cb80a2550ee7d4b11652ae"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You can find the "),a("code",[t._v("rpcuser")]),t._v(", "),a("code",[t._v("rpcpassword")]),t._v(", and "),a("code",[t._v("rpcport")]),t._v(" in the coin's "),a("code",[t._v(".conf")]),t._v(" file.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user myrpcuser:myrpcpassword --data-binary "),a("span",{attrs:{class:"token string"}},[t._v('\'{"jsonrpc": "1.0", "id":"curltest", "method": "createmultisig", "params": [2, ["RJnVEQgucK1iwiRjfTZmreXkF49KgTErDn","RCVyjn9MQ8Tw6YRJnDcsx67kfsmfUgLdfw"]] }\'')]),t._v(" -H "),a("span",{attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:myrpcport/\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"result"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"address"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"bNnKtDC6UuSt5kGJewCQ5b2BhzFK3HTQUV"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"redeemScript"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"522103ae084021ff011b527c34914d2c40148080c09254dd3c7d1f31f32549b53ccd232103bee23783f726ba81b5977473b172497260d9c261b9ef9f5a9dd51c545c8db0ac52ae"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"error"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"curltest"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"estimatefee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimatefee","aria-hidden":"true"}},[t._v("#")]),t._v(" estimatefee")]),t._v(" "),a("p",[a("strong",[t._v("estimatefee nblocks")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("estimatefee")]),t._v(" method estimates the approximate fee per kilobyte. The method is needed for a transaction to begin confirmation within "),a("code",[t._v("nblocks")]),t._v(" blocks.")]),t._v(" "),a("p",[t._v("The value "),a("code",[t._v("-1.0")]),t._v(" is returned if not enough transactions and blocks have been observed to make an estimate.")]),t._v(" "),a("h3",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("nblocks")]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the number of blocks within which the fee should be tested")])])])]),t._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("n")]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("estimated fee")])])])]),t._v(" "),a("h4",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples:")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli estimatefee 6\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("0.00019376\n")])])]),a("h2",{attrs:{id:"estimatepriority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimatepriority","aria-hidden":"true"}},[t._v("#")]),t._v(" estimatepriority")]),t._v(" "),a("p",[a("strong",[t._v("estimatepriority nblocks")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("estimatepriority")]),t._v(" method estimates the approximate priority of a zero-fee transaction, when it needs to begin confirmation within "),a("code",[t._v("nblocks")]),t._v(" blocks.")]),t._v(" "),a("p",[t._v("The value "),a("code",[t._v("-1.0")]),t._v(" is returned if not enough transactions and blocks have been observed to make an estimate.")]),t._v(" "),a("h3",{attrs:{id:"arguments-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("nblocks")]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("a statement indicating within how many blocks the transaction should be confirmed")])])])]),t._v(" "),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("n")]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("estimated priority")])])])]),t._v(" "),a("h4",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples:")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli estimatepriority 6\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("-1\n")])])]),a("h2",{attrs:{id:"invalidateblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invalidateblock","aria-hidden":"true"}},[t._v("#")]),t._v(" invalidateblock")]),t._v(" "),a("p",[a("strong",[t._v('invalidateblock "hash"')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("invalidateblock")]),t._v(" method permanently marks a block as invalid, as if it violated a consensus rule.")]),t._v(" "),a("h3",{attrs:{id:"arguments-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("hash")]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the hash of the block to mark as invalid")])])])]),t._v(" "),a("h3",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("(none)")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h4",{attrs:{id:"examples-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples:")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli invalidateblock "),a("span",{attrs:{class:"token string"}},[t._v('"02f51fb2793b0728050c5e983ffed669594e0a2dda01dcb7a68d129fd87436e0"')]),t._v("\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("You can find the "),a("code",[t._v("rpcuser")]),t._v(", "),a("code",[t._v("rpcpassword")]),t._v(", and "),a("code",[t._v("rpcport")]),t._v(" in the coin's "),a("code",[t._v(".conf")]),t._v(" file.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user myrpcuser:myrpcpassword --data-binary "),a("span",{attrs:{class:"token string"}},[t._v('\'{"jsonrpc": "1.0", "id":"curltest", "method": "invalidateblock", "params": ["02f51fb2793b0728050c5e983ffed669594e0a2dda01dcb7a68d129fd87436e0"] }\'')]),t._v(" -H "),a("span",{attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:myrpcport/\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"result"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"error"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token null"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"curltest"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"reconsiderblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reconsiderblock","aria-hidden":"true"}},[t._v("#")]),t._v(" reconsiderblock")]),t._v(" "),a("p",[a("strong",[t._v('reconsiderblock "hash"')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("reconsiderblock")]),t._v(" method removes invalidity status of a block and its descendants, reconsidering them for activation. This can be used to undo the effects of invalidateblock.")]),t._v(" "),a("h3",{attrs:{id:"arguments-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("hash")]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the hash of the block to reconsider")])])])]),t._v(" "),a("h3",{attrs:{id:"response-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("(none)")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h4",{attrs:{id:"examples-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples:")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli reconsiderblock "),a("span",{attrs:{class:"token string"}},[t._v('"02f51fb2793b0728050c5e983ffed669594e0a2dda01dcb7a68d129fd87436e0"')]),t._v("\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"validateaddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validateaddress","aria-hidden":"true"}},[t._v("#")]),t._v(" validateaddress")]),t._v(" "),a("p",[a("strong",[t._v('validateaddress "komodoaddress"')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("validateaddress")]),t._v(" method returns information about the given address.")]),t._v(" "),a("h3",{attrs:{id:"arguments-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-6","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"address"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the address to validate")])])])]),t._v(" "),a("h3",{attrs:{id:"response-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-6","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"isvalid"')]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("indicates whether the address is valid. If it is not, this is the only property returned.")])]),t._v(" "),a("tr",[a("td",[t._v('"address"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the address validated")])]),t._v(" "),a("tr",[a("td",[t._v('"scriptPubKey"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the hex encoded scriptPubKey generated by the address")])]),t._v(" "),a("tr",[a("td",[t._v('"ismine"')]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("indicates whether the address is yours")])]),t._v(" "),a("tr",[a("td",[t._v('"isscript"')]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("whether the key is a script")])]),t._v(" "),a("tr",[a("td",[t._v('"pubkey"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the hex value of the raw public key")])]),t._v(" "),a("tr",[a("td",[t._v('"iscompressed"')]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("whether the address is compressed")])]),t._v(" "),a("tr",[a("td",[t._v('"account"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v('DEPRECATED the account associated with the address; "" is the default account')])])])]),t._v(" "),a("h4",{attrs:{id:"examples-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-6","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples:")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli validateaddress "),a("span",{attrs:{class:"token string"}},[t._v('"RDNC9mLrN48pVGDQ5jSoPb2nRsUPJ5t2R7"')]),t._v("\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"isvalid"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"address"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"RDNC9mLrN48pVGDQ5jSoPb2nRsUPJ5t2R7"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scriptPubKey"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"76a9142cd2a4e3d1c2738ee4fce61e73ea822dcaacb9b488ac"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"segid"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("9")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"ismine"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"iswatchonly"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"isscript"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"pubkey"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"03c376b00b3a2ae43b8bf103a6c6962b241de684383301fe628a460b68a79ac1d8"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"iscompressed"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"account"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"verifymessage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifymessage","aria-hidden":"true"}},[t._v("#")]),t._v(" verifymessage")]),t._v(" "),a("p",[a("strong",[t._v('verifymessage "address" "signature" "message"')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("verifymessage")]),t._v(" method verifies a signed message.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("See also "),a("b",[t._v("signmessage")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"arguments-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-7","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"address"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the address to use for the signature")])]),t._v(" "),a("tr",[a("td",[t._v('"signature"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the signature provided by the signer in base 64 encoding")])]),t._v(" "),a("tr",[a("td",[t._v('"message"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the message that was signed")])])])]),t._v(" "),a("h3",{attrs:{id:"response-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-7","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("true/false")]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("indicates whether the signature is verified")])])])]),t._v(" "),a("h4",{attrs:{id:"examples-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-7","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples:")]),t._v(" "),a("p",[t._v("Create the signature:")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli signmessage "),a("span",{attrs:{class:"token string"}},[t._v('"RBtNBJjWKVKPFG4To5Yce9TWWmc2AenzfZ"')]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"my message"')]),t._v("\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("H1y0mn/wRv56r1bcfkbQtzjG6XeWSelAsyayBuCwEL9XGXs7ieU55dryt/cFWM9gnRFI7gS01AByuSqRs+o/AZs"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])])]),a("p",[t._v("Verify the signature:")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli verifymessage "),a("span",{attrs:{class:"token string"}},[t._v('"RBtNBJjWKVKPFG4To5Yce9TWWmc2AenzfZ"')]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"H1y0mn/wRv56r1bcfkbQtzjG6XeWSelAsyayBuCwEL9XGXs7ieU55dryt/cFWM9gnRFI7gS01AByuSqRs+o/AZs="')]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"my message"')]),t._v("\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),a("h2",{attrs:{id:"z-validateaddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-validateaddress","aria-hidden":"true"}},[t._v("#")]),t._v(" z_validateaddress")]),t._v(" "),a("p",[a("strong",[t._v('z_validateaddress "zaddr"')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("z_validateaddress")]),t._v(" method returns information about the given z address.")]),t._v(" "),a("h3",{attrs:{id:"arguments-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-8","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"zaddr"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the z address to validate")])])])]),t._v(" "),a("h3",{attrs:{id:"response-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-8","aria-hidden":"true"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"isvalid"')]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("indicates whether the address is valid; if not, this is the only property returned")])]),t._v(" "),a("tr",[a("td",[t._v('"address"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the z address validated")])]),t._v(" "),a("tr",[a("td",[t._v('"ismine"')]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("indicates if the address is yours or not")])]),t._v(" "),a("tr",[a("td",[t._v('"payingkey"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the hex value of the paying key, a_pk")])]),t._v(" "),a("tr",[a("td",[t._v('"transmissionkey"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the hex value of the transmission key, pk_enc")])])])]),t._v(" "),a("h4",{attrs:{id:"examples-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-8","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples:")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli z_validateaddress "),a("span",{attrs:{class:"token string"}},[t._v('"zcWsmqT4X2V4jgxbgiCzyrAfRT1vi1F4sn7M5Pkh66izzw8Uk7LBGAH3DtcSMJeUb2pi3W4SQF8LMKkU2cUuVP68yAGcomL"')]),t._v("\n")])])]),a("p",[t._v("Response:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"isvalid"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"address"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ztdChvxs2Z97X7qeBwsnRLbxva1ZVgWhFWZxZTA5bC8XLt9RHF8uXn16MWCU8DhKEt4gTtKqQwzsrk85f5tThWMNoYds2oX"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"payingkey"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"d9c09cb974fbe0bf7e36a2318b46396c5112511f90749531428936867d83bd92"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"transmissionkey"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"5ce3250912758cbb591e3d585ef110992f25ed7694b88f55315b060698b75404"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"ismine"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);r.options.__file="util.md";s.default=r.exports}}]);