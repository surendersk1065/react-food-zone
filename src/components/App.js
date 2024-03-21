import Breakfast from "./Breakfast";
import Catagories from "./Catagories";
import Food from "./Food";
import Header from "./Header";
import Image from "./Image"
import { useState, useEffect } from "react";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Dessert from "./Dessert";
import { Route, Routes } from "react-router-dom";
import Missing from "./Missing";
import Foodpage from "./Foodpage";
import Footer from "./Footer";
import About from "./About";
import api from './api/fooditems'


function App() {

  const [item,setItem] = useState([])


  useEffect( () => {
    const fetchitems = async () => {
      try {
        const response = await api.get('/item')
        setItem(response.data)
      }catch (err) {
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }else{
          console.log(`Error: ${err.message}`)
        }
      }
    }
    
    fetchitems()
    
    
  },[])
  

  const [filterres, setFilterres] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const filterresult = item.filter((val) => ((val.name).toLowerCase()).includes(search.toLowerCase()))
    setFilterres(filterresult)
  },[item, search])


  
  

  return (
    <div className="App">
      <Header 
      />
      <Image />
      <Catagories search={search} setSearch={setSearch} />
      <Routes>
      <Route path="/">
        <Route index element = {<Food item={filterres} />}/>
        <Route path=":id" element = {<Foodpage item={item} />} />
      </Route>
      <Route path="breakfast"> 
        <Route index element = {<Breakfast 
          item = {
             filterres.filter((val) => val.type === "breakfast") 
          }
        /> } />
        <Route path=":id" element = {<Foodpage item={item} />} />
        </Route>
        <Route path="lunch"> 
        <Route index element = {<Lunch 
          item = {
            filterres.filter((val) => val.type === "lunch")
          }
        />} />
        <Route path=":id" element = {<Foodpage item={item} />} />
        </Route>
        <Route path="dinner"> 
        <Route index element = {<Dinner 
          item = {
            filterres.filter((val) => val.type === "dinner")
          }
        />} />
        <Route path=":id" element = {<Foodpage item={item} />} />
        </Route>
        <Route path="dessert"> 
        <Route index element = {<Dessert 
          item = {
            filterres.filter((val) => val.type === "dessert")
          }
        />} />
        <Route path=":id" element = {<Foodpage item={item} />}/>
        </Route>
        <Route path="*" element = {<Missing />}/>
        <Route path="about" element = {<About />} />
      </Routes>
      <Footer />
      
      
      
    </div>
  );
}

export default App;
