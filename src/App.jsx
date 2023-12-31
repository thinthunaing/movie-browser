import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Mainlayout from './components/Mainlayout';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<Mainlayout />}>
              <Route path="/" element={<Home />} />
              <Route path="starred" element={<Starred />} />
            </Route>

            <Route path="/show/:showId" element={<Show />} />
            <Route path="*" element={<div>404 not Found</div>} />
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
    /* <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} />
    </Routes> */
  );
}

export default App;
