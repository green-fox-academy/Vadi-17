'use strict';

//import Character from './character.js';

import {Character} from './character.js';

export class Hero extends Character {
    constructor(x, y, hp, dp, sp, isAlive, hasKey, bossDefeated = false, name="Neve") {
      super(x, y, hp, dp, sp, isAlive, hasKey);
  
      this.bossDefeated = bossDefeated;
      this.name = name;
    }
    drowHero() {
      console.log("kirajzol egy hőst");
    }
  }
  
  