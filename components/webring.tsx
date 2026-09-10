const WEBRING_SLUG = "andreidan.ca"

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
