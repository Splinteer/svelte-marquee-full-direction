<script lang="ts">
  import { cn } from './utils.js';
  type Direction = 'left' | 'right' | 'up' | 'down';
  export let direction: Direction = 'left';
  export let pauseOnHover: boolean = false;
  export let reverse: boolean = false;
  export let fade: boolean = false;
  export let innerClassName: string = '';
  export let numberOfCopies: number = 2;

  let containerFlexDirection = 'flex-row';
  let animationDirection = 'to right';

  if (direction === 'up' || direction === 'down') {
    containerFlexDirection = 'flex-col';
    if (direction === 'up') {
      animationDirection = 'to bottom';
    } else {
      animationDirection = 'to top';
    }
  } else if (direction === 'right') {
    animationDirection = 'to left';
  }
</script>

<div
  class={cn(
    `group flex gap-[1rem] overflow-hidden ${$$restProps.class}`,
    containerFlexDirection
  )}
  style={`mask-image: ${
    fade
      ? `linear-gradient(${animationDirection}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
      : 'none'
  };
	  -webkit-mask-image: ${
      fade
        ? `linear-gradient(${animationDirection}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
        : 'none'
    };
	  `}
>
  {#each Array(numberOfCopies).fill(0) as _, i (i)}
    <div
      class={cn(
        'flex justify-around gap-[1rem] [--gap:1rem] shrink-0',
        `animate-marquee-${direction}`,
        containerFlexDirection,
        pauseOnHover && 'group-hover:[animation-play-state:paused]',
        reverse && 'direction-reverse',
        innerClassName
      )}
    >
      <slot />
    </div>
  {/each}
</div>
