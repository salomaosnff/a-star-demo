/**
 * @param {String} nome Nome do vertice
 * @param {Number} x Posição X do vertice no mapa
 * @param {Number} y Posição Y do vertice no mapa
 * @param {Boolean} fechado Indica se pode andar no vertice
 */
export function createVertice(x, y, tipo = "") {
  return {
    nome: `${String.fromCharCode(65 + x)}${y + 1}`,
    tipo,
    pai: null,
    x,
    y,
    g: 0,
    h: 0,
    peso: 1,
    get f() {
      return this.g + this.peso * this.h;
    },
    get direction() {
      if (!this.pai) return null;

      const dx = this.x - this.pai.x;
      const dy = this.y - this.pai.y;

      if (dx < 0) return "left";
      if (dx > 0) return "right";
      if (dy < 0) return "top";
      if (dy > 0) return "bottom";

      return null;
    },
  };
}
