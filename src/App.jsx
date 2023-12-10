import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"

const queryClient = new QueryClient()

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<ProjectDetailsPage />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

const Root = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className="container mx-auto bg-[#fbfcff] p-10 min-h-screen">
                    <Outlet />
                </div>
            </QueryClientProvider>
        </>
    )
}
