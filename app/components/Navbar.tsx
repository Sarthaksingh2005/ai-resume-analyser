import { Link } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
    // Fetch the authentication state from Puter
    const { auth } = usePuterStore();

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>

            <div className="flex items-center gap-4">
                {/* Check if the user is logged in */}
                {auth.isAuthenticated ? (
                    <>
                        <Link to="/upload" className="primary-button w-fit">
                            Upload Resume
                        </Link>
                        {/* Add the Log Out button */}
                        <button onClick={auth.signOut} className="primary-button w-fit bg-red-500 border-red-500 hover:bg-red-600">
                            Log Out
                        </button>
                    </>
                ) : (
                    /* If not logged in, show the Sign In button with the correct route */
                    <Link to="/auth?next=/" className="primary-button w-fit">
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;