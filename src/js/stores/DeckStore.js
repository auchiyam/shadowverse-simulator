import { observable, computable } from 'mobx-react'

class DeckStore {
  @observable language = 'ja'
  @observable cardlist = []

  @computable addCard(id) {
    var card = {
      cardID: id
    }

    cardlist.push(card)
  }

  @computable get allCards() {
    return cardlist
  }
}
