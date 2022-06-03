import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationPanel from './Components/NavigationPanel';
import StateContextProvider from './context/StateContext';
import { NavigationObj } from "./helper/NavigationDetails";


const RouterComponent: React.FunctionComponent = () => {
    const HomePage = lazy(() =>
        import(/* webpackPrefetch: true, webpackChunkName: 'home_page_chunk' */ './Home'
        ).then((mod) => ({
            default: mod.default,
        }))
    );

    const AdminPage = lazy(() =>
        import(/* webpackPrefetch: true, webpackChunkName: 'admin_page_chunk' */ './Components/AdminPage'
        ).then((mod) => ({
            default: mod.AdminPage,
        }))
    );

    const ProfilePage = lazy(() =>
        import(/* webpackPrefetch: true, webpackChunkName: 'my_profile_chunk' */ './Components/MyProfile'
        ).then((mod) => ({
            default: mod.MyProfile,
        }))
    );


    return (
        <>
            <BrowserRouter>
                <Suspense>
                    <StateContextProvider>
                        <NavigationPanel />
                        <main>
                            <Routes>
                                <Route path={NavigationObj.HOME.link} element={<HomePage />} />
                                <Route path={NavigationObj.ADMIN_PANEL.link} element={<AdminPage />} />
                                <Route path={NavigationObj.PROFILE.link} element={<ProfilePage />} />
                            </Routes>
                        </main>
                    </StateContextProvider>
                </Suspense>
            </BrowserRouter>
        </>
    );
};

export default RouterComponent;