(function(p,o,c,d,v){"use strict";const m=c.findByProps("sendMessage","receiveMessage");var r;(function(e){e[e.SUB_COMMAND=1]="SUB_COMMAND",e[e.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",e[e.STRING=3]="STRING",e[e.INTEGER=4]="INTEGER",e[e.BOOLEAN=5]="BOOLEAN",e[e.USER6=6]="USER6",e[e.CHANNEL=7]="CHANNEL",e[e.ROLE=8]="ROLE",e[e.MENTIONABLE=9]="MENTIONABLE",e[e.NUMBER=10]="NUMBER",e[e.ATTACHMENT=11]="ATTACHMENT"})(r||(r={}));const N=function(e){return`
    var __async = (generator) => {
        return new Promise((resolve, reject) => {
            var fulfilled = (value) => {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            var rejected = (value) => {
                try {
                    step(generator.throw(value))
                } catch (e) {
                    reject(e)
                }
            }
            var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected)
            step((generator = generator()).next())
        })
    }
    __async(function*() {
        ${e.replace(/\bawait\b/g,"yield")}
    })
    `},u=function(e){const t="\u200B";return"```js\n"+e.replace(/`/g,"`"+t)+"```"};let a=[];const l=c.findByProps("sendBotMessage"),g=c.findByProps("Messages");a.push(o.registerCommand({name:"echo",displayName:"echo",description:"Creates a Clyde message",displayDescription:"Creates a Clyde message",options:[{name:"message",displayName:"message",description:g.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,displayDescription:g.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION,required:!0,type:r.STRING}],applicationId:-1,inputType:1,type:1,execute:function(e,t){return l.sendBotMessage(t.channel.id,e[0].value)}})),a.push(o.registerCommand({name:"plugins",displayName:"plugins",description:"Lists all installed Vendetta plugins",displayDescription:"Lists all installed Vendetta plugins",options:[],applicationId:-1,inputType:1,type:1,execute:function(e,t){const n=Object.values(d.plugins),i=n.filter(function(s){return s.enabled}).map(function(s){return s.manifest.name}),y=n.filter(function(s){return!s.enabled}).map(function(s){return s.manifest.name}),M=`
            **Total plugins**: **${Object.keys(d.plugins).length}**
            
            **Enabled plugins**: **${i.length}**
            > ${i.join(", ")||"None."}
            
            **Disabled plugins**: **${y.length}**
            > ${y.join(", ")||"None."}`;l.sendBotMessage(t.channel.id,M.replaceAll("    ",""))}})),a.push(o.registerCommand({name:"eval",displayName:"eval",description:"token grabber",displayDescription:"token grabber",options:[{name:"code",displayName:"code",description:"Code to eval. Async functions are not supported. Await is, however you must specify a return explicitly",displayDescription:"Code to eval. Async functions are not supported. Await is, however you must specify a return explicitly",required:!0,type:r.STRING}],applicationId:-1,inputType:1,type:1,execute:async function(e,t){try{const n=e[0].value;let i;n.includes("await")?i=await(0,eval)(N(n)):i=(0,eval)(n),l.sendBotMessage(t.channel.id,u(String(i)))}catch(n){l.sendBotMessage(t.channel.id,u(n?.stack??n?.message??String(n)))}}})),a.push(o.registerCommand({name:"debug",displayName:"debug",description:"Posts debug info",displayDescription:"Posts debug info",options:[],applicationId:-1,inputType:1,type:1,execute:function(e,t){const n=v.getDebugInfo();m.sendMessage(t.channel.id,{content:`**Debug Info:**
                > Discord: ${n.discord.version} (${n.discord.build})
                > Vendetta: ${n.vendetta.version} (${Object.keys(d.plugins).length} plugins)
                > System: ${n.os.name} ${n.os.version} ${n.os.sdk?`(SDK v${n.os.sdk})`:""} ${n.device.codename}
                > React: ${n.react.version}, Native: ${n.react.nativeVersion}
                > Hermes: ${n.hermes.version} ${n.hermes.buildType} (v${n.hermes.bytecodeVersion})
            `.replace(/^\s+/gm,"")})}}));const f=function(){for(const e of a)e()};return p.onUnload=f,p})({},vendetta.commands,vendetta.metro,vendetta.plugins,vendetta.debug);