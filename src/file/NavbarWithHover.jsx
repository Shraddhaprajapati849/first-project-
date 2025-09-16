import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function NavbarWithHover() {
  const menuRef = useRef(null);
  const [openKey, setOpenKey] = useState(null);
  const [panelStyle, setPanelStyle] = useState({});
  const hideTimer = useRef(null);

  // 👇 Menu items define karo
  const menuItems = [
    {
      key: "landing",
      label: "Landings",
      content: (
        <div className="preview-inner">
          <h3>Landing — Quick Preview</h3>
          <p>This is a preview of the landing page. Add hero, features, CTA here.</p>
        </div>
      ),
    },
    {
      key: "pages",
      label: "Pages",
      content: (
        <div className="preview-inner">
          <h3>Pages — Preview</h3>
          <p>About, Pricing, Contact and other templates.</p>
        </div>
      ),
    },
    {
      key: "account",
      label: "Account",
      content: (
        <div className="preview-inner">
          <h3>Account — Preview</h3>
          <p>Profile, subscription, billing quick access.</p>
        </div>
      ),
    },
  ];

  // 👇 Panel show karna
  function showPanelFor(key, targetEl) {
    if (!menuRef.current || !targetEl) return;
    const containerRect = menuRef.current.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    const centerX = targetRect.left + targetRect.width / 2;
    const top = containerRect.bottom + 8; // navbar ke niche 8px
    const left = centerX;

    setPanelStyle({
      position: "fixed",
      top: `${top}px`,
      left: `${left}px`,
      transform: "translateX(-50%)",
      minWidth: "320px",
      maxWidth: "680px",
      zIndex: 2147483647,
    });

    setOpenKey(key);
  }

  // 👇 Hide functions
  function scheduleHide(delay = 120) {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setOpenKey(null), delay);
  }
  function cancelHide() {
    clearTimeout(hideTimer.current);
  }

  useEffect(() => {
    return () => clearTimeout(hideTimer.current);
  }, []);

  // 👇 Panel render
  const panel = (
    <div
      className={`preview-panel ${openKey ? "open" : ""}`}
      style={{
        ...panelStyle,
        opacity: openKey ? 1 : 0,
        pointerEvents: openKey ? "auto" : "none",
        transition: "opacity .16s ease, transform .16s ease",
        background: "#fff",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
      }}
      onMouseEnter={() => cancelHide()}
      onMouseLeave={() => scheduleHide(120)}
      aria-hidden={!openKey}
    >
      {openKey ? menuItems.find((m) => m.key === openKey)?.content : null}
    </div>
  );

  return (
    <>
      <style>{`
        .topbar { display:flex; align-items:center; gap:18px; padding:14px 20px; background:#fff; box-shadow:0 2px 10px rgba(0,0,0,0.05); }
        .brand { font-weight:700; }
        .menu { display:flex; gap:14px; margin-left:12px; }
        .menu-item { padding:8px 10px; cursor:pointer; border-radius:6px; }
        .menu-item:hover { background:rgba(0,0,0,0.05); }
      `}</style>

      <header className="topbar">
        <div className="brand">Silicon</div>
        <nav className="menu" ref={menuRef} onMouseLeave={() => scheduleHide(160)}>
          {menuItems.map((it) => (
            <div
              key={it.key}
              className="menu-item"
              onMouseEnter={(e) => {
                cancelHide();
                showPanelFor(it.key, e.currentTarget);
              }}
              onMouseLeave={() => scheduleHide(160)}
              tabIndex={0}
            >
              {it.label}
            </div>
          ))}
        </nav>
      </header>

      <main style={{ padding: 28 }}>
        <h1>Demo content</h1>
        <p>Hover over the menu items to open preview panel</p>
      </main>

      {typeof document !== "undefined" ? createPortal(panel, document.body) : null}
    </>
  );
}
