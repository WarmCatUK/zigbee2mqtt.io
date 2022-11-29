"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49332],{55362:(e,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-063bc846","path":"/devices/C4.html","title":"Ubisys C4 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Ubisys C4 control via MQTT","description":"Integrate your Ubisys C4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-02-26T17:45:15.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"General","slug":"general","link":"#general","children":[]},{"level":3,"title":"Configuring Inputs","slug":"configuring-inputs","link":"#configuring-inputs","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"Decoupling","slug":"decoupling","link":"#decoupling","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669723228000},"filePathRelative":"devices/C4.md"}')},85866:(e,n,s)=>{s.r(n),s.d(n,{default:()=>E});var t=s(66252);const a=(0,t._)("h1",{id:"ubisys-c4",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ubisys-c4","aria-hidden":"true"},"#"),(0,t.Uk)(" Ubisys C4")],-1),o=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th")])],-1),i=(0,t._)("tr",null,[(0,t._)("td",null,"Model"),(0,t._)("td",null,"C4")],-1),l=(0,t._)("td",null,"Vendor",-1),c=(0,t._)("tr",null,[(0,t._)("td",null,"Description"),(0,t._)("td",null,"Control unit C4")],-1),p=(0,t._)("tr",null,[(0,t._)("td",null,"Exposes"),(0,t._)("td",null,"action, linkquality")],-1),u=(0,t._)("tr",null,[(0,t._)("td",null,"Picture"),(0,t._)("td",null,[(0,t._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/C4.jpg",alt:"Ubisys C4"})])],-1),d=(0,t._)("h2",{id:"notes",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,t.Uk)(" Notes")],-1),r=(0,t._)("h3",{id:"general",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#general","aria-hidden":"true"},"#"),(0,t.Uk)(" General")],-1),m=(0,t.uE)('<h3 id="configuring-inputs" tabindex="-1"><a class="header-anchor" href="#configuring-inputs" aria-hidden="true">#</a> Configuring Inputs</h3><p>The inputs of most ubisys devices can be configured in a very flexible way to map state transitions (e.g. &#39;released&#39; to &#39;pressed&#39;) to Zigbee commands (e.g. &#39;toggle&#39;). This even applies to the way in which these inputs control a local load (for ubisys devices other than the C4).</p><h4 id="templates" tabindex="-1"><a class="header-anchor" href="#templates" aria-hidden="true">#</a> Templates</h4><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> using the JSON properties <code>configure_device_setup</code> and <code>input_action_templates</code> the inputs can be configured using templates. This allows to configure some common use cases without having to fully dive into the details of <code>input_actions</code> (see <a href="#raw-configuration">Raw Configuration</a> below).</p><p>Valid template types are:</p><ul><li><code>toggle</code>: Use one push button input to toggle the state of a light (or a similar actuator). A &#39;toggle&#39; command will be sent on every push of the button.</li><li><code>toggle_switch</code>: Use one stationary switch to toggle. A &#39;toggle&#39; command will be sent when the switch is turned on as well as when the switch is turned off.</li><li><code>on_off_switch</code>: Use one stationary switch to turn on and off. An &#39;on&#39; command will be sent when the switch is turned on and an &#39;off&#39; command when it is turned off. Helpful to ensure that lights stay synchronised when controlling a group.</li><li><code>on</code>: Only send an &#39;on&#39; command on every push of a button. Helpful to e.g. use a C4 as a more direct interface to some other physical device with a relay, e.g. to turn on all lights when the (physical) alarm system signals an intrusion.</li><li><code>off</code>: Only send an &#39;off&#39; command on every push of a button (also see <code>on</code>).</li><li><code>dimmer_single</code>: Use one push button to toggle the state of a light and also to control its level. A short press will send a &#39;toggle&#39; command and long presses will move the level up and down alternately.</li><li><code>dimmer_double</code>: Use two push buttons to switch a light on and off and also to control its level. On the first input, a short press will send an &#39;on&#39; command and a long press a &#39;move level up&#39; command. On the second input, a short press will send an &#39;off&#39; command and a long press a &#39;move level down&#39; command.</li><li><code>cover</code>: Use two push buttons to control a cover. A press on the first input will send a &#39;move up&#39; command and if released within 1 second, it will send a &#39;stop&#39; command. The same applies for the second input with &#39;move down&#39; and &#39;stop&#39; commands. This allows to use short presses to e.g. control the tilt of lift &amp; tilt blinds whereas long presses will move up or down completely.</li><li><code>cover_switch</code>: Use two stationary switches to control a cover. Similar to <code>cover</code>, but the &#39;stop&#39; command will always be sent when a switch is turned off.</li><li><code>cover_up</code>: Only send a &#39;move up&#39; command on every push of a button (also see <code>on</code>).</li><li><code>cover_down</code>: Only send a &#39;move down&#39; command on every push of a button (also see <code>on</code>).</li><li><code>scene</code>: Use a push button to select a scene (using its id). A short press will send a &#39;recall scene&#39; command using <code>scene_id</code> and if <code>scene_id_2</code> is present a long press will do the same using <code>scene_id_2</code>.</li><li><code>scene_switch</code>: Use a stationary switch to select a scene. Very similar to <code>scene</code>: turning the switch on will send <code>scene_id</code> and turning it off will send <code>scene_id_2</code> (if configured).</li></ul><p>General attributes:</p><ul><li><code>input</code>: Optional, selects the input(s) to use for a template. If not specified, the first template will use input 0 and then it will be incremented automatically for every further template. In case a templates uses two inputs, <code>input</code> and <code>input+1</code> will be used and following template will use <code>input+2</code>.</li><li><code>inputs</code>: Optional, selects both inputs separately for templates using two inputs. Allows to e.g. switch up and down inputs in case they are wired differently. The following template will use <code>Math.max(...inputs)+1</code>.</li><li><code>endpoint</code>: Optional, selects the <em>outbound</em> endpoint to use for sending the commands. The C4 only contains <em>outbound</em> endpoints starting with endpoint 1 (see above). For the other ubisys devices endpoint 1 usually is an <em>inbound</em> endpoint controlling the load, but starting at 2 or 3 they also contain <em>outbound</em> endpoints that are per default bound to their respective load controlling endpoint but can also be changed (e.g. from switch to push button) or unbound and rebound to e.g. control a different light using the second input of a S1-R or D1. If not specified, the first template will use the first available <em>outbound</em> endpoint on the specific device and then it will be incremented automatically for every further template. For a C4, cover templates will start at endpoint 5 (since endpoints 1-4 do not host a window covering cluster and can therefore only be used for lights etc).</li></ul><p>The input(s) and endpoint used will also be output to the Zigbee2MQTT log (flagged as warnings but only to make sure they do not get suppressed).</p><p>Attributes only used with dimmer templates:</p><ul><li><code>no_onoff_down</code>: Optional, changes the commands sent to not automatically turn the light off when moving the level fully down. Useful to be able to dim a light down completely without turning it off.</li><li><code>no_onoff_up</code>: Optional, changes the commands sent to not automatically turn the light on when moving the level up.</li><li><code>no_onoff</code>: Optional, combination of <code>no_onoff_up</code> and <code>no_onoff_down</code>.</li><li><code>rate</code>: Optional (default is 50), specifies the rate in steps per second when moving the level up or down.</li></ul><p>Attributes only used with scene templates</p><ul><li><code>scene_id</code>: Mandatory, specifies the scene id to send for the primary function of the template (i.e. short button press or switch turned on).</li><li><code>group_id</code>: Specifies the group id to send the &#39;recall scene&#39; to (needs to be identical to the one used in the group definition in <code>configuration.yaml</code> / <code>groups</code> and to the one used when storing the scene. Can be omitted on subsequent scene templates.</li><li><code>scene_id_2</code>: Optional, if present it specifies the scene id to send for the secondary function of the template (i.e. long button press or switch turned off).</li><li><code>group_id_2</code>: Optional, specifies the group id to send with <code>scene_id_2</code>. Only needed if different from <code>group_id</code>.</li></ul><p><strong>On the C4, the respective <em>outbound</em> endpoint also needs to be bound to one or more target devices (see <a href="#binding">Binding</a> below) for most of the template types (besides scene control).</strong></p><p>Please also note that there seems to be a size limit on the amount of data that can successfully be written using <code>input_action_templates</code>, so not all combinations theoretically possible will work in reality.</p><h4 id="template-examples" tabindex="-1"><a class="header-anchor" href="#template-examples" aria-hidden="true">#</a> Template Examples</h4><p><code>&quot;//_comment&quot;</code> fields are really just comments only, will be ignored (as any other additional JSON properties) and can certainly be omitted. They are just used here since normal JavaScript comments (<code>//</code>) would not be considered valid JSON and therefore Zigbee2MQTT would throw an error.</p><p>C4 Default Configuration</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_device_setup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;input_action_templates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use input 0 and endpoint 1&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;toggle&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use input 1 and endpoint 2&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;toggle&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use input 2 and endpoint 3&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;toggle&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use input 4 and endpoint 4&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;toggle&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Control a dimming light with inputs 1 (up) and 0 (down) and use input 3 to toggle a different light</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_device_setup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;input_action_templates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use endpoint 1&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dimmer_double&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use endpoint 2&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;toggle&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token number">3</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use separate up and down push buttons with a D1</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_device_setup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;input_action_templates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use inputs 0 and 1 and endpoint 2 (first outbound endpoint on a D1)&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dimmer_double&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use stationary switches instead of push buttons with a J1</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_device_setup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;input_action_templates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use inputs 0 and 1 and endpoint 2 (first outbound endpoint on a J1)&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cover_switch&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Control a dimming light with inputs 0 and 1 and recall scenes with 3 and 4</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_device_setup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;input_action_templates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use inputs 0 and 1 and endpoint 1&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dimmer_double&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use input 3 (endpoint does not really matter for scenes)&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scene&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;group_id&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;scene_id&quot;</span><span class="token operator">:</span> <span class="token number">10</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;//_comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;will automatically use input 4 and group id 1000&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scene&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;scene_id&quot;</span><span class="token operator">:</span> <span class="token number">11</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="raw-configuration" tabindex="-1"><a class="header-anchor" href="#raw-configuration" aria-hidden="true">#</a> Raw Configuration</h4><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> the following device attributes can be set to rawly configure inputs:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_device_setup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;input_configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;input_actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',30),h={href:"https://www.ubisys.de/wp-content/uploads/ubisys-c4-technical-reference.pdf",target:"_blank",rel:"noopener noreferrer"},v=(0,t._)("code",null,"input_configurations",-1),b=(0,t._)("code",null,"input_actions",-1),g=(0,t._)("code",null,"input_actions",-1),k=(0,t.uE)('<p>Please note that there seems to be a size limit on the amount of data that can successfully be written to <code>input_actions</code>, so not all configurations theoretically possbile might work in reality.</p><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/get/configure_device_setup</code> the values of the configuration attributes can also be read back from the device. If you don&#39;t want <code>configure_device_setup</code> to always show up in the published payload, you can prevent them from being cached by configuring <code>filtered_cache</code> for this device or all devices using the device options.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x0000000000000000&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_c4_controller&#39;</span>\n    <span class="token key atrule">filtered_cache</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> configure_device_setup\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3><p>Most of the <code>input_actions</code> and <code>input_action_templates</code> (besides scene control) do not reference a target device directly but make use of the binding table of a specific <em>outbound</em> endpoint (for C4 see <a href="#general">General</a> above, for other ubisys devices take a look at the respective ubisys reference manual). For the C4, Zigbee2MQTT will always bind all endpoints to the coordinator automatically (so Zigbee2MQTT will be able to forward button presses to MQTT), but to control any other ZigBee device or group directly, it is necessary to bind the <em>outbound</em> endpoints used to the target (device or group).</p>',5),f=(0,t._)("em",null,"outbound",-1),_=(0,t._)("code",null,"zigbee2mqtt/bridge/request/device/bind",-1),y=(0,t._)("code",null,'{"from": "SOURCE_DEVICE_FRIENDLY_NAME/2", "to": "TARGET"}',-1),q=(0,t.uE)('<p>For ubisys devices other than the C4 this also allows to use the secondary input to control a different device. Example: Use the secondary input on a D1 (uses <em>outbound</em> endpoint 3 in the factory configuration) to control a separate ZigBee bulb:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mosquitto_pub -t zigbee2mqtt/bridge/request/device/bind -m &#39;{&quot;from&quot;: &quot;DIMMER_FRIENDLY_NAME/3&quot;, &quot;to&quot;: &quot;ANOTHER_BULB_FRIENDLY_NAME&quot;}&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="decoupling" tabindex="-1"><a class="header-anchor" href="#decoupling" aria-hidden="true">#</a> Decoupling</h3><p>For ubisys devices other than the C4 this even allows to completely decouple the local input from the local output. Example: Unbind the switch input from the local load and use it to instead control a group of lights without cutting the power to the bulbs (the switch output can still be controlled via ZigBee, e.g. via MQTT through Zigbee2MQTT):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mosquitto_pub -t zigbee2mqtt/bridge/request/device/unbind -m &#39;{&quot;from&quot;: &quot;SWITCH_FRIENDLY_NAME/2&quot;, &quot;to&quot;: &quot;SWITCH_FRIENDLY_NAME&quot;}&#39;\nmosquitto_pub -t zigbee2mqtt/bridge/request/device/bind -m &#39;{&quot;from&quot;: &quot;SWITCH_FRIENDLY_NAME/2&quot;, &quot;to&quot;: &quot;GROUP_NAME&quot;}&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To restore the original behavior you unbind the group and rebind the device:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mosquitto_pub -t zigbee2mqtt/bridge/request/device/unbind -m &#39;{&quot;from&quot;: &quot;SWITCH_FRIENDLY_NAME/2&quot;, &quot;to&quot;: &quot;GROUP_NAME&quot;}&#39;\nmosquitto_pub -t zigbee2mqtt/bridge/request/device/bind -m &#39;{&quot;from&quot;: &quot;SWITCH_FRIENDLY_NAME/2&quot;, &quot;to&quot;: &quot;SWITCH_FRIENDLY_NAME&quot;}&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',7),w=(0,t._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,t.Uk)(" OTA updates")],-1),T=(0,t._)("h2",{id:"options",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,t.Uk)(" Options")],-1),x=(0,t.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>1_scene_*</code>, <code>1_on</code>, <code>1_off</code>, <code>1_toggle</code>, <code>1_level_move_down</code>, <code>1_level_move_up</code>, <code>2_scene_*</code>, <code>2_on</code>, <code>2_off</code>, <code>2_toggle</code>, <code>2_level_move_down</code>, <code>2_level_move_up</code>, <code>3_scene_*</code>, <code>3_on</code>, <code>3_off</code>, <code>3_toggle</code>, <code>3_level_move_down</code>, <code>3_level_move_up</code>, <code>4_scene_*</code>, <code>4_on</code>, <code>4_off</code>, <code>4_toggle</code>, <code>4_level_move_down</code>, <code>4_level_move_up</code>, <code>5_scene_*</code>, <code>5_cover_open</code>, <code>5_cover_close</code>, <code>5_cover_stop</code>, <code>6_scene_*</code>, <code>6_cover_open</code>, <code>6_cover_close</code>, <code>6_cover_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),U={},E=(0,s(83744).Z)(U,[["render",function(e,n){const s=(0,t.up)("RouterLink"),U=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.kq)(" !!!! "),(0,t.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,t.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,t.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,t.kq)(" !!!! "),a,(0,t._)("table",null,[o,(0,t._)("tbody",null,[i,(0,t._)("tr",null,[l,(0,t._)("td",null,[(0,t.Wm)(s,{to:"/supported-devices/#v=Ubisys"},{default:(0,t.w5)((()=>[(0,t.Uk)("Ubisys")])),_:1})])]),c,p,u])]),(0,t.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),d,r,(0,t._)("p",null,[(0,t.Uk)('The ubisys C4 remote control unit seems to be primarily targeted to be directly bound to other ZigBee devices to control them. Therefore it does not emit plain "click" events or similar but can be configured to send ZigBee commands like on, off, toggle, cover up, cover down etc. from up to 6 endpoints (4 with on/off, level and scene clusters for lights and another 2 to control window covering devices). When used with Zigbee2MQTT all endpoints get bound to the coordinator automatically. Therefore all actions will be sent to the coordinator and forwarded to MQTT in addition to being sent directly via ZigBee to other devices that have potentially been bound manually (see '),(0,t.Wm)(s,{to:"/guide/usage/binding.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("Binding")])),_:1}),(0,t.Uk)(" for more information). In its factory reset configuration an ubisys C4 just sends a toggle command (originating from endpoints 1 to 4 respectively) for each input. Therefore basic keypresses on attached momentary switches can be processed through Zigbee2MQTT even without further input configuration.")]),m,(0,t._)("p",null,[(0,t.Uk)("For further details on these attributes please take a look at the "),(0,t._)("a",h,[(0,t.Uk)("ubisys C4 Technical Reference Manual"),(0,t.Wm)(U)]),(0,t.Uk)(', chapter "7.8.5. Device Setup Cluster (Server)" (or the respective ubisys reference manual of the device in use in case it\'s not a C4) and the "ZigBee Device Physical Input Configurations Integrator\'s Guide" (which can be obtained directly from ubisys upon request). Each element in the '),v,(0,t.Uk)(" and "),b,(0,t.Uk)(' arrays corresponds to a single byte. Therefore, fields longer than one byte (e.g. the "ClusterID" field in '),g,(0,t.Uk)(") are represented by multiple elements in the array, and the arrays may vary in length depending on the configuration being sent.")]),k,(0,t._)("p",null,[(0,t.Uk)("When binding (or unbinding), it is important to explicitly specify the "),f,(0,t.Uk)(" endpoint as the source, e.g. "),_,(0,t.Uk)(" payload "),y,(0,t.Uk)(" (also see "),(0,t.Wm)(s,{to:"/guide/usage/binding.html#binding-specific-endpoint"},{default:(0,t.w5)((()=>[(0,t.Uk)("Binding specific endpoint")])),_:1}),(0,t.Uk)("). Endpoints can be specified in numeric form and it is usually not necessary to specify an endpoint for the target device.")]),q,(0,t.kq)(" Notes END: Do not edit below this line "),w,(0,t._)("p",null,[(0,t.Uk)("This device supports OTA updates, for more information see "),(0,t.Wm)(s,{to:"/guide/usage/ota_updates.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("OTA updates")])),_:1}),(0,t.Uk)(".")]),T,(0,t._)("p",null,[(0,t._)("em",null,[(0,t.Wm)(s,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.w5)((()=>[(0,t.Uk)("How to use device type specific configuration")])),_:1})])]),x])}]])}}]);