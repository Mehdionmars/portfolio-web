'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>
          <span className="text-muted-foreground/60">mehdi@portfolio:~$</span>{' '}
          <span className="text-green-400">exit 0</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/moungid-mehdi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            linkedin/
          </a>
          <a
            href="https://github.com/Mehdionmars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            github/
          </a>
          <a
            href="https://leetcode.com/mehdionmars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            leetcode/
          </a>
        </div>

        <p className="text-muted-foreground/40">© {year} Mehdi Moungid</p>
      </div>
    </footer>
  );
}
