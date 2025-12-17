/**
 * App component — top-level layout using Tailwind CSS grid template rows.
 *
 * Layout behavior:
 * - Header: auto height (content-sized)
 * - Main: flexible area that grows to fill available space (1fr)
 * - Footer: auto height (content-sized)
 *
 * Tailwind classes used:
 * - `grid grid-rows-[auto_1fr_auto] min-h-screen` creates a 3-row grid (header, main, footer)
 *   and ensures the layout fills the viewport height.
 * - `max-w-6xl mx-auto` centers the main content and constrains its width.
 *
 * This component has no props.
 */
const App = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            {/* Header: occupies the first grid row (auto height). Use semantic header for accessibility. */}
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl font-bold">Header</h1>
            </header>

            {/* Main Content: occupies the middle row (1fr) and grows to fill available space */}
            <main className="bg-gray-50 p-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                    <p>Your main content goes here</p>
                </div>
            </main>

            {/* Footer: occupies the last grid row (auto height). Use semantic footer for accessibility. */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 Your App. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default App