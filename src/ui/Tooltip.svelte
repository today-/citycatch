<script context="module">
  import {listen} from 'svelte/internal';

  const el = document.createElement('div');
  el.className = 'tooltip';
  document.body.appendChild(el);

  export function tooltip(node, text) {
    function position() {
      const {top, left, right} = node.getBoundingClientRect();
      el.style.top = `${top + window.pageYOffset}px`;
      el.style.left = `${(right + left + window.pageXOffset)/ 2}px`;
    }

    function show() {
      el.textContent = text;
      position();
      el.classList.add('tooltip-visible');
    }

    function hide() {
      el.classList.remove('tooltip-visible');
      setTimeout(() => {
        if (!el.classList.contains('tooltip-visible')) {
          el.style.top = 0;
          el.style.left = 0;
        }
      }, 200);
    }

    const cancelMouseenter = listen(node, 'mouseenter', show);
    const cancelMouseleave = listen(node, 'mouseleave', hide);

    return {
      destroy() {
        hide();
        cancelMouseenter();
        cancelMouseleave();
      },

      update(newText) {
        el.textContent = newText;
      },
    };
  }
</script>

<style>
  :global(.tooltip) {
    @apply absolute bg-black text-white whitespace-no-wrap shadow rounded py-1 px-2 z-50;
    @apply opacity-0 transition-opacity top-0;
    transform: translateX(-50%) translateY(-120%);

    &::before {
      @apply absolute block bg-black opacity-75 w-2 h-2 bottom-0 right-0;
      content: '';
      pointer-events: auto;
      transform: translateX(-50%) translateY(50%) rotate(45deg);
      left: 50%;
    }

    &.tooltip-visible {
      @apply opacity-75;
    }
  }
</style>
