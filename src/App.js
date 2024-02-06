import AppAffichage from './page/AppAffichage';
import Liste from './page/Carburant';
import InsertionBoiteDeVitesse from './page/BoiteDeVitesse';
import InsertionLieu from './page/Lieu';
import InsertionMarque from './page/Marque';
import ListeDesLieux from './page/SelectLieu';
import Login from './component/Login';
import InsertionCategorie from './component/InsertionCategorie';
import ListeCarburant from './page/ListeCarburant';
import ListeCategorie from './page/ListeCategorie';
import Recherche from './page/Recherche';
import AnnonceAValider from './page/AnnonceAValiderPage';
import Chart from './page/ChartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListeDesVit from './page/ListeBoiteDeVitessePage';
import ListeDesMar from './page/ListeMarquePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login/> }></Route>
          <Route path='/insertionModel' element={ <AppAffichage /> }></Route>     {/* Insertion model */}
          <Route path='/InsertionCarburant' element={ <Liste /> }></Route>
          <Route path='/InsertionBoiteDeVitesse' element={ <InsertionBoiteDeVitesse /> }></Route>
          <Route path='/InsertionLieu' element={ <InsertionLieu /> }></Route>
          <Route path='/InsertionMarque' element={ <InsertionMarque /> }></Route>
          <Route path='/SelectLieu' element={ <ListeDesLieux /> }></Route>
          <Route path='/insertionCategorie' element = {<InsertionCategorie/> }></Route>
          <Route path='/ListeCarburant' element = {<ListeCarburant/> }></Route>
          <Route path='/Recherche' element = {<Recherche/> }></Route>
          <Route path='/ListeCategorie' element = {<ListeCategorie/> }></Route>
          <Route path='/ListeBoiteVitesse' element = {<ListeDesVit/> }></Route>
          <Route path='/ListeMarque' element = {<ListeDesMar/> }></Route>
          <Route path='/AnnonceAValider' element = {<AnnonceAValider/> }></Route>
          <Route path='/statistic' element = {<Chart/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
