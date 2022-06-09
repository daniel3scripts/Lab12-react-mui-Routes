import { BrowserRouter,Routes,Route } from "react-router-dom";

import {HomeView,AboutView,AdminView} from "../pages";
import * as ROUTES from  "./routes";

import { AppBarClient,AdminDrawer } from "../layouts";

const Router = () => {
    return (
        <BrowserRouter >
        <Routes>
            <Route element={<AppBarClient />}>
                <Route path={ROUTES.HOME} element={<HomeView/>}/>
                <Route path={ROUTES.ABOUT} element={<AboutView/>}/>
            </Route>
            <Route element={<AdminDrawer />}>

                <Route path={ROUTES.ADMIN} element={<AdminView />} />
            </Route>

            
        </Routes>

        
        </BrowserRouter>
    );
};

export default Router;