export function handleSignOut({ setUser, navigate }) {
	try {
		// clear user state
		setUser(null);

		// optionally clear localStorage/sessionStorage if you store tokens
		localStorage.removeItem("authToken");

		// send user back to Landing page
		navigate("/");
	} catch (err) {
		console.error("Error signing out:", err);
	}
}