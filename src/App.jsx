// import './App.css';
import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router';
// import {useSelector} from 'react-redux'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items"
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import ErrorPage from './components/ErrorPage';
import Favourites from './components/Favourites';
import Login from './profile/Login';
import Register from './profile/Register'
import AuthRootComponent from './profile/AurhRootComponent'
import AboutUs from './components/AboutUs';
import Search from './components/Search'
import FilterPlace from './components/FilterPlace';
import Cart from './components/Cart';
import AdminHeader from './admin_components/AdminHeader';
import AdminItems from './admin_components/AdminItems';
import SuperAdminHeader from './admin_components/SAdminHeader';
import AddEvent from './admin_components/AddEvent';
import AddItems from './admin_components/AddItems';
import SAItem from './admin_components/SAItem';
import SAItems from './admin_components/SAItems';
import ChangeEvent from './admin_components/ChangeEvent';

class App extends React.Component {
  // const items1 = useSelector((state) => state.events)
  constructor(props){ /*вот вместо этого бд ввинтить*/    
  super(props)
    this.state = {
      events:[],
      cart:[],
      currentItems:[],
      items: [
        // {
        // id: 1, 
        // title: 'В мире животных',
        // img: 'zoo1.jpg',
        // desc: 'Присоединяйтесь к нам на увлекательные экскурсии, встречи с животными и интерактивные презентации, чтобы погрузиться в чудеса природы!',
        // category: 'Развлечение',
        // place: 'Минский зоопарк',
        // date: '24.09.2024 - 24.10.2024',
        // price: '20 BYN',
        // },
        {
          id: 2, 
          title: 'Щелкунчик',
          img: 'balet2.jpg',
          desc: 'Добро пожаловать в волшебный мир классического балета! Откройте для себя удивительное представление, где юный герой вместе с вами отправится в увлекательное путешествие.',
          category: 'Театр',
          place: 'Большой театр',
          date: '10.12.2024 - 20.12.2024',
          price: '30 BYN'
          },
          {
            id: 3, 
            title: 'Пушистый вояж',
            img: 'kino.jpg',
            desc: 'Во время переезда двое домашних любимцев, Педро и Грейси, теряют своих хозяев. Оказавшись в пугающем и неизвестном мире, они пытаются воссоединиться с семьей. ',
            category: 'Фильмы',
            place: 'Дом кино',
            date: '12.05.2024 - 18.05.2024',
            price: '10 BYN'
            },
            {
            id: 4, 
            title: 'Мастер-класс по кофеварению',
            img: 'coffee.jpeg',
            desc: "Откройте мастерство приготовления кофе, который пробудит в вас новые эмоции.",
            category: 'Развлечение',
            place: 'Кофикс',
            date: '10.07.2024 - 20.07.2024',
            price: '60 BYN'
            },
            {
              id: 5, 
              title: 'Латиноамериканские ритмы',
              img: 'latina.jpg',
              desc: "Присоединяйтесь к профессиональному танцору и изучайте латиноамериканские танцы.",
              category: 'Развлечение',
              place: 'Школа танцев "Salsa Loca"',
              date: '15.08.2024 - 25.08.2024',
              price: '20 BYN'
              },
              {
                id: 6, 
                title: 'Выставка современного искусства',
                img: 'art.jpg',
                desc: "Посетите выставку с работами местных художников и узнайте о последних тенденциях в искусстве.",
                category: 'Искусство',
                place: 'Галерея Артель',
                date: '25.09.2024 - 25.10.2024',
                price: '5 BYN'
                },
                {
                  id: 7, 
                  title: 'Кулинарный мастер-класс',
                  img: 'pasta.jpg',
                  desc: "Научитесь готовить классические итальянские блюда под руководством шеф-повара.",
                  category: 'Мастер-класс',
                  place: 'Ресторан "La Pasta"',
                  date: '10.07.2024 - 20.07.2024',
                  price: '60 BYN'
                  },
                  // {
                    // id: 8, 
                    // title: 'Фестиваль науки и технологийы',
                    // img: 'coffee.jpeg',
                    // desc: "Участвуйте в интерактивных демонстрациях, лекциях и мастер-классах по современным технологиям.",
                    // category: 'Развлечение',
                    // place: 'Технопарк',
                    // date: '17.10.2024',
                    // price: '10 BYN'
                    // },
                    // {
                    //   id: 8, 
                    //   title: 'Концерт мировой музыки',
                    //   img: 'concert.jpeg',
                    //   desc: "Насладитесь живыми выступлениями музыкантов из разных стран и культур.",
                    //   category: 'Развлечение',
                    //   place: 'Минск-арена',
                    //   date: '10.07.2024',
                    //   price: '60 BYN'
                    //   },

      ],
      showFullItem: false,
      fullItem: {},

      // selectedPlace: '', // Выбранное место
      selectedDate: null, // Выбранная дата
    }
    this.state.currentItems = this.state.items; //внцтрь currentItems при загрузке сайта изначально помещаем все элементы, которые находятся в массиве items
    this.addToEvents = this.addToEvents.bind(this); //для взаимодействия с состояниями
    this.addToCart = this.addToCart.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this); //для взаимодействия с состояниями
    this.deleteCart = this.deleteCart.bind(this); //для взаимодействия с состояниями
    this.chooseCategory = this.chooseCategory.bind(this); //для взаимодействия с состояниями
    this.choosePlace = this.choosePlace.bind(this);
    this.onShowItem = this.onShowItem.bind(this); //для взаимодействия с состояниями
    this.handleSearch= this.handleSearch.bind(this); //для взаимодействия с состояниями
    


  }

  handlePlaceChange = (place) => {
    this.setState({ selectedPlace: place });
    this.filterItems();
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
    this.filterItems();
  };

  filterItems = () => {
    const { items, selectedPlace, selectedDate } = this.state;

    let filteredItems = items.filter(item => {
      return (!selectedPlace || item.place === selectedPlace) && (!selectedDate || item.date === selectedDate);
    });

    this.setState({ currentItems: filteredItems });
  };

  componentDidMount() {
    this.filterItems();
  }
  render(){
    return (
      <div className="wrapper">
        {/* <Header cart={this.state.cart} onDeleteCart={this.deleteCart}/> */}
        {/* <Header events={this.state.events} onDelete={this.deleteEvent}/> */}

        {/* <Categories chooseCategory={this.chooseCategory}/> */}

    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/events_test/" exact element={(
          <>
          <AdminHeader cart={this.state.cart} onDeleteCart={this.deleteCart}/>
          <Categories chooseCategory={this.chooseCategory}/>
          <div className='tools-bar'>
            <Search onSearch={this.handleSearch} />
            <FilterPlace choosePlace={this.choosePlace}/>
        <div>
        
         {/* { this.currentItems.map(item => (
            <Items key={item.id} item={item} />
          ))} */}
        </div>
          </div>
          <AdminItems onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents} onAddCart={this.addToCart}/>
          </>)} />

          <Route path="/register/auth" exact element={(
          <>
          <AdminHeader cart={this.state.cart} onDeleteCart={this.deleteCart}/>
          <Categories chooseCategory={this.chooseCategory}/>
          <div className='tools-bar'>
            <Search onSearch={this.handleSearch} />
            <FilterPlace choosePlace={this.choosePlace}/>
        <div>
        </div>
          </div>
          <AdminItems onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents} onAddCart={this.addToCart}/>
          </>)} />

          <Route path="/register/login/auth" exact element={(
          <>
          <AdminHeader cart={this.state.cart} onDeleteCart={this.deleteCart}/>
          <Categories chooseCategory={this.chooseCategory}/>
          <div className='tools-bar'>
            <Search onSearch={this.handleSearch} />
            <FilterPlace choosePlace={this.choosePlace}/>
        <div>
        </div>
          </div>
          <AdminItems onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents} onAddCart={this.addToCart}/>
          </>)} />

        {/* <Route path="/main" element={<Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents} />} /> */}
        {/* <Route path="/main" exact element = {(
        <Fragment>
          <div className='tools-bar'>
            <Search onSearch={this.handleSearch} />
            <Categories chooseCategory={this.chooseCategory}/>
          </div>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents}/> 
          </Fragment>)}/> */}
        {/* <Route path="/one" element={<Account />} />
        <Route path="/two" element={<Account />} /> */}

        <Route path="/register" exact element={(
          <>
          <Header/>
          <Register/>
          </>
        )}
          />
        <Route path="/register/login" exact element={(
        <>
        <Header/>
        <Login/>
        </>
        )}
         />

        <Route path="/login/register" element={<Register/>} />
        <Route path="/login" exact element={(
        <>
        <Header/>
        <Login/>
        </>)} />
        {/* <Route path="/register" element={<AuthRootComponent />} /> */}
        <Route path="/about" exact element={(
          <>
          <Header/>
          <AboutUs/>
          </>)}/>

        <Route path="/favourites" element={(
        <>
        <AdminHeader cart={this.state.cart} onDeleteCart={this.deleteCart}/>
        <Favourites events={this.state.events} onDelete={this.deleteEvent}/>
        </>
        )} />

        <Route path="register/auth/favourites" element={(
        <>
        <AdminHeader cart={this.state.cart} onDeleteCart={this.deleteCart}/>
        <Favourites events={this.state.events} onDelete={this.deleteEvent}/>
        </>
        )} />
        {/* <Route path="/cart" element={<Cart cart={this.state.cart} onDeleteCart={this.deleteCart}/>} /> */}
        <Route path="register/login/admin" element={(
        <>
          <SuperAdminHeader/>
          {/* <AddItems onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents} onAddCart={this.addToCart}/> */}
          <SAItems onShowItem={this.onShowItem} items={this.state.currentItems} />
        </>
        )} />

        <Route path="register/login/admin/events" element={(
        <>
          <SuperAdminHeader/>
          <AddEvent/>
        </>
        )} />
        <Route path="register/login/admin/events" element={(
        <>
          <SuperAdminHeader/>
          <AddEvent/>
        </>
        )} />

      <Route path="register/login/admin/change" element={(
        <>
          <SuperAdminHeader/>
          <ChangeEvent/>
        </>
        )} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    {/* </BrowserRouter> */}

        {/* <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents}/> */}

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToEvents} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        {this.state.showFullItem && <ShowFullItem onAddCart={this.addToCart} onShowItem={this.onShowItem} item={this.state.fullItem}/>}

        {/* <Footer /> */}
      </div>
    );
  }

  handleSearch = (event) => {
    const searchQuery = event.target.value;
    const filteredItems = this.state.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ currentItems: filteredItems });
  }
  
  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem}) /*ставим противоположное значение*/
  }

  chooseCategory(category){
if(category === 'all') {
  this.setState({currentItems: this.state.items})
  return 
}

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  choosePlace(place){
    if(place === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(elem => elem.place === place)
    })
  }

  deleteEvent(id){
    this.setState({events: this.state.events.filter(el => el.id !== id)})
  }

  deleteCart(id){
    this.setState({cart: this.state.cart.filter(el => el.id !== id)})
  }

  addToEvents(item){
    let isInArray = false;
    this.state.events.forEach(el => {
      if(el.id === item.id){
        isInArray = true;
      }
    })
    if(!isInArray){
          this.setState({events: [...this.state.events, item] }) //добавление к текущему элементу элемента, который передастся в качестве параметра

    }
  }

  addToCart(item){
    let isInArray = false;
    this.state.cart.forEach(el => {
      if(el.id === item.id){
        isInArray = true;
      }
    })
    if(!isInArray){
          this.setState({cart: [...this.state.cart, item] }) //добавление к текущему элементу элемента, который передастся в качестве параметра

    }
  }
}

export default App;

{/* <div>
        <select onChange={(e) => this.handlePlaceChange(e.target.value)}>
          <option value="">All Places</option>
          <option value="Минский зоопарк">Минский зоопарк</option>
          <option value="Большой театр">Большой театр</option>
          <option value="Дом кино">Дом кино</option>
          <option value="Кофикс">Кофикс</option>
        </select>
        <input type="date" onChange={(e) => this.handleDateChange(e.target.value)} />
      </div> */}