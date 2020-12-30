'use strict';

export class Character {
  constructor(x, y, hp, dp, sp, isAlive, hasKey) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.dp = dp;
    this.sp = sp;
    this.isAlive = isAlive;
    this.hasKey = hasKey;
  }
  drowCaracter() {
    console.log("kirajzol egy karaktert");

  }

};

// export default Character;