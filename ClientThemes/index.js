(function(o,n,a,e){"use strict";const r=n.findByProps("setShouldSyncAppearanceSettings"),s=n.find(function(t){return t.default?.canUseClientThemes}),d=n.findByProps("updateBackgroundGradientPreset"),{ClientThemesMobileExperiment:i}=n.findByProps("ClientThemesMobileExperiment");e.storage.isEnabled??=!1,i.getCurrentConfig().hasClientThemes=!0,r.setShouldSyncAppearanceSettings(!1),e.storage.theme&&e.storage.isEnabled&&d.updateBackgroundGradientPreset(e.storage.theme),s.default={...s.default};const u=[a.instead("setShouldSyncAppearanceSettings",r,function(){return!e.storage.isEnabled}),a.instead("canUseClientThemes",s.default,function(){return!0}),a.after("updateMobilePendingThemeIndex",d,function(t){e.storage.isEnabled=t[0]>1}),a.after("updateBackgroundGradientPreset",d,function(t){e.storage.theme=t[0]})],c=function(){for(const t of u)t()};return o.onUnload=c,o})({},vendetta.metro,vendetta.patcher,vendetta.plugin);