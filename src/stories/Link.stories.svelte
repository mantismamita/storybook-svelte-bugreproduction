<script lang="ts">
  import Link from '$lib/Link/Link.svelte';
  import { loremIpsumGenerator } from '$lib/helpers';
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import WrapperDecorator from '$decorators/WrapperDecorator.svelte';
  import DocNoteDecorator from '$decorators/DocNoteDecorator.svelte';

  const imageArgs = {
    href: 'https://www.radiofrance.fr/',
  };

  const textArgs = {
    ...imageArgs,
    ...{
      content: `${loremIpsumGenerator({ words: 10 })}`,
      underline: false,
    },
  };

  const argTypes = {
    href: {
      description: 'The href attribute of Link. If missing, only Link slot will be rendered.',
      control: 'text',
    },
    underline: {
      description: 'Adds underline animation on Link hover.',
      control: 'boolean',
    },
    rel: {
      description: "The relationship of the linked URL (like 'noopener' or 'noreferrer').",
      control: 'text',
    },
    accessibleName: {
      description:
        "Explicit accessible name, used for both 'title' and 'aria-label'. Must contain at least the Link content and can provide complementary information.",
      control: 'text',
    },
    role: {
      description: "ARIA role (like 'button').",
      control: 'text',
    },
    testId: {
      description: "Value of 'data-testid' for testing purpose.",
      control: 'text',
    },
    target: {
      description: "Where to display or load the linked URL. Empty string explicitly set default behavior, '_self'.",
      control: 'select',
      options: ['', 'blank'],
      table: {
        defaultValue: { summary: '' },
      },
    },
    prefetch: {
      description: 'Enable link prefetch.',
      control: 'select',
      options: ['null', 'true'],
      table: {
        type: { summary: 'null | true' },
        defaultValue: { summary: 'null' },
      },
    },
  };
</script>

<Meta
  title="Components/Link"
  component={Link}
  parameters={{
    docs: {
      description: {
        component: `Renders a Link.`,
      },
      source: {
        type: 'code',
      },
    },
  }}
  {argTypes}
/>

<Template let:args id="Text">
  <Link {...args}>{args.content}</Link>
</Template>

<Story
  name="Default"
  template="Text"
  args={textArgs}
  decorators={[
    () => ({
      Component: WrapperDecorator,
      props: { style: 'max-width: 200px;' },
    }),
  ]}
/>

<Story name="Link on image" template="Image" args={imageArgs} />

<Story name="CSS Doc">
  <DocNoteDecorator>
    <h3>Available custom properties and default values</h3>
    <pre>
      <code>--quarks-link-underline-color: var(--color-grey-900);</code>
      <code>--quarks-link-line-height: inherit;</code>
      <code>--quarks-link-hover-color: inherit;</code>
    </pre>
  </DocNoteDecorator>
</Story>
