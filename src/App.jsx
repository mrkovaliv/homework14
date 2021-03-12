import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Photo from './components/Photo/Photo';
import Album from './components/Album/Album';
import MainPage from './components/MainPage/MainPage';
import selectorPhotosMain from './components/MainPage/MainPage.selector';
import selectorPhoto from './components/Photo/Photo.selector';
import selectorAlbum from './components/Album/Album.selector';
import './App.module.css';


function App() {
  const { url, title, albumId, albumTitle } = useSelector(selectorPhoto);
  const { user, photos } = useSelector(selectorAlbum);
  const { name, email } = user;

  return <div>
    <BrowserRouter>
      <Switch>

        <Route path='/photo/:id'>

          <Photo url={url} title={title} albumId={albumId} albumTitle={albumTitle} />

        </Route>
        <Route path='/album/:id'>
          <Album userName={name} userEmail={email} photos={photos} />

        </Route>
        <Route exact path='/'>
          <MainPage images={useSelector(selectorPhotosMain)} />

        </Route>
      </Switch>
    </BrowserRouter>
  </div>


}

export default App;
