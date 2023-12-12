export function HighlightSummary({ children }) {
  return <>
    <section className={styles.hightlightSummary}>
      {children}
    </section>
  </>
}

export function iframePortal({ title = '', url = '' }) {
  return <>
    <iframe
      title={title}
      src={url}
      frameBorder="0"
      width="100%"
      height="900px"
      aria-hidden="true"
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  </>
}
