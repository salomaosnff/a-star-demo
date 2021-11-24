<template>
  <div
    class="map"
    :style="{
      '--width': width,
      '--height': height,
    }"
  >
    <template v-for="(row, y) in tiles">
      <a-tile
        v-for="(tile, x) in row"
        :key="`${y}_${x}`"
        :tile="tile"
        :active="current === tile"
        :path="path.has(tile)"
        :start="start"
        :end="end"
        :direction="tile.direction"
        @mousedown.native="select(tile)"
      />
    </template>
  </div>
</template>

<script>
import ATile from "./tile.vue";

export default {
  components: { ATile },
  props: {
    tiles: Array,
    width: Number,
    height: Number,
    start: Object,
    current: Object,
    end: Object,
    path: Set,
    tileSize: {
      type: Number,
      default: 64,
    },
  },
  data() {
    return {
      mousedown: true,
    };
  },
  methods: {
    select(tile) {
      this.$emit("select", tile);
    },
  },
};
</script>
<style>
.map {
  display: flex;
  flex-wrap: wrap;
  width: calc(var(--width) * var(--tile-size));
  height: calc(var(--height) * var(--tile-size));
  user-select: none;
}
</style>
