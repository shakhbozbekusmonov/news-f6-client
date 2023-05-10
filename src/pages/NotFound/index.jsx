import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='container'>
            <div className='row vh-100 justify-content-center align-items-center'>
                <div className="text-center">
                    <h2>
                        <strong>404</strong> Not Found
                    </h2>
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
