import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate to="/dashboard" replace />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/bookings" element={<Bookings />} />
						<Route path="/cabins" element={<Cabins />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="users" element={<Users />} />
						<Route path="account" element={<Account />} />
					</Route>
					<Route path="login" element={<Login />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
			<Toaster
				position="
			top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",

						backgroundColor: "var(--color-grey-0)",
						color: "var(--color-grey-800)",
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;
// stale Time in React Query indicates that the data is considered fresh for a certain amount of time.
// The default value is 0, which means that the data is considered stale as soon as it is fetched.
// This is useful when you want to refetch data after a certain amount of time has passed.
// In this case, we set the staleTime to 0 for all queries in the QueryClient options.
// This means that the data will be refetched every time it is queried.
// This is useful for real-time data that changes frequently.
