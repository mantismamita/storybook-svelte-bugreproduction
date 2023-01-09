<script lang="ts">
  import type { Visual as VisualType } from 'visual';

  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Visual from '$lib/Visual.svelte';
  import WrapperDecorator from '$decorators/WrapperDecorator.svelte';
  import DocNoteDecorator from '$decorators/DocNoteDecorator.svelte';

  const args: { visual: VisualType } = {
    visual: {
      src: 'https://picsum.photos/id/237/300/250',
      width: 300,
      height: 250,
      legend: 'texte alternatif',
    },
  };
</script>

<Meta
  title="Components/Card/Components/Visual"
  component={Visual}
  decorators={[
    () => ({
      Component: WrapperDecorator,
      props: { style: 'max-width: 320px;' },
    }),
  ]}
  parameters={{
    docs: {
      description: {
        component: `Ce composant affiche un visuel de carte`,
      },
    },
  }}
  argTypes={{
    badge: {
      description: 'The text within the badge',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
  }}
/>

<Template let:args>
  <Visual {...args} />
</Template>

<Story
  name="Basic"
  args={{
    ...args,
  }}
  parameters={{
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4MVc2WP1A8UpuQw89c7QRb/Web-RF-System?node-id=218%3A3023',
    },
  }}
/>

<Story
  name="With a badge"
  args={{
    ...args,
    badge: 'vidéo',
  }}
  parameters={{
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4MVc2WP1A8UpuQw89c7QRb/Web-RF-System?node-id=218%3A3023',
    },
  }}
/>

<Story
  name="CSS Doc"
  decorators={[
    () => ({
      Component: WrapperDecorator,
      props: { style: 'min-width: fit-content;' },
    }),
  ]}
>
  <DocNoteDecorator>
    <h3>Available custom properties and default values</h3>
    <pre>
      <code>--quarks-card-visual-display: block;</code>
      <code>--quarks-card-visual-width: auto;</code>
      <code>--quarks-card-visual-margin: 0 0 var(--space2);</code>
      <code>--quarks-card-visual-badge-top: var(--space2);</code>
      <code>--quarks-card-visual-badge-left: var(--space2);</code>
      <code>--quarks-card-visual-badge-bottom: auto;</code>
      <code>--quarks-card-visual-border-radius: var(--space);</code>
      <code>--quarks-card-visual-box-shadow: none;</code>
      <code>--quarks-card-visual-transform: none;</code>
    </pre>
  </DocNoteDecorator>
</Story>
