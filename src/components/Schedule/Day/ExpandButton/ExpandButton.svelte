<script>
  export let hover
  export let open

  const labelText = (open) => {
    return open ? 'CLOSE' : 'OPEN'
  }

  const hoverTranslate = (open) => {
    return open ? 0 : -10
  }

  const offHoverTranslate = (open) => {
    return open ? -10 : 0
  }
</script>

<button 
  class='expand-button'
  class:hover 
  style='
    --hover:{hoverTranslate(open)}px; 
    --off-hover:{offHoverTranslate(open)}px;
  '>
  <p class='button-label label-horizontal'>{labelText(open)}</p>
  <p class='button-label label-vertical'>{labelText(open)}</p>
</button>

<style>
  .expand-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background: transparent;
    border: none;
  }

  .button-label {
    text-shadow: none;
    color: midnightblue;
    transition: 0.3s ease-in-out;
    font-size: 14px;
  }

  .label-vertical {
    margin-top: -6px;
    margin-right: -8px;
    writing-mode: vertical-rl;
    transform: translateY(calc(-1 * var(--off-hover)));
  }

  .label-horizontal {
    margin-right: 12px;
    margin-top: -8px;
    transform: translateX(var(--off-hover));
  }

  .hover .label-vertical {
    transform: translateY(calc(-1 * var(--hover)));
  }

  .hover .label-horizontal {
    transform: translateX(var(--hover));
  }
</style>