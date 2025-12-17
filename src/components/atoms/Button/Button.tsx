/**
 * A functional React component that renders a styled button.
 *
 * @component
 * @returns {JSX.Element} A button element with predefined classes for styling.
 */
const Button = () => {
    return (
        <button
            name="button"
            className="btn btn-primary btn-outline btn-active btn-lg btn-circle"
        >
            Click Me
        </button>
    );
}

export default Button;
