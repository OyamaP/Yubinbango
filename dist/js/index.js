(()=>{"use strict";var t={364:t=>{var e,r=[];!function(t){var e=function(){function t(t,e){if(void 0===t&&(t=""),this.URL="https://yubinbango.github.io/yubinbango-data/data",this.REGION=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],t){var r=t.replace(/[０-９]/g,(function(t){return String.fromCharCode(t.charCodeAt(0)-65248)})).match(/\d/g).join(""),o=this.chk7(r);o?this.getAddr(o,e):e(this.addrDic())}}return t.prototype.chk7=function(t){if(7===t.length)return t},t.prototype.addrDic=function(t,e,r,o,i){return void 0===t&&(t=""),void 0===e&&(e=""),void 0===r&&(r=""),void 0===o&&(o=""),void 0===i&&(i=""),{region_id:t,region:e,locality:r,street:o,extended:i}},t.prototype.selectAddr=function(t){return t&&t[0]&&t[1]?this.addrDic(t[0],this.REGION[t[0]],t[1],t[2],t[3]):this.addrDic()},t.prototype.jsonp=function(t,e){window.$yubin=function(t){return e(t)};var r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("charset","UTF-8"),r.setAttribute("src",t),document.head.appendChild(r)},t.prototype.getAddr=function(t,e){var o=this,i=t.substr(0,3);if(i in r&&t in r[i])return e(this.selectAddr(r[i][t]));this.jsonp(this.URL+"/"+i+".js",(function(n){return r[i]=n,e(o.selectAddr(n[t]))}))},t}();t.Core=e}(e||(e={})),t.exports=e}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}(()=>{const t=r(364);new class{constructor(t){this.config={form:t.formQuery,postal:".p-postal-code",region:".p-region",locality:".p-locality",street:".p-street"},window.addEventListener("load",this.load)}load=()=>{this.form=document.querySelector(this.config.form),["blur","change"].forEach((t=>{this.form.querySelector(this.config.postal).addEventListener(t,this.run)}))};run=e=>{const r=this.formatNumber(e.target.value);this.form.querySelector(this.config.postal).value=r,/^\d{7}$/.test(r)&&new t.Core(r,(t=>{const e=this.getTargets();this.clearValue(e),this.setValue(e,t)}))};formatNumber=t=>t.replace(/[０-９]/g,(t=>String.fromCharCode(t.charCodeAt(0)-65248)));getTargets=()=>Object.keys(this.config).filter((t=>!["form","postal"].includes(t))).reduce(((t,e)=>{const r=this.form.querySelector(this.config[e]);return r?(t[e]=r,t):t}),{});clearValue=t=>{Object.values(t).forEach((t=>{t.value=""}))};setValue=(t,e)=>{Object.keys(t).forEach((r=>{t[r].value+=e[r]}))}}({formQuery:"#form-test"})})()})();