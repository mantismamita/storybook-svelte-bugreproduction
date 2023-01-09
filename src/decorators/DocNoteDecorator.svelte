<div class="DocNote"><slot /></div>

<style lang="postcss" global>
  .DocNote {
    padding: var(--space2) 0;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul {
      margin: 0 0 var(--space2) 0;
      font-size: revert;
      font-weight: revert;
    }

    p {
      max-width: 60ch;
    }

    pre {
      padding: var(--space2) 0;
      width: min-content;
      overflow: auto;
    }

    code {
      padding: 0 var(--space2);
      overflow: visible;
    }

    li {
      list-style: disc inside;
      margin: 0 0 0 var(--space);
    }

    i {
      font-style: italic;
    }

    strong {
      font-weight: bold;
    }

    em {
      color: darkred;
      font-weight: bold;
    }
  }
</style>
