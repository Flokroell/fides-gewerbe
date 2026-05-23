(function () {
  'use strict';

  const WEBHOOK_URL = 'https://n8n.kroellconsulting.de/webhook/fides-chatbot';
  const BRAND = '#86A94A';
  const BRAND_DARK = '#738E3C';
  const BRAND_TINT = '#F2F6EA';
  const STORAGE_KEY = 'fidesChatbot_v1';

  const GREETING =
    'Hallo! Ich bin der KI-Assistent von Fides. Wie kann ich Ihnen heute helfen? ' +
    'Ich beantworte gerne Fragen zu Betriebshaftpflicht, betrieblicher Altersvorsorge oder Krankenversicherung.';

  function loadState() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return { messages: [], leadNotified: false, opened: false };
      const s = JSON.parse(raw);
      return { messages: s.messages || [], leadNotified: !!s.leadNotified, opened: !!s.opened };
    } catch (e) {
      return { messages: [], leadNotified: false, opened: false };
    }
  }

  function saveState(s) {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) {}
  }

  const state = loadState();

  function injectStyles() {
    if (document.getElementById('fides-chatbot-styles')) return;
    const css = `
      #fides-chatbot-btn{
        position:fixed;right:20px;bottom:20px;width:56px;height:56px;border-radius:50%;
        background:${BRAND};color:#fff;border:none;cursor:pointer;
        box-shadow:0 6px 18px rgba(17,17,17,.18),0 2px 4px rgba(17,17,17,.08);
        display:flex;align-items:center;justify-content:center;z-index:2147483646;
        transition:background .15s, transform .1s;font-family:inherit;
      }
      #fides-chatbot-btn:hover{background:${BRAND_DARK};}
      #fides-chatbot-btn:active{transform:scale(.96);}
      #fides-chatbot-btn svg{width:26px;height:26px;}
      #fides-chatbot-panel{
        position:fixed;right:20px;bottom:88px;width:340px;height:520px;
        background:#fff;border-radius:14px;
        box-shadow:0 16px 48px rgba(17,17,17,.18),0 4px 12px rgba(17,17,17,.08);
        display:none;flex-direction:column;overflow:hidden;z-index:2147483647;
        font-family:"Open Sans",system-ui,-apple-system,"Segoe UI",Helvetica,Arial,sans-serif;
        font-size:14px;color:#111;
      }
      #fides-chatbot-panel.fides-open{display:flex;}
      #fides-chatbot-header{
        background:${BRAND};color:#fff;padding:14px 16px;
        display:flex;align-items:center;justify-content:space-between;
      }
      #fides-chatbot-header .fides-title{font-weight:600;font-size:15px;line-height:1.2;}
      #fides-chatbot-header .fides-sub{font-size:11px;opacity:.85;margin-top:2px;}
      #fides-chatbot-close{
        background:transparent;border:none;color:#fff;cursor:pointer;
        font-size:22px;line-height:1;padding:0;width:28px;height:28px;
      }
      #fides-chatbot-body{
        flex:1;overflow-y:auto;padding:14px;background:#fafbf7;
        display:flex;flex-direction:column;gap:10px;
      }
      .fides-msg{max-width:82%;padding:10px 12px;border-radius:10px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word;}
      .fides-msg.assistant{align-self:flex-start;background:#fff;border:1px solid #E7EAE0;color:#111;}
      .fides-msg.user{align-self:flex-end;background:${BRAND};color:#fff;}
      .fides-typing{align-self:flex-start;color:#585656;font-style:italic;font-size:13px;padding:4px 8px;}
      #fides-chatbot-disclaimer{
        font-size:11px;color:#585656;padding:8px 14px;border-top:1px solid #E7EAE0;
        background:${BRAND_TINT};line-height:1.4;
      }
      #fides-chatbot-disclaimer a{color:${BRAND_DARK};text-decoration:underline;}
      #fides-chatbot-inputwrap{
        border-top:1px solid #E7EAE0;padding:10px;display:flex;gap:8px;background:#fff;
      }
      #fides-chatbot-input{
        flex:1;border:1px solid #E7EAE0;border-radius:8px;padding:10px 12px;
        font-size:14px;font-family:inherit;resize:none;outline:none;color:#111;
        max-height:88px;min-height:40px;
      }
      #fides-chatbot-input:focus{border-color:${BRAND};}
      #fides-chatbot-send{
        background:${BRAND};color:#fff;border:none;border-radius:8px;
        padding:0 14px;cursor:pointer;font-weight:600;font-family:inherit;
      }
      #fides-chatbot-send:hover{background:${BRAND_DARK};}
      #fides-chatbot-send:disabled{opacity:.5;cursor:not-allowed;}
      @media (max-width:560px){
        #fides-chatbot-panel{right:0;bottom:0;width:100vw;height:100vh;border-radius:0;}
        #fides-chatbot-btn{right:14px;bottom:14px;}
      }
    `;
    const style = document.createElement('style');
    style.id = 'fides-chatbot-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildUI() {
    const btn = document.createElement('button');
    btn.id = 'fides-chatbot-btn';
    btn.setAttribute('aria-label', 'Chat mit dem Fides KI-Assistenten öffnen');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>' +
      '</svg>';

    const panel = document.createElement('div');
    panel.id = 'fides-chatbot-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Fides KI-Assistent');
    panel.innerHTML =
      '<div id="fides-chatbot-header">' +
        '<div><div class="fides-title">Fides KI-Assistent</div><div class="fides-sub">Antworten in wenigen Sekunden</div></div>' +
        '<button id="fides-chatbot-close" aria-label="Chat schließen">×</button>' +
      '</div>' +
      '<div id="fides-chatbot-body"></div>' +
      '<div id="fides-chatbot-disclaimer">' +
        'KI-generierte Antworten. Keine Rechtsberatung. Eingaben werden zur Bearbeitung verarbeitet — siehe <a href="/datenschutz.html" target="_blank" rel="noopener">Datenschutz</a>.' +
      '</div>' +
      '<form id="fides-chatbot-inputwrap" autocomplete="off">' +
        '<textarea id="fides-chatbot-input" rows="1" placeholder="Ihre Frage..." aria-label="Nachricht eingeben"></textarea>' +
        '<button id="fides-chatbot-send" type="submit">Senden</button>' +
      '</form>';

    document.body.appendChild(btn);
    document.body.appendChild(panel);

    return { btn, panel };
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderMessages() {
    const body = document.getElementById('fides-chatbot-body');
    if (!body) return;
    body.innerHTML = '';
    state.messages.forEach(function (m) {
      const div = document.createElement('div');
      div.className = 'fides-msg ' + (m.role === 'user' ? 'user' : 'assistant');
      div.innerHTML = escapeHtml(m.content).replace(/\n/g, '<br>');
      body.appendChild(div);
    });
    body.scrollTop = body.scrollHeight;
  }

  function showTyping() {
    const body = document.getElementById('fides-chatbot-body');
    if (!body) return;
    let el = document.getElementById('fides-typing-indicator');
    if (!el) {
      el = document.createElement('div');
      el.id = 'fides-typing-indicator';
      el.className = 'fides-typing';
      el.textContent = 'Schreibt…';
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
    }
  }

  function hideTyping() {
    const el = document.getElementById('fides-typing-indicator');
    if (el) el.remove();
  }

  function setSending(sending) {
    const btn = document.getElementById('fides-chatbot-send');
    const input = document.getElementById('fides-chatbot-input');
    if (btn) btn.disabled = sending;
    if (input) input.disabled = sending;
  }

  function appendMessage(role, content) {
    state.messages.push({ role: role, content: content });
    saveState(state);
    renderMessages();
  }

  async function sendMessage(text) {
    appendMessage('user', text);
    showTyping();
    setSending(true);

    const payload = {
      messages_json: JSON.stringify(state.messages),
      lead_already_notified: state.leadNotified,
      site: 'fides-gewerbe'
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const raw = await res.text();
      let data;
      try { data = JSON.parse(raw); } catch (e) { data = { message: raw }; }

      hideTyping();
      setSending(false);

      const msg = data.message || 'Entschuldigung, es gab ein Problem. Bitte versuchen Sie es erneut.';
      appendMessage('assistant', msg);

      if (data.lead_captured) {
        state.leadNotified = true;
        saveState(state);
      }
    } catch (e) {
      hideTyping();
      setSending(false);
      appendMessage('assistant', 'Verbindung fehlgeschlagen. Bitte erneut versuchen oder direkt an info@fides-finanz.de schreiben.');
    }
  }

  function openPanel() {
    const panel = document.getElementById('fides-chatbot-panel');
    if (!panel) return;
    panel.classList.add('fides-open');
    if (!state.opened) {
      state.opened = true;
      saveState(state);
      if (state.messages.length === 0) {
        appendMessage('assistant', GREETING);
      }
    } else {
      renderMessages();
    }
    setTimeout(function () {
      const input = document.getElementById('fides-chatbot-input');
      if (input) input.focus();
    }, 50);
  }

  function closePanel() {
    const panel = document.getElementById('fides-chatbot-panel');
    if (panel) panel.classList.remove('fides-open');
  }

  function attachHandlers(refs) {
    refs.btn.addEventListener('click', openPanel);
    document.getElementById('fides-chatbot-close').addEventListener('click', closePanel);

    const form = document.getElementById('fides-chatbot-inputwrap');
    const input = document.getElementById('fides-chatbot-input');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      input.style.height = 'auto';
      sendMessage(text);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        form.dispatchEvent(new Event('submit', { cancelable: true }));
      }
    });

    input.addEventListener('input', function () {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 88) + 'px';
    });
  }

  function init() {
    if (document.getElementById('fides-chatbot-btn')) return;
    injectStyles();
    const refs = buildUI();
    attachHandlers(refs);
    if (state.opened && state.messages.length > 0) {
      renderMessages();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
