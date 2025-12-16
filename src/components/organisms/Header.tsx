export const Header = () => {
    return (
        <header style={{ background: '#1976d2', color: '#fff', padding: '1rem' }}>
            <h1 style={{ margin: 0 }}>Digital Learning App</h1>
            <nav>
                <a href="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</a>
                <a href="/lessons" style={{ color: '#fff', marginRight: '1rem' }}>Lessons</a>
                <a href="/dashboard" style={{ color: '#fff' }}>Dashboard</a>
            </nav>
        </header>
    );
};