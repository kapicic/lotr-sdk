import {Lotr as LotrClient} from './lotr';

declare global {
    var Lotr: typeof LotrClient;
}

(function() {
  window.Lotr = LotrClient;
}())
