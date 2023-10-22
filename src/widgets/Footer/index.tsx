import './index.css';

export function Footer() {
  // For printing actual year
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {year} All rights reserved</p>
    </footer>
  );
}
