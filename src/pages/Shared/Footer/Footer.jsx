

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <footer className="py-8 bg-blue-950 text-center">
            <p>© {year} Event by Rima</p>
        </footer>
    );
};

export default Footer;