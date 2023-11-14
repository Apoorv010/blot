import Layout from '../../layouts/Layout.astro'
import { description } from '../../lib/utils/guide.ts'
import { rawContent, headings } from './[slug].astro.tsx'
;<Fragment>
  <Layout
    title={`Blot | ${title}`}
    description={description(rawContent)}
    navbar={true}>
    <style lang="scss" is:global>{`
    @import '../../ui/variables.scss';

    header {
      letter-spacing: -4px;
      line-height: 1;
      padding: 3rem 2rem;
      background-image: linear-gradient(to right, #ddd 1px, transparent 1px),
        linear-gradient(to bottom, #ddd 1px, transparent 1px);
      background-size: 40px 40px;
      box-shadow: inset 0 4px 8px 8px rgba(0, 0, 0, 0.1);
      margin: auto;
      text-align: center;

      h1 {
        margin: 0;
      }

      @media screen and (max-width: $lg) {
        font-size: 2rem;
      }

      @media screen and (min-width: $lg) {
        font-size: 3rem;
      }
    }

    #article {
      width: fit-content;
      margin: 1rem auto;
      gap: 2rem;
      position: relative;

      @media screen and (max-width: $md) {
        padding: 0 1rem;
      }

      @media screen and (min-width: $md) {
        display: flex;
        width: fit-content;
      }
    }

    #toc {
      font-family: var(--sans-serif);
      position: sticky;
      top: 0;
      align-self: flex-start;
      margin-top: 1rem;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 500;
      }

      a {
        color: var(--primary);
        text-decoration: none;
      }
    }

    #toc-contents {
      color: #404040;
      text-transform: uppercase;
      font-size: 1.35rem;
      border-bottom: 1px solid;
    }

    .prose {
      width: 50vw;
    }
  `}</style>
    <header>
      <h1>{title}</h1>
    </header>
    <main id="article">
      <div id="toc">
        <h1 id="toc-contents">Contents</h1>
        {headings.length !== 0 ? (
          headings.map((heading, idx) => (
            <Fragment>
              <h3>
                <a href={`#${heading.slug}`}>{heading.text}</a>
              </h3>
            </Fragment>
          ))
        ) : (
          <Fragment>
            <h3>No headings.</h3>
          </Fragment>
        )}
      </div>
      <article class="prose">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}>
          <p style={{ marginBottom: 0 }}>
            <a href="/guides">&larr; All guides</a>
          </p>
          <p style={{ marginBottom: 0 }}>
            <a href={`/editor?guide=${route}`}>Open in editor</a>
          </p>
        </div>
        <Content />
        <footer>
          <a
            href={`https://github.com/hackclub/blot/edit/main/guides/${route}.md`}>
            Make an edit
          </a>
        </footer>
      </article>
    </main>
  </Layout>
</Fragment>
