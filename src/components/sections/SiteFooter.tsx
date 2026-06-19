import { social } from '../../content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} 铁炉咖啡</p>
      <p>抖音号：{social.douyinId}</p>
      <a href="/来源清单.md">影像与资料来源</a>
    </footer>
  );
}
