/* To Have and Hold banner, version 2.
   Brand tokens pulled from github.com/drsrennie-stack/tohave-hold
   Playfair Display + Outfit, rose #B86262 on warm off white. Minimal. */
const fs = require('fs');

const INK       = '#1E1714';
const INK_SOFT  = '#7A6B63';
const ROSE      = '#B86262';
const ROSE_DEEP = '#9E4E4E';   // deepened for small type so it clears 4.5:1
const ROSE_PALE = '#EAD4D4';
const RULE      = '#E0D4CC';
const OFFWHITE  = '#FAF8F6';
const ROSE_WASH = '#F5EAEA';

/* one thin ceremony arch, cropped by the frame */
function arch(x, y, w, h, stroke, sw, op){
  const r = w/2;
  return `<path d="M${x} ${y+h} L${x} ${y+r} A${r} ${r} 0 0 1 ${x+w} ${y+r} L${x+w} ${y+h}" `
       + `fill="none" stroke="${stroke}" stroke-width="${sw}" opacity="${op}" stroke-linecap="round"/>`;
}

function circle(cx, cy, r, stroke, sw, op){
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${stroke}" stroke-width="${sw}" opacity="${op}"/>`;
}

/* a single sprig, three leaves, nothing more */
function sprig(x, y, len, angle, stroke, sw, op){
  const a = angle*Math.PI/180;
  const ex = x + Math.cos(a)*len, ey = y + Math.sin(a)*len;
  let s = `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" `
        + `stroke="${stroke}" stroke-width="${sw}" opacity="${op}" stroke-linecap="round"/>`;
  [0.34, 0.60, 0.86].forEach(function(t, i){
    const px = x + Math.cos(a)*len*t, py = y + Math.sin(a)*len*t;
    const ll = len*0.20*(1 - t*0.35);
    const off = (i % 2 === 0) ? -46 : 46;
    const la = a + off*Math.PI/180;
    const lx = px + Math.cos(la)*ll*0.55, ly = py + Math.sin(la)*ll*0.55;
    s += `<ellipse cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" rx="${(ll*0.60).toFixed(1)}" ry="${(ll*0.24).toFixed(1)}" `
       + `fill="none" stroke="${stroke}" stroke-width="${sw}" opacity="${op}" `
       + `transform="rotate(${(la*180/Math.PI).toFixed(1)} ${lx.toFixed(1)} ${ly.toFixed(1)})"/>`;
  });
  return s;
}

function build(W, H, o){
  const s = W/1600;
  const P = Math.round(o.pad*s);
  const sw = Math.max(1, 1.6*s);

  /* Restraint is the whole point: one arch, one ring, nothing else. */
  let art = '';
  const aX = W*0.605, aW = W*0.255, aY = H*0.150;
  const aR = aW/2, aCx = aX + aR, aCy = aY + aR;
  art += arch(aX, aY, aW, H*1.05, RULE, sw*1.15, 1);
  art += circle(aCx, aCy, aR*0.66, ROSE_PALE, sw, 1);

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
@font-face{font-family:PF;src:url(node_modules/@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff2) format('woff2');font-weight:400}
@font-face{font-family:PF;src:url(node_modules/@fontsource/playfair-display/files/playfair-display-latin-500-normal.woff2) format('woff2');font-weight:500}
@font-face{font-family:OF;src:url(node_modules/@fontsource/outfit/files/outfit-latin-300-normal.woff2) format('woff2');font-weight:300}
@font-face{font-family:OF;src:url(node_modules/@fontsource/outfit/files/outfit-latin-500-normal.woff2) format('woff2');font-weight:500}
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;background:transparent}
.card{position:relative;width:${W}px;height:${H}px;border-radius:${Math.round(10*s)}px;overflow:hidden;
  background:linear-gradient(112deg, ${OFFWHITE} 0%, ${OFFWHITE} 46%, ${ROSE_WASH} 100%);}
svg{position:absolute;inset:0}
.copy{position:absolute;left:${P}px;top:50%;transform:translateY(-50%);right:${Math.round(W*o.rightGutter)}px}
.brand{font-family:OF;font-weight:500;color:${ROSE_DEEP};
  font-size:${Math.round(o.brandSize*s)}px;letter-spacing:0.2em;text-transform:uppercase;}
.brand-rule{width:${Math.round(52*s)}px;height:1px;background:${ROSE};opacity:0.85;
  margin:${Math.round(22*s)}px 0 ${Math.round(26*s)}px;}
h1{font-family:PF;font-weight:400;color:${INK};font-size:${Math.round(o.titleSize*s)}px;
  line-height:1.06;letter-spacing:-0.005em;}
h1 .accent{color:${ROSE};}
.sub{font-family:OF;font-weight:300;color:${INK_SOFT};font-size:${Math.round(o.subSize*s)}px;
  letter-spacing:0.01em;margin-top:${Math.round(o.subGap*s)}px;}
.meta{position:absolute;left:${P}px;bottom:${P}px;font-family:OF;font-weight:300;color:${INK_SOFT};
  font-size:${Math.round(o.metaSize*s)}px;letter-spacing:0.16em;text-transform:uppercase;}
</style></head>
<body><div class="card">
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${art}</svg>
<div class="copy">
  <div class="brand">To Have &amp; Hold</div>
  <div class="brand-rule"></div>
  <h1>${o.title}</h1>
  <div class="sub">${o.sub}</div>
</div>
<div class="meta">${o.meta}</div>
</div></body></html>`;
}

const TITLE_2L = 'Design your<br><span class="accent">bundle</span>';
const TITLE_1L = 'Design your <span class="accent">bundle</span>';
const SUB  = 'Set your budget, pick your look, and we will put the pieces together.';
const META = 'Event Decor Rentals &nbsp;&middot;&nbsp; Central Wisconsin';

const variants = [
  { file:'v2-1600x900', W:1600, H:900,  title:TITLE_2L, sub:SUB, meta:META,
    pad:96, rightGutter:0.46, brandSize:20, titleSize:104, subSize:23, subGap:30, metaSize:13 },
  { file:'v2-1200x630', W:1200, H:630,  title:TITLE_2L, sub:SUB, meta:META,
    pad:88, rightGutter:0.44, brandSize:25, titleSize:124, subSize:27, subGap:32, metaSize:15 },
  { file:'v2-1600x600', W:1600, H:600,  title:TITLE_1L, sub:SUB, meta:META,
    pad:88, rightGutter:0.40, brandSize:20, titleSize:88,  subSize:22, subGap:26, metaSize:13 },
  { file:'v2-1200x1200', W:1200, H:1200, title:TITLE_2L, sub:SUB, meta:META,
    pad:104, rightGutter:0.20, brandSize:26, titleSize:150, subSize:30, subGap:38, metaSize:16 }
];

variants.forEach(function(v){
  fs.writeFileSync('/home/claude/thh/' + v.file + '.html', build(v.W, v.H, v));
  console.log('wrote', v.file);
});
