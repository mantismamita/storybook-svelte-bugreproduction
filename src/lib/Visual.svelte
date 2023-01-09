<script lang="ts">
  import type { BrandName } from 'brands';
  import type { Visual } from 'visual';

  import Image from '$lib/Image/Image.svelte';
  import Badge from '$lib/Badge/Badge.svelte';
  import BrandLogo from '$lib/BrandLogo/BrandLogo.svelte';

  export let visual: Visual;
  export let ratio = '16 / 9';
  export let displayCta = true;
  export let badge = '';
  export let brandName: BrandName | '' = '';
  export let brandSrc = '';
</script>

<div class="CardVisual" data-track-click-type="image">
  <Image {...visual} alt={visual.legend} width={'100%'} {ratio} />
  {#if displayCta}
    <div class="CardVisual-overlay">
      <slot name="cta" />
    </div>
  {/if}
  {#if badge}
    <div class="CardVisual-badge">
      <Badge text={badge} />
    </div>
  {/if}
  {#if brandName}
    <div class="CardVisual-brand">
      <BrandLogo {brandName} rounded={false} src={brandSrc} />
    </div>
  {/if}
</div>

<style lang="postcss">
  .CardVisual {
    --_visual-display: var(--quarks-card-visual-display, block);
    --_visual-width: var(--quarks-card-visual-width, auto);
    --_visual-margin: var(--quarks-card-visual-margin, 0 0 var(--space2));
    --_visual-badge-top: var(--quarks-card-visual-badge-top, var(--space2));
    --_visual-badge-left: var(--quarks-card-visual-badge-left, var(--space2));
    --_visual-badge-bottom: var(--quarks-card-visual-badge-bottom, auto);
    --_visual-border-radius: var(--quarks-card-visual-border-radius, var(--space));
    --_visual-box-shadow: var(--quarks-card-visual-box-shadow, none);
    --_visual-transform: var(--quarks-card-visual-transform, none);
    --_visual-overlay: var(--quarks-card-visual-overlay-display, flex);
    --_visual-overlay-top: var(--quarks-card-visual-overlay-top, 50%);

    --quarks-brand-logo-size: calc(var(--px) * 24);

    position: relative;
    overflow: hidden;
    display: var(--_visual-display);
    flex-basis: var(--_visual-width);
    max-width: var(--_visual-width);
    width: 100%;
    flex-shrink: 0;
    margin: var(--_visual-margin);
    border-radius: var(--_visual-border-radius);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: var(--_visual-box-shadow);
    transform: var(--_visual-transform);

    &-overlay {
      display: var(--_visual-overlay);
      justify-content: flex-end;
      align-items: flex-end;
      position: absolute;
      top: var(--_visual-overlay-top);
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 0.4) 100%); /* TODO : use as token ?**/
      padding: 0 var(--space2) var(--space2);

      &:empty {
        display: none;
      }
    }

    &-badge {
      position: absolute;
      top: var(--_visual-badge-top);
      left: var(--_visual-badge-left);
      bottom: var(--_visual-badge-bottom);
    }

    &-brand {
      position: absolute;
      top: 0;
      right: 0;
    }

    @media (--medium-min-viewport) {
      --quarks-brand-logo-size: calc(var(--px) * 32);
    }

    @media (--xl-min-viewport) {
      --quarks-brand-logo-size: calc(var(--px) * 40);
    }
  }
</style>
