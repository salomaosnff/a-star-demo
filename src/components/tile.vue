<template>
  <div
    v-if="tile"
    :class="[
      'map__tile',
      `map__tile--${tile.tipo}`,
      {
        [`map__tile--${direction}`]: !!direction,
        'map__tile--visited': tile.f !== 0,
        'map__tile--active': active,
        'map__tile--start': tile.x === start.x && tile.y === start.y,
        'map__tile--end': tile.x === end.x && tile.y === end.y,
        'map__tile--path': path,
      },
    ]"
  >
    <span class="label">{{ tile.nome }}</span>
    <template v-if="tile.f !== 0">
      <span class="f">{{ tile.f.toFixed(0) }}</span>
      <span class="g">{{ tile.g.toFixed(0) }}</span>
      <span class="h">{{ tile.h.toFixed(0) }}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tile: Object,
    active: Boolean,
    path: Boolean,
    direction: String,
    start: {
      type: Object,
      default: () => ({
        x: -1,
        y: -1,
      }),
    },
    end: {
      type: Object,
      default: () => ({
        x: -1,
        y: -1,
      }),
    },
  },
};
</script>

<style lang="scss">
.map {
  &__tile {
    min-width: var(--tile-size);
    width: var(--tile-size);
    height: var(--tile-size);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid transparent;
    position: relative;
    font-family: monospace;
    border: 1px solid black;

    &:hover {
      border-color: #000;
    }

    &--parede {
      border: 8px solid black;
    }

    &--visited {
      background: #ccc;
    }

    &--path {
      box-shadow: inset 0 0 0 16px yellow;
    }

    &--start {
      background: #00974c;
    }

    &--agua {
      background: #0ba8d8;
    }

    &--active {
      background: yellow;
    }

    &--end {
      background: #cf0b0b;
    }

    .label {
      font-weight: bold;
      font-size: 1.2em;
    }

    .f,
    .g,
    .h {
      position: absolute;
      font-size: 0.9em;
    }

    .f {
      top: 2px;
      left: 2px;
    }

    .g {
      bottom: 2px;
      left: 2px;
    }

    .h {
      right: 2px;
      bottom: 2px;
    }

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 0.809em solid transparent;
      position: absolute;
      z-index: 9999;
    }

    &--top:before {
      bottom: 0;
      left: 50%;
      border-top-color: black;
      transform: translate(-50%, 75%);
    }

    &--bottom:before {
      top: 0;
      left: 50%;
      border-bottom-color: black;
      transform: translate(-50%, -75%);
    }

    &--left:before {
      right: 0;
      top: 50%;
      border-left-color: black;
      transform: translate(75%, -50%);
    }

    &--right:before {
      left: 0;
      top: 50%;
      border-right-color: black;
      transform: translate(-75%, -50%);
    }
  }
}
</style>