import {Lotr as LotrClient} from './lotr';

declare global {
    var Lotr: LotrClient;
}

(function() {
  window.Lotr = new LotrClient();
}());
