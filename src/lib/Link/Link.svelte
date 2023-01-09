<script lang="ts">
  export let role = '';
  export let target: '' | 'blank' = '';
  export let href = '';
  export let testId = 'link';
  export let underline = false;
  export let accessibleName = '';
  export let rel = '';
  export let ariaDisabled = false;
  export let prefetch: true | null = null;
</script>

{#if href}
  <a
    {href}
    on:click
    {...target && { target: `_${target}` }}
    {...accessibleName && { title: accessibleName, 'aria-label': accessibleName }}
    {...role && { role }}
    {...rel && { rel }}
    class:underline
    data-testid={testId}
    {...ariaDisabled && { 'aria-disabled': 'true' }}
    sveltekit:prefetch={prefetch}
  >
    <slot />
  </a>
{:else}
  <slot />
{/if}

<style lang="postcss">
  a {
    --_link-underline-color: var(--quarks-link-underline-color, var(--color-grey-900));
    --_link-color: var(--quarks-link-color, inherit);

    line-height: var(--quarks-link-line-height, inherit);
    transition: color 0.4s ease-in;
    color: var(--_link-color);

    &:hover {
      color: var(--quarks-link-hover-color, var(--quarks-link-color, inherit));
    }

    &:focus {
      outline: var(--quarks-link-hover-color, var(--quarks-link-color, inherit)) auto 1px;
      outline: -webkit-focus-ring-color auto 1px;
    }

    &.underline {
      text-decoration: none;
      background-image: linear-gradient(var(--_link-underline-color), var(--_link-underline-color));
      background-position: 0% 100%;
      background-repeat: no-repeat;
      background-size: 0% 1px;
      transition: background-size 0.6s cubic-bezier(0.25, 1, 0.5, 1);

      &:hover {
        background-size: 100% 1px;
      }
    }
  }
</style>
