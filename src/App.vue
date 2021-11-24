<template>
  <div id="app">
    <div class="d-flex">
      <div class="panel">
        <h3>MAPA</h3>
        <div>
          <div class="d-flex" style="align-items: center">
            <span>Tamanho: </span>
            <input
              type="number"
              v-model.number="state.width"
              min="1"
              max="9"
              @input="initMap"
            />
            <span>x</span>
            <input
              type="number"
              v-model.number="state.height"
              min="1"
              max="9"
              @input="initMap"
            />
            <div class="d-flex" style="align-items: center">
              <span>Delay(ms)</span>
              <input
                type="number"
                v-model.number="state.time"
                min="0"
                max="1000"
              />
            </div>
          </div>

          <label>
            <span>Tipo de bloco: </span>
            <select v-model="mode">
              <option value="inicio">Início</option>
              <option value="fim">Fim</option>
              <option value="parede">Parede</option>
              <option value="agua">Água</option>
            </select>
          </label>
          <button @click="reset">Limpar</button>
          <button @click="start">Iniciar</button>
          <button @click="proximo" :disabled="!state.resolve || !debug">
            Próximo
          </button>
          <label>
            <input
              v-model="recalcule"
              type="checkbox"
              style="flex: 0; width: auto"
            />
            <span>Calcular em tempo real</span>
          </label>
          <label v-if="!recalcule">
            <input
              v-model="debug"
              type="checkbox"
              style="flex: 0; width: auto"
            />
            <span>Passo a passo</span>
          </label>
        </div>
        <a-map
          :tiles="state.tiles"
          :width="state.width"
          :height="state.height"
          :start="state.start"
          :current="state.current"
          :end="state.end"
          :path="currentPath"
          @select="click"
        />
      </div>
      <div v-if="!recalcule" class="flex-fill">
        <div class="panel">
          <h3>Melhor candidato</h3>
          <a-tile
            v-if="state.open.length"
            :key="state.open[0].nome"
            :tile="state.open[0]"
          />
        </div>
        <div class="panel">
          <h3>Lista aberta</h3>
          <transition-group name="tile" class="d-flex">
            <a-tile v-for="tile in state.open" :key="tile.nome" :tile="tile" />
          </transition-group>
        </div>
        <div class="panel">
          <h3>Lista fechada</h3>
          <transition-group name="tile" class="d-flex">
            <a-tile
              v-for="tile in state.closed"
              :key="tile.nome"
              :tile="tile"
            />
          </transition-group>
        </div>

        <div class="panel">
          <h3>Caminho</h3>
          <transition-group name="tile" class="d-flex">
            <a-tile v-for="tile in state.path" :key="tile.nome" :tile="tile" />
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createVertice } from "./lib/Vertice";
import { AStar } from "./lib/a-star";
import AMap from "./components/map.vue";
import ATile from "./components/tile.vue";

export default {
  name: "App",
  components: { AMap, ATile },
  data() {
    return {
      mode: "parede",
      debug: false,
      recalcule: false,
      state: {
        path: new Set(),
        current: null,
        tiles: [],
        open: [],
        closed: new Set(),
        width: 5,
        height: 5,
        start: {
          x: 0,
          y: 3,
        },
        end: {
          x: 4,
          y: 2,
        },
        resolve: null,
        reject: null,
        promise: null,
        time: 16,
        wait: () => null,
      },
    };
  },
  methods: {
    initMap() {
      this.state.tiles = Array.from({ length: this.state.height }, (_, y) =>
        Array.from({ length: this.state.width }, (_, x) => createVertice(x, y))
      );
      this.reset();
    },
    wait() {
      return new Promise((resolve, reject) => {
        this.state.resolve = resolve;
        this.state.reject = reject;

        if (this.recalcule) {
          resolve();
        } else if (!this.debug) {
          setTimeout(resolve, this.state.time);
        }
      });
    },
    click(vert) {
      if (this.mode === "inicio") {
        this.state.start = {
          x: vert.x,
          y: vert.y,
        };
      } else if (this.mode === "fim") {
        this.state.end = {
          x: vert.x,
          y: vert.y,
        };
      } else if (vert.tipo === this.mode) {
        vert.tipo = null;
        vert.peso = 1;
      } else if (this.mode === "agua") {
        vert.tipo = "agua";
        vert.peso = 1.5;
      } else {
        vert.tipo = this.mode;
        vert.peso = 1;
      }

      if (this.recalcule) {
        this.start();
      }
    },

    proximo() {
      this.state.resolve();
    },

    async start() {
      this.reset();

      this.state.wait = this.wait;
      this.state.path = new Set();

      await AStar(this.state);
    },

    async reset() {
      this.state.tiles.forEach((row) => {
        row.forEach((tile) => {
          tile.pai = null;
          tile.g = 0;
          tile.h = 0;
        });
      });

      this.state.reject?.("cancelled");
      this.state.resolve = null;
      this.state.reject = null;
      this.state.current = null;
      this.state.path = new Set();
      this.state.open = [];
      this.state.closed = new Set();
    },
  },
  created() {
    this.initMap();
  },
  computed: {
    currentPath() {
      return this.state.path;
      // let item = this.state.current;
      // const path = [];

      // while (item) {
      //   path.unshift(item);
      //   item = item.pai;
      // }

      // return new Set(path);
    },
  },
};
</script>

<style lang="scss">
html,
body {
  background: #eee;
  font: normal 14px monospace;
  padding: 0.5em 0 0 0.5em;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h3 {
  margin-bottom: 0.809em;
}

:root {
  --tile-size: 64px;
}

button,
input,
select {
  padding: 0.5em 1em;
  margin: 0.5em;
}

button:not(:disabled) {
  cursor: pointer;
}

.d-flex input {
  width: 100%;
  flex: 1;
}

label {
  display: inline-block;
  margin: 0.25em;
  cursor: pointer;

  input {
    margin: 0 0.5em 0 0;
    cursor: pointer;
  }
}

.d-flex {
  display: flex;
}

.flex-fill {
  flex: 1;
}

.panel {
  padding: 1em;
  background: #eee;
  margin-right: 1em;
  margin-bottom: 1em;
  border-radius: 10px;
  border: 1px solid black;
  overflow: hidden;
  overflow-x: scroll;
  min-height: 126px;
  max-width: 600px;
}

.tile {
  &-enter-active,
  &-leave-active,
  &-move {
    transition: all 0.5s ease;
  }

  &-enter,
  &-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
