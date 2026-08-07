// UWaterloo CS Webring badge. The prev/next links route through
// cs.uwatering.com itself — it looks up this site's position in the
// shared list live and redirects, so neighbors stay correct without
// this site ever hardcoding who's next.
//
// TODO: "andrei-dan" is a placeholder slug. Swap it for the real one
// once the webring PR (adding this site to their webringData[]) is
// merged — confirm the exact slug by checking the entry on
// cs.uwatering.com.
const WEBRING_SLUG = "andrei-dan"

export function Webring() {
  return (
    <footer className="flex items-center justify-center gap-2 pb-6 pt-1">
      <a
        href={`https://cs.uwatering.com/#${WEBRING_SLUG}?nav=prev`}
        aria-label="Previous site in the CS Webring"
        className="text-sm text-muted-2 transition-colors hover:text-foreground"
      >
        ←
      </a>
      <a
        href={`https://cs.uwatering.com/#${WEBRING_SLUG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="UWaterloo CS Webring"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cs.uwatering.com/icon.black.svg"
          alt="CS Webring"
          className="h-4 w-4 opacity-50 transition-opacity hover:opacity-90"
        />
      </a>
      <a
        href={`https://cs.uwatering.com/#${WEBRING_SLUG}?nav=next`}
        aria-label="Next site in the CS Webring"
        className="text-sm text-muted-2 transition-colors hover:text-foreground"
      >
        →
      </a>
    </footer>
  )
}
