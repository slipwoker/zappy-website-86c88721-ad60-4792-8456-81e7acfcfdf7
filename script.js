function hasConsentFor(e){return void 0!==window.CookieConsent&&window.CookieConsent.validConsent(e)}function withConsent(e,t){hasConsentFor(e)?t():console.log(`[WARNING] Skipping ${e} code - no user consent`)}window.zappyContactFormLoaded?console.log("⚠️ Zappy: Contact form handler already loaded, skipping duplicate injection"):window.zappyContactFormLoaded=!0,document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("mobileToggle"),t=document.getElementById("navMenu");e&&(e.addEventListener("click",function(){const e=this.querySelector(".hamburger-icon"),n=this.querySelector(".close-icon");this.classList.contains("active")?(e.style.display="block",n.style.display="none",this.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""):(e.style.display="none",n.style.display="block",this.classList.add("active"),t.classList.add("active"),document.body.style.overflow="hidden")}),t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",function(){const n=e.querySelector(".hamburger-icon"),o=e.querySelector(".close-icon");n.style.display="block",o.style.display="none",e.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""})}));const n=document.querySelector(".phone-header-btn");n&&n.addEventListener("click",function(){window.location.href="tel:+972522972222"});const o=document.getElementById("contactForm");o&&o.addEventListener("submit",async function(e){e.preventDefault();const t={name:document.getElementById("name").value,email:document.getElementById("email").value,phone:document.getElementById("phone").value,service:document.getElementById("service").value,message:document.getElementById("message").value};if(console.log("Form submitted:",t),!window.zappyContactFormLoaded)try{console.log("📧 Zappy: Sending contact form to backend...");const e=await fetch("http://localhost:5001/api/email/contact-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({websiteId:"86c88721-ad60-4792-8456-81e7acfcfdf7",name:t.name,email:t.email,subject:t.service?`שירות: ${t.service}`:"פנייה מטופס יצירת קשר",message:t.message,phone:t.phone||null})}),n=await e.json();e.ok?console.log("✅ Zappy: Email sent successfully",n):console.error("❌ Zappy: Server returned error",n)}catch(e){console.error("❌ Zappy: Failed to send email",e)}alert("תודה על פנייתך! ניצור איתך קשר בהקדם."),o.reset()})}),function(){"use strict";let e=0;function t(){if(e++,void 0===window.CookieConsent)return void(e<50&&setTimeout(t,100));const n=window.CookieConsent;try{n.run({autoShow:!0,mode:"opt-in",revision:0,categories:{necessary:{enabled:!0,readOnly:!0},analytics:{enabled:!1,readOnly:!1,autoClear:{cookies:[{name:"_ga"},{name:"_ga_*"},{name:"_gid"},{name:"_gat"}]}},marketing:{enabled:!1,readOnly:!1,autoClear:{cookies:[{name:"_fbp"},{name:"_fbc"},{name:"fr"}]}}},language:{default:"he",translations:{he:{consentModal:{title:"אנחנו משתמשים בעוגיות 🍪",description:"שלווה רוחנית משתמש בעוגיות כדי לשפר את החוויה שלך, לנתח שימוש באתר ולסייע במאמצי השיווק שלנו.",acceptAllBtn:"אשר הכל",acceptNecessaryBtn:"רק הכרחי",showPreferencesBtn:"נהל העדפות",footer:'<a href="#privacy-policy">מדיניות פרטיות</a> | <a href="#terms-conditions">תנאי שימוש</a>'},preferencesModal:{title:"העדפות עוגיות",acceptAllBtn:"אשר הכל",acceptNecessaryBtn:"רק הכרחי",savePreferencesBtn:"שמור העדפות",closeIconLabel:"סגור",sections:[{title:"עוגיות חיוניות",description:"עוגיות אלה הכרחיות לתפקוד האתר ולא ניתן להשבית אותן.",linkedCategory:"necessary"},{title:"עוגיות ניתוח",description:"עוגיות אלה עוזרות לנו להבין איך המבקרים מתקשרים עם האתר שלנו.",linkedCategory:"analytics"},{title:"עוגיות שיווקיות",description:"עוגיות אלה משמשות להצגת פרסומות מותאמות אישית.",linkedCategory:"marketing"}]}}}},guiOptions:{consentModal:{layout:"box",position:"bottom right",equalWeightButtons:!0,flipButtons:!1},preferencesModal:{layout:"box",equalWeightButtons:!0,flipButtons:!1}}}),"function"==typeof n.onChange&&n.onChange(function(e,t){t.includes("analytics")&&n.validConsent("analytics"),t.includes("marketing")&&n.validConsent("marketing")})}catch(e){}}"loading"===document.readyState?(document.addEventListener("DOMContentLoaded",t),setTimeout(t,1e3)):"interactive"===document.readyState||"complete"===document.readyState?t():setTimeout(t,500),"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("load",t,{once:!0})}(),window.onload=function(){try{window.micAccessTool=new MicAccessTool({buttonPosition:"left",forceLang:"he-IL",icon:{position:{bottom:{size:50,units:"px"},left:{size:20,units:"px"},type:"fixed"},backgroundColor:"transparent",color:"transparent",img:"accessible",circular:!1},menu:{dimensions:{width:{size:300,units:"px"},height:{size:"auto",units:"px"}}}})}catch(e){}document.addEventListener("keydown",function(e){var t=e.altKey||e.metaKey,n=65===e.keyCode||65===e.which||e.key&&("a"===e.key.toLowerCase()||"å"===e.key||"Å"===e.key);t&&n&&window.innerWidth>768&&(e.preventDefault(),e.stopPropagation(),document.body.classList.contains("accessibility-widget-visible")?document.body.classList.remove("accessibility-widget-visible"):(document.body.classList.add("accessibility-widget-visible"),setTimeout(function(){var e=document.getElementById("mic-access-tool-general-button");e&&e.click()},200)))},!0)};


      (function() {
        // Prevent duplicate initialization
        if (typeof window.ZappyCarousel !== 'undefined') {
          return;
        }

        window.ZappyCarousel = {
          init: function(container) {
            if (!container) return;
            
            // Prevent double initialization
            if (container.dataset.carouselInitialized === 'true') {
              return;
            }
            container.dataset.carouselInitialized = 'true';

            const track = container.querySelector('.zappy-carousel-track');
            const prevBtn = container.querySelector('.zappy-carousel-prev');
            const nextBtn = container.querySelector('.zappy-carousel-next');
            const dotsContainer = container.querySelector('.zappy-carousel-dots');

            if (!track || !prevBtn || !nextBtn || !dotsContainer) {
              console.error('Carousel: Missing required elements');
              return;
            }

            let currentIndex = 0;
            let isRTL = false;

            // Detect RTL from multiple sources
            function detectRTL() {
              const wrapper = container.querySelector('.zappy-carousel-wrapper');
              if (wrapper && wrapper.getAttribute('dir') === 'rtl') return true;
              if (container.getAttribute('dir') === 'rtl') return true;
              if (document.documentElement.getAttribute('dir') === 'rtl') return true;
              if (document.dir === 'rtl') return true;
              return false;
            }

            isRTL = detectRTL();

            function getItemsPerView() {
              const containerWidth = container.offsetWidth;
              if (containerWidth < 768) return 1;
              if (containerWidth < 1024) return 2;
              return 3;
            }

            function getTotalSlides() {
              const items = track.querySelectorAll('.zappy-carousel-item');
              const perView = getItemsPerView();
              // For one-item-at-a-time scrolling
              return Math.max(1, items.length - perView + 1);
            }

            function updateCarousel() {
              const items = track.querySelectorAll('.zappy-carousel-item');
              const perView = getItemsPerView();
              
              if (items.length === 0) return;

              // Set grid-template-columns to show only perView items
              track.style.gridTemplateColumns = `repeat(${items.length}, calc((100% - ${(perView - 1) * 2}rem) / ${perView}))`;

              const firstItem = items[0];
              const itemWidth = firstItem.offsetWidth;
              const gap = parseFloat(getComputedStyle(track).gap) || 0;

              // Calculate the move amount based on current index (one item at a time)
              const moveAmount = currentIndex * (itemWidth + gap);
              const direction = isRTL ? 1 : -1;
              track.style.transform = `translateX(${direction * moveAmount}px)`;

              updateButtons();
              updateDots();
            }

            function updateButtons() {
              const total = getTotalSlides();
              
              // Use data-disabled instead of disabled attribute
              if (currentIndex === 0) {
                prevBtn.setAttribute('data-disabled', 'true');
              } else {
                prevBtn.setAttribute('data-disabled', 'false');
              }

              if (currentIndex >= total - 1) {
                nextBtn.setAttribute('data-disabled', 'true');
              } else {
                nextBtn.setAttribute('data-disabled', 'false');
              }
            }

            function updateDots() {
              const total = getTotalSlides();
              const items = track.querySelectorAll('.zappy-carousel-item');
              const perView = getItemsPerView();
              
              dotsContainer.innerHTML = '';
              
              for (let i = 0; i < total; i++) {
                const dot = document.createElement('button');
                dot.className = 'zappy-carousel-dot';
                dot.setAttribute('type', 'button');
                dot.setAttribute('role', 'tab');
                
                // Calculate which items will be shown for this slide
                const startItem = i + 1;
                const endItem = Math.min(i + perView, items.length);
                dot.setAttribute('aria-label', `Show items ${startItem}-${endItem}`);
                
                if (i === currentIndex) {
                  dot.classList.add('active');
                  dot.setAttribute('aria-selected', 'true');
                } else {
                  dot.setAttribute('aria-selected', 'false');
                }
                
                dot.addEventListener('click', () => {
                  currentIndex = i;
                  updateCarousel();
                });
                
                dotsContainer.appendChild(dot);
              }
            }

            // Navigation handlers - Check data-disabled instead of disabled
            prevBtn.addEventListener('click', () => {
              if (prevBtn.getAttribute('data-disabled') === 'true') return;
              currentIndex = Math.max(0, currentIndex - 1);
              updateCarousel();
            });

            nextBtn.addEventListener('click', () => {
              if (nextBtn.getAttribute('data-disabled') === 'true') return;
              const total = getTotalSlides();
              currentIndex = Math.min(total - 1, currentIndex + 1);
              updateCarousel();
            });

            // Keyboard navigation
            container.addEventListener('keydown', (e) => {
              if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const btn = isRTL ? nextBtn : prevBtn;
                if (btn.getAttribute('data-disabled') !== 'true') {
                  btn.click();
                }
              } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                const btn = isRTL ? prevBtn : nextBtn;
                if (btn.getAttribute('data-disabled') !== 'true') {
                  btn.click();
                }
              }
            });

            // Touch/swipe support
            let touchStartX = 0;
            let touchEndX = 0;

            track.addEventListener('touchstart', (e) => {
              touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            track.addEventListener('touchend', (e) => {
              touchEndX = e.changedTouches[0].screenX;
              handleSwipe();
            }, { passive: true });

            function handleSwipe() {
              const swipeThreshold = 50;
              const diff = touchStartX - touchEndX;

              if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                  // Swipe left
                  const btn = isRTL ? prevBtn : nextBtn;
                  if (btn.getAttribute('data-disabled') !== 'true') {
                    btn.click();
                  }
                } else {
                  // Swipe right
                  const btn = isRTL ? nextBtn : prevBtn;
                  if (btn.getAttribute('data-disabled') !== 'true') {
                    btn.click();
                  }
                }
              }
            }

            // Resize handler with debounce
            let resizeTimer;
            window.addEventListener('resize', () => {
              clearTimeout(resizeTimer);
              resizeTimer = setTimeout(() => {
                const total = getTotalSlides();
                if (currentIndex >= total) {
                  currentIndex = Math.max(0, total - 1);
                }
                updateCarousel();
              }, 250);
            });

            // Initial setup
            updateCarousel();
          }
        };

        // Auto-initialize all carousels on page load
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.zappy-carousel-container').forEach(function(container) {
              window.ZappyCarousel.init(container);
            });
          });
        } else {
          document.querySelectorAll('.zappy-carousel-container').forEach(function(container) {
            window.ZappyCarousel.init(container);
          });
        }
      })();
    