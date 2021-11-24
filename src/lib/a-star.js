import { Manhattan } from "./heuristic";

const heuristic = Manhattan;

async function montarCaminho(item, state) {
  const caminho = [];

  while (item) {
    caminho.unshift(item);
    item = item.pai;

    state.path = new Set(caminho);
    await state.wait();
  }
}

function obterVizinhos(map, item) {
  const { x, y } = item;
  const prevY = y - 1;
  const prevX = x - 1;
  const nextY = y + 1;
  const nextX = x + 1;

  return [
    map[prevY]?.[x],
    map[y]?.[nextX],
    map[nextY]?.[x],
    map[y]?.[prevX],
  ].filter((v) => v && v.tipo !== "parede");
}

export async function AStar(state) {
  const { tiles, start, end, closed, wait } = state;
  const inicio = tiles[start.y][start.x];
  const fim = tiles[end.y][end.x];

  state.open = [inicio];
  state.closed = new Set();

  while (state.open.length) {
    await wait();
    const item = state.open.shift();

    state.current = item;

    if (closed.has(item)) {
      continue;
    }

    state.closed = new Set(closed.add(item));

    if (item.x === end.x && item.y === end.y) {
      state.resolve = null;
      state.reject = null;
      await montarCaminho(item, state);
      return;
    }

    const vizinhos = obterVizinhos(tiles, item, state);
    const nextG = item.g + 1;

    for (const vizinho of vizinhos) {
      if (closed.has(vizinho)) {
        continue;
      }

      await wait();

      if (!state.open.includes(vizinho)) {
        vizinho.pai = item;
        vizinho.g = nextG;
        vizinho.h = heuristic(fim, vizinho);

        state.open.push(vizinho);
      }
      // else if (vizinho.g < g) {
      //   vizinho.g = g;
      //   vizinho.pai = item;
      // }
    }

    await wait();

    state.open.sort((a, b) => a.f - b.f);
  }

  state.current = null;
  state.resolve = null;
  state.reject = null;

  return null;
}
