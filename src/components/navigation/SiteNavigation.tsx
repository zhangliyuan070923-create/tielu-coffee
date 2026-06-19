import { List, X } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { media } from '../../content/media';
import { navigation } from '../../content/site';

export function SiteNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <a className="brand-mark" href="#now" aria-label="铁炉咖啡首页">
        <img src={media.logo.src} alt={media.logo.alt} />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? '关闭菜单' : '打开菜单'}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
      </button>
      <nav id="primary-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="主要导航">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
