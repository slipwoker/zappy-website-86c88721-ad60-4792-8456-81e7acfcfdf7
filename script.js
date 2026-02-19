function hasConsentFor(e){return void 0!==window.CookieConsent&&window.CookieConsent.validConsent(e)}function withConsent(e,t){hasConsentFor(e)?t():console.log(`[WARNING] Skipping ${e} code - no user consent`)}window.zappyContactFormLoaded?console.log("⚠️ Zappy: Contact form handler already loaded, skipping duplicate injection"):window.zappyContactFormLoaded=!0,document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("mobileToggle"),t=document.getElementById("navMenu");if(e){e.addEventListener("click",function(){const e=this.querySelector(".hamburger-icon"),n=this.querySelector(".close-icon");this.classList.contains("active")?(e.style.display="block",n.style.display="none",this.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""):(e.style.display="none",n.style.display="block",this.classList.add("active"),t.classList.add("active"),document.body.style.overflow="hidden")});t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",function(){const n=e.querySelector(".hamburger-icon"),o=e.querySelector(".close-icon");n.style.display="block",o.style.display="none",e.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""})})}const n=document.querySelector(".phone-header-btn");n&&n.addEventListener("click",function(){window.location.href="tel:[business_phone]"});const o=document.getElementById("contactForm");o&&o.addEventListener("submit",async function(e){e.preventDefault();const t={name:document.getElementById("name").value,email:document.getElementById("email").value,phone:document.getElementById("phone").value,service:document.getElementById("service").value,message:document.getElementById("message").value};if(console.log("Form submitted:",t),!window.zappyContactFormLoaded)try{console.log("📧 Zappy: Sending contact form to backend...");const e=await fetch("http://localhost:5001/api/email/contact-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({websiteId:"86c88721-ad60-4792-8456-81e7acfcfdf7",name:t.name,email:t.email,subject:t.service?`שירות: ${t.service}`:"פנייה מטופס יצירת קשר",message:t.message,phone:t.phone||null})}),n=await e.json();e.ok?console.log("✅ Zappy: Email sent successfully",n):console.error("❌ Zappy: Server returned error",n)}catch(e){console.error("❌ Zappy: Failed to send email",e)}alert("תודה על פנייתך! ניצור איתך קשר בהקדם."),o.reset()})}),function(){"use strict";let e=0;function t(){if(e++,void 0===window.CookieConsent)return void(e<50&&setTimeout(t,100));const n=window.CookieConsent;try{n.run({autoShow:!0,mode:"opt-in",revision:0,categories:{necessary:{enabled:!0,readOnly:!0},analytics:{enabled:!1,readOnly:!1,autoClear:{cookies:[{name:"_ga"},{name:"_ga_*"},{name:"_gid"},{name:"_gat"}]}},marketing:{enabled:!1,readOnly:!1,autoClear:{cookies:[{name:"_fbp"},{name:"_fbc"},{name:"fr"}]}}},language:{default:"he",translations:{he:{consentModal:{title:"אנחנו משתמשים בעוגיות 🍪",description:"שלווה רוחנית משתמש בעוגיות כדי לשפר את החוויה שלך, לנתח שימוש באתר ולסייע במאמצי השיווק שלנו.",acceptAllBtn:"אשר הכל",acceptNecessaryBtn:"רק הכרחי",showPreferencesBtn:"נהל העדפות",footer:'<a href="#privacy-policy">מדיניות פרטיות</a> | <a href="#terms-conditions">תנאי שימוש</a>'},preferencesModal:{title:"העדפות עוגיות",acceptAllBtn:"אשר הכל",acceptNecessaryBtn:"רק הכרחי",savePreferencesBtn:"שמור העדפות",closeIconLabel:"סגור",sections:[{title:"עוגיות חיוניות",description:"עוגיות אלה הכרחיות לתפקוד האתר ולא ניתן להשבית אותן.",linkedCategory:"necessary"},{title:"עוגיות ניתוח",description:"עוגיות אלה עוזרות לנו להבין איך המבקרים מתקשרים עם האתר שלנו.",linkedCategory:"analytics"},{title:"עוגיות שיווקיות",description:"עוגיות אלה משמשות להצגת פרסומות מותאמות אישית.",linkedCategory:"marketing"}]}}}},guiOptions:{consentModal:{layout:"box",position:"bottom right",equalWeightButtons:!0,flipButtons:!1},preferencesModal:{layout:"box",equalWeightButtons:!0,flipButtons:!1}}}),"function"==typeof n.onChange&&n.onChange(function(e,t){t.includes("analytics")&&n.validConsent("analytics"),t.includes("marketing")&&n.validConsent("marketing")})}catch(e){}}"loading"===document.readyState?(document.addEventListener("DOMContentLoaded",t),setTimeout(t,1e3)):"interactive"===document.readyState||"complete"===document.readyState?t():setTimeout(t,500),"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("load",t,{once:!0})}(),window.onload=function(){try{window.micAccessTool=new MicAccessTool({buttonPosition:"left",forceLang:"he-IL",icon:{position:{bottom:{size:50,units:"px"},left:{size:20,units:"px"},type:"fixed"},backgroundColor:"transparent",color:"transparent",img:"accessible",circular:!1},menu:{dimensions:{width:{size:300,units:"px"},height:{size:"auto",units:"px"}}}})}catch(e){}document.addEventListener("keydown",function(e){var t=e.altKey||e.metaKey,n=65===e.keyCode||65===e.which||e.key&&("a"===e.key.toLowerCase()||"å"===e.key||"Å"===e.key);t&&n&&(window.innerWidth>768&&(e.preventDefault(),e.stopPropagation(),document.body.classList.contains("accessibility-widget-visible")?document.body.classList.remove("accessibility-widget-visible"):(document.body.classList.add("accessibility-widget-visible"),setTimeout(function(){var e=document.getElementById("mic-access-tool-general-button");e&&e.click()},200))))},!0)};


/* ZAPPY_PUBLISHED_LIGHTBOX_RUNTIME */
(function(){
  try {
    if (window.__zappyPublishedLightboxInit) return;
    window.__zappyPublishedLightboxInit = true;

    function safeText(s){ try { return String(s || '').replace(/"/g,'&quot;'); } catch(e){ return ''; } }

    function ensureOverlayForToggle(toggle){
      try {
        if (!toggle || !toggle.id) return;
        if (toggle.id.indexOf('zappy-lightbox-toggle-') !== 0) return;
        var elementId = toggle.id.replace('zappy-lightbox-toggle-','');
        var label = document.querySelector('label.zappy-lightbox-trigger[for="' + toggle.id + '"]');
        if (!label) return;

        // If toggle is inside the label (corrupted), move it before the label so the for attribute works consistently.
        try {
          if (label.contains(toggle) && label.parentNode) {
            label.parentNode.insertBefore(toggle, label);
          }
        } catch (e0) {}

        var lightboxId = 'zappy-lightbox-' + elementId;
        var lb = document.getElementById(lightboxId);
        if (lb && lb.parentNode !== document.body) {
          try { document.body.appendChild(lb); } catch (eMove) {}
        }

        if (!lb) {
          var img = null;
          try { img = label.querySelector('img'); } catch (eImg0) {}
          if (!img) {
            try { img = document.querySelector('img[data-element-id="' + elementId + '"]'); } catch (eImg1) {}
          }
          if (!img) return;

          lb = document.createElement('div');
          lb.id = lightboxId;
          lb.className = 'zappy-lightbox';
          lb.setAttribute('data-zappy-image-lightbox','true');
          lb.style.display = 'none';
          lb.innerHTML =
            '<label class="zappy-lightbox-backdrop" for="' + toggle.id + '" aria-label="Close"></label>' +
            '<div class="zappy-lightbox-content">' +
              '<label class="zappy-lightbox-close" for="' + toggle.id + '" aria-label="Close">×</label>' +
              '<img class="zappy-lightbox-image" src="' + safeText(img.currentSrc || img.src || img.getAttribute('src')) + '" alt="' + safeText(img.getAttribute('alt') || 'Image') + '">' +
            '</div>';
          document.body.appendChild(lb);
        }

        // Keep overlay image in sync at open time (in case src changed / responsive currentSrc)
        function syncOverlayImage(){
          try {
            var imgCur = label.querySelector('img');
            var imgLb = lb.querySelector('img');
            if (imgCur && imgLb) {
              imgLb.src = imgCur.currentSrc || imgCur.src || imgLb.src;
              imgLb.alt = imgCur.alt || imgLb.alt;
            }
          } catch (eSync) {}
        }

        if (!toggle.__zappyLbBound) {
          toggle.addEventListener('change', function(){
            if (toggle.checked) syncOverlayImage();
            lb.style.display = toggle.checked ? 'flex' : 'none';
          });
          toggle.__zappyLbBound = true;
        }

        if (!lb.__zappyLbBound) {
          lb.addEventListener('click', function(ev){
            try {
              var t = ev.target;
              if (!t) return;
              if (t.classList && (t.classList.contains('zappy-lightbox-backdrop') || t.classList.contains('zappy-lightbox-close'))) {
                ev.preventDefault();
                toggle.checked = false;
                lb.style.display = 'none';
              }
            } catch (e2) {}
          });
          lb.__zappyLbBound = true;
        }

        if (!label.__zappyLbClick) {
          label.addEventListener('click', function(ev){
            try {
              if (document.body && document.body.classList && document.body.classList.contains('zappy-edit-mode')) return;
              if (ev && ev.target && ev.target.closest && ev.target.closest('a[href],button,input,select,textarea')) return;
              ev.preventDefault();
              ev.stopPropagation();
              toggle.checked = true;
              syncOverlayImage();
              lb.style.display = 'flex';
            } catch (e3) {}
          }, true);
          label.__zappyLbClick = true;
        }
      } catch (e) {}
    }

    function initZappyPublishedLightboxes(){
      try {
        // Repair orphaned labels (label has for=toggleId but input is missing)
        var orphanLabels = document.querySelectorAll('label.zappy-lightbox-trigger[for^="zappy-lightbox-toggle-"]');
        for (var i=0;i<orphanLabels.length;i++){
          var lbl = orphanLabels[i];
          var forId = lbl && lbl.getAttribute ? lbl.getAttribute('for') : null;
          if (!forId) continue;
          if (!document.getElementById(forId)) {
            var t = document.createElement('input');
            t.type = 'checkbox';
            t.id = forId;
            t.className = 'zappy-lightbox-toggle';
            t.setAttribute('data-zappy-image-lightbox','true');
            if (lbl.parentNode) lbl.parentNode.insertBefore(t, lbl);
          }
        }

        var toggles = document.querySelectorAll('input.zappy-lightbox-toggle[id^="zappy-lightbox-toggle-"]');
        for (var j=0;j<toggles.length;j++){
          ensureOverlayForToggle(toggles[j]);
        }

        // Close on ESC if any lightbox is open
        if (!document.__zappyLbEscBound) {
          document.addEventListener('keydown', function(ev){
            try {
              if (!ev || ev.key !== 'Escape') return;
              var openLb = document.querySelector('.zappy-lightbox[style*="display: flex"]');
              if (openLb) {
                var openToggle = null;
                try {
                  var id = openLb.id || '';
                  if (id.indexOf('zappy-lightbox-') === 0) {
                    openToggle = document.getElementById('zappy-lightbox-toggle-' + id.replace('zappy-lightbox-',''));
                  }
                } catch (e4) {}
                if (openToggle) openToggle.checked = false;
                openLb.style.display = 'none';
              }
            } catch (e5) {}
          });
          document.__zappyLbEscBound = true;
        }
      } catch (eInit) {}
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initZappyPublishedLightboxes, { once: true });
    } else {
      initZappyPublishedLightboxes();
    }
  } catch (eOuter) {}
})();
/* END ZAPPY_PUBLISHED_LIGHTBOX_RUNTIME */


/* ZAPPY_MOBILE_MENU_TOGGLE */
(function(){
  try {
    if (window.__zappyMobileMenuToggleInit) return;
    window.__zappyMobileMenuToggleInit = true;

    function initMobileToggle() {
      var toggle = document.querySelector('.mobile-toggle, #mobileToggle');
      var navMenu = document.querySelector('#navMenu, .nav-menu, .navbar-menu');
      if (!toggle || !navMenu) return;

      // Skip if this toggle already has a click handler from the site's own JS
      if (toggle.__zappyMobileToggleBound) return;
      toggle.__zappyMobileToggleBound = true;

      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var hamburgerIcon = toggle.querySelector('.hamburger-icon');
        var closeIcon = toggle.querySelector('.close-icon');
        var isOpen = navMenu.classList.contains('active') || navMenu.style.display === 'block';

        if (isOpen) {
          navMenu.classList.remove('active');
          navMenu.style.display = '';
          if (hamburgerIcon) hamburgerIcon.style.setProperty('display', 'block', 'important');
          if (closeIcon) closeIcon.style.setProperty('display', 'none', 'important');
          document.body.style.overflow = '';
        } else {
          navMenu.classList.add('active');
          navMenu.style.display = 'block';
          if (hamburgerIcon) hamburgerIcon.style.setProperty('display', 'none', 'important');
          if (closeIcon) closeIcon.style.setProperty('display', 'block', 'important');
          document.body.style.overflow = 'hidden';
        }
      }, true);

      // Close on clicking outside
      document.addEventListener('click', function(e) {
        if (!navMenu.classList.contains('active')) return;
        if (toggle.contains(e.target) || navMenu.contains(e.target)) return;
        navMenu.classList.remove('active');
        navMenu.style.display = '';
        var hi = toggle.querySelector('.hamburger-icon');
        var ci = toggle.querySelector('.close-icon');
        if (hi) hi.style.setProperty('display', 'block', 'important');
        if (ci) ci.style.setProperty('display', 'none', 'important');
        document.body.style.overflow = '';
      });

      // Close on Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navMenu.style.display = '';
          var hi = toggle.querySelector('.hamburger-icon');
          var ci = toggle.querySelector('.close-icon');
          if (hi) hi.style.setProperty('display', 'block', 'important');
          if (ci) ci.style.setProperty('display', 'none', 'important');
          document.body.style.overflow = '';
        }
      });

      // Close when clicking a nav link (navigating)
      navMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          navMenu.classList.remove('active');
          navMenu.style.display = '';
          var hi = toggle.querySelector('.hamburger-icon');
          var ci = toggle.querySelector('.close-icon');
          if (hi) hi.style.setProperty('display', 'block', 'important');
          if (ci) ci.style.setProperty('display', 'none', 'important');
          document.body.style.overflow = '';
        });
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMobileToggle, { once: true });
    } else {
      initMobileToggle();
    }
  } catch (e) {}
})();
/* END ZAPPY_MOBILE_MENU_TOGGLE */


/* ZAPPY_FAQ_ACCORDION_TOGGLE */
(function(){
  try {
    if (window.__zappyFaqToggleInit) return;
    window.__zappyFaqToggleInit = true;

    function initFaqToggle() {
      // Match both exact (.faq-item) and page-prefixed (e.g. .home-faq-item) classes
      var items = document.querySelectorAll('[class*="faq-item"], .accordion-item');
      if (!items.length) return;

      items.forEach(function(item) {
        var question = item.querySelector(
          '[class*="faq-question"], [class*="faq-header"], .accordion-header, .accordion-toggle'
        );
        if (!question) return;
        if (question.__zappyFaqBound) return;
        question.__zappyFaqBound = true;

        question.addEventListener('click', function(e) {
          e.preventDefault();

          // Close sibling items in the same accordion group
          var parent = item.parentElement;
          if (parent) {
            var siblings = parent.querySelectorAll('[class*="faq-item"], .accordion-item');
            siblings.forEach(function(sib) {
              if (sib !== item && sib.classList.contains('active')) {
                sib.classList.remove('active');
                var sibQ = sib.querySelector('[class*="faq-question"], [class*="faq-header"], .accordion-header');
                if (sibQ) sibQ.setAttribute('aria-expanded', 'false');
              }
            });
          }

          // Toggle current item
          var isActive = item.classList.toggle('active');
          question.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFaqToggle, { once: true });
    } else {
      initFaqToggle();
    }
  } catch (e) {}
})();
/* END ZAPPY_FAQ_ACCORDION_TOGGLE */


/* ZAPPY_PUBLISHED_GRID_CENTERING */
(function(){
  try {
    if (window.__zappyGridCenteringInit) return;
    window.__zappyGridCenteringInit = true;

    function centerPartialGridRows() {
      var grids = document.querySelectorAll('[data-zappy-explicit-columns="true"], [data-zappy-auto-grid="true"]');
      for (var g = 0; g < grids.length; g++) {
        try {
          var container = grids[g];
          // Skip if already processed
          if (container.getAttribute('data-zappy-grid-centered') === 'true') continue;

          var items = [];
          for (var c = 0; c < container.children.length; c++) {
            var ch = container.children[c];
            if (!ch || !ch.tagName) continue;
            var tag = ch.tagName.toLowerCase();
            if (tag === 'script' || tag === 'style') continue;
            items.push(ch);
          }
          var totalItems = items.length;
          if (totalItems === 0) continue;

          var cs = window.getComputedStyle(container);
          if (cs.display !== 'grid') continue;
          var gtc = (cs.gridTemplateColumns || '').trim();
          if (!gtc || gtc === 'none') continue;
          var colWidths = gtc.split(' ').filter(function(v) { return v && parseFloat(v) > 0; });
          var colCount = colWidths.length;
          if (colCount <= 1) continue;

          var itemsInLastRow = totalItems % colCount;
          if (itemsInLastRow === 0) continue;

          var colWidth = parseFloat(colWidths[0]) || 0;
          var gap = parseFloat(cs.columnGap);
          if (isNaN(gap)) gap = parseFloat(cs.gap) || 0;

          var missingCols = colCount - itemsInLastRow;
          var offset = missingCols * (colWidth + gap) / 2;

          // Detect RTL
          var dir = cs.direction || 'ltr';
          var el = container;
          while (el && dir === 'ltr') {
            if (el.getAttribute && el.getAttribute('dir')) { dir = el.getAttribute('dir'); break; }
            if (el.style && el.style.direction) { dir = el.style.direction; break; }
            el = el.parentElement;
          }
          var translateValue = dir === 'rtl' ? -offset : offset;

          // Apply transform to last-row items
          // Temporarily disable CSS transitions to prevent visible animation
          // Preserve any existing transforms (e.g., scale, rotate) by composing
          var startIndex = totalItems - itemsInLastRow;
          var savedTransitions = [];
          for (var i = startIndex; i < totalItems; i++) {
            var item = items[i];
            savedTransitions.push(item.style.transition);
            item.style.transition = 'none';
            var existingTransform = item.style.transform || '';
            var newTransform = existingTransform
              ? existingTransform + ' translateX(' + translateValue + 'px)'
              : 'translateX(' + translateValue + 'px)';
            item.style.transform = newTransform;
          }

          // Force synchronous reflow so the transform is applied instantly
          void container.offsetHeight;

          // Restore original transitions
          for (var j = startIndex; j < totalItems; j++) {
            items[j].style.transition = savedTransitions[j - startIndex];
          }

          // Mark grid as processed so we don't double-apply
          container.setAttribute('data-zappy-grid-centered', 'true');
        } catch(e) {}
      }
    }

    // Run once after DOM is fully loaded (fonts, images, layout complete)
    if (document.readyState === 'complete') {
      centerPartialGridRows();
    } else {
      window.addEventListener('load', centerPartialGridRows);
    }
  } catch(e) {}
})();
