"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[18562],{30974:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-74f83df0","path":"/devices/3RSP019BZ.html","title":"Third Reality 3RSP019BZ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Third Reality 3RSP019BZ control via MQTT","description":"Integrate your Third Reality 3RSP019BZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-20T23:20:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Switch between BLE and Zigbee mode","slug":"switch-between-ble-and-zigbee-mode","link":"#switch-between-ble-and-zigbee-mode","children":[]},{"level":3,"title":"Factory Reset","slug":"factory-reset","link":"#factory-reset","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669723228000},"filePathRelative":"devices/3RSP019BZ.md"}')},51869:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var a=i(66252);const l=(0,a._)("h1",{id:"third-reality-3rsp019bz",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#third-reality-3rsp019bz","aria-hidden":"true"},"#"),(0,a.Uk)(" Third Reality 3RSP019BZ")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"3RSP019BZ")],-1),d=(0,a._)("td",null,"Vendor",-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Zigbee / BLE smart plug")],-1),h=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"switch (state), linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/3RSP019BZ.jpg",alt:"Third Reality 3RSP019BZ"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="switch-between-ble-and-zigbee-mode" tabindex="-1"><a class="header-anchor" href="#switch-between-ble-and-zigbee-mode" aria-hidden="true">#</a> Switch between BLE and Zigbee mode</h3><p>Plug comes out of the box in BLE mode (Green LED). To use with zigbee2mqtt you need to change to zigbee mode (Red LED):</p><h4 id="ble-→-zigbee" tabindex="-1"><a class="header-anchor" href="#ble-→-zigbee" aria-hidden="true">#</a> BLE → ZigBee</h4><ol><li>Press the button and hold, then insert the Smart Plug into an outlet until the green light is ON.</li><li>Release the button, then press the button immediately. LED light will flash in red, indicating that your Smart Plug is in ZigBee mode now.</li></ol><p>If you want to restore to BLE to work with most Echo devices:</p><h4 id="zigbee-→-ble" tabindex="-1"><a class="header-anchor" href="#zigbee-→-ble" aria-hidden="true">#</a> ZigBee → BLE</h4><ol><li>Press the button and hold, then insert the Smart Plug into an outlet until the red light is ON.</li><li>Release the button, then press the button immediately. LED light will alternately flash in green and red, indicating that your Smart Plug is in BLE mode now.</li></ol><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory Reset</h3><p>After your Smart Plug is powered on, press and hold the button for more than 10 seconds until the LED light flashes indicating that your Smart Plug is in pairing mode. (The mode won’t be change while factory reset your Smart Plug.)</p>',10),c=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),g={},b=(0,i(83744).Z)(g,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),l,(0,a._)("table",null,[o,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Third%20Reality"},{default:(0,a.w5)((()=>[(0,a.Uk)("Third Reality")])),_:1})])]),r,h,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a.kq)(" Notes END: Do not edit below this line "),c])}]])}}]);