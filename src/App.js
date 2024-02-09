import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class  App extends React.Component {
  constructor(props) {   //здесь список товаров
    super(props)
    this.state = {
      orders: [],  // Товары в корзине
      currentItems: [],
      items: [  // Существующие товары
        { id: 1,
          title:"INTERSTELLAR",
          img:"int.jpg",
          desc:"Modern classicSet in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.",
          category: 'science',
          price:'50.45$',
        },
        { id: 2,
          title:"1917",
          img:"1917.jpg",
          desc:"During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake's own brother.",
          category: 'historical',
          price:'40.00$',
        },
        { id: 3,
          title:"The Dark Knight",
          img:"dark.jpg",
          desc:"The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos.",
          category: 'thriller',
          price:'64.40$',
        },
        { id: 4,
          title:"Blade runner 2049",
          img:"blade.jpg",
          desc:"The film takes place after the events of the first film, following a new Blade Runner, LAPD Officer K. K unearths a long-buried secret that has the potential to plunge what is left of society into chaos, leading him on a quest to find Rick Deckard, a former LAPD Blade Runner who has been missing for thirty years.",
          category: 'thriller',
          price:'60.00$',
        },
        { id: 5,
          title:"DUNKIRK",
          img:"dun.jpg",
          desc:"Dunkirk evacuation, (1940) in World War II, the evacuation of the British Expeditionary Force (BEF) and other Allied troops from the French seaport of Dunkirk (Dunkerque) to England. Naval vessels and hundreds of civilian boats were used in the evacuation, which began on May 26.",
          category: 'historical',
          price:'35.55$',
        },
        { id: 6,
          title:"Rogue One: A Star Wars Story",
          img:"rog.jpg",
          desc:"The plot follows a group of rebels who band together to steal plans of the Death Star, the ultimate weapon of the Galactic Empire. It details the Rebel Alliance's first effective victory against the Empire, first referenced in Star Wars' opening crawl.",
          category: 'fantasy',
          price:'60.00$',
        },
         
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this) // чтобы добавление работало с состояниями
    this.deleteOrder = this.deleteOrder.bind(this) // чтобы удаление работало с состояниями
    this.choseCategory = this.choseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  } 
  render() {
  return (
    <div className="wrapper"> 
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/> {/*Отсюда передаю Header.js => Order */}
      <Categories choseCategory={this.choseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>  {/* отсюда идёт в Items.js => Item */}

      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
  );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  choseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {    // передаётся в шапку (Header)
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) { //  идёт в Items => onAdd
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }


}

export default App;

